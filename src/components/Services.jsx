import React from 'react';
import { SERVICES } from '../data/services';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './Icons';

export default function Services({ onBookService }) {
  const handleServiceClick = (service) => {
    if (onBookService) {
      onBookService(service);
    } else {
      const msg = `*Service Booking - The Hyderabad Tours & Travels*
• Service: ${service.title} (${service.tagline})
• Details: ${service.description}

Hi, I would like to book this service. Please share availability and pricing.`;
      window.open(getWhatsAppUrl(msg), '_blank');
    }
  };

  return (
    <section id="services" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Professional Fleet Solutions</span>
          <h2 className="section-title font-serif">Our Travel Services</h2>
          <p className="section-description">
            Dedicated vehicle rentals and customized tour services tailored to every journey requirement across Hyderabad and South India.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="service-card">
              <div className="service-img-wrap">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="service-img"
                  loading="lazy"
                />
                <span className="service-tagline-badge">{srv.tagline}</span>
              </div>

              <div className="service-body">
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.description}</p>

                {/* Clean Feature Pills */}
                <div className="service-tags-strip">
                  {srv.tags && srv.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag-pill">
                      ✓ {tag}
                    </span>
                  ))}
                </div>

                {/* Balanced Action Buttons */}
                <div className="service-card-actions">
                  <a
                    href={getWhatsAppUrl(`Hi The Hyderabad Tours & Travels, I would like to enquire about ${srv.title} (${srv.tagline}). Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Book on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => handleServiceClick(srv)}
                    className="btn btn-outline-teal btn-sm"
                  >
                    <span>Enquire Service</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
