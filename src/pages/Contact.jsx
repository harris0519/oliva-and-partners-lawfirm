import { useState } from 'react';
import PageHero from '../components/PageHero';
import { practiceAreas } from '../data/siteData';

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || (import.meta.env.DEV ? '/api/contact' : '');

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    setStatus('sending');
    setError('');

    try {
      if (!contactApiUrl) throw new Error('The contact form is not configured yet. Please email the firm directly.');
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Your inquiry could not be sent. Please try again.');
      form.reset();
      setStatus('sent');
    } catch (failure) {
      setError(failure.message || 'Your inquiry could not be sent. Please try again.');
      setStatus('error');
    }
  }

  return <>
    <PageHero eyebrow="Contact us" title="TELL US HOW WE CAN ASSIST YOU." text="Send us a brief description of your concern. A member of the firm will respond using the contact details you provide." />
    <section className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Firm information</p>
          <h2>OLIVA &amp; PARTNERS LAW FIRM</h2>
          <p>Units 28 &amp; 30, 2nd Floor, Facilities Centre Building, 548 Shaw Blvd., Mandaluyong City, 1552, Philippines</p>
          <p>Tel. Nos. (+632) 8535-9320 | (+632) 8535-9231</p>
          <p><a href="mailto:olivaandpartners@dof.law">olivaandpartners@dof.law</a></p>
          <p>Monday–Friday<br />8:00 AM–5:00 PM</p>
          <p className="notice">Submitting this form does not create an attorney-client relationship. Please avoid sending confidential information until an engagement is confirmed.</p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>Full name<input required name="name" maxLength="120" autoComplete="name" /></label>
          <label>Email address<input required type="email" name="email" maxLength="254" autoComplete="email" /></label>
          <label>Contact number<input name="phone" maxLength="40" autoComplete="tel" /></label>
          <label>Area of concern<select name="area">{practiceAreas.map(area => <option key={area.slug} value={area.title}>{area.title}</option>)}</select></label>
          <label>Message<textarea required rows="6" name="message" maxLength="5000" /></label>
          <div className="contact-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex="-1" autoComplete="off" /></label></div>
          <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Inquiry'}</button>
          {status === 'sent' && <p className="success" role="status">Thank you. Your inquiry has been sent.</p>}
          {status === 'error' && <p className="contact-error" role="alert">{error}</p>}
        </form>
      </div>
    </section>
  </>;
}
