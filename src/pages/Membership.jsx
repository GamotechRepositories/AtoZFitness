import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Mail, ArrowRight, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { membershipPlaceholderNotice, brandInfo } from '../data/gymData';
import './Membership.css';

export default function Membership() {
  return (
    <div className="membership-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">
            <Clock size={14} />
            Membership Status
          </span>
          <h1>Membership Plans & Pricing</h1>
          <p className="page-header-lead">
            Official membership packages, durations, inclusions, and transparent rates are currently being finalized by A to Z Fitness management.
          </p>
        </div>
      </section>

      {/* Main Notice Section */}
      <section className="section-padding">
        <div className="container">
          <div className="membership-main-card card">
            <div className="status-badge-wrap">
              <span className="badge badge-placeholder">
                <Clock size={15} />
                {membershipPlaceholderNotice.statusBadge}
              </span>
            </div>

            <h2 className="main-notice-title">{membershipPlaceholderNotice.headline}</h2>
            <p className="main-notice-sub">{membershipPlaceholderNotice.subheading}</p>

            <p className="main-notice-body">
              To guarantee complete transparency and accurate customer information, <strong>{brandInfo.name}</strong> will publish membership tiers, access hours, guest policies, and pricing only after official verification by the ownership team.
            </p>

            <div className="membership-points-box">
              <h4>What will be detailed once confirmed:</h4>
              <ul className="points-list">
                <li>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Verified membership tier names (e.g., Monthly, Annual, Off-Peak).</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Exact pricing and billing terms without hidden fees or forced contracts.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Included facility access, locker privileges, and guest pass policies.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Official terms, cancellation guidelines, and suspension rules.</span>
                </li>
              </ul>
            </div>

            {/* Strict Notice regarding Payments */}
            <div className="no-fake-payments-notice">
              <AlertCircle size={20} className="notice-icon" />
              <div>
                <strong>Payment & Registration Policy</strong>
                <p>
                  In accordance with strict client data standards, this website does not process credit cards or simulate fake checkouts. Membership enrollment will be conducted through official channels once active.
                </p>
              </div>
            </div>

            {/* Direct Enquiry CTA */}
            <div className="membership-cta-wrap">
              <Link to="/contact?subject=Membership%20Enquiry" className="btn btn-primary btn-lg">
                <Mail size={18} />
                <span>Submit Membership Enquiry</span>
              </Link>
              <Link to="/programs" className="btn btn-outline btn-lg">
                <span>View Proposed Programs</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Planned Tier Structure Preview for Developer/Client */}
          <div className="tier-preview-framework card">
            <div className="framework-header">
              <FileText size={20} color="var(--accent-primary)" />
              <h4>Ready For Tier Integration</h4>
            </div>
            <p>
              The frontend is structured to immediately support full pricing tables and tier comparison matrices as soon as the client supplies the official package sheet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
