import React from 'react';
import { UsersIcon, WhatsAppIcon } from './Icons';
import { getWhatsAppUrl } from '../data/config';

export default function VehicleCard({ vehicle, onEnquire }) {
  const whatsappMessage = `*Vehicle Booking - The Hyderabad Tours & Travels*
• Vehicle: ${vehicle.name}
• Capacity: ${vehicle.seats}
• Rate: ${vehicle.ratePerKm} (${vehicle.rateNote})

Hi, please check availability and confirm booking for this vehicle.`;

  return (
    <div className="vehicle-card">
      <div className="vehicle-card-image-wrap">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="vehicle-card-img"
          loading="lazy"
        />
        <span className="vehicle-card-category-badge">
          {vehicle.categoryLabel}
        </span>
      </div>

      <div className="vehicle-card-body">
        <h3 className="vehicle-card-title">{vehicle.name}</h3>

        {/* Simple Clean Badges */}
        <div className="vehicle-specs-strip">
          <span className="vehicle-spec-pill">
            <UsersIcon size={14} />
            {vehicle.seats}
          </span>
          <span className="vehicle-spec-pill ac-pill">
            ❄️ Air Conditioned
          </span>
        </div>

        {/* Prominent Per-KM Price Box */}
        <div className="vehicle-price-box">
          <div className="vehicle-rate-group">
            <span className="vehicle-rate-prefix">Outstation Rate:</span>
            <span className="vehicle-rate-value">{vehicle.ratePerKm}</span>
          </div>
          <div className="vehicle-rate-note">
            *{vehicle.rateNote}
          </div>
        </div>

        {/* Clean Action Buttons */}
        <div className="vehicle-card-actions">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <WhatsAppIcon size={16} />
            <span>Book on WhatsApp</span>
          </a>

          <button
            onClick={() => onEnquire && onEnquire(vehicle)}
            className="btn btn-outline-teal btn-sm"
          >
            <span>Enquire / Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}
