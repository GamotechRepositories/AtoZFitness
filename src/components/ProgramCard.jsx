import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Layers, Dumbbell } from 'lucide-react';
import './ProgramCard.css';

export default function ProgramCard({ program }) {
  const { name, category, tagline, description, focusAreas, image, intensity, equipmentFocus } = program;

  return (
    <article className="program-card card card-hover-glow">
      <div className="program-image-wrap">
        <img src={image} alt={`Illustrative workout demonstration for ${name}`} className="program-img" loading="lazy" />
        <div className="program-overlay-grad" />
        <div className="program-top-badges">
          <span className="badge badge-accent">{category}</span>
          <span className="badge badge-placeholder">Proposed Service</span>
        </div>
      </div>

      <div className="program-content">
        <h3 className="program-title">{name}</h3>
        <p className="program-tagline">{tagline}</p>
        <p className="program-description">{description}</p>

        <div className="program-meta-list">
          <div className="program-meta-item">
            <Flame size={15} className="meta-icon" />
            <span className="meta-label">Intensity:</span>
            <span className="meta-val">{intensity}</span>
          </div>
          <div className="program-meta-item">
            <Dumbbell size={15} className="meta-icon" />
            <span className="meta-label">Equipment:</span>
            <span className="meta-val">{equipmentFocus}</span>
          </div>
        </div>

        <div className="program-focus-tags">
          <span className="focus-title">Focus Areas:</span>
          <div className="focus-pills">
            {focusAreas.map((area, idx) => (
              <span key={idx} className="focus-pill">{area}</span>
            ))}
          </div>
        </div>

        <div className="program-actions">
          <Link
            to={`/contact?program=${encodeURIComponent(name)}`}
            className="btn btn-outline btn-sm program-cta-btn"
          >
            <span>Enquire About Program</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
