import React from 'react';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import './BlogCard.css';

export default function BlogCard({ blog, onSelect }) {
  const { title, category, readTime, image, excerpt } = blog;

  return (
    <article className="blog-card card card-hover-glow">
      <div className="blog-image-wrap">
        <img
          src={image}
          alt={`Visual illustration for article: ${title}`}
          className="blog-img"
          loading="lazy"
        />
        <div className="blog-overlay-gradient" />
        <span className="badge badge-accent blog-category-badge">{category}</span>
      </div>

      <div className="blog-content">
        <div className="blog-meta-row">
          <span className="blog-read-time">
            <Clock size={14} className="meta-clock-icon" />
            {readTime}
          </span>
          <span className="blog-tag-dot" />
          <span className="blog-training-tip">Training Guide</span>
        </div>

        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>

        <div className="blog-action-wrap">
          <button
            type="button"
            className="btn btn-outline btn-sm blog-read-btn"
            onClick={() => onSelect(blog)}
            aria-label={`Read full article: ${title}`}
          >
            <BookOpen size={15} />
            <span>Read Article</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
