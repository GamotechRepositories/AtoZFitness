import React, { useEffect } from 'react';
import { X, Clock, CheckCircle2, Bookmark, Sparkles } from 'lucide-react';
import './BlogReaderModal.css';

export default function BlogReaderModal({ blog, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!blog) return null;

  const { title, category, readTime, image, paragraphs, takeaways } = blog;

  return (
    <div className="blog-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="blog-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button
          className="blog-modal-close-btn"
          onClick={onClose}
          aria-label="Close article"
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div className="blog-modal-hero">
          <img src={image} alt={`Visual header for ${title}`} className="modal-hero-img" />
          <div className="modal-hero-overlay" />
          <div className="modal-hero-badges">
            <span className="badge badge-accent">{category}</span>
            <span className="badge badge-neutral">
              <Clock size={12} />
              {readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="blog-modal-body">
          <h2 className="modal-article-title">{title}</h2>

          <div className="modal-paragraphs">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="modal-paragraph-text">{p}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="modal-takeaways-card">
            <div className="takeaways-header">
              <Sparkles size={18} color="var(--accent-primary)" />
              <h4>Key Actionable Takeaways</h4>
            </div>
            <ul className="takeaways-list">
              {takeaways.map((point, index) => (
                <li key={index} className="takeaway-item">
                  <CheckCircle2 size={16} className="takeaway-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-footer-action">
            <button type="button" className="btn btn-primary btn-block" onClick={onClose}>
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
