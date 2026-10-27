import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, ShieldCheck, Activity, MapPin, Sparkles, Clock, AlertTriangle } from 'lucide-react';
import { brandInfo, proposedPrograms, facilityShowcase, membershipPlaceholderNotice } from '../data/gymData';
import ProgramCard from '../components/ProgramCard';
import FacilityCard from '../components/FacilityCard';
import BmiCalculatorWidget from '../components/BmiCalculatorWidget';
import FaqAccordion from '../components/FaqAccordion';
import heroImg from '../assets/images/hero.jpg';
import './Home.css';

export default function Home() {
  const featuredPrograms = proposedPrograms.slice(0, 3);
  const featuredFacilities = facilityShowcase.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" aria-label="Welcome to A to Z Fitness">
        <div className="hero-bg-container">
          <img
            src={heroImg}
            alt="Representative interior of a high-end athletic training facility"
            className="hero-bg-img"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="container hero-content animate-fade-in">
          <div className="hero-pill-badge">
            <span className="pill-dot" />
            <span>Official Client Preview • {brandInfo.name}</span>
          </div>

          <h1 className="hero-title">
            FORGED IN <span className="text-highlight">DISCIPLINE.</span>
            <br />
            BUILT FOR <span className="text-stroke">PERFORMANCE.</span>
          </h1>

          <p className="hero-description">
            Welcome to <strong>{brandInfo.name}</strong>. A dedicated training environment designed to support your athletic conditioning, progressive strength training, and functional fitness journey from foundation to peak.
          </p>

          <div className="hero-cta-group">
            <Link to="/programs" className="btn btn-primary btn-lg">
              <span>Explore Programs</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/membership" className="btn btn-outline btn-lg">
              <span>View Membership Status</span>
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-lg hero-contact-link">
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Key Highlights Bar */}
          <div className="hero-feature-ribbon">
            <div className="ribbon-item">
              <div className="ribbon-icon"><Dumbbell size={20} /></div>
              <div>
                <strong>Comprehensive Training</strong>
                <span>Strength, cardio & functional disciplines</span>
              </div>
            </div>

            <div className="ribbon-item">
              <div className="ribbon-icon"><Activity size={20} /></div>
              <div>
                <strong>In-Browser Screening</strong>
                <span>Free interactive BMI assessment tool</span>
              </div>
            </div>

            <div className="ribbon-item">
              <div className="ribbon-icon"><ShieldCheck size={20} /></div>
              <div>
                <strong>Client Verified Build</strong>
                <span>Clear placeholders for verified details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-text">
              <span className="section-tag">
                <Sparkles size={14} />
                About Our Gym
              </span>
              <h2>A Purpose-Driven Athletic Fitness Environment</h2>
              <p className="lead-text">
                <strong>{brandInfo.name}</strong> is structured around complete fitness progression. Whether you are stepping onto the gym floor for the first time or pursuing advanced resistance milestones, our focus is delivering a safe, supportive, and motivating space.
              </p>
              <p>
                Our philosophy prioritizes sustainable physical conditioning, correct lifting mechanics, and functional endurance. We believe in providing clear direction, reliable equipment, and an atmosphere where consistency thrives.
              </p>

              <div className="about-notice-box">
                <AlertTriangle size={18} className="notice-icon" />
                <p>
                  <em>Note for Client:</em> This section contains editable overview text. Specific gym history, mission statements, and staff credentials will be added upon receipt.
                </p>
              </div>

              <div className="about-preview-actions">
                <Link to="/about" className="btn btn-outline">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="about-preview-cards">
              <div className="pillar-card card">
                <div className="pillar-number">01</div>
                <h4>Strength & Resistance</h4>
                <p>Focusing on progressive overload, compound barbell lifts, and balanced hypertrophy routines.</p>
              </div>
              <div className="pillar-card card">
                <div className="pillar-number">02</div>
                <h4>Cardiovascular Stamina</h4>
                <p>Aerobic conditioning, interval work, and endurance training for complete metabolic health.</p>
              </div>
              <div className="pillar-card card">
                <div className="pillar-number">03</div>
                <h4>Functional Agility</h4>
                <p>Full-body kinetic movements, core stability, and turf drills supporting everyday athletic movement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Programs Section */}
      <section className="section-padding bg-darker" aria-label="Workout Programs">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Dumbbell size={14} />
              Training Disciplines
            </span>
            <h2>Proposed Workout Programs</h2>
            <p className="section-subtitle">
              Explore core fitness categories planned for A to Z Fitness. All programs are adaptable based on confirmed class timetables and coach availability.
            </p>
          </div>

          <div className="grid-3">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/programs" className="btn btn-primary">
              <span>View All 5 Proposed Programs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section Preview */}
      <section className="section-padding" aria-label="Gym Facilities">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} />
              Environment & Equipment
            </span>
            <h2>Modern Training Facilities</h2>
            <p className="section-subtitle">
              Take a visual tour of representative gym spaces. Final amenity lists and actual equipment photographs will be published upon client delivery.
            </p>
          </div>

          <div className="grid-3">
            {featuredFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/facilities" className="btn btn-outline">
              <span>Explore All Facility Zones</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Placeholder Section */}
      <section className="section-padding bg-darker" aria-label="Membership Details">
        <div className="container">
          <div className="membership-teaser-card card">
            <div className="membership-teaser-content">
              <span className="badge badge-placeholder">
                <Clock size={14} />
                {membershipPlaceholderNotice.statusBadge}
              </span>
              <h2 className="teaser-title">{membershipPlaceholderNotice.headline}</h2>
              <p className="teaser-subheading">{membershipPlaceholderNotice.subheading}</p>
              <p className="teaser-description">{membershipPlaceholderNotice.description}</p>
              
              <div className="teaser-actions">
                <Link to="/membership" className="btn btn-primary">
                  <span>View Membership Details</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <span>Call or WhatsApp Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="section-padding" aria-label="Body Mass Index Calculator">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Activity size={14} />
              Health Tool
            </span>
            <h2>Body Mass Index (BMI) Screening</h2>
            <p className="section-subtitle">
              Calculate your screening BMI directly in your browser. Fast, private, and calculated strictly on your device.
            </p>
          </div>

          <BmiCalculatorWidget showFullDisclaimers={true} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-darker" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions regarding our upcoming opening, programs, and membership setup.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="section-padding contact-cta-section">
        <div className="container">
          <div className="contact-banner card">
            <div className="contact-banner-text">
              <span className="section-tag">Direct Communication</span>
              <h2>Have Questions For A to Z Fitness?</h2>
              <p>
                Connect directly with our team via Call or WhatsApp for immediate answers on schedules, memberships, and facility tours.
              </p>
            </div>
            <div className="contact-banner-btn-wrap" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${brandInfo.contactPlaceholders.whatsappRaw}?text=${encodeURIComponent(brandInfo.contactPlaceholders.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${brandInfo.contactPlaceholders.phoneRaw}`}
                className="btn btn-primary btn-lg"
              >
                <span>Call Direct</span>
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                <span>All Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
