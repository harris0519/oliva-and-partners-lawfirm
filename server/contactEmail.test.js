import test from 'node:test';
import assert from 'node:assert/strict';
import { buildContactEmail, sendContactEmail, validateInquiry } from './contactEmail.js';
import { createContactServer } from './index.js';

const inquiry = {
  name: 'A & B', email: 'visitor@example.com', phone: '+63 900 123 4567',
  area: 'Corporate Law', message: 'Hello <script>\nPlease call me.',
};

test('builds a branded, escaped inquiry email with a fixed recipient and visitor reply-to', () => {
  const payload = buildContactEmail(validateInquiry(inquiry), 'verified@example.com', 'firm@example.com');
  assert.equal(payload.to[0].email, 'firm@example.com');
  assert.equal(payload.replyTo.email, inquiry.email);
  assert.match(payload.htmlContent, /#111a38/);
  assert.match(payload.htmlContent, /#d9ad3c/);
  assert.match(payload.htmlContent, /A &amp; B/);
  assert.match(payload.htmlContent, /&lt;script&gt;<br>/);
  assert.doesNotMatch(payload.htmlContent, /<script>/);
  assert.match(payload.textContent, /Hello <script>/);
  assert.throws(() => validateInquiry({ ...inquiry, email: 'bad\naddress@example.com' }));
  assert.throws(() => validateInquiry({ ...inquiry, message: 'a'.repeat(5001) }));
});

test('sends through the Brevo transactional API with the server key', async () => {
  await sendContactEmail({ subject: 'Test' }, 'private-key', async (url, request) => {
    assert.equal(url, 'https://api.brevo.com/v3/smtp/email');
    assert.equal(request.headers['api-key'], 'private-key');
    return { ok: true, json: async () => ({ messageId: 'sent-1' }) };
  });
});

test('accepts a valid inquiry, rejects other origins, and ignores honeypot submissions', async () => {
  const sent = [];
  const server = createContactServer({
    apiKey: 'private-key', senderEmail: 'verified@example.com', recipientEmail: 'firm@example.com',
    allowedOrigins: ['http://localhost:5173'], send: async (payload) => { sent.push(payload); },
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const url = `http://127.0.0.1:${server.address().port}/api/contact`;
    const post = (body, origin = 'http://localhost:5173') => fetch(url, {
      method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body),
    });
    assert.equal((await post(inquiry, 'https://untrusted.example')).status, 403);
    assert.equal((await post({ ...inquiry, email: 'invalid' })).status, 400);
    assert.equal((await post({ ...inquiry, website: 'spam.example' })).status, 200);
    assert.equal((await post(inquiry)).status, 200);
    assert.equal(sent.length, 1);
    assert.equal(sent[0].to[0].email, 'firm@example.com');
  } finally { server.close(); }
});
