import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Dumbbell, 
  Flame, 
  Trophy, 
  Zap, 
  HeartPulse, 
  UserCheck, 
  Play, 
  X, 
  Sparkles 
} from 'lucide-react';
import { brandInfo } from '../data/gymData';
import { gymBlogs } from '../data/blogsData';
import BlogCard from '../components/BlogCard';
import BlogReaderModal from '../components/BlogReaderModal';

// High-impact cinematic images matching Pinterest reference (Unisex representation)
import heroUnisexImg from '../assets/images/hero_unisex.jpg';
import cardStrengthFemaleImg from '../assets/images/card_strength_female.jpg';
import cardConditioningImg from '../assets/images/card_conditioning.jpg';
import cardTrainerUnisexImg from '../assets/images/card_trainer_unisex.jpg';
import bannerUnisexImg from '../assets/images/banner_unisex.jpg';

import './Home.css';

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="home-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION (BUILT DIFFERENT)
          ========================================================================= */}
      <section className="hero-section" aria-label="Built Different - A to Z Fitness">
        <div className="hero-bg-container">
          <img
            src={heroUnisexImg}
            alt="Male and female athletic fitness athletes training with chalk in dark gym"
            className="hero-bg-img"
          />
          <div className="hero-dark-overlay" />
          <div className="hero-red-radial" />
        </div>

        <div className="container hero-container animate-fade-in">
          {/* Left Column: Bold Headline & Call to Actions */}
          <div className="hero-left-content">
            <div className="hero-eyebrow-pill">
              <span className="pill-pulse-dot" />
              <span>{brandInfo.name.toUpperCase()} • UNISEX GYM • HINJAWADI, PUNE</span>
            </div>

            <h1 className="hero-main-title">
              <span className="brush-underline">BUILT DIFFERENT.</span>
            </h1>

            <div className="hero-subheadline">
              <span className="sub-white">DISCIPLINE TODAY.</span>{' '}
              <span className="sub-red">DOMINATE TOMORROW.</span>
            </div>

            <p className="hero-sub-description">
              Welcome to <strong>{brandInfo.name}</strong>. A premier unisex athletic training facility engineered for progressive strength, cardiovascular conditioning, and transformative performance in Pune.
            </p>

            <div className="hero-cta-row">
              <Link to="/programs" className="btn btn-primary btn-lg">
                <span>START TRAINING</span>
                <ArrowUpRight size={20} className="arrow-up-right" />
              </Link>

              <button
                type="button"
                className="btn-watch-video"
                onClick={() => setShowVideoModal(true)}
                aria-label="Watch gym facility video"
              >
                <div className="play-circle-icon">
                  <Play size={15} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                </div>
                <span>WATCH VIDEO</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Vertical Athletic HUD Stats */}
          <aside className="hero-stats-hud" aria-label="Key Gym Statistics">
            <div className="hud-stat-item">
              <div className="hud-icon-box">
                <Dumbbell size={22} />
              </div>
              <div className="hud-stat-info">
                <span className="hud-stat-value">500+</span>
                <span className="hud-stat-label">ACTIVE MEMBERS</span>
              </div>
            </div>

            <div className="hud-stat-item">
              <div className="hud-icon-box">
                <Flame size={22} />
              </div>
              <div className="hud-stat-info">
                <span className="hud-stat-value">15+</span>
                <span className="hud-stat-label">EXPERT COACHES</span>
              </div>
            </div>

            <div className="hud-stat-item">
              <div className="hud-icon-box">
                <Trophy size={22} />
              </div>
              <div className="hud-stat-info">
                <span className="hud-stat-value">10K+</span>
                <span className="hud-stat-label">TRANSFORMATIONS</span>
              </div>
            </div>

            <div className="hud-stat-item">
              <div className="hud-icon-box">
                <Zap size={22} />
              </div>
              <div className="hud-stat-info">
                <span className="hud-stat-value">100%</span>
                <span className="hud-stat-label">DEDICATION</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRAINING / STRONGER EVERYDAY (Pinterest Reference Middle)
          ========================================================================= */}
      <section className="section-padding training-showcase-section" aria-label="Training Programs">
        <div className="container">
          <div className="training-layout-grid">
            {/* Left Header & Intro */}
            <div className="training-left-header">
              <span className="eyebrow-red">TRAINING</span>
              <h2 className="training-heading">STRONGER EVERYDAY.</h2>
              <p className="training-summary">
                World-class equipment, elite coaching and a community that pushes you to be your absolute best every single session.
              </p>
              <div className="training-cta-wrap">
                <Link to="/programs" className="btn btn-outline btn-lg">
                  <span>EXPLORE PROGRAMS</span>
                  <ArrowUpRight size={19} className="arrow-up-right" />
                </Link>
              </div>
            </div>

            {/* Right Cards: 3 Cinematic Vertical Program Cards */}
            <div className="training-cards-row">
              {/* Card 1: Strength (Female Athlete) */}
              <Link to="/programs" className="training-card" aria-label="Strength Training Program">
                <div className="training-card-image-wrap">
                  <img
                    src={cardStrengthFemaleImg}
                    alt="Female strength training athlete lifting heavy barbell"
                    className="training-card-img"
                  />
                  <div className="training-card-gradient" />
                  <div className="red-icon-badge card-top-badge">
                    <Dumbbell size={20} />
                  </div>
                </div>

                <div className="training-card-content">
                  <div className="card-text-group">
                    <h3 className="training-card-title">STRENGTH</h3>
                    <p className="training-card-sub">Build muscle. Lift heavy. Get results.</p>
                  </div>
                  <div className="card-arrow-indicator">
                    <ArrowUpRight size={22} className="arrow-up-right" />
                  </div>
                </div>
              </Link>

              {/* Card 2: Conditioning (Male Athlete) */}
              <Link to="/programs" className="training-card" aria-label="Conditioning Program">
                <div className="training-card-image-wrap">
                  <img
                    src={cardConditioningImg}
                    alt="Conditioning battle ropes workout"
                    className="training-card-img"
                  />
                  <div className="training-card-gradient" />
                  <div className="red-icon-badge card-top-badge">
                    <HeartPulse size={20} />
                  </div>
                </div>

                <div className="training-card-content">
                  <div className="card-text-group">
                    <h3 className="training-card-title">CONDITIONING</h3>
                    <p className="training-card-sub">Increase endurance. Push your limits.</p>
                  </div>
                  <div className="card-arrow-indicator">
                    <ArrowUpRight size={22} className="arrow-up-right" />
                  </div>
                </div>
              </Link>

              {/* Card 3: Personal Training (Female Athlete with Coach) */}
              <Link to="/programs" className="training-card" aria-label="Personal Training Program">
                <div className="training-card-image-wrap">
                  <img
                    src={cardTrainerUnisexImg}
                    alt="Coach assisting female athlete with dumbbell overhead press"
                    className="training-card-img"
                  />
                  <div className="training-card-gradient" />
                  <div className="red-icon-badge card-top-badge">
                    <UserCheck size={20} />
                  </div>
                </div>

                <div className="training-card-content">
                  <div className="card-text-group">
                    <h3 className="training-card-title">PERSONAL TRAINING</h3>
                    <p className="training-card-sub">1-on-1 coaching. 100% focused on you.</p>
                  </div>
                  <div className="card-arrow-indicator">
                    <ArrowUpRight size={22} className="arrow-up-right" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MOTIVATION BANNER (YOUR STRONGEST VERSION STARTS HERE)
          ========================================================= */}
      <section className="motivation-banner-section" aria-label="Your Strongest Version">
        <div className="motivation-bg-container">
          <img
            src={bannerUnisexImg}
            alt="Male and female athletes walking down luxury dark gym corridor with glowing geometric lights"
            className="motivation-bg-img"
          />
          <div className="motivation-dark-overlay" />
          <div className="motivation-red-glow" />
        </div>

        <div className="container motivation-content animate-fade-in">
          <div className="motivation-motto-tag">BE YOUR OWN STANDARD</div>

          <h2 className="motivation-main-headline">
            YOUR <span className="headline-red-accent">STRONGEST</span>
            <br />
            VERSION
          </h2>

          <div className="motivation-brush-script">STARTS HERE.</div>

          <div className="motivation-actions-row">
            <Link to="/membership" className="btn btn-primary btn-lg">
              <span>JOIN NOW</span>
              <ArrowUpRight size={20} className="arrow-up-right" />
            </Link>

            <div className="member-social-proof">
              <div className="avatar-overlap-stack">
                <div className="avatar-circle">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Member" />
                </div>
                <div className="avatar-circle">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Member" />
                </div>
                <div className="avatar-circle">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Member" />
                </div>
                <div className="avatar-circle">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Member" />
                </div>
              </div>

              <div className="member-proof-text">
                <strong>JOIN 500+ MEMBERS</strong>
                <span>AND START YOUR JOURNEY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FITNESS & WORKOUT KNOWLEDGE (Gym Blogs & Insights)
          ========================================================================= */}
      <section className="section-padding home-blogs-section" aria-label="Gym Insights & Blogs">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} />
              TRAINING & WELLNESS INSIGHTS
            </span>
            <h2>FITNESS & WORKOUT KNOWLEDGE</h2>
            <p className="section-subtitle">
              Evidence-based workout methodologies, nutritional recovery, and conditioning guides to maximize your physical potential.
            </p>
          </div>

          <div className="grid-3 home-blogs-grid">
            {gymBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onSelect={(b) => setSelectedBlog(b)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Reader Modal */}
      {selectedBlog && (
        <BlogReaderModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}

      {/* Video Preview Modal */}
      {showVideoModal && (
        <div className="video-modal-backdrop" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <div className="video-modal-title">
                <span className="video-red-dot" />
                <strong>A TO Z FITNESS • FACILITY TOUR & TRAINING MONTAGE</strong>
              </div>
              <button
                type="button"
                className="video-modal-close"
                onClick={() => setShowVideoModal(false)}
                aria-label="Close video player"
              >
                <X size={20} />
              </button>
            </div>

            <div className="video-player-container">
              <div className="video-ambient-poster">
                <img src={heroUnisexImg} alt="Unisex Training Video Preview" className="video-poster-img" />
                <div className="video-poster-overlay">
                  <div className="video-play-pulse">
                    <Play size={32} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
                  </div>
                  <h3>DISCIPLINE TODAY. DOMINATE TOMORROW.</h3>
                  <p>Welcome to our official training environment in Hinjawadi Phase II, Pune.</p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    onClick={() => setShowVideoModal(false)}
                    style={{ marginTop: '1rem' }}
                  >
                    <span>BOOK AN IN-PERSON VISIT</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
