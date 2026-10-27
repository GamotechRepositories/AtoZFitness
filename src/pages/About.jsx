import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Target, ShieldCheck, HeartPulse, Sparkles, ArrowRight, AlertCircle, Award, CheckCircle } from 'lucide-react';
import { brandInfo, proposedPrograms } from '../data/gymData';
import coachingImg from '../assets/images/coaching.jpg';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">
            <Sparkles size={14} />
            About A to Z Fitness
          </span>
          <h1>Purpose, Discipline & Complete Progression</h1>
          <p className="page-header-lead">
            Learn about our core fitness philosophy and how A to Z Fitness is structuring an athletic training community tailored for real, sustainable progress.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-tag">Core Philosophy</span>
              <h2>Building Strength From A to Z</h2>
              <p className="story-lead">
                At <strong>{brandInfo.name}</strong>, our vision is built around intentional fitness. We recognize that athletic improvement is not a shortcut or a temporary phase—it is a methodical journey encompassing progressive strength, cardiovascular conditioning, mobility, and recovery.
              </p>
              <p>
                Our facility is planned to provide purposeful training environments where members can train with focus, whether executing fundamental barbell lifts, building core strength and mobility, or pushing cardiovascular endurance.
              </p>
              <p>
                We do not endorse fads or unsubstantiated claims. Instead, our workout framework emphasizes proper mechanics, progressive overload, injury prevention, and consistent habit formation.
              </p>

              {/* Strict Client Verification Notice */}
              <div className="client-verification-card">
                <div className="verification-icon-wrap">
                  <AlertCircle size={20} color="#ffc107" />
                </div>
                <div>
                  <strong>Client Verification Notice</strong>
                  <p>
                    Specific business history, founder biographies, trainer accreditations, and facility opening milestones will be officially populated once verified by the gym leadership team.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-story-media">
              <div className="about-image-card">
                <img
                  src={coachingImg}
                  alt="Representative athletic training session"
                  className="about-story-img"
                />
                <div className="about-img-caption">
                  <span>Illustrative Coaching & Guidance Concept</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Values Pillars */}
      <section className="section-padding bg-darker">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Foundational Principles</span>
            <h2>What Drives Our Approach</h2>
            <p className="section-subtitle">
              The core principles guiding the layout, program structure, and training atmosphere at A to Z Fitness.
            </p>
          </div>

          <div className="grid-3">
            <div className="card value-card">
              <div className="value-icon-box">
                <Target size={24} />
              </div>
              <h3>Progressive Overload</h3>
              <p>
                Structuring workouts with systematic tracking, gradual load increases, and measurable milestones to guarantee physical adaptations over time.
              </p>
            </div>

            <div className="card value-card">
              <div className="value-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Movement Integrity</h3>
              <p>
                Prioritizing joint stability, strict execution form, and injury prevention before adding heavy resistance or excessive velocity.
              </p>
            </div>

            <div className="card value-card">
              <div className="value-icon-box">
                <HeartPulse size={24} />
              </div>
              <h3>Complete Conditioning</h3>
              <p>
                Balancing raw power with functional stamina, aerobic recovery, and rotational stability for balanced lifelong athleticism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="services-overview-header">
            <div>
              <span className="section-tag">Planned Offering</span>
              <h2>Proposed Service Categories</h2>
              <p>An initial overview of the workout formats planned for A to Z Fitness:</p>
            </div>
            <Link to="/programs" className="btn btn-outline">
              <span>View All Programs</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-2">
            {proposedPrograms.slice(0, 4).map((prog) => (
              <div key={prog.id} className="service-item-row card">
                <div className="service-bullet">
                  <CheckCircle size={18} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4>{prog.name}</h4>
                  <p>{prog.tagline}</p>
                  <span className="badge badge-neutral">{prog.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Credentials Placeholder */}
      <section className="section-padding bg-darker">
        <div className="container">
          <div className="credentials-placeholder-card card">
            <Award size={36} className="creds-icon" />
            <h3>Certifications & Staff Credentials</h3>
            <p>
              Official coach profiles, national fitness accreditations, and verified trainer rosters for A to Z Fitness will be displayed here upon official client provision.
            </p>
            <div className="badge badge-placeholder">Awaiting Official Client Details</div>
          </div>
        </div>
      </section>
    </div>
  );
}
