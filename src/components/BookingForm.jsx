import React, { useState, useEffect } from 'react';
import { VEHICLES } from '../data/vehicles';
import { getWhatsAppUrl, getPhoneUrl, BUSINESS_CONFIG } from '../data/config';
import {
  UsersIcon,
  CalendarIcon,
  MapPinIcon,
  CarIcon,
  PhoneIcon,
  WhatsAppIcon,
  ShieldCheckIcon
} from './Icons';

export default function BookingForm({ initialVehicle, initialPackage, onResetSelection }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pickup: '',
    destination: '',
    date: '',
    passengers: '4',
    vehicle: '12 Seater Tempo Traveller',
    tripType: 'Outstation Round Trip',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If a vehicle or package was selected from earlier cards, pre-fill it
  useEffect(() => {
    if (initialVehicle) {
      setFormData(prev => ({
        ...prev,
        vehicle: `${initialVehicle.name} (${initialVehicle.ratePerKm})`
      }));
    }
  }, [initialVehicle]);

  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({
        ...prev,
        destination: initialPackage.title,
        tripType: 'Curated Tour Package'
      }));
    }
  }, [initialPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.pickup.trim()) newErrors.pickup = "Please enter pickup location";
    if (!formData.destination.trim()) newErrors.destination = "Please enter destination";
    if (!formData.date) newErrors.date = "Please select travel date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*Trip & Vehicle Booking Request - The Hyderabad Tours & Travels*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${formData.name.trim()}
📱 *Mobile Number:* ${formData.mobile.trim()}
📍 *Pickup Location:* ${formData.pickup.trim()}
🎯 *Destination:* ${formData.destination.trim()}
📅 *Travel Date:* ${formData.date}
👥 *Number of Passengers:* ${formData.passengers}
🚗 *Preferred Vehicle:* ${formData.vehicle}
🛣️ *Trip Type:* ${formData.tripType}
📝 *Additional Requirements:* ${formData.requirements.trim() || 'None'}
━━━━━━━━━━━━━━━━━━━━━━
*Please confirm availability and share total quote.*`;

    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="contact-form-card">
      <div style={{ marginBottom: '22px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
          Quick Booking
        </span>
        <h3 style={{ fontSize: '1.45rem', color: 'var(--color-deep-teal)' }}>
          Book Your Trip
        </h3>
        <p style={{ color: 'var(--color-muted-text)', fontSize: '0.88rem', marginTop: '4px' }}>
          Fill in your details below to get an instant quote and vehicle confirmation on WhatsApp.
        </p>
      </div>

      {(initialVehicle || initialPackage) && (
        <div className="notice-box" style={{ marginBottom: '20px' }}>
          <span>✨</span>
          <div style={{ flex: 1 }}>
            Pre-selected: <strong>{initialVehicle?.name || initialPackage?.title}</strong>
          </div>
          {onResetSelection && (
            <button
              onClick={onResetSelection}
              style={{ color: '#8c6a21', fontWeight: 700, textDecoration: 'underline', fontSize: '0.8rem' }}
            >
              Clear
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="booking-form" noValidate>
        {/* Name and Mobile */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="form-name">
              Full Name *
            </label>
            <input
              id="form-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              style={errors.name ? { borderColor: '#ef4444' } : {}}
            />
            {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="form-mobile">
              Mobile Number *
            </label>
            <input
              id="form-mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="e.g. 9381489147"
              className={`form-input ${errors.mobile ? 'input-error' : ''}`}
              style={errors.mobile ? { borderColor: '#ef4444' } : {}}
            />
            {errors.mobile && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.mobile}</span>}
          </div>
        </div>

        {/* Pickup and Destination */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="form-pickup">
              <MapPinIcon size={14} /> Pickup Location in Hyderabad *
            </label>
            <input
              id="form-pickup"
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Kondapur, Secunderabad, Airport"
              className="form-input"
              style={errors.pickup ? { borderColor: '#ef4444' } : {}}
            />
            {errors.pickup && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.pickup}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="form-destination">
              <MapPinIcon size={14} /> Destination *
            </label>
            <input
              id="form-destination"
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Srisailam / Goa / Local City"
              className="form-input"
              style={errors.destination ? { borderColor: '#ef4444' } : {}}
            />
            {errors.destination && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.destination}</span>}
          </div>
        </div>

        {/* Date, Passengers & Trip Type */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="form-date">
              <CalendarIcon size={14} /> Travel Date *
            </label>
            <input
              id="form-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              style={errors.date ? { borderColor: '#ef4444' } : {}}
            />
            {errors.date && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.date}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="form-passengers">
              <UsersIcon size={14} /> Number of Passengers
            </label>
            <select
              id="form-passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="form-select"
            >
              <option value="1 - 4 Persons">1 - 4 Persons (Sedan)</option>
              <option value="5 - 7 Persons">5 - 7 Persons (Innova)</option>
              <option value="8 - 12 Persons">8 - 12 Persons (Tempo / Urbania)</option>
              <option value="13 - 17 Persons">13 - 17 Persons (17 Seater Tempo)</option>
              <option value="18 - 28 Persons">18 - 28 Persons (Mini Bus)</option>
              <option value="29 - 50 Persons">29 - 50 Persons (Luxury Bus)</option>
            </select>
          </div>
        </div>

        {/* Vehicle and Trip Type */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="form-vehicle">
              <CarIcon size={14} /> Preferred Vehicle
            </label>
            <select
              id="form-vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="form-select"
            >
              {VEHICLES.map((v) => (
                <option key={v.id} value={`${v.name} (${v.ratePerKm})`}>
                  {v.name} • {v.ratePerKm}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="form-triptype">
              Trip Type
            </label>
            <select
              id="form-triptype"
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Outstation Round Trip">Outstation Round Trip</option>
              <option value="Outstation One Way Drop">Outstation One Way Drop</option>
              <option value="Local 8 Hours / 80 Kms">Local 8 Hours / 80 Kms</option>
              <option value="Local 12 Hours / 120 Kms">Local 12 Hours / 120 Kms</option>
              <option value="Airport Pickup / Drop">Airport Pickup / Drop (RGIA)</option>
              <option value="Wedding Transportation Fleet">Wedding Transportation Fleet</option>
              <option value="Corporate / School Outing">Corporate / School Outing</option>
              <option value="Curated Tour Package">Curated Tour Package</option>
            </select>
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="form-group">
          <label className="form-label" htmlFor="form-req">
            Additional Requirements / Special Notes
          </label>
          <textarea
            id="form-req"
            name="requirements"
            rows="3"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="e.g. Rooftop luggage carrier needed, elderly passenger assistance, multi-stop pickup, temple pooja schedule..."
            className="form-input"
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Submit Actions */}
        <div className="booking-form-actions">
          <button type="submit" className="btn btn-whatsapp" style={{ padding: '13px 18px', justifyContent: 'center' }}>
            <WhatsAppIcon size={18} />
            <span>Book on WhatsApp</span>
          </button>

          <a href={getPhoneUrl()} className="btn btn-outline-teal" style={{ padding: '13px 18px', justifyContent: 'center' }}>
            <PhoneIcon size={18} />
            <span>Call: {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        {isSubmitted && (
          <div style={{ background: '#dcfce7', color: '#166534', padding: '12px', borderRadius: '8px', fontSize: '0.88rem', textAlign: 'center' }}>
            WhatsApp chat opened! If it didn't open automatically, please click the button above or call us directly.
          </div>
        )}
      </form>
    </div>
  );
}

