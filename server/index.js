import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';
import { buildContactEmail, sendContactEmail, validateInquiry } from './contactEmail.js';

export function createContactServer({
  apiKey = process.env.BREVO_API_KEY,
  senderEmail = process.env.OLP_SENDER_EMAIL,
  recipientEmail = process.env.OLP_CONTACT_EMAIL || 'olivaandpartners@dof.law',
  allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',').map((origin) => origin.trim()).filter(Boolean),
  send = sendContactEmail,
} = {}) {
  const origins = new Set(allowedOrigins);
  const attempts = new Map();

  return createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Vary', 'Origin');
    const reply = (status, result) => { res.writeHead(status); res.end(JSON.stringify(result)); };
    if (req.url === '/health' && req.method === 'GET') return reply(200, { status: 'ok' });
    if (req.url !== '/api/contact') return reply(404, { message: 'Not found.' });
    const origin = req.headers.origin;
    if (!origin || !origins.has(origin)) return reply(403, { message: 'Origin is not allowed.' });
    res.setHeader('Access-Control-Allow-Origin', origin);
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.writeHead(204); return res.end();
    }
    if (req.method !== 'POST') return reply(405, { message: 'Method not allowed.' });
    if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) return reply(415, { message: 'Send JSON.' });
    if (!apiKey || !senderEmail || !recipientEmail) return reply(503, { message: 'The contact form is not configured yet. Please email the firm directly.' });

    const now = Date.now();
    for (const [key, entry] of attempts) if (entry.expires <= now) attempts.delete(key);
    const key = req.socket.remoteAddress || 'unknown';
    const entry = attempts.get(key) || { count: 0, expires: now + 60_000 };
    attempts.set(key, entry);
    if (++entry.count > 5) {
      res.setHeader('Retry-After', '60');
      return reply(429, { message: 'Too many inquiries. Please wait a minute.' });
    }

    let body;
    try {
      const chunks = []; let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > 12_000) return reply(413, { message: 'Your message is too long.' });
        chunks.push(chunk);
      }
      body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch { return reply(400, { message: 'Invalid request.' }); }

    if (body?.website) return reply(200, { success: true });
    let inquiry;
    try { inquiry = validateInquiry(body); }
    catch (error) { return reply(400, { message: error.message }); }

    try {
      await send(buildContactEmail(inquiry, senderEmail, recipientEmail), apiKey);
      return reply(200, { success: true });
    } catch (error) {
      console.error('Contact email delivery failed:', error);
      return reply(502, { message: 'Your inquiry could not be sent. Please try again or email the firm directly.' });
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 3001);
  createContactServer().listen(port, '0.0.0.0', () => console.log(`Contact API listening on port ${port}`));
}
