import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/packages';
import { getWhatsAppUrl } from '../data/config';
import { MapPinIcon, ClockIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

export default function TourPackages({ onSelectPackageForBooking }) {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: `All Tour Packages (${TOUR_PACKAGES.length})` },
    { id: "telangana", label: "Telangana Sacred Shrines" },
    { id: "andhra", label: "Andhra Pradesh Holy Kshetrams" },
    { id: "south-yatras", label: "South India & Jyotirlinga Yatras" },
    { id: "vacation-city", label: "City & Holiday Tours" }
  ];

  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    if (filter === "all") return true;
    if (filter === "telangana") return pkg.region === "Telangana" && pkg.category === "pilgrimage";
    if (filter === "andhra") return pkg.region === "Andhra Pradesh" && pkg.category === "pilgrimage";
    if (filter === "south-yatras") return (pkg.region === "Karnataka" || pkg.region === "Tamil Nadu" || pkg.region === "Kerala" || pkg.region === "Maharashtra");
    if (filter === "vacation-city") return pkg.category === "sightseeing" || pkg.category === "vacation";
    return true;
  });

  const handleEnquirePackage = (pkg) => {
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

  return (
    <section id="packages" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow gold">Curated Journeys</span>
          <h2 className="section-title font-serif">Popular Tour Packages from Hyderabad</h2>
          <p className="section-description">
            Complete doorstep pickup & drop packages with experienced highway chauffeurs and clean, sanitized vehicles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="category-filter-tabs" style={{ marginBottom: '30px' }}>
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              className={`category-tab-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Clean Tour Packages Grid */}
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-image-wrap">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="package-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80";
                  }}
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

                {/* Clean Feature Tags */}
                <div className="package-tags-strip">
                  {pkg.highlights.map((item, idx) => (
                    <span key={idx} className="package-tag-pill">
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Recommended Fleet */}
                <div className="package-recommended-vehicle">
                  <strong>Recommended Fleet:</strong> {pkg.recommendedFleet}
                </div>

                {/* 2 Clean Action Buttons */}
                <div className="package-card-actions">
                  <a
                    href={getWhatsAppUrl(`Hi The Hyderabad Tours & Travels, I want to book ${pkg.title}. Please provide itinerary and vehicle rates.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    onClick={() => handleEnquirePackage(pkg)}
                    className="btn btn-outline-teal btn-sm"
                  >
                    <span>Enquire Trip</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Packages CTA Banner */}
        <div className="packages-cta-box">
          <div className="packages-cta-text">
            <h3>Planning a Custom Destination or Multi-City Yatra?</h3>
            <p>
              We design personalized outstation itineraries to Tirupati, Shirdi, Mantralayam, Hampi, Coorg, Ooty, or temple circuits across South India with door-to-door vehicle availability.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-primary"
          >
            <span>Get Custom Itinerary & Quote</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
