import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import './FacilityCard.css';

export default function FacilityCard({ facility }) {
  const { title, subtitle, description, features, image } = facility;

  return (
    <article className="facility-card card card-hover-glow">
      <div className="facility-image-wrap">
        <img src={image} alt={`Visual concept representation of ${title}`} className="facility-img" loading="lazy" />
        <div className="facility-overlay-gradient" />
        <div className="facility-badge-strip">
          <span className="badge badge-accent">
            <Sparkles size={12} />
            Facility Zone
          </span>
          <span className="badge badge-placeholder">Representative Concept</span>
        </div>
      </div>

      <div className="facility-body">
        <span className="facility-sub">{subtitle}</span>
        <h3 className="facility-title">{title}</h3>
        <p className="facility-desc">{description}</p>

        <div className="facility-features">
          <span className="features-header">Zone Equipment & Features:</span>
          <ul className="features-list">
            {features.map((feat, index) => (
              <li key={index} className="feature-item">
                <CheckCircle2 size={15} className="feature-icon" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="facility-disclaimer">
          <small>* Actual equipment brands and floor configuration will be updated upon client verification.</small>
        </div>
      </div>
    </article>
  );
}
