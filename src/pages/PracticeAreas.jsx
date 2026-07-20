import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { practiceAreas } from '../data/siteData';

export default function PracticeAreas() {
  return <><PageHero eyebrow="Legal capabilities" title="FOCUSED EXPERTISE FOR COMPLEX LEGAL NEEDS." TEXT="EXPLORE OUR CORE PRACTICE AREAS AND LEARN HOW OUR TEAM CAN SUPPORT YOUR BUSINESS, ORGANIZATION, OR PERSONAL LEGAL CONCERNS." /><section className="section"><div className="container card-grid two">{practiceAreas.map((area, i) => <Link className="service-card large" to={`/practice-areas/${area.slug}`} key={area.slug}><span>0{i + 1}</span><h2>{area.title}</h2><p>{area.short}</p><strong>View capability →</strong></Link>)}</div></section></>;
}
