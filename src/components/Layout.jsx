import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page-enter" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
