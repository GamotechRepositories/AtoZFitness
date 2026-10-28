import React, { useState } from 'react';
import { Dumbbell, Filter, AlertCircle, Sparkles } from 'lucide-react';
import { proposedPrograms } from '../data/gymData';
import ProgramCard from '../components/ProgramCard';
import progStrengthImg from '../assets/images/prog_strength.jpg';
import './Programs.css';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Strength Training',
    'Muscle Building',
    'Weight Loss',
    'Cardio & Endurance',
    'Personal Training',
    'Core & Abs'
  ];

  const filteredPrograms = selectedCategory === 'All'
    ? proposedPrograms
    : proposedPrograms.filter(prog => prog.category === selectedCategory);

  return (
    <div className="programs-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="page-header-bg-container">
          <img
            src={progStrengthImg}
            alt="Barbell strength and progressive resistance training disciplines"
            className="page-header-bg-img"
          />
          <div className="page-header-gradient-overlay" />
        </div>

        <div className="container page-header-content animate-fade-in">
          <span className="section-tag">
            <Dumbbell size={14} />
            Workout Disciplines
          </span>
          <h1>Workout Programs</h1>
          <p className="page-header-lead">
            Explore our 6 structured training disciplines covering foundational strength, muscle development, weight management, cardiovascular endurance, customized personal training, and core stability.
          </p>
        </div>
      </section>

      {/* Main Content & Filters */}
      <section className="section-padding">
        <div className="container">
          {/* Client Notice */}
          <div className="programs-client-notice">
            <AlertCircle size={20} className="notice-icon" />
            <div>
              <strong>A to Z Fitness Workout Programs</strong>
              <p>
                Each program is structured with progressive overload, target intensity levels, specialized equipment focus, and technique guidance tailored to your fitness journey.
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-bar">
            <div className="filter-label-wrap">
              <Filter size={16} />
              <span>Filter Category:</span>
            </div>
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'filter-btn-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid-3 programs-grid">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          {/* Empty State if filter yields nothing */}
          {filteredPrograms.length === 0 && (
            <div className="empty-programs-card card">
              <p>No programs found in this category.</p>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedCategory('All')}
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Program Customization Notice for Client */}
          <div className="program-footnote card">
            <h4>Need to customize these programs?</h4>
            <p>
              All workout programs are defined in modular frontend data files and can be instantly renamed, modified, or updated with confirmed schedules when provided by A to Z Fitness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
