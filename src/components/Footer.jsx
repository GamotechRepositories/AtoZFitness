import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { brandInfo } from '../data/gymData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-link" aria-label="A to Z Fitness Home">
              <div className="brand-icon-box">
                <Dumbbell className="brand-icon" size={20} />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-title">A <span className="brand-accent">TO</span> Z</span>
                <span className="brand-subtitle">FITNESS</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              <strong style={{ color: 'var(--text-white)' }}>A to Z Fitness</strong> is a complete athletic gym engineered for progressive strength, functional conditioning, and cardiovascular health. Equipped with professional-grade resistance machines, Olympic free weights, cardio decks, and dedicated turf training zones, <strong style={{ color: 'var(--text-white)' }}>A to Z Fitness</strong> provides a clean, disciplined, and motivating atmosphere for athletes and everyday fitness enthusiasts.
            </p>
            <div className="footer-feature-pill">
              <ShieldCheck size={15} />
              <span>Modern Equipment • Clean & Sanitized • All Fitness Levels</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Workout Programs</Link></li>
              <li><Link to="/facilities">Gym Facilities</Link></li>
              <li><Link to="/membership">Membership Status</Link></li>
              <li><Link to="/bmi-calculator">BMI Screening Tool</Link></li>
              <li><Link to="/contact">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Proposed Programs */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Proposed Programs</h4>
            <ul className="footer-link-list">
              <li><Link to="/programs">Strength Training</Link></li>
              <li><Link to="/programs">Cardio Conditioning</Link></li>
              <li><Link to="/programs">Weight Training</Link></li>
              <li><Link to="/programs">Functional Fitness</Link></li>
              <li><Link to="/programs">Personal Training</Link></li>
            </ul>
          </div>

          {/* Business Information Placeholders */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Gym Information</h4>
            <p className="footer-subtext">Hinjawadi, Pune Facility:</p>
            
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <div>
                <span className="footer-contact-value">{brandInfo.contactPlaceholders.address}</span>
                <span className="placeholder-tag" style={{ color: 'var(--accent-primary)', background: 'rgba(204,255,0,0.1)' }}>Verified Location</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <div>
                <a href={`tel:${brandInfo.contactPlaceholders.phoneRaw}`} className="footer-contact-value">
                  {brandInfo.contactPlaceholders.phone}
                </a>
                <span className="placeholder-tag">Direct Call</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <MessageCircle size={18} className="footer-contact-icon" style={{ color: '#25D366' }} />
              <div>
                <a
                  href={`https://wa.me/${brandInfo.contactPlaceholders.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-value"
                >
                  {brandInfo.contactPlaceholders.whatsapp}
                </a>
                <span className="placeholder-tag" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.12)' }}>WhatsApp</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <div>
                <a href={`mailto:${brandInfo.contactPlaceholders.email}`} className="footer-contact-value">
                  {brandInfo.contactPlaceholders.email}
                </a>
                <span className="placeholder-tag" style={{ color: 'var(--accent-primary)', background: 'rgba(204,255,0,0.1)' }}>Verified Email</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <div>
                <span className="footer-contact-value">{brandInfo.contactPlaceholders.hoursWeekday}</span>
                <span className="footer-contact-value">{brandInfo.contactPlaceholders.hoursWeekend}</span>
                <span className="placeholder-tag" style={{ color: 'var(--accent-primary)', background: 'rgba(204,255,0,0.1)' }}>Verified Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} <strong>A to Z Fitness</strong>. All rights reserved. Hinjawadi, Pune.
          </p>
        </div>
      </div>
    </footer>
  );
}
