import React from 'react';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../data/config';
import {
  WhatsAppIcon,
  ArrowRightIcon,
  CarIcon,
  CheckCircleIcon
} from './Icons';
import '../styles/Hero.css';

export default function Hero({ onBookClick, onExploreFleet, onExplorePackages }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleWhatsAppBooking = () => {
    const msg = `*Namaste The Hyderabad Tours & Travels!*
I would like to enquire about vehicle booking:
• City: Hyderabad
• Please share available vehicles and rates.`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const handlePackagesClick = () => {
    if (onExplorePackages) {
      onExplorePackages();
    } else {
      scrollTo('#packages');
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Large, High-Impact Content */}
          <div className="hero-content">
            {/* Large Travels Name & Tagline */}
            <div className="hero-heading-group">
              <h1 className="hero-travels-name">
                <span className="name-white">THE HYDERABAD</span>{' '}
                <span className="name-gold">TRAVELS AND TOURS</span>
              </h1>
              <p className="hero-tagline-text">
                Discover Every Journey With{' '}
                <span className="tagline-highlight">Comfort & Care</span>
              </p>
            </div>

            <p className="hero-description">
              Affordable and comfortable car rentals, Tempo Travellers, Force Urbanias, and luxury buses in Hyderabad. Doorstep pickup with verified highway drivers at clear per-km rates.
            </p>

            {/* Simple Clean Buttons */}
            <div className="hero-actions">
              <button
                onClick={() => scrollTo('#vehicles')}
                className="btn btn-primary"
              >
                <CarIcon size={18} />
                <span>Our Vehicles & Rates</span>
              </button>

              <button
                onClick={handlePackagesClick}
                className="btn btn-outline"
              >
                <span>Tour Packages</span>
                <ArrowRightIcon size={16} />
              </button>

              <button
                onClick={handleWhatsAppBooking}
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>Book on WhatsApp</span>
              </button>
            </div>

            {/* Simple Rate Chips for Easy Understanding */}
            <div className="hero-rates-strip">
              <span className="hero-rate-chip">Sedans: <strong>₹13 - ₹14/km</strong></span>
              <span className="hero-rate-chip">Innova: <strong>₹16 - ₹19/km</strong></span>
              <span className="hero-rate-chip">Tempo: <strong>₹27/km</strong></span>
              <span className="hero-rate-chip">Urbania: <strong>₹34/km</strong></span>
              <span className="hero-rate-note">*Tolls & parking extra</span>
            </div>

            {/* Simple Trust Points */}
            <div className="hero-features-strip">
              <div className="hero-feature-item">
                <span className="hero-feature-icon"><CheckCircleIcon size={16} /></span>
                <span>Verified Highway Drivers</span>
              </div>
              <div className="hero-feature-item">
                <span className="hero-feature-icon"><CheckCircleIcon size={16} /></span>
                <span>Sanitized AC Vehicles</span>
              </div>
              <div className="hero-feature-item">
                <span className="hero-feature-icon"><CheckCircleIcon size={16} /></span>
                <span>Doorstep Pickup Across Hyderabad</span>
              </div>
              <div className="hero-feature-item">
                <span className="hero-feature-icon"><CheckCircleIcon size={16} /></span>
                <span>24/7 Helpline Support</span>
              </div>
            </div>
          </div>

          {/* Right: Official Logo Showcase replacing the crowded form */}
          <div className="hero-logo-showcase">
            <div className="hero-emblem-wrap">
              <img
                src="/logo.png"
                alt="The Hyderabad Travels and Tours Logo"
                className="hero-emblem-image"
              />
            </div>
            <div className="hero-emblem-caption">
              <span className="caption-star">★★★★★</span>
              <span>The Hyderabad Travels & Tours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
