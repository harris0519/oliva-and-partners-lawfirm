export default function AttorneyPortrait({ attorney, variant = '' }) {
  const className = `portrait-placeholder ${variant}`.trim();

  if (attorney.image) {
    return <img className={className} src={attorney.image} alt={attorney.name} loading="lazy" />;
  }

  return <div className={className}>{attorney.name.split(' ').slice(-1)[0][0]}</div>;
}
