import React from 'react';
import {
  CarIcon,
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  CheckCircleIcon
} from './Icons';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Clean AC Vehicles",
      desc: "Comfortable pushback seats, effective AC, clean interiors, and spacious luggage room for a smooth ride.",
      icon: <CarIcon size={26} />
    },
    {
      title: "Experienced Drivers",
      desc: "Friendly, verified drivers who know all South India routes, temple timings, and safe highway driving.",
      icon: <UsersIcon size={26} />
    },
    {
      title: "Safe Highway Travel",
      desc: "Regular mechanical checks, speed limits, and well-maintained vehicles for complete family safety.",
      icon: <ShieldCheckIcon size={26} />
    },
    {
      title: "Clear & Honest Pricing",
      desc: "Simple per-km billing with zero hidden costs. Tolls and parking are billed transparently at actuals.",
      icon: <CheckCircleIcon size={26} />
    },
    {
      title: "On-Time Doorstep Pickup",
      desc: "We arrive on time at your home, hotel, or airport so your journey always starts smoothly without delays.",
      icon: <ClockIcon size={26} />
    },
    {
      title: "24/7 Phone & WhatsApp Help",
      desc: "Our team is always reachable on phone and WhatsApp for immediate quotes, bookings, and travel support.",
      icon: <PhoneIcon size={26} />
    }
  ];

  return (
    <section className="section section-white" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow gold">Why Ride With Us</span>
          <h2 className="section-title font-serif">Why Choose The Hyderabad Tours & Travels</h2>
          <p className="section-description">
            Simple, honest, and reliable travel services with clean vehicles and polite drivers across Hyderabad and South India.
          </p>
        </div>

        <div className="why-grid">
          {points.map((pt, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-box">
                {pt.icon}
              </div>
              <h3 className="why-title">{pt.title}</h3>
              <p className="why-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
