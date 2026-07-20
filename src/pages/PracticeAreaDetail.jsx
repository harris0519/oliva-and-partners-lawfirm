import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { practiceAreas } from '../data/siteData';

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreas.find(item => item.slug === slug);
  if (!area) return <PageHero eyebrow="Practice area" title="Practice area not found" />;
  return <><PageHero eyebrow="Practice area" title={area.title.toUpperCase()} text={area.short} /><section className="section"><div className="container split"><div><p className="eyebrow">How we help</p><h2>PRACTICAL GUIDANCE AT EVERY STAGE.</h2></div><div className="prose"><p>{area.details}</p><p>Every engagement begins with a careful review of your circumstances, objectives, deadlines, and potential risks. We then recommend a clear legal strategy tailored to the matter.</p><Link className="button" to="/contact">Discuss Your Legal Concern</Link></div></div></section></>;
}
