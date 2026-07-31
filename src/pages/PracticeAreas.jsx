import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { practiceAreas } from '../data/siteData';

export default function PracticeAreas() {
  return <><PageHero eyebrow="Legal capabilities" title="FOCUSED EXPERTISE FOR COMPLEX LEGAL NEEDS." text="Explore our core practice areas and learn how our team can support your business, organization, or personal legal concerns." /><section className="section"><div className="container card-grid two">{practiceAreas.map(area => <Link className="service-card large" to={`/practice-areas/${area.slug}`} key={area.slug}><h2>{area.title.toUpperCase()}</h2><p>{area.short}</p><strong>View capability →</strong></Link>)}</div></section></>;
}
