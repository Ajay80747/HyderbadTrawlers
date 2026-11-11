import React, { useState } from 'react';
import { VEHICLES, VEHICLE_CATEGORIES } from '../data/vehicles';
import VehicleCard from './VehicleCard';
import { SearchIcon } from './Icons';
import '../styles/Vehicles.css';

export default function Vehicles({ onSelectVehicleForBooking, onViewFleetGallery }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    const matchesCategory = selectedCategory === "all" || vehicle.category === selectedCategory;
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.seats.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.ratePerKm.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="vehicles" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Fleet & Pricing</span>
          <h2 className="section-title font-serif">Our Vehicles & Per-Km Rates</h2>
          <p className="section-description">
            Clean, air-conditioned fleet with verified drivers. Confirmed transparent per-km billing.
          </p>
        </div>

        {/* Clean Note with Fleet Gallery Link */}
        <div className="notice-box" style={{ maxWidth: '840px', margin: '0 auto 28px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span>💡 <strong>Confirmed Base Rates:</strong> Tolls, parking fees & state tax extra at actuals.</span>
          </div>
          {onViewFleetGallery && (
            <button
              type="button"
              onClick={() => onViewFleetGallery('all')}
              style={{
                background: '#073C3B',
                color: '#FAF8F1',
                border: '1px solid #D5AA58',
                borderRadius: '999px',
                padding: '6px 14px',
                fontSize: '0.82rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>🚗 View Real Car Gallery</span>
              <span>→</span>
            </button>
          )}
        </div>

        {/* Category Tabs & Search */}
        <div className="vehicles-controls">
          <div className="category-filter-tabs">
            {VEHICLE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="vehicle-search-bar">
            <span className="vehicle-search-icon"><SearchIcon size={18} /></span>
            <input
              type="text"
              placeholder="Search vehicle (e.g. Tempo, Urbania, Innova, Ciaz)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="vehicle-search-input"
            />
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="vehicles-grid">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onEnquire={onSelectVehicleForBooking}
              />
            ))
          ) : (
            <div className="no-vehicles-found">
              <h3>No vehicles found.</h3>
              <p style={{ color: 'var(--color-muted-text)', marginTop: '8px' }}>
                Please select another category or reset your search.
              </p>
              <button
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="btn btn-primary"
                style={{ marginTop: '16px' }}
              >
                Show All Vehicles
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
