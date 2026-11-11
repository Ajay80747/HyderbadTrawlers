import React, { useState, useEffect } from 'react';
import { TOUR_PACKAGES } from '../data/packages';
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneUrl } from '../data/config';
import {
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
  PhoneIcon,
  ChevronLeftIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CarIcon,
  UsersIcon,
  ArrowRightIcon
} from './Icons';
import '../styles/TourPackagesPage.css';

export default function TourPackagesPage({ onNavigateHome, onSelectPackageForBooking }) {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filterTabs = [
    { id: "all", label: "All Tour Packages", count: TOUR_PACKAGES.length },
    { id: "telangana", label: "Telangana Sacred Shrines", count: TOUR_PACKAGES.filter(p => p.region === 'Telangana' && p.category === 'pilgrimage').length },
    { id: "andhra", label: "Andhra Pradesh Holy Kshetrams", count: TOUR_PACKAGES.filter(p => p.region === 'Andhra Pradesh' && p.category === 'pilgrimage').length },
    { id: "south-yatras", label: "South India & Jyotirlinga Yatras", count: TOUR_PACKAGES.filter(p => ['Karnataka', 'Tamil Nadu', 'Kerala', 'Maharashtra'].includes(p.region)).length },
    { id: "vacation-city", label: "City & Holiday Tours", count: TOUR_PACKAGES.filter(p => p.category === 'sightseeing' || p.category === 'vacation').length }
  ];

  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    if (filter === "all") return true;
    if (filter === "telangana") return pkg.region === "Telangana" && pkg.category === "pilgrimage";
    if (filter === "andhra") return pkg.region === "Andhra Pradesh" && pkg.category === "pilgrimage";
    if (filter === "south-yatras") return ['Karnataka', 'Tamil Nadu', 'Kerala', 'Maharashtra'].includes(pkg.region);
    if (filter === "vacation-city") return pkg.category === "sightseeing" || pkg.category === "vacation";
    return true;
  });

  const handleBookPackage = (pkg) => {
    if (onSelectPackageForBooking) {
      onSelectPackageForBooking(pkg);
    } else {
      const msg = `*Tour Package Booking - The Hyderabad Tours & Travels*
• Tour: ${pkg.title}
• Route / Duration: ${pkg.distance} (${pkg.duration})
• Recommended Fleet: ${pkg.recommendedFleet}

Hi, please share vehicle options, driver details, and all-inclusive pricing for this trip.`;
      window.open(getWhatsAppUrl(msg), '_blank');
    }
  };

  // Company Commitments
  const commitments = [
    {
      title: "Happy Customers",
      desc: "We focus on making every trip safe, comfortable, and pleasant for you and your family."
    },
    {
      title: "Safe & Comfortable Rides",
      desc: "Clean AC vehicles with soft pushback seats, smooth suspension, and strict safety checks."
    },
    {
      title: "Experienced Drivers",
      desc: "Polite, verified highway drivers with deep knowledge of Telangana and South India routes."
    },
    {
      title: "Clean & Sanitized Fleet",
      desc: "Thoroughly washed, clean, and mechanically inspected vehicles before every journey."
    },
    {
      title: "Clear & Honest Pricing",
      desc: "Fixed per-km billing with zero hidden costs. Tolls and parking billed at actual Fastag rates."
    },
    {
      title: "Always On-Time Service",
      desc: "Guaranteed on-time doorstep pickup across Hyderabad with 24/7 phone assistance."
    }
  ];

  // Why Ride With Us Points
  const whyPoints = [
    {
      title: "Clean AC Vehicles",
      desc: "Comfortable pushback seats, effective AC, clean interiors, and spacious luggage room for a smooth ride.",
      icon: <CarIcon size={24} />
    },
    {
      title: "Experienced Drivers",
      desc: "Friendly, verified drivers who know all South India routes, temple timings, and safe highway driving.",
      icon: <UsersIcon size={24} />
    },
    {
      title: "Safe Highway Travel",
      desc: "Regular mechanical checks, speed limits, and well-maintained vehicles for complete family safety.",
      icon: <ShieldCheckIcon size={24} />
    },
    {
      title: "Clear & Honest Pricing",
      desc: "Simple per-km billing with zero hidden costs. Tolls and parking are billed transparently at actuals.",
      icon: <CheckCircleIcon size={24} />
    },
    {
      title: "On-Time Doorstep Pickup",
      desc: "We arrive on time at your home, hotel, or airport so your journey always starts smoothly without delays.",
      icon: <ClockIcon size={24} />
    },
    {
      title: "24/7 Phone & WhatsApp Help",
      desc: "Our team is always reachable on phone and WhatsApp for immediate quotes, bookings, and travel support.",
      icon: <PhoneIcon size={24} />
    }
  ];

  return (
    <div className="packages-page">
      {/* 1. Page Header & Hero Banner */}
      <section className="packages-hero-banner">
        <div className="container">
          {/* Back to Home Button placed on the RIGHT */}
          <div className="packages-banner-top-bar">
            <button
              type="button"
              className="packages-back-btn packages-back-btn-right"
              onClick={onNavigateHome}
              aria-label="Back to Home"
            >
              <span>Back to Home</span>
              <ArrowRightIcon size={16} />
            </button>
          </div>

          {/* Big Blinking & Shining Title */}
          <div className="packages-hero-shining-box">
            <div className="packages-brand-shining-eyebrow">
              <SparklesIcon size={18} />
              <span>THE HYDERABAD TOURS & TRAVELS</span>
              <SparklesIcon size={18} />
            </div>
            <h1 className="packages-hero-title-shining">
              TOUR PACKAGES
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Sticky Filter Tabs */}
      <nav className="packages-filter-bar" aria-label="Tour Categories">
        <div className="container">
          <div className="packages-filter-scroller">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                className={`packages-filter-tab ${filter === tab.id ? 'active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="packages-count-badge">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. Tour Packages Showcase Grid */}
      <main className="page-sub-section section-white">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-eyebrow gold">Doorstep Outstation Journeys</span>
            <h2 className="section-title font-serif">Explore All Tour Packages</h2>
            <p className="section-description">
              Select your favorite temple pilgrimage or scenic tour. Get instant vehicle quotes and confirmation on WhatsApp.
            </p>
          </div>

          <div className="packages-grid">
            {filteredPackages.map((pkg) => {
              const waMsg = `*Tour Package Booking - The Hyderabad Tours & Travels*\n• Tour: ${pkg.title}\n• Route: ${pkg.distance} (${pkg.duration})\n• Recommended Fleet: ${pkg.recommendedFleet}\n\nHi, please check vehicle availability and confirm pricing for this tour.`;
              return (
                <div key={pkg.id} className="package-card">
                  <div className="package-image-wrap">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="package-image"
                      loading="lazy"
                    />
                    <span className="package-badge">{pkg.badge}</span>
                    <span className="package-duration-pill">
                      <ClockIcon size={12} />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>

                  <div className="package-card-body">
                    <h3 className="package-title">{pkg.title}</h3>

                    <div className="package-meta-row">
                      <span className="package-meta-item">
                        <MapPinIcon size={14} />
                        {pkg.distance}
                      </span>
                    </div>

                    <div className="package-tags-strip">
                      {pkg.highlights.map((item, idx) => (
                        <span key={idx} className="package-tag-pill">
                          ✓ {item}
                        </span>
                      ))}
                    </div>

                    <div className="package-fleet-note">
                      <strong>Best Fleet:</strong> {pkg.recommendedFleet}
                    </div>

                    <div className="package-card-footer">
                      <a
                        href={getWhatsAppUrl(waMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm btn-block"
                      >
                        <WhatsAppIcon size={16} />
                        <span>Book on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* 4. About Our Company Section */}
      <section id="about" className="page-sub-section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">About Our Company</span>
            <h2 className="section-title font-serif">Your Journey, Our Responsibility</h2>
            <p className="section-description">
              Located in Hyderabad, {BUSINESS_CONFIG.name} provides clean vehicles and experienced drivers for family vacations, temple pilgrimages, weddings, and corporate travel.
            </p>
          </div>

          {/* Fleet Intro Callout Banner */}
          <div className="about-fleet-intro-banner">
            <h3>Complete Fleet: Sedans, Innova, Tempo, Urbania & Buses</h3>
            <p>
              Whether you need a <strong>Ciaz or Honda City</strong> for city work, an <strong>Innova Crysta</strong> for a family trip, a <strong>Force Urbania or Tempo Traveller</strong> for temple yatras, or a <strong>Luxury Bus</strong> for weddings, we make sure you travel comfortably and safely.
            </p>
          </div>

          {/* Commitments 6-Box Grid */}
          <div className="about-company-grid">
            {commitments.map((item, idx) => (
              <div key={idx} className="about-commitment-card">
                <div className="about-card-icon">✓</div>
                <div>
                  <h3 className="about-card-title">{item.title}</h3>
                  <p className="about-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Actions Strip */}
          <div className="about-actions-strip">
            <a
              href="https://wa.me/919381489147?text=Hi%2C%20I%20want%20to%20know%20more%20about%20vehicle%20rentals%20with%20The%20Hyderabad%20Tours%20%26%20Travels."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <a href={getPhoneUrl()} className="btn btn-call">
              <PhoneIcon size={18} />
              <span>Call: +91 93814 89147</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Why Ride With Us Section */}
      <section id="why-us" className="page-sub-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow gold">Why Ride With Us</span>
            <h2 className="section-title font-serif">Why Choose The Hyderabad Tours & Travels</h2>
            <p className="section-description">
              Simple, honest, and reliable travel services with clean vehicles and polite drivers across Hyderabad and South India.
            </p>
          </div>

          <div className="why-grid">
            {whyPoints.map((pt, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-box">{pt.icon}</div>
                <h3 className="why-title">{pt.title}</h3>
                <p className="why-desc">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div className="packages-cta-box">
            <div>
              <h3 className="packages-cta-title">Need a Custom Tour Route or Multi-Day Yatra?</h3>
              <p className="packages-cta-desc">
                We organize personalized round-trip itineraries to Srisailam, Tirupati, Shirdi, Vijayawada, Arunachalam, Hampi, and across South India. Speak with our coordinator anytime.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919381489147?text=Hi%2C%20I%20want%20to%20book%20a%20custom%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onNavigateHome}
                style={{ background: '#FAF8F1', color: '#073C3B', borderColor: '#FAF8F1' }}
              >
                ← Return to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

