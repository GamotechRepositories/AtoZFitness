import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { brandInfo } from '../data/gymData';
import EnquiryForm from '../components/EnquiryForm';
import contactBg from '../assets/images/prog_personal.jpg';
import './Contact.css';

export default function Contact() {
  const { contactPlaceholders } = brandInfo;

  // Direct phone and WhatsApp links
  const telLink = `tel:${contactPlaceholders.phoneRaw}`;
  const whatsappUrl = `https://wa.me/${contactPlaceholders.whatsappRaw}?text=${encodeURIComponent(contactPlaceholders.whatsappDefaultMessage)}`;
  const mailtoLink = `mailto:${contactPlaceholders.email}?subject=${encodeURIComponent('Enquiry for A to Z Fitness')}`;

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="page-header-bg-container">
          <img
            src={contactBg}
            alt="Coach consultation and member enquiry at A to Z Fitness"
            className="page-header-bg-img"
          />
          <div className="page-header-gradient-overlay" />
        </div>

        <div className="container page-header-content animate-fade-in">
          <span className="section-tag">
            <Sparkles size={14} />
            Contact & Enquiries
          </span>
          <h1>Connect With A to Z Fitness</h1>
          <p className="page-header-lead">
            Get in touch with our team at A to Z Fitness. Send us an online enquiry below, or reach out directly via Phone Call or WhatsApp for immediate assistance in Hinjawadi, Pune.
          </p>
        </div>
      </section>

      {/* Main Direct Channels Section */}
      <section className="section-padding">
        <div className="container">
          {/* Direct Action Channels Grid */}
          <div className="direct-channels-grid">
            {/* Call Direct Channel */}
            <div className="channel-card call-card card card-hover-glow">
              <div className="channel-header">
                <div className="channel-icon-wrap call-icon-wrap">
                  <Phone size={28} />
                </div>
                <span className="badge badge-accent">Instant Voice Call</span>
              </div>

              <div className="channel-body">
                <h2 className="channel-title">Call Direct</h2>
                <p className="channel-desc">
                  Speak directly with an A to Z Fitness representative regarding gym schedules, equipment, and opening announcements.
                </p>

                <div className="channel-value-display">
                  <span className="val-label">Phone Line:</span>
                  <strong className="val-text">{contactPlaceholders.phone}</strong>
                  <span className="badge badge-accent">Verified Contact</span>
                </div>

                <a
                  href={telLink}
                  className="btn btn-primary btn-lg channel-action-btn"
                  aria-label="Call A to Z Fitness directly"
                >
                  <Phone size={20} />
                  <span>Call Direct Now</span>
                  <ArrowUpRight size={18} />
                </a>

                <p className="channel-note">{contactPlaceholders.phoneNote}</p>
              </div>
            </div>

            {/* WhatsApp Direct Channel */}
            <div className="channel-card whatsapp-card card card-hover-glow">
              <div className="channel-header">
                <div className="channel-icon-wrap whatsapp-icon-wrap">
                  <MessageCircle size={28} />
                </div>
                <span className="badge badge-whatsapp">Instant WhatsApp Chat</span>
              </div>

              <div className="channel-body">
                <h2 className="channel-title">Chat on WhatsApp</h2>
                <p className="channel-desc">
                  Have a quick question? Message our official WhatsApp account for fast replies on membership updates, program details, and tours.
                </p>

                <div className="channel-value-display">
                  <span className="val-label">WhatsApp Number:</span>
                  <strong className="val-text">{contactPlaceholders.whatsapp}</strong>
                  <span className="badge badge-whatsapp">Verified Account</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg channel-action-btn"
                  aria-label="Chat with A to Z Fitness on WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span>Open WhatsApp Chat</span>
                  <ArrowUpRight size={18} />
                </a>

                <p className="channel-note">{contactPlaceholders.whatsappNote}</p>
              </div>
            </div>
          </div>

          {/* Responsive Online Gym Enquiry Form (Web3Forms Connected) */}
          <EnquiryForm />

          {/* Secondary Details: Location & Hours */}
          <div className="secondary-details-grid" style={{ marginTop: '3rem' }}>
            {/* Physical Location Card */}
            <div className="detail-panel card">
              <div className="panel-title-wrap">
                <div className="panel-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="panel-title">Gym Location</h3>
                  <p className="panel-subtitle">Rajiv Gandhi Infotech Park, Hinjawadi Phase II</p>
                </div>
              </div>

              <div className="detail-content-box">
                <strong className="detail-highlight">{contactPlaceholders.address}</strong>
                <span className="badge badge-accent" style={{ marginTop: '0.4rem', display: 'inline-flex' }}>Verified Address</span>
                <p className="detail-subtext">{contactPlaceholders.addressNote}</p>
              </div>

              <div className="map-preview-box">
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', height: '180px' }}>
                  <iframe
                    title="A to Z Fitness Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('Hinjawadi Phase 2 Rd, Hinjawadi Phase II, Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057')}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactPlaceholders.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
                >
                  <MapPin size={15} />
                  <span>Get Directions in Google Maps</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Hours & Additional Channels */}
            <div className="detail-panel card">
              <div className="panel-title-wrap">
                <div className="panel-icon-wrap">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="panel-title">Operating Schedule</h3>
                  <p className="panel-subtitle">Official gym training hours</p>
                </div>
              </div>

              <div className="detail-content-box">
                <div style={{ marginBottom: '0.65rem' }}>
                  <strong className="detail-highlight">{contactPlaceholders.hoursWeekday}</strong>
                </div>
                <div>
                  <strong className="detail-highlight">{contactPlaceholders.hoursWeekend}</strong>
                </div>
                <span className="badge badge-accent" style={{ marginTop: '0.65rem', display: 'inline-flex' }}>Verified Schedule</span>
              </div>

              <div className="email-fallback-box">
                <div className="email-info-wrap">
                  <Mail size={18} className="email-icon" />
                  <div>
                    <span className="email-label">Official Gym Email</span>
                    <a href={mailtoLink} className="email-address" style={{ color: 'var(--text-white)' }}>
                      {contactPlaceholders.email}
                    </a>
                  </div>
                </div>
                <a href={mailtoLink} className="btn btn-outline btn-sm">
                  <span>Send Email</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Response Commitment Notice */}
          <div className="direct-transparency-card card">
            <ShieldCheck size={22} className="transparency-icon" />
            <div>
              <h4>Prompt Response Commitment</h4>
              <p>
                At <strong>{brandInfo.name}</strong>, all online enquiries submitted through the form are routed directly to our official inbox (<code>{contactPlaceholders.email}</code>). For immediate assistance or urgent queries during floor hours, you can reach out via Direct Phone Call or instant WhatsApp chat above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
