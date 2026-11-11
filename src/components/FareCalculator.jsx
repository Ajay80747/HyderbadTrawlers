import React, { useState } from 'react';
import { VEHICLES } from '../data/vehicles';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../data/config';
import { CarIcon, WhatsAppIcon, ArrowRightIcon, ShieldCheckIcon } from './Icons';

export default function FareCalculator({ onBookCalculatedFare }) {
  const [selectedVehicleId, setSelectedVehicleId] = useState(VEHICLES[0].id);
  const [distanceKm, setDistanceKm] = useState(200);
  const [tripType, setTripType] = useState('round'); // 'round' or 'oneway'

  const selectedVehicle = VEHICLES.find(v => v.id === selectedVehicleId) || VEHICLES[0];

  // Extract numeric rate per km (e.g., "₹27 / km" -> 27)
  const ratePerKm = parseInt(selectedVehicle.ratePerKm.replace(/[^0-9]/g, ''), 10) || 27;

  // Total billable distance
  const totalKm = tripType === 'round' ? distanceKm * 2 : distanceKm;
  const estimatedBaseFare = totalKm * ratePerKm;

  const handleBookOnWhatsApp = () => {
    const text = `*Quick Fare Estimate Booking - The Hyderabad Tours & Travels*
━━━━━━━━━━━━━━━━━━━━━━
🚗 *Vehicle:* ${selectedVehicle.name}
💰 *Base Rate:* ${selectedVehicle.ratePerKm}
🛣️ *Trip Mode:* ${tripType === 'round' ? 'Round Trip (Both Ways)' : 'One Way Drop'}
📏 *Distance:* ${distanceKm} Kms (Total Billable: ~${totalKm} Kms)
💵 *Estimated Base Fare:* ₹${estimatedBaseFare.toLocaleString('en-IN')}
📌 *Notes:* Tolls, parking & interstate permits extra at actuals.
━━━━━━━━━━━━━━━━━━━━━━
Please check availability and confirm booking for this trip.`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section className="section section-white" id="fare-calculator">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow gold">Transparent Cost Estimator</span>
          <h2 className="section-title font-serif">Calculate Your Outstation Trip Fare</h2>
          <p className="section-description">
            Get an instant estimate for your journey across Telangana, Andhra Pradesh, and South India with our confirmed per-kilometer pricing.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calculator-grid">
            {/* Input Controls */}
            <div className="calc-controls-col">
              <h3 className="calc-col-title">1. Select Your Trip Parameters</h3>

              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label className="form-label" htmlFor="calc-vehicle">
                  <CarIcon size={14} /> Choose Vehicle
                </label>
                <select
                  id="calc-vehicle"
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(e.target.value)}
                  className="form-select"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.seats}) — {v.ratePerKm}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="form-label" htmlFor="calc-distance">
                    One-Way Distance (Kilometers)
                  </label>
                  <span className="badge badge-teal">{distanceKm} Kms</span>
                </div>
                <input
                  id="calc-distance"
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  style={{ width: '100%', margin: '12px 0', accentColor: 'var(--color-emerald-green)' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--color-muted-text)' }}>
                  <span>50 Kms (Short Day Trip)</span>
                  <span>500 Kms (Tirupati / Goa)</span>
                  <span>1,500 Kms</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Trip Type</label>
                <div className="calc-type-toggle">
                  <button
                    type="button"
                    className={`calc-type-btn ${tripType === 'round' ? 'active' : ''}`}
                    onClick={() => setTripType('round')}
                  >
                    🔄 Round Trip (Return)
                  </button>
                  <button
                    type="button"
                    className={`calc-type-btn ${tripType === 'oneway' ? 'active' : ''}`}
                    onClick={() => setTripType('oneway')}
                  >
                    ➡️ One-Way Drop
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown Box */}
            <div className="calc-result-col">
              <div className="calc-result-header">
                <span className="calc-result-label">Estimated Base Hire Cost</span>
                <div className="calc-result-amount">
                  ₹{estimatedBaseFare.toLocaleString('en-IN')}
                </div>
                <span className="calc-result-sub">
                  Calculated @ {selectedVehicle.ratePerKm} for ~{totalKm} total Kms
                </span>
              </div>

              <div className="calc-breakdown-list">
                <div className="calc-breakdown-row">
                  <span>Selected Model:</span>
                  <strong>{selectedVehicle.name}</strong>
                </div>
                <div className="calc-breakdown-row">
                  <span>Capacity:</span>
                  <strong>{selectedVehicle.seats}</strong>
                </div>
                <div className="calc-breakdown-row">
                  <span>AC Specification:</span>
                  <strong>{selectedVehicle.acType}</strong>
                </div>
                <div className="calc-breakdown-row">
                  <span>Tolls, Parking & Tax:</span>
                  <span style={{ color: '#b45309', fontWeight: 600 }}>Extra at actuals</span>
                </div>
              </div>

              <div className="notice-box" style={{ margin: '18px 0', fontSize: '0.82rem' }}>
                <ShieldCheckIcon size={16} />
                <span>Zero advance required for quotes. Exact billing based on vehicle odometer reading.</span>
              </div>

              <button
                onClick={handleBookOnWhatsApp}
                className="btn btn-whatsapp btn-block"
                style={{ padding: '14px' }}
              >
                <WhatsAppIcon size={18} />
                <span>Book This Estimate on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

