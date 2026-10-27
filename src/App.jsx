import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BannerNotice from './components/BannerNotice';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Facilities from './pages/Facilities';
import Membership from './pages/Membership';
import BmiPage from './pages/BmiPage';
import Contact from './pages/Contact';

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

// 404 Fallback
function NotFoundPage() {
  return (
    <div className="section-padding container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <span className="badge badge-placeholder" style={{ marginBottom: '1rem' }}>404 Error</span>
      <h2>Page Not Found</h2>
      <p style={{ marginTop: '0.85rem', marginBottom: '2rem', maxWidth: '480px' }}>
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BannerNotice />
      <Navbar />
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/bmi-calculator" element={<BmiPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
