import React from 'react';
import BookingForm from './BookingForm';
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from '../data/config';
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  MailIcon,
  ClockIcon
} from './Icons';

export default function Contact({ initialVehicle, initialPackage, onResetSelection }) {
  return (
    <section id="contact" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title font-serif">Contact & Easy Booking</h2>
          <p className="section-description">
            Reach us on WhatsApp or phone for immediate vehicle bookings, custom tour packages, and transparent pricing in Hyderabad.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Interactive Booking Form */}
          <BookingForm
            initialVehicle={initialVehicle}
            initialPackage={initialPackage}
            onResetSelection={onResetSelection}
          />

          {/* Right: Office & Contact Information */}
          <div className="contact-info-col">
            <div className="contact-card-box">
              <h3 className="contact-box-title">Office & Booking Hub</h3>

              <div className="contact-channels-grid">
                {/* Phone Call Channel */}
                <div className="contact-channel-card">
                  <div className="channel-icon-wrap phone-icon-wrap">
                    <PhoneIcon size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">24/7 Call Helpline</span>
                    <a href={getPhoneUrl()} className="channel-val phone-val">
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                  <a href={getPhoneUrl()} className="channel-action-btn btn-call-sm" title="Call Now">
                    Call Now
                  </a>
                </div>

                {/* WhatsApp Channel */}
                <div className="contact-channel-card">
                  <div className="channel-icon-wrap whatsapp-icon-wrap">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">WhatsApp Support</span>
                    <a
                      href={getWhatsAppUrl("Hello The Hyderabad Tours & Travels, I have a booking enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-val whatsapp-val"
                    >
                      {BUSINESS_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                  <a
                    href={getWhatsAppUrl("Hello The Hyderabad Tours & Travels, I have a booking enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-action-btn btn-wa-sm"
                    title="Chat on WhatsApp"
                  >
                    Chat
                  </a>
                </div>

                {/* Email Channel */}
                <div className="contact-channel-card">
                  <div className="channel-icon-wrap email-icon-wrap">
                    <MailIcon size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Official Email</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="channel-val">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="contact-channel-card">
                  <div className="channel-icon-wrap map-icon-wrap">
                    <MapPinIcon size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Hyderabad Office Address</span>
                    <p className="channel-text">
                      {BUSINESS_CONFIG.address}
                    </p>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-action-btn btn-call-sm"
                    title="Open Google Maps"
                  >
                    Map ↗
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="contact-channel-card">
                  <div className="channel-icon-wrap clock-icon-wrap">
                    <ClockIcon size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Operating Hours</span>
                    <p className="channel-text">
                      {BUSINESS_CONFIG.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location */}
            <div className="contact-map-card">
              <div className="map-card-header">
                <span>📍 Sharada Nagar, Ramanthapur, Hyderabad</span>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-open-link"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <iframe
                title="The Hyderabad Tours & Travels Office Location"
                src="https://maps.google.com/maps?q=17.3933195,78.5364669&hl=en&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
