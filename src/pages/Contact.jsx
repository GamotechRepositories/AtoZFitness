import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { brandInfo } from '../data/gymData';
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
        <div className="container">
          <span className="section-tag">
            <Sparkles size={14} />
            Direct Communication
          </span>
          <h1>Connect With A to Z Fitness</h1>
          <p className="page-header-lead">
            Reach out directly to our gym team without filling out forms. Choose between a direct telephone call or an instant WhatsApp chat for immediate assistance.
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
                  <span className="placeholder-tag">Placeholder</span>
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
                  <span className="placeholder-tag">Placeholder</span>
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

          {/* Secondary Details: Location & Hours */}
          <div className="secondary-details-grid">
            {/* Physical Location Card */}
            <div className="detail-panel card">
              <div className="panel-title-wrap">
                <div className="panel-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="panel-title">Gym Location</h3>
                  <p className="panel-subtitle">Official facility premises</p>
                </div>
              </div>

              <div className="detail-content-box">
                <strong className="detail-highlight">{contactPlaceholders.address}</strong>
                <span className="placeholder-tag">Placeholder</span>
                <p className="detail-subtext">{contactPlaceholders.addressNote}</p>
              </div>

              <div className="map-preview-box">
                <MapPin size={28} className="map-pin-pulse" />
                <p>Google Maps directions will be linked upon confirmation of final address coordinates.</p>
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
                  <p className="panel-subtitle">Planned opening hours</p>
                </div>
              </div>

              <div className="detail-content-box">
                <strong className="detail-highlight">{contactPlaceholders.hoursWeekday}</strong>
                <span className="placeholder-tag">Placeholder</span>
                <p className="detail-subtext">{contactPlaceholders.hoursWeekend}</p>
              </div>

              <div className="email-fallback-box">
                <div className="email-info-wrap">
                  <Mail size={18} className="email-icon" />
                  <div>
                    <span className="email-label">Prefer Email?</span>
                    <strong className="email-address">{contactPlaceholders.email}</strong>
                  </div>
                </div>
                <a href={mailtoLink} className="btn btn-outline btn-sm">
                  <span>Send Email</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Contact Transparency Notice */}
          <div className="direct-transparency-card card">
            <ShieldCheck size={22} className="transparency-icon" />
            <div>
              <h4>Why Direct Contact Only?</h4>
              <p>
                To provide you with the fastest and most reliable response, <strong>{brandInfo.name}</strong> connects you straight to real staff via Call or WhatsApp. We avoid unmonitored contact forms, ensuring your questions are handled promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
