import React from 'react';
import { HOURLY_PACKAGES } from '../data/hourlyPackages';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './Icons';

export default function HourlyPackages({ onSelectPackage }) {
  const handleEnquire = (pkg) => {
    const text = `*Hourly Rental Package Enquiry - The Hyderabad Tours & Travels*
• Package: ${pkg.name}
• Ideal For: ${pkg.idealFor}

Hi, I need an hourly rental package in Hyderabad. Please assist with booking and vehicle options.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section className="section section-alt" id="hourly-packages">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Local City Mobility</span>
          <h2 className="section-title font-serif">Hyderabad Hourly Rental Packages</h2>
          <p className="section-description">
            Dedicated vehicle and chauffeur at your disposal for city meetings, wedding guest shuttles, shopping, or full-day city tours. Flexible and cost-effective.
          </p>
        </div>

        <div className="hourly-grid">
          {HOURLY_PACKAGES.map((pkg, idx) => (
            <div key={pkg.id} className={`hourly-card ${idx === 0 ? 'featured' : ''}`}>
              <div className="hourly-header-strip">
                <span className="hourly-badge">{pkg.badge}</span>
                <span className="hourly-subtitle">{pkg.idealFor}</span>
              </div>
              
              <h3 className="hourly-title">{pkg.name}</h3>

              <div className="table-responsive">
                <table className="hourly-rates-table">
                  <thead>
                    <tr>
                      <th>Vehicle Type</th>
                      <th>Base Hire</th>
                      <th>Extra Km</th>
                      <th>Extra Hr</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.rates.map((rate, rIdx) => (
                      <tr key={rIdx}>
                        <td><strong>{rate.vehicle}</strong></td>
                        <td className="hourly-price-val">{rate.startingFrom}</td>
                        <td>{rate.extraKm}</td>
                        <td>{rate.extraHr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="hourly-inclusions-label">
                Included with Package:
              </div>
              <div className="hourly-inclusions-strip">
                {pkg.inclusions.map((inc, iIdx) => (
                  <span key={iIdx} className="hourly-inc-tag">
                    ✓ {inc}
                  </span>
                ))}
              </div>

              <div className="hourly-card-actions">
                <a
                  href={getWhatsAppUrl(`Hi The Hyderabad Tours & Travels, I want to book the ${pkg.name} hourly package in Hyderabad.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <WhatsAppIcon size={16} />
                  <span>Book on WhatsApp</span>
                </a>

                <button
                  onClick={() => handleEnquire(pkg)}
                  className="btn btn-outline-teal btn-sm"
                >
                  <span>Enquire Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
