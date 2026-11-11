import React, { useState, useEffect, useCallback } from 'react';
import { FLEET_VEHICLES, ALL_FLEET_IMAGES } from '../data/fleetGallery';
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneUrl } from '../data/config';
import {
  PhoneIcon,
  WhatsAppIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  CarIcon,
  ArrowRightIcon
} from './Icons';
import '../styles/FleetGallery.css';

export default function FleetGalleryPage({ onNavigateHome, initialVehicleId = 'all' }) {
  const [selectedVehicleId, setSelectedVehicleId] = useState(initialVehicleId);
  const [activeImageIndex, setActiveImageIndex] = useState(null); // index in currentViewingImages
  const [currentViewingImages, setCurrentViewingImages] = useState(ALL_FLEET_IMAGES);

  // Sync selectedVehicleId when initialVehicleId prop changes
  useEffect(() => {
    if (initialVehicleId) {
      setSelectedVehicleId(initialVehicleId);
    }
  }, [initialVehicleId]);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter vehicles to show
  const displayedVehicles = selectedVehicleId === 'all'
    ? FLEET_VEHICLES
    : FLEET_VEHICLES.filter(v => v.id === selectedVehicleId);

  // When opening lightbox from a specific photo in a list
  const openLightbox = (imageList, index) => {
    setCurrentViewingImages(imageList);
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImageIndex === null || currentViewingImages.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % currentViewingImages.length);
  }, [activeImageIndex, currentViewingImages.length]);

  const showPrev = useCallback(() => {
    if (activeImageIndex === null || currentViewingImages.length === 0) return;
    setActiveImageIndex((prev) => (prev - 1 + currentViewingImages.length) % currentViewingImages.length);
  }, [activeImageIndex, currentViewingImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, showNext, showPrev]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImageIndex]);

  const activeImg = activeImageIndex !== null ? currentViewingImages[activeImageIndex] : null;

  return (
    <div className="fleet-page">
      {/* 1. Hero Banner */}
      <section className="fleet-hero-banner">
        <div className="container">
          {/* Back to Home Button placed on the RIGHT */}
          <div className="fleet-banner-top-bar">
            <button
              type="button"
              className="fleet-back-btn fleet-back-btn-right"
              onClick={onNavigateHome}
              aria-label="Back to Home"
            >
              <span>Back to Home</span>
              <ArrowRightIcon size={16} />
            </button>
          </div>

          {/* Big Blinking & Shining Title */}
          <div className="fleet-hero-shining-box">
            <div className="fleet-brand-shining-eyebrow">
              <SparklesIcon size={18} />
              <span>THE HYDERABAD TOURS & TRAVELS</span>
              <SparklesIcon size={18} />
            </div>
            <h1 className="fleet-hero-title-shining">
              OUR FLEET GALLERY
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Sticky Vehicle Filter Tabs */}
      <nav className="fleet-filter-bar" aria-label="Vehicle Categories">
        <div className="container">
          <div className="fleet-filter-scroller">
            <button
              className={`fleet-filter-btn ${selectedVehicleId === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedVehicleId('all')}
            >
              <CarIcon size={16} />
              <span>All Vehicles</span>
              <span className="fleet-filter-count">{ALL_FLEET_IMAGES.length}</span>
            </button>

            {FLEET_VEHICLES.map((vehicle) => (
              <button
                key={vehicle.id}
                className={`fleet-filter-btn ${selectedVehicleId === vehicle.id ? 'active' : ''}`}
                onClick={() => setSelectedVehicleId(vehicle.id)}
              >
                <span>{vehicle.shortName}</span>
                <span className="fleet-filter-count">{vehicle.images.length}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. Main Fleet Showcase (Car-Wise) */}
      <main className="fleet-content-area">
        <div className="container">
          {displayedVehicles.map((vehicle) => {
            const waBookingMsg = `Hello The Hyderabad Tours & Travels, I want to book the ${vehicle.name} (${vehicle.capacity}) at ${vehicle.rate}. Please check availability.`;
            return (
              <article key={vehicle.id} id={vehicle.id} className="vehicle-showcase-section">
                {/* Vehicle Header & Meta */}
                <div className="vehicle-header-block">
                  <div className="vehicle-title-group">
                    <div className="vehicle-badge-row">
                      <span className="vehicle-type-tag">{vehicle.categoryLabel}</span>
                      <span className="vehicle-badge-gold">{vehicle.badge}</span>
                      {vehicle.registrationNumber && (
                        <span className="vehicle-reg-plate">
                          PLATE: {vehicle.registrationNumber}
                        </span>
                      )}
                    </div>

                    <h2 className="vehicle-showcase-name">{vehicle.name}</h2>
                    <p className="vehicle-showcase-tagline">{vehicle.tagline}</p>

                    <div className="vehicle-specs-chips">
                      <span className="spec-chip">👥 {vehicle.specs.seats}</span>
                      <span className="spec-chip">❄️ {vehicle.specs.ac}</span>
                      <span className="spec-chip">🧳 {vehicle.specs.luggage}</span>
                    </div>
                  </div>

                  {/* Actions & Pricing */}
                  <div className="vehicle-action-group">
                    <div className="vehicle-rate-box">
                      <div className="vehicle-rate-main">{vehicle.rate}</div>
                      <div className="vehicle-rate-sub">{vehicle.hourlyRate}</div>
                    </div>

                    <div className="vehicle-btn-row">
                      <a
                        href={getWhatsAppUrl(waBookingMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-book-wa"
                      >
                        <WhatsAppIcon size={18} />
                        <span>Book on WhatsApp</span>
                      </a>
                      <a href={getPhoneUrl()} className="btn-call-outline">
                        <PhoneIcon size={16} />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Photo Grid for this Car */}
                <div className="vehicle-photo-grid">
                  {vehicle.images.map((img, imgIndex) => (
                    <div
                      key={img.id}
                      className="vehicle-photo-card"
                      onClick={() => openLightbox(vehicle.images, imgIndex)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${img.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') openLightbox(vehicle.images, imgIndex);
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="vehicle-photo-thumb"
                        loading="lazy"
                      />
                      <span className="vehicle-photo-tag">{img.tag}</span>
                      <div className="vehicle-photo-overlay">
                        <span className="vehicle-photo-caption">{img.title}</span>
                        <span className="vehicle-photo-zoom-icon" title="Click to view full photo">
                          🔍
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}

          {/* Bottom CTA Strip */}
          <div className="fleet-cta-strip">
            <div>
              <h3 className="fleet-cta-title">Need a Special Package or Multi-Car Booking?</h3>
              <p className="fleet-cta-desc">
                We organize complete tour itineraries for Srisailam, Tirupati, Shirdi, Vijayawada, Araku, Goa, and corporate events across Hyderabad. Talk to our tour planner directly.
              </p>
            </div>
            <div className="fleet-cta-buttons">
              <a
                href={getWhatsAppUrl("Hello The Hyderabad Tours & Travels, I need a custom quote for our travel.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book-wa"
              >
                <WhatsAppIcon size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                type="button"
                className="btn-call-outline"
                onClick={onNavigateHome}
                style={{ background: '#FAF8F1', color: '#073C3B' }}
              >
                ← Return to Main Page
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Fullscreen Interactive Lightbox Modal */}
      {activeImg && (
        <div className="fleet-lightbox-backdrop" onClick={closeLightbox}>
          {/* Top Bar */}
          <div className="lightbox-topbar" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-counter-badge">
              Photo {activeImageIndex + 1} of {currentViewingImages.length}
            </span>
            <button
              type="button"
              className="lightbox-close-btn-fleet"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <XIcon size={24} />
            </button>
          </div>

          {/* Center Image with Prev / Next Buttons */}
          <div className="lightbox-center-viewer" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={showPrev}
              aria-label="Previous Photo"
            >
              <ChevronLeftIcon size={28} />
            </button>

            <img
              src={activeImg.src}
              alt={activeImg.title}
              className="lightbox-main-img"
            />

            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={showNext}
              aria-label="Next Photo"
            >
              <ChevronRightIcon size={28} />
            </button>
          </div>

          {/* Bottom Information & Booking Bar */}
          <div className="lightbox-bottombar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-info-group">
              <div className="lightbox-img-title">{activeImg.title}</div>
              <div className="lightbox-img-meta">
                {activeImg.vehicleName || 'The Hyderabad Tours & Travels Fleet'} • Authentic Photograph
              </div>
            </div>

            <div className="lightbox-actions">
              <a
                href={getWhatsAppUrl(`Hello The Hyderabad Tours & Travels, I saw this photo (${activeImg.title}) on your gallery. I would like to book this vehicle.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book-wa"
              >
                <WhatsAppIcon size={18} />
                <span>Book This Vehicle</span>
              </a>
              <a href={getPhoneUrl()} className="btn-call-outline lightbox-call-btn">
                <PhoneIcon size={16} />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

