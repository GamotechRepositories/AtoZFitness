import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Dumbbell, MessageCircle, Phone } from 'lucide-react';
import { brandInfo } from '../data/gymData';
import './ProgramCard.css';

export default function ProgramCard({ program }) {
  const { name, category, tagline, description, focusAreas, image, intensity, equipmentFocus } = program;
  const whatsappUrl = `https://wa.me/${brandInfo.contactPlaceholders.whatsappRaw}?text=${encodeURIComponent(`Hi A to Z Fitness, I would like to enquire about your ${name} program.`)}`;

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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm program-cta-btn"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="btn btn-outline btn-sm program-call-btn"
            title="View Direct Call & Location Details"
          >
            <Phone size={14} />
            <span>Call Direct</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
