import React, { useState } from 'react';
import { Activity, RotateCcw, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import { calculateBMI, bmiCategories } from '../utils/bmiUtils';
import { bmiDisclaimers } from '../data/gymData';
import './BmiCalculatorWidget.css';

export default function BmiCalculatorWidget({ showFullDisclaimers = true }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    setError('');

    if (!height.trim() || !weight.trim()) {
      setError('Please provide both height and weight to calculate your BMI.');
      setResult(null);
      return;
    }

    const res = calculateBMI(height, weight);
    if (res.error) {
      setError(res.error);
      setResult(null);
    } else {
      setResult(res);
      setError('');
    }
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  return (
    <div className="bmi-widget-card" id="bmi-calculator">
      <div className="bmi-widget-header">
        <div className="bmi-title-wrap">
          <div className="bmi-badge-icon">
            <Activity size={22} />
          </div>
          <div>
            <h3 className="bmi-title">Adult BMI Calculator</h3>
            <p className="bmi-subtitle">Calculate your screening Body Mass Index in centimeters and kilograms</p>
          </div>
        </div>
        <span className="badge badge-accent">100% In-Browser</span>
      </div>

      <div className="bmi-widget-body">
        {/* Input Form */}
        <form onSubmit={handleCalculate} className="bmi-form">
          <div className="bmi-inputs-row">
            <div className="form-group bmi-input-group">
              <label htmlFor="bmi-height" className="form-label">
                Height <span className="unit-label">(cm)</span>
              </label>
              <div className="input-with-suffix">
                <input
                  id="bmi-height"
                  type="number"
                  step="0.5"
                  min="80"
                  max="260"
                  placeholder="e.g. 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="form-input"
                  required
                />
                <span className="input-suffix">cm</span>
              </div>
            </div>

            <div className="form-group bmi-input-group">
              <label htmlFor="bmi-weight" className="form-label">
                Weight <span className="unit-label">(kg)</span>
              </label>
              <div className="input-with-suffix">
                <input
                  id="bmi-weight"
                  type="number"
                  step="0.5"
                  min="25"
                  max="350"
                  placeholder="e.g. 72"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-input"
                  required
                />
                <span className="input-suffix">kg</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="bmi-error-box" role="alert">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <div className="bmi-form-actions">
            <button type="submit" className="btn btn-primary bmi-submit-btn">
              <Activity size={18} />
              <span>Calculate BMI</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-outline bmi-reset-btn"
              title="Reset inputs and result"
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </form>

        {/* Calculation Result Display */}
        {result && (
          <div className="bmi-result-card animate-fade-in" aria-live="polite">
            <div className="bmi-score-header">
              <div>
                <span className="bmi-score-label">Screening BMI Score</span>
                <div className="bmi-score-number" style={{ color: result.color }}>
                  {result.bmi}
                </div>
              </div>
              <div className="bmi-category-badge" style={{ borderColor: result.color, color: result.color }}>
                <CheckCircle2 size={16} />
                <span>{result.category}</span>
              </div>
            </div>

            {/* Visual Gauge Meter */}
            <div className="bmi-gauge-wrap">
              <div className="bmi-gauge-bar">
                <div
                  className="bmi-gauge-indicator"
                  style={{
                    left: `${result.meterPercentage}%`,
                    backgroundColor: result.color
                  }}
                />
              </div>
              <div className="bmi-gauge-labels">
                <span>&lt; 18.5 Under</span>
                <span>18.5 – 24.9 Normal</span>
                <span>25 – 29.9 Over</span>
                <span>30+ Obese</span>
              </div>
            </div>

            <p className="bmi-result-desc">{result.description}</p>
            <div className="bmi-healthy-tip">
              <strong>Estimated Healthy Weight for your height:</strong>{' '}
              <span>{result.healthyWeightRange.min} kg – {result.healthyWeightRange.max} kg</span>
            </div>
          </div>
        )}

        {/* Standard Categories Grid */}
        <div className="bmi-categories-legend">
          <span className="legend-title">Standard Adult BMI Categories</span>
          <div className="categories-pills">
            {bmiCategories.map((cat) => (
              <div key={cat.label} className="cat-pill">
                <span className="cat-dot" style={{ backgroundColor: cat.color }} />
                <span className="cat-name">{cat.label}</span>
                <span className="cat-range">{cat.range}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bmi-privacy-note">
          <Info size={15} />
          <span>Calculated entirely inside your browser. No health or personal inputs are sent or stored.</span>
        </div>

        {/* Full Limitations Disclaimer */}
        {showFullDisclaimers && (
          <div className="bmi-disclaimer-box">
            <h4 className="disclaimer-title">
              <AlertCircle size={16} />
              {bmiDisclaimers.title}
            </h4>
            <ul className="disclaimer-list">
              {bmiDisclaimers.points.map((pt, index) => (
                <li key={index}>{pt}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
