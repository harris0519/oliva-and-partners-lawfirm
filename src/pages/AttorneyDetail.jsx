import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { attorneys } from '../data/siteData';

export default function AttorneyDetail() {
  const { slug } = useParams();
  const attorney = attorneys.find(item => item.slug === slug);
  if (!attorney) return <PageHero eyebrow="Attorney" title="Attorney profile not found" />;
  return <><PageHero eyebrow={attorney.role} title={attorney.name} text={attorney.focus} /><section className="section"><div className="container attorney-profile"><div className="portrait-placeholder profile">{attorney.name.split(' ').slice(-1)[0][0]}</div><div className="prose"><h2>Professional profile</h2><p>{attorney.bio}</p><h3>Credentials</h3><ul>{attorney.credentials.map(item => <li key={item}>{item}</li>)}</ul><Link className="button" to="/contact">Contact the Firm</Link></div></div></section></>;
}
