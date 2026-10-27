import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, MapPin, Sparkles, Activity } from 'lucide-react';
import { brandInfo } from '../data/gymData';
import heroImg from '../assets/images/hero.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Front Look / Hero Section */}
      <section className="hero-section" aria-label="Welcome to A to Z Fitness">
        <div className="hero-bg-container">
          <img
            src={heroImg}
            alt="Representative interior of A to Z Fitness athletic training facility"
            className="hero-bg-img"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="container hero-content animate-fade-in">
          <div className="hero-pill-badge">
            <span className="pill-dot" />
            <span>Welcome to {brandInfo.name} • Hinjawadi, Pune</span>
          </div>

          <h1 className="hero-title">
            FORGED IN <span className="text-highlight">DISCIPLINE.</span>
            <br />
            BUILT FOR <span className="text-stroke">PERFORMANCE.</span>
          </h1>

          <p className="hero-description">
            Welcome to <strong>{brandInfo.name}</strong>. A premier athletic training environment designed to support your strength training, cardiovascular conditioning, and functional fitness journey in Hinjawadi, Pune.
          </p>

          <div className="hero-cta-group">
            <Link to="/programs" className="btn btn-primary btn-lg">
              <span>Explore Programs</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/membership" className="btn btn-outline btn-lg">
              <span>View Membership</span>
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-lg hero-contact-link">
              <span>Contact & Location</span>
            </Link>
          </div>

          {/* Key Highlights Bar */}
          <div className="hero-feature-ribbon">
            <div className="ribbon-item">
              <div className="ribbon-icon"><Dumbbell size={20} /></div>
              <div>
                <strong>Complete Training</strong>
                <span>Strength, cardio & functional turf</span>
              </div>
            </div>

            <div className="ribbon-item">
              <div className="ribbon-icon"><Activity size={20} /></div>
              <div>
                <strong>BMI Health Screening</strong>
                <span>Interactive in-browser screening tool</span>
              </div>
            </div>

            <div className="ribbon-item">
              <div className="ribbon-icon"><MapPin size={20} /></div>
              <div>
                <strong>Hinjawadi Phase II</strong>
                <span>Rajiv Gandhi Infotech Park, Pune</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
