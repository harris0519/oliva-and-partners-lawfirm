import { useState } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };
  return <><PageHero eyebrow="Contact us" title="Tell us how we can assist you." text="Send us a brief description of your concern. A member of the firm will respond using the contact details you provide." /><section className="section"><div className="container contact-grid"><div><p className="eyebrow">Firm information</p><h2>OLIVA & PARTNERS LAW FIRM</h2><p>Units 28 & 30, 2nd Floor,
    Facilities Centre Building.,
    548 Shaw Blvd.,
    Mandaluyong City, 1552, Philippines</p><p>Tel. Nos. (+632) 8535-9320 | 
      (+632) 8535-9231</p><p><a href="mailto:info@olivapartners.com">olivaandpartners@dof.law</a></p><p>Monday–Friday<br />8:00 AM–5:00 PM</p><p className="notice">Submitting this form does not create an attorney-client relationship. Please avoid sending confidential information until an engagement is confirmed.</p></div><form className="contact-form" onSubmit={submit}><label>Full name<input required name="name" /></label><label>Email address<input required type="email" name="email" /></label><label>Contact number<input name="phone" /></label><label>Area of concern<select name="area"><option>Corporate & Commercial Law</option><option>Litigation & Dispute Resolution</option><option>Labor & Employment</option><option>Real Estate & Property</option><option>Taxation</option><option>Data Privacy & Technology</option></select></label><label>Message<textarea required rows="6" name="message"></textarea></label><button className="button" type="submit">Send Inquiry</button>{sent && <p className="success">Thank you. Your inquiry has been recorded for this demo.</p>}</form></div></section></>;
}
