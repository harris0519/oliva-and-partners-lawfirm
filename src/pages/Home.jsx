import { Link } from 'react-router-dom';
import { attorneys, insights, practiceAreas } from '../data/siteData';
import AttorneyPortrait from '../components/AttorneyPortrait';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Clarity. Strategy. Results.</p>
            <h1>YOUR TRUSTED LEGAL PARTNER,
              EVOLVING FOR THE FUTURE</h1>
            <p className="lead">ADVISING BUSINESSES, RESOLVING CHALLENGES.
              BUILDING LASTING PARTNERSHIP.</p>
            <div className="actions"><Link className="button" to="/contact">Schedule a Consultation</Link><Link className="text-link" to="/practice-areas">Explore our capabilities →</Link></div>
          </div>
          <div className="hero-panel">
            <h2>COUNSEL THAT SEES THE WHOLE PICTURE.</h2>
            <p>We combine legal knowledge, commercial understanding, and personal attention to help clients make informed decisions.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Practice areas</p><h2>COMPREHENSIVE LEGAL SUPPORT</h2></div><Link className="text-link" to="/practice-areas">View all practice areas →</Link></div>
          <div className="card-grid three">
            {practiceAreas.map(area => (
              <Link className="service-card" to={`/practice-areas/${area.slug}`} key={area.slug}>
                <h3>{area.title.toUpperCase()}</h3><p>{area.short}</p><strong>Learn more →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div><p className="eyebrow">Why Oliva &amp; Partners</p><h2>TRUSTED ADVICE. PRACTICAL DIRECTION. STRONG REPRESENTATION.</h2></div>
          <div className="feature-list">
            <div><span><h3>Client-centered service</h3><p>Clear communication and legal strategies aligned with your priorities.</p></span></div>
            <div><span><h3>Business-minded approach</h3><p>Advice that considers legal exposure, operational realities, and long-term objectives.</p></span></div>
            <div><span><h3>Responsive representation</h3><p>Timely support from professionals committed to protecting your interests.</p></span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Our attorneys</p><h2>MEET THE PEOPLE BEHIND THE PRACTICE</h2></div><Link className="text-link" to="/attorneys">View all lawyers →</Link></div>
          <div className="card-grid three">
            {attorneys.slice(0, 3).map(attorney => <Link className="person-card" to={`/attorneys/${attorney.slug}`} key={attorney.slug}><AttorneyPortrait attorney={attorney} /><p className="eyebrow">{attorney.role}</p><h3>{attorney.name.toUpperCase()}</h3><p>{attorney.focus}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Legal insights</p><h2>KNOWLEDGE THAT HELPS YOU MOVE FORWARD</h2></div><Link className="text-link" to="/insights">View all insights →</Link></div>
          <div className="card-grid three">{insights.map(item => <article className="insight-card" key={item.title}><small>{item.date}</small><h3>{item.title}</h3><p>{item.excerpt}</p><Link to="/insights">Read article →</Link></article>)}</div>
        </div>
      </section>

      <section className="cta"><div className="container cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>LET US HELP YOU UNDERSTAND YOUR OPTIONS.</h2></div><Link className="button button-light" to="/contact">Contact the Firm</Link></div></section>
    </>
  );
}
