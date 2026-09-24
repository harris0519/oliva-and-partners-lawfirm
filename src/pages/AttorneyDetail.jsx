import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AttorneyPortrait from '../components/AttorneyPortrait';
import { attorneys } from '../data/siteData';

export default function AttorneyDetail() {
  const { slug } = useParams();
  const attorney = attorneys.find(item => item.slug === slug);
  if (!attorney) return <PageHero eyebrow="Attorney" title="Attorney profile not found" />;
  const bioParagraphs = Array.isArray(attorney.bio) ? attorney.bio : [attorney.bio];
  return <><PageHero eyebrow={attorney.role} title={attorney.name.toUpperCase()} text={attorney.focus} /><section className="section"><div className="container attorney-profile"><AttorneyPortrait attorney={attorney} variant="profile" /><div className="prose"><h2>PROFESSIONAL PROFILE</h2>{bioParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<h3>Credentials</h3><ul>{attorney.credentials.map(item => <li key={item}>{item}</li>)}</ul><Link className="button" to="/contact">Contact the Firm</Link></div></div></section></>;
}
