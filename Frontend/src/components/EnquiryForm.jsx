import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Info,
  RotateCcw
} from 'lucide-react';
import { brandInfo } from '../data/gymData';
import './EnquiryForm.css';

export default function EnquiryForm() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const isKeyConfigured = Boolean(
    accessKey && 
    accessKey.trim() !== '' && 
    accessKey !== 'your_web3forms_access_key_here'
  );

  const initialFormState = {
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'Membership',
    preferredMethod: 'Phone',
    message: '',
    consent: false,
    botcheck: '' // Honeypot field for spam prevention
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('');

  // Validate form fields
  const validate = (dataToValidate = formData) => {
    const errs = {};

    // Full Name
    if (!dataToValidate.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    } else if (dataToValidate.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    // Phone Number
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    if (!dataToValidate.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(dataToValidate.phone.trim())) {
      errs.phone = 'Please enter a valid phone number with area/country code.';
    }

    // Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!dataToValidate.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(dataToValidate.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // Message
    if (!dataToValidate.message.trim()) {
      errs.message = 'Please provide details about your enquiry.';
    } else if (dataToValidate.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    // Consent Checkbox
    if (!dataToValidate.consent) {
      errs.consent = 'You must agree to be contacted regarding this enquiry.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val
    }));

    // Realtime error clearing if field was already touched
    if (touched[name]) {
      const fieldErrors = validate({
        ...formData,
        [name]: val
      });
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name] || ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      enquiryType: true,
      preferredMethod: true,
      message: true,
      consent: true
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus on the first invalid field
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(`enquiry-${firstErrorField}`);
      if (element) {
        element.focus();
      }
      return;
    }

    // Check configuration
    if (!isKeyConfigured) {
      setSubmissionStatus('error');
      setServerMessage(
        'Email delivery service is in setup mode. Please configure VITE_WEB3FORMS_ACCESS_KEY in your .env file, or reach out instantly via Direct Call or WhatsApp above.'
      );
      return;
    }

    // Submit via Web3Forms API
    setSubmissionStatus('submitting');
    setServerMessage('');

    try {
      const payload = {
        access_key: accessKey,
        subject: `[A to Z Fitness] New ${formData.enquiryType} Enquiry - ${formData.fullName}`,
        from_name: 'A to Z Fitness Website',
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        enquiry_type: formData.enquiryType,
        preferred_contact_method: formData.preferredMethod,
        message: formData.message.trim(),
        botcheck: formData.botcheck || '' // Honeypot spam prevention
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionStatus('success');
        setServerMessage(
          `Thank you, ${formData.fullName.trim()}! Your enquiry has been received and routed to our official gym inbox (${brandInfo.contactPlaceholders.email}). Our team will get back to you shortly via ${formData.preferredMethod}.`
        );
        // Clear form only after verified success
        setFormData(initialFormState);
        setErrors({});
        setTouched({});
      } else {
        // Submission failed - preserve entered form data
        setSubmissionStatus('error');
        setServerMessage(
          data.message || 
          'We were unable to deliver your enquiry at this moment. Your entered details have been preserved. Please try submitting again or reach us directly via WhatsApp or Call.'
        );
      }
    } catch (err) {
      // Network or fetch failure - preserve entered form data
      setSubmissionStatus('error');
      setServerMessage(
        'A network connection error occurred while sending your message. Your form data has been preserved. Please check your connection and try again.'
      );
    }
  };

  const handleResetForNew = () => {
    setSubmissionStatus('idle');
    setServerMessage('');
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
  };

  return (
    <div className="enquiry-form-card card" id="enquiry-section">
      <div className="enquiry-form-header">
        <span className="section-tag">
          <MessageSquare size={14} />
          Official Gym Enquiry
        </span>
        <h3 className="enquiry-form-title">Send Us a Direct Message</h3>
        <p className="enquiry-form-subtitle">
          Have a question regarding membership tiers, personal training sessions, or gym facilities? Fill out this enquiry form and our management team at <strong>{brandInfo.name}</strong> will review and respond promptly.
        </p>
      </div>

      {/* Configuration Advisory Banner (Shown when access key is not yet set) */}
      {!isKeyConfigured && (
        <div className="enquiry-notice-banner" role="alert">
          <div className="notice-icon-box">
            <Info size={20} />
          </div>
          <div className="notice-content">
            <strong>Web3Forms Email Service Setup Required</strong>
            <p>
              To enable automatic email delivery to <code>{brandInfo.contactPlaceholders.email}</code>, set your free Web3Forms access key in <code>.env</code> as <code>VITE_WEB3FORMS_ACCESS_KEY</code>. You can also reach our staff immediately via <strong>Call Direct</strong> or <strong>WhatsApp</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Submission Success State */}
      {submissionStatus === 'success' ? (
        <div className="enquiry-success-state" role="status" aria-live="polite">
          <div className="success-icon-box">
            <CheckCircle2 size={42} />
          </div>
          <h4 className="success-title">Enquiry Sent Successfully!</h4>
          <p className="success-desc">{serverMessage}</p>
          
          <div className="success-meta-box">
            <div className="meta-row">
              <ShieldCheck size={16} className="meta-row-icon" />
              <span>Delivered to official gym inbox: <strong>{brandInfo.contactPlaceholders.email}</strong></span>
            </div>
            <div className="meta-row">
              <Phone size={16} className="meta-row-icon" />
              <span>Urgent enquiry? Call us directly at <strong>{brandInfo.contactPlaceholders.phone}</strong></span>
            </div>
          </div>

          <button 
            type="button" 
            className="btn btn-outline btn-md reset-btn"
            onClick={handleResetForNew}
          >
            <RotateCcw size={16} />
            <span>Send Another Enquiry</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="enquiry-actual-form">
          {/* Honeypot field for bot/spam prevention (invisible to humans) */}
          <input
            type="checkbox"
            name="botcheck"
            id="enquiry-botcheck"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            checked={formData.botcheck}
            onChange={(e) => setFormData(prev => ({ ...prev, botcheck: e.target.checked }))}
          />

          {/* Error Banner when server/network fails */}
          {submissionStatus === 'error' && (
            <div className="form-error-banner" role="alert" aria-live="assertive">
              <AlertCircle size={20} className="error-banner-icon" />
              <div>
                <strong>Submission Notice</strong>
                <p>{serverMessage}</p>
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Phone */}
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="enquiry-fullName" className="form-label">
                Full Name <span className="label-required">*</span>
              </label>
              <div className="input-wrap">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="enquiry-fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Rahul Sharma"
                  className={`form-input ${touched.fullName && errors.fullName ? 'input-error' : ''}`}
                  aria-required="true"
                  aria-invalid={Boolean(touched.fullName && errors.fullName)}
                  aria-describedby={touched.fullName && errors.fullName ? 'fullName-error' : undefined}
                  disabled={submissionStatus === 'submitting'}
                />
              </div>
              {touched.fullName && errors.fullName && (
                <span id="fullName-error" className="field-error-text" role="alert">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-phone" className="form-label">
                Phone Number <span className="label-required">*</span>
              </label>
              <div className="input-wrap">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  id="enquiry-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. +91 98765 43210"
                  className={`form-input ${touched.phone && errors.phone ? 'input-error' : ''}`}
                  aria-required="true"
                  aria-invalid={Boolean(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                  disabled={submissionStatus === 'submitting'}
                />
              </div>
              {touched.phone && errors.phone && (
                <span id="phone-error" className="field-error-text" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Email & Enquiry Type */}
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="enquiry-email" className="form-label">
                Email Address <span className="label-required">*</span>
              </label>
              <div className="input-wrap">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  id="enquiry-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@example.com"
                  className={`form-input ${touched.email && errors.email ? 'input-error' : ''}`}
                  aria-required="true"
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  disabled={submissionStatus === 'submitting'}
                />
              </div>
              {touched.email && errors.email && (
                <span id="email-error" className="field-error-text" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-enquiryType" className="form-label">
                Enquiry Type <span className="label-required">*</span>
              </label>
              <div className="select-wrap">
                <select
                  id="enquiry-enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="form-select"
                  disabled={submissionStatus === 'submitting'}
                >
                  <option value="Membership">Membership (Plans & Pricing)</option>
                  <option value="Personal Training">Personal Training (1-on-1 Coaching)</option>
                  <option value="Gym Programs">Gym Programs (6 Structured Disciplines)</option>
                  <option value="Facilities">Facilities (Equipment & Zone Tour)</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 3: Preferred Contact Method */}
          <div className="form-group">
            <span className="form-label">Preferred Contact Method</span>
            <div className="contact-method-options" role="radiogroup" aria-label="Preferred contact method">
              <label className={`method-pill ${formData.preferredMethod === 'Phone' ? 'method-pill-active' : ''}`}>
                <input
                  type="radio"
                  name="preferredMethod"
                  value="Phone"
                  checked={formData.preferredMethod === 'Phone'}
                  onChange={handleChange}
                  disabled={submissionStatus === 'submitting'}
                  className="sr-only"
                />
                <Phone size={16} />
                <span>Phone Call</span>
              </label>

              <label className={`method-pill ${formData.preferredMethod === 'Email' ? 'method-pill-active' : ''}`}>
                <input
                  type="radio"
                  name="preferredMethod"
                  value="Email"
                  checked={formData.preferredMethod === 'Email'}
                  onChange={handleChange}
                  disabled={submissionStatus === 'submitting'}
                  className="sr-only"
                />
                <Mail size={16} />
                <span>Email Response</span>
              </label>
            </div>
          </div>

          {/* Row 4: Message Textarea */}
          <div className="form-group">
            <label htmlFor="enquiry-message" className="form-label">
              Your Message <span className="label-required">*</span>
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell us about your fitness objectives, questions about programs or facilities, or preferred timing..."
              className={`form-textarea ${touched.message && errors.message ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={Boolean(touched.message && errors.message)}
              aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
              disabled={submissionStatus === 'submitting'}
            />
            {touched.message && errors.message && (
              <span id="message-error" className="field-error-text" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Row 5: Consent Checkbox */}
          <div className="form-group consent-group">
            <label className="checkbox-label" htmlFor="enquiry-consent">
              <input
                type="checkbox"
                id="enquiry-consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-checkbox"
                aria-required="true"
                aria-invalid={Boolean(touched.consent && errors.consent)}
                aria-describedby={touched.consent && errors.consent ? 'consent-error' : undefined}
                disabled={submissionStatus === 'submitting'}
              />
              <span className="checkbox-text">
                I agree to be contacted by <strong>{brandInfo.name}</strong> regarding my enquiry via my preferred contact method.
              </span>
            </label>
            {touched.consent && errors.consent && (
              <span id="consent-error" className="field-error-text" role="alert" style={{ display: 'block', marginTop: '0.35rem' }}>
                {errors.consent}
              </span>
            )}
          </div>

          {/* Row 6: Submit Button & Security Note */}
          <div className="form-submit-row">
            <button
              type="submit"
              className="btn btn-primary btn-lg submit-btn"
              disabled={submissionStatus === 'submitting'}
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <Loader2 size={18} className="spinner-icon animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>

            <div className="form-security-tag">
              <ShieldCheck size={16} />
              <span>Direct delivery to <strong>{brandInfo.contactPlaceholders.email}</strong> • No spam guaranteed</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
