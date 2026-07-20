import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { attorneys } from '../data/siteData';

export default function Attorneys() {
  return <><PageHero eyebrow="Our attorneys" title="EXPERIENCED COUNSEL. PERSONAL COMMITMENT." text="Meet the professionals who bring insight, discipline, and a client-focused approach to every matter." /><section className="section"><div className="container card-grid three">{attorneys.map(attorney => <Link className="person-card" to={`/attorneys/${attorney.slug}`} key={attorney.slug}><div className="portrait-placeholder tall">{attorney.name.split(' ').slice(-1)[0][0]}</div><p className="eyebrow">{attorney.role}</p><h2>{attorney.name.toUpperCase()}</h2><p>{attorney.focus}</p><strong>View profile →</strong></Link>)}</div></section></>;
}
