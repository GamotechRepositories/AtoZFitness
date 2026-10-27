import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Target, 
  ShieldCheck, 
  HeartPulse, 
  Sparkles, 
  ArrowRight, 
  Award, 
  CheckCircle,
  Activity,
  Flame,
  Clock,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react';
import { brandInfo, proposedPrograms } from '../data/gymData';
import coachingImg from '../assets/images/coaching.jpg';
import './About.css';

export default function About() {
  const whatsappUrl = `https://wa.me/${brandInfo.contactPlaceholders.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${brandInfo.name}, I would like to enquire about membership and training facilities.`
  )}`;

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">
            <Sparkles size={14} />
            About {brandInfo.name}
          </span>
          <h1>Purpose, Discipline & Complete Progression</h1>
          <p className="page-header-lead">
            Discover our fitness philosophy and how {brandInfo.name} provides an elite, welcoming training environment engineered for strength, health, and lifelong physical transformation in Hinjawadi, Pune.
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
                At <strong>{brandInfo.name}</strong>, our vision is built around intentional, results-driven fitness. We recognize that athletic improvement is not a shortcut or a temporary phase—it is a methodical journey encompassing progressive strength, cardiovascular conditioning, mobility, and recovery.
              </p>
              <p>
                Located in Hinjawadi Phase II, Pune, <strong>{brandInfo.name}</strong> provides a premier training floor equipped for every stage of your fitness journey. Whether you are executing heavy compound barbell lifts in our power rack zone, mastering dumbbell movements, pushing cardiovascular endurance on modern running decks, or strengthening your core on dedicated exercise mats, our gym gives you the space and equipment to train with absolute purpose.
              </p>
              <p>
                We do not endorse quick-fix fads or unsustainable claims. Instead, <strong>{brandInfo.name}</strong> champions proven exercise science: proper lifting mechanics, structured progressive overload, injury prevention, and consistent habit formation. Every member receives respectful guidance from our floor trainers to ensure safety, confidence, and continuous progress.
              </p>

              {/* The A to Z Fitness Standard Box */}
              <div className="about-commitment-card card">
                <div className="commitment-header">
                  <ShieldCheck size={22} className="commitment-icon" />
                  <h4>The {brandInfo.name} Standard</h4>
                </div>
                <div className="commitment-list">
                  <div className="commitment-item">
                    <CheckCircle size={16} className="item-icon" />
                    <span><strong>State-of-the-Art Equipment:</strong> Heavy power racks, Olympic barbells, calibrated dumbbells, and precision resistance machines.</span>
                  </div>
                  <div className="commitment-item">
                    <CheckCircle size={16} className="item-icon" />
                    <span><strong>Hygiene & Sanitization:</strong> Daily sanitized workout stations, well-ventilated air conditioning, and clean locker facilities.</span>
                  </div>
                  <div className="commitment-item">
                    <CheckCircle size={16} className="item-icon" />
                    <span><strong>Floor Guidance & Technique:</strong> Attentive floor supervision to ensure proper lifting mechanics, correct posture, and injury prevention.</span>
                  </div>
                  <div className="commitment-item">
                    <CheckCircle size={16} className="item-icon" />
                    <span><strong>Welcoming All Fitness Levels:</strong> Supportive atmosphere designed for first-time gym goers, daily fitness enthusiasts, and dedicated strength athletes.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-story-media">
              <div className="about-image-card">
                <img
                  src={coachingImg}
                  alt={`Athletic training and guidance at ${brandInfo.name}`}
                  className="about-story-img"
                />
                <div className="about-img-caption">
                  <span>Professional Coaching & Strength Guidance at {brandInfo.name}</span>
                </div>
              </div>

              {/* Fast Stats Box */}
              <div className="about-quick-stats card">
                <div className="quick-stat-item">
                  <Clock size={18} className="stat-icon" />
                  <div>
                    <strong>7 Days Open</strong>
                    <span>Mon–Sat 6am–10:30pm | Sun 7am–11pm</span>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <MapPin size={18} className="stat-icon" />
                  <div>
                    <strong>Hinjawadi Phase II</strong>
                    <span>Rajiv Gandhi Infotech Park, Pune</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Gym Pillars / Foundational Principles */}
      <section className="section-padding bg-darker">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Foundational Principles</span>
            <h2>What Drives Our Approach at {brandInfo.name}</h2>
            <p className="section-subtitle">
              The core principles guiding the layout, program structure, and training atmosphere at {brandInfo.name}.
            </p>
          </div>

          <div className="grid-3">
            <div className="card value-card">
              <div className="value-icon-box">
                <Target size={24} />
              </div>
              <h3>Progressive Overload</h3>
              <p>
                Structuring workouts with systematic tracking, gradual load increases, and measurable milestones to guarantee physical adaptations and muscle development over time at {brandInfo.name}.
              </p>
            </div>

            <div className="card value-card">
              <div className="value-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Movement Integrity & Safety</h3>
              <p>
                Prioritizing joint stability, strict execution form, and injury prevention before adding heavy resistance or excessive velocity, ensuring safe lifelong training for every member.
              </p>
            </div>

            <div className="card value-card">
              <div className="value-icon-box">
                <HeartPulse size={24} />
              </div>
              <h3>Complete Conditioning & Recovery</h3>
              <p>
                Balancing raw muscular power with functional stamina, cardiovascular capacity, core stabilization, and post-workout mobility for balanced overall physical health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights / Standards Applicable to All Premier Gyms */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Facility Standards</span>
            <h2>Designed for Comprehensive Physical Health</h2>
            <p className="section-subtitle">
              At {brandInfo.name}, our training floor is logically divided into dedicated zones to support every phase of your workout without clutter or interruptions.
            </p>
          </div>

          <div className="grid-4 standards-grid">
            <div className="card standard-feature-card">
              <div className="standard-icon"><Dumbbell size={22} /></div>
              <h4>Free Weights Zone</h4>
              <p>Dumbbells from 2.5 kg to 50+ kg, Olympic bars, bumper plates, and multi-angle adjustable incline and flat benches.</p>
            </div>

            <div className="card standard-feature-card">
              <div className="standard-icon"><Activity size={22} /></div>
              <h4>Cardio Arena</h4>
              <p>High-performance running decks, stationary exercise bikes, cross-trainers, and rowing machines for heart health and endurance.</p>
            </div>

            <div className="card standard-feature-card">
              <div className="standard-icon"><Flame size={22} /></div>
              <h4>Core & Mobility Area</h4>
              <p>Dedicated matted zone with exercise mats, medicine balls, stability balls, and bands for core stability and stretching.</p>
            </div>

            <div className="card standard-feature-card">
              <div className="standard-icon"><ShieldCheck size={22} /></div>
              <h4>Hygiene & Amenities</h4>
              <p>Clean air-conditioned interior, sanitized workout stations, secure locker spaces, and hygienic restroom facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Disciplines Overview */}
      <section className="section-padding bg-darker">
        <div className="container">
          <div className="services-overview-header">
            <div>
              <span className="section-tag">Structured Programs</span>
              <h2>Workout Disciplines at {brandInfo.name}</h2>
              <p>Explore the 6 structured fitness disciplines offered to members of {brandInfo.name}:</p>
            </div>
            <Link to="/programs" className="btn btn-outline">
              <span>View All Programs</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-2">
            {proposedPrograms.map((prog) => (
              <div key={prog.id} className="service-item-row card card-hover-glow">
                <div className="service-bullet">
                  <CheckCircle size={18} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4>{prog.name}</h4>
                  <p>{prog.tagline}</p>
                  <span className="badge badge-accent">{prog.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff & Coaching Standards Section */}
      <section className="section-padding">
        <div className="container">
          <div className="credentials-feature-card card">
            <div className="creds-icon-box">
              <Award size={36} />
            </div>
            <h3>Certified Coaching & Training Standards at {brandInfo.name}</h3>
            <p>
              At <strong>{brandInfo.name}</strong>, our training philosophy is guided by certified exercise science. Our floor instructors and personal coaches specialize in exercise physiology, functional biomechanics, safe lifting techniques, and personalized goal tracking. Whether you are stepping into a gym for the very first time or pushing past an advanced fitness plateau, our team ensures every rep counts.
            </p>
            
            <div className="credentials-pills-row">
              <span className="cred-badge">✓ Certified Floor Trainers</span>
              <span className="cred-badge">✓ Proper Lifting Form & Technique</span>
              <span className="cred-badge">✓ Personalized Routine Guidance</span>
              <span className="cred-badge">✓ Injury Prevention & CPR/AED Ready</span>
            </div>

            <div className="credentials-actions">
              <Link to="/programs" className="btn btn-primary">
                <span>Explore Training Programs</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>Chat with {brandInfo.name}</span>
              </a>
              <Link to="/contact" className="btn btn-outline">
                <Phone size={16} />
                <span>Call & Visit Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

