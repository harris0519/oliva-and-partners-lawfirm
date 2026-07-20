export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}
