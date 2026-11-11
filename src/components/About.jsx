import React from 'react';
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from '../data/config';
import { CheckCircleIcon, SparklesIcon, PhoneIcon, WhatsAppIcon } from './Icons';

export default function About() {
  const commitments = [
    {
      title: "Happy Customers",
      description: "We focus on making every trip safe, comfortable, and pleasant for you and your family."
    },
    {
      title: "Safe & Comfortable Rides",
      description: "Clean AC vehicles with soft pushback seats, smooth suspension, and strict safety checks."
    },
    {
      title: "Experienced Drivers",
      description: "Polite, verified highway drivers with deep knowledge of Telangana and South India routes."
    },
    {
      title: "Clean & Sanitized Fleet",
      description: "Thoroughly washed, clean, and mechanically inspected vehicles before every journey."
    },
    {
      title: "Clear & Honest Pricing",
      description: "Fixed per-km billing with zero hidden costs. Tolls and parking billed at actual Fastag rates."
    },
    {
      title: "Always On-Time Service",
      description: "Guaranteed on-time doorstep pickup across Hyderabad with 24/7 phone assistance."
    }
  ];

  return (
    <section id="about" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About Our Company</span>
          <h2 className="section-title font-serif">Your Journey, Our Responsibility</h2>
          <p className="section-description">
            Located in Hyderabad, {BUSINESS_CONFIG.name} provides clean vehicles and experienced drivers for family vacations, temple pilgrimages, weddings, and corporate travel.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Showcase */}
          <div className="about-visuals">
            <div className="about-image-card main-img-card">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Travel Fleet The Hyderabad Tours & Travels"
                className="about-image"
              />
              <div className="about-image-overlay-badge">
                <SparklesIcon size={20} />
                <div>
                  <strong>Complete Fleet</strong>
                  <span>Sedans, Innova, Tempo, Urbania & Buses</span>
                </div>
              </div>
            </div>

            <div className="about-sub-images">
              <div className="about-sub-card">
                <img
                  src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=500&q=80"
                  alt="Force Urbania in Hyderabad"
                  className="about-sub-image"
                />
              </div>
              <div className="about-sub-card">
                <img
                  src="/destinations/charminar.jpg"
                  alt="Hyderabad Heritage Tours"
                  className="about-sub-image"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Commitments */}
          <div className="about-content">
            <div className="about-intro-box">
              <p>
                Whether you need a <strong>Ciaz or Honda City</strong> for city work, an <strong>Innova Crysta</strong> for a family trip, a <strong>Force Urbania or Tempo Traveller</strong> for temple yatras, or a <strong>Luxury Bus</strong> for weddings, we make sure you travel comfortably and safely.
              </p>
            </div>

            <div className="commitments-list">
              {commitments.map((item, idx) => (
                <div key={idx} className="commitment-item">
                  <div className="commitment-icon-wrap">
                    <CheckCircleIcon size={20} />
                  </div>
                  <div className="commitment-text">
                    <h3 className="commitment-title">{item.title}</h3>
                    <p className="commitment-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-bar">
              <a
                href={getWhatsAppUrl("Hi, I want to know more about vehicle rentals with The Hyderabad Tours & Travels.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <a href={getPhoneUrl()} className="btn btn-outline-teal">
                <PhoneIcon size={18} />
                <span>Call: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
