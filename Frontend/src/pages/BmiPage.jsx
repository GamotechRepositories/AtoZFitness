import React from 'react';
import { Activity, ShieldAlert, Heart, Scale, HelpCircle } from 'lucide-react';
import BmiCalculatorWidget from '../components/BmiCalculatorWidget';
import bmiBg from '../assets/images/prog_weightloss.jpg';
import './BmiPage.css';

export default function BmiPage() {
  return (
    <div className="bmi-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="page-header-bg-container">
          <img
            src={bmiBg}
            alt="Body conditioning, screening and fitness weight management"
            className="page-header-bg-img"
          />
          <div className="page-header-gradient-overlay" />
        </div>

        <div className="container page-header-content animate-fade-in">
          <span className="section-tag">
            <Activity size={14} />
            Fitness Screening Tool
          </span>
          <h1>Interactive BMI Calculator</h1>
          <p className="page-header-lead">
            Calculate your Body Mass Index (BMI) using standardized adult height and weight metrics. 100% computed inside your browser with complete privacy.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="section-padding">
        <div className="container">
          <BmiCalculatorWidget showFullDisclaimers={true} />

          {/* Educational Insights Section */}
          <div className="bmi-education-section">
            <div className="section-header">
              <span className="section-tag">Educational Context</span>
              <h2>Understanding Your BMI Results</h2>
              <p className="section-subtitle">
                How Body Mass Index is calculated and what factors to consider when interpreting your score.
              </p>
            </div>

            <div className="grid-3">
              <div className="card education-card">
                <div className="edu-icon-wrap">
                  <Scale size={22} />
                </div>
                <h3>How BMI is Computed</h3>
                <p>
                  BMI is calculated by dividing an individual’s body weight in kilograms by the square of their height in meters (kg/m²). It provides a standardized population-level screening gauge.
                </p>
              </div>

              <div className="card education-card">
                <div className="edu-icon-wrap">
                  <Heart size={22} />
                </div>
                <h3>The Muscle Density Factor</h3>
                <p>
                  Because muscle tissue is denser than fat tissue, dedicated resistance lifters with high lean mass may score in the "Overweight" category while possessing optimal metabolic conditioning.
                </p>
              </div>

              <div className="card education-card">
                <div className="edu-icon-wrap">
                  <ShieldAlert size={22} />
                </div>
                <h3>Screening vs. Clinical Diagnosis</h3>
                <p>
                  BMI does not measure body fat percentage, visceral fat, blood pressure, or cardiovascular health. It serves solely as an initial reference point rather than a medical assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
