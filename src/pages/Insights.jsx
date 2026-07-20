import PageHero from '../components/PageHero';
import { insights } from '../data/siteData';

export default function Insights() {
  return <><PageHero eyebrow="Insights" title="Legal perspectives for informed decisions." text="Brief discussions of legal and regulatory topics affecting businesses, organizations, and individuals." /><section className="section"><div className="container card-grid three">{insights.map(item => <article className="insight-card" key={item.title}><small>{item.date}</small><h2>{item.title}</h2><p>{item.excerpt}</p><button className="text-button">Article coming soon →</button></article>)}</div></section></>;
}
