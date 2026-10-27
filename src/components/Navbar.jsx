import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Membership', path: '/membership' },
    { name: 'BMI Calculator', path: '/bmi-calculator' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Wordmark */}
        <Link to="/" className="brand-link" aria-label="A to Z Fitness Home">
          <div className="brand-icon-box">
            <Dumbbell className="brand-icon" size={22} />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">A <span className="brand-accent">TO</span> Z</span>
            <span className="brand-subtitle">FITNESS</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="nav-actions">
          <Link to="/membership" className="btn btn-primary btn-sm nav-cta-btn">
            <span>Join Now</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <div className="brand-text-wrap">
              <span className="brand-title">A <span className="brand-accent">TO</span> Z</span>
              <span className="brand-subtitle">FITNESS</span>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="mobile-nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <Link
              to="/membership"
              className="btn btn-primary btn-block"
              onClick={() => setIsOpen(false)}
            >
              <span>Explore Membership</span>
              <ArrowRight size={16} />
            </Link>
            <p className="mobile-drawer-note">Official Client Preview Build</p>
          </div>
        </div>
      </div>
      {isOpen && <div className="mobile-backdrop" onClick={() => setIsOpen(false)} />}
    </header>
  );
}
