import { Link } from 'react-router-dom';
import { attorneys, insights, practiceAreas } from '../data/siteData';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Clarity. Strategy. Results.</p>
            <h1>Legal solutions grounded in experience and built around you.</h1>
            <p className="lead">Oliva &amp; Partners provides responsive, practical, and strategic legal counsel to businesses, families, and individuals.</p>
            <div className="actions"><Link className="button" to="/contact">Schedule a Consultation</Link><Link className="text-link" to="/practice-areas">Explore our capabilities →</Link></div>
          </div>
          <div className="hero-panel">
            <span className="panel-number">01</span>
            <h2>Counsel that sees the whole picture.</h2>
            <p>We combine legal knowledge, commercial understanding, and personal attention to help clients make informed decisions.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Practice areas</p><h2>Comprehensive legal support</h2></div><Link className="text-link" to="/practice-areas">View all practice areas →</Link></div>
          <div className="card-grid three">
            {practiceAreas.slice(0, 6).map((area, i) => (
              <Link className="service-card" to={`/practice-areas/${area.slug}`} key={area.slug}>
                <span>0{i + 1}</span><h3>{area.title}</h3><p>{area.short}</p><strong>Learn more →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div><p className="eyebrow">Why Oliva &amp; Partners</p><h2>Trusted advice. Practical direction. Strong representation.</h2></div>
          <div className="feature-list">
            <div><strong>01</strong><span><h3>Client-centered service</h3><p>Clear communication and legal strategies aligned with your priorities.</p></span></div>
            <div><strong>02</strong><span><h3>Business-minded approach</h3><p>Advice that considers legal exposure, operational realities, and long-term objectives.</p></span></div>
            <div><strong>03</strong><span><h3>Responsive representation</h3><p>Timely support from professionals committed to protecting your interests.</p></span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Our attorneys</p><h2>Meet the people behind the practice</h2></div><Link className="text-link" to="/attorneys">Meet the full team →</Link></div>
          <div className="card-grid three">
            {attorneys.map(attorney => <Link className="person-card" to={`/attorneys/${attorney.slug}`} key={attorney.slug}><div className="portrait-placeholder">{attorney.name.split(' ').slice(-1)[0][0]}</div><p className="eyebrow">{attorney.role}</p><h3>{attorney.name}</h3><p>{attorney.focus}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Legal insights</p><h2>Knowledge that helps you move forward</h2></div><Link className="text-link" to="/insights">View all insights →</Link></div>
          <div className="card-grid three">{insights.map(item => <article className="insight-card" key={item.title}><small>{item.date}</small><h3>{item.title}</h3><p>{item.excerpt}</p><Link to="/insights">Read article →</Link></article>)}</div>
        </div>
      </section>

      <section className="cta"><div className="container cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>Let us help you understand your options.</h2></div><Link className="button button-light" to="/contact">Contact the Firm</Link></div></section>
    </>
  );
}
