import React from 'react';
import { Sparkles, AlertCircle, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { facilityShowcase } from '../data/gymData';
import FacilityCard from '../components/FacilityCard';
import './Facilities.css';

export default function Facilities() {
  return (
    <div className="facilities-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">
            <Sparkles size={14} />
            Gym Environment
          </span>
          <h1>Training Facilities & Floor Layout</h1>
          <p className="page-header-lead">
            Explore our visual facility showcase representing the planned training zones, equipment sections, and dedicated workout spaces at A to Z Fitness.
          </p>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="section-padding">
        <div className="container">
          {/* Important Image Disclaimer Banner */}
          <div className="facilities-imagery-notice">
            <ShieldAlert size={22} className="notice-icon" />
            <div>
              <strong>Representative Visual Concept Notice</strong>
              <p>
                Photographs displayed in this preview represent standard modern athletic training environments and are used for illustrative layout visualization. Actual verified photographs of A to Z Fitness premises, equipment manufacturer brands, and locker amenities will be updated once confirmed by gym management.
              </p>
            </div>
          </div>

          {/* Facility Cards Grid */}
          <div className="grid-3 facilities-grid">
            {facilityShowcase.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

          {/* Facility Standard Principles */}
          <div className="facility-standards-wrap card">
            <div className="standards-header">
              <h3>Facility Design Standards</h3>
              <p>What our planned gym floor layout is designed to prioritize:</p>
            </div>

            <div className="standards-grid">
              <div className="standard-item">
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                <div>
                  <strong>Spacious Movement Clearance</strong>
                  <span>Ample lifting platform spacing and safety margins between free weights and functional tracks.</span>
                </div>
              </div>

              <div className="standard-item">
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                <div>
                  <strong>High-Performance Flooring</strong>
                  <span>Shock-absorbing rubber impact tiles and sprint turf designed for heavy Olympic drops and agility drills.</span>
                </div>
              </div>

              <div className="standard-item">
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                <div>
                  <strong>Optimized Climate & Airflow</strong>
                  <span>High-capacity ventilation engineered for intense athletic conditioning and continuous air circulation.</span>
                </div>
              </div>

              <div className="standard-item">
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                <div>
                  <strong>Hygiene & Equipment Care</strong>
                  <span>Dedicated sanitation stations, continuous wipe-down protocols, and structured dumbbell re-racking.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
