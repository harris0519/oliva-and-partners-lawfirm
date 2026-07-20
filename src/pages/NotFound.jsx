import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
export default function NotFound(){return <><PageHero eyebrow="404" title="The page could not be found." text="The link may be outdated or the page may have moved."/><section className="section center"><Link className="button" to="/">Return Home</Link></section></>}
