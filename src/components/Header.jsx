import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { attorneys, practiceAreas } from '../data/siteData';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);
  const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Trusted legal counsel for businesses and individuals</span>
          <a href="mailto:info@olivapartners.com">info@olivapartners.com</a>
        </div>
      </div>

      <div className="container navbar">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Oliva & Partners home">
          <img className="brand-logo"   src={`${import.meta.env.BASE_URL}images/oliva-partners-mark.png`} alt="" />
          <span className="brand-copy"><strong>Oliva &amp; Partners</strong><small>Law Firm</small></span>
        </Link>

        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>
          <span></span><span></span><span></span>
        </button>

        <nav className={mobileOpen ? 'main-nav open' : 'main-nav'}>
          <NavLink className={navClass} to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink className={navClass} to="/about" onClick={closeMenu}>About</NavLink>

          <div className="nav-group">
            <NavLink className={navClass} to="/practice-areas" onClick={closeMenu}>Practice Areas</NavLink>
            <div className="mega-menu">
              <div>
                <p className="eyebrow">Legal capabilities</p>
                <h3>Solutions built around your needs.</h3>
                <p>Explore focused legal services for business, property, employment, disputes, taxation, and technology.</p>
              </div>
              <div className="mega-links">
                {practiceAreas.map(area => <Link key={area.slug} to={`/practice-areas/${area.slug}`} onClick={closeMenu}>{area.title}</Link>)}
              </div>
            </div>
          </div>

          <div className="nav-group">
            <NavLink className={navClass} to="/attorneys" onClick={closeMenu}>Attorneys</NavLink>
            <div className="dropdown-menu">
              {attorneys.map(attorney => <Link key={attorney.slug} to={`/attorneys/${attorney.slug}`} onClick={closeMenu}>{attorney.name}</Link>)}
            </div>
          </div>

          <NavLink className={navClass} to="/insights" onClick={closeMenu}>Insights</NavLink>
          <NavLink className="button button-small button-outline" to="/contact" onClick={closeMenu}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
}
