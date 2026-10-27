import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, Info, CheckCircle2, ShieldAlert } from 'lucide-react';
import { brandInfo } from '../data/gymData';
import './Contact.css';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const programParam = searchParams.get('program');
  const subjectParam = searchParams.get('subject');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: programParam ? `Program: ${programParam}` : (subjectParam || 'General Information'),
    message: ''
  });

  const [previewNotice, setPreviewNotice] = useState(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (programParam) {
      setFormData(prev => ({ ...prev, interest: `Program: ${programParam}` }));
    } else if (subjectParam) {
      setFormData(prev => ({ ...prev, interest: subjectParam }));
    }
  }, [programParam, subjectParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill in your name, email, and message to preview submission.');
      return;
    }

    // Explicitly truthful message: Do not pretend email was sent!
    setPreviewNotice({
      title: "Frontend Preview Recorded",
      message: "Notice: Because this is a frontend-only prototype without an active server or email provider, this message was not sent to A to Z Fitness. This interface demonstrates form validation and field layout for the client.",
      submittedData: { ...formData }
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: 'General Information',
      message: ''
    });
    setPreviewNotice(null);
    setValidationError('');
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">
            <Mail size={14} />
            Contact & Location
          </span>
          <h1>Get In Touch With A to Z Fitness</h1>
          <p className="page-header-lead">
            Review our verified contact placeholders and frontend communication interface awaiting client activation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Contact Placeholders Panel */}
            <div className="contact-info-panel">
              <span className="section-tag">Official Details</span>
              <h2>Gym Information</h2>
              <p className="contact-lead-text">
                The details below are verified placeholders. Accurate location coordinates, official hotlines, and member service hours will be populated upon client confirmation.
              </p>

              <div className="contact-cards-stack">
                <div className="contact-detail-card card">
                  <div className="detail-icon-wrap">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="detail-label">Gym Physical Address</span>
                    <strong className="detail-value">{brandInfo.contactPlaceholders.address}</strong>
                    <span className="placeholder-tag">Placeholder</span>
                    <p className="detail-hint">{brandInfo.contactPlaceholders.addressNote}</p>
                  </div>
                </div>

                <div className="contact-detail-card card">
                  <div className="detail-icon-wrap">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="detail-label">Telephone / Helpline</span>
                    <strong className="detail-value">{brandInfo.contactPlaceholders.phone}</strong>
                    <span className="placeholder-tag">Placeholder</span>
                    <p className="detail-hint">{brandInfo.contactPlaceholders.phoneNote}</p>
                  </div>
                </div>

                <div className="contact-detail-card card">
                  <div className="detail-icon-wrap">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="detail-label">Email Enquiries</span>
                    <strong className="detail-value">{brandInfo.contactPlaceholders.email}</strong>
                    <span className="placeholder-tag">Placeholder</span>
                    <p className="detail-hint">{brandInfo.contactPlaceholders.emailNote}</p>
                  </div>
                </div>

                <div className="contact-detail-card card">
                  <div className="detail-icon-wrap">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="detail-label">Operating Schedule</span>
                    <strong className="detail-value">{brandInfo.contactPlaceholders.hoursWeekday}</strong>
                    <span className="placeholder-tag">Placeholder</span>
                    <p className="detail-hint">{brandInfo.contactPlaceholders.hoursWeekend}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Notice */}
              <div className="map-placeholder-box card">
                <div className="map-placeholder-inner">
                  <MapPin size={32} className="map-pin-pulse" />
                  <h4>Interactive Location Map</h4>
                  <p>Google Maps embed will be linked here once the gym's verified physical address is confirmed by the client.</p>
                  <span className="badge badge-placeholder">Awaiting Official GPS Coordinates</span>
                </div>
              </div>
            </div>

            {/* Frontend Preview Enquiry Form */}
            <div className="contact-form-panel">
              <div className="form-wrapper-card card">
                <div className="form-header">
                  <span className="badge badge-neutral">Frontend Form Interface</span>
                  <h3>Send An Enquiry</h3>
                  <p>Test the client-side validation and enquiry routing fields.</p>
                </div>

                {/* Important Non-Transmission Disclaimer */}
                <div className="form-disclaimer-banner">
                  <ShieldAlert size={18} className="banner-alert-icon" />
                  <div>
                    <strong>Client Integration Note:</strong>
                    <p>
                      This website operates without a backend server or form API. Submitting this form validates input fields in your browser but will not transmit enquiries until an email delivery service (e.g. EmailJS, Formspree, or custom webhook) is connected.
                    </p>
                  </div>
                </div>

                {validationError && (
                  <div className="form-error-banner" role="alert">
                    <AlertCircle size={16} />
                    <span>{validationError}</span>
                  </div>
                )}

                {previewNotice && (
                  <div className="form-preview-result animate-fade-in" role="status">
                    <div className="preview-res-header">
                      <CheckCircle2 size={20} color="var(--accent-primary)" />
                      <strong>{previewNotice.title}</strong>
                    </div>
                    <p className="preview-res-msg">{previewNotice.message}</p>
                    <div className="preview-summary">
                      <span className="sum-item"><strong>Name:</strong> {previewNotice.submittedData.fullName}</span>
                      <span className="sum-item"><strong>Email:</strong> {previewNotice.submittedData.email}</span>
                      <span className="sum-item"><strong>Subject:</strong> {previewNotice.submittedData.interest}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-outline btn-sm reset-preview-btn"
                    >
                      Clear & Try Again
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="e.g. +1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest" className="form-label">Area of Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      className="form-select"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="General Information">General Information</option>
                      <option value="Membership Enquiry">Membership Enquiry</option>
                      <option value="Program: Strength Training">Program: Strength Training</option>
                      <option value="Program: Cardio Conditioning">Program: Cardio Conditioning</option>
                      <option value="Program: Weight Training">Program: Weight Training</option>
                      <option value="Program: Functional Fitness">Program: Functional Fitness</option>
                      <option value="Program: Personal Training">Program: Personal Training</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Please enter your enquiry or question..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block form-submit-btn">
                    <Send size={16} />
                    <span>Test Form Validation</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
