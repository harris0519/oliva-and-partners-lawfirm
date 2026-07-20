import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-logo-link" to="/" aria-label="Oliva & Partners home">
            <img className="footer-logo" src={`${import.meta.env.BASE_URL}images/oliva-partners-logo.png`} alt="Oliva & Partners Law Firm" />
          </Link>
          <p>Practical legal advice, dedicated representation, and long-term partnerships built on trust.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About the Firm</Link>
          <Link to="/practice-areas">Practice Areas</Link>
          <Link to="/attorneys">Our Attorneys</Link>
          <Link to="/insights">Legal Insights</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Metro Manila, Philippines</p>
          <a href="mailto:info@olivapartners.com">info@olivapartners.com</a>
          <p>Monday–Friday, 8:00 AM–5:00 PM</p>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Oliva &amp; Partners Law Firm. All Rights Reserved.</div>
    </footer>
  );
}
