import React from 'react';
import Logo from './Logo';
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from '../data/config';
import { SERVICES } from '../data/services';
import { TOUR_PACKAGES } from '../data/packages';
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  MailIcon,
  ClockIcon,
  ArrowRightIcon
} from './Icons';
import '../styles/Footer.css';

export default function Footer({ onNavigateGallery, onNavigatePackages, onNavigateHome }) {
  const quickLinks = [
    { label: "Home", href: "#home", page: "home" },
    { label: "Our Vehicles & Rates", href: "#vehicles", page: "home" },
    { label: "Fleet Photo Gallery", href: "#/gallery", page: "gallery" },
    { label: "Tour Packages", href: "#/packages", page: "packages" },
    { label: "Travel Services", href: "#services", page: "home" },
    { label: "Hourly Rental Packages", href: "#hourly-packages", page: "home" },
    { label: "About Us", href: "#/packages#about", page: "packages", anchor: "#about" },
    { label: "Contact & Booking", href: "#contact", page: "home" }
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    if (item.page === 'gallery') {
      if (onNavigateGallery) onNavigateGallery();
      else window.location.hash = '#/gallery';
      return;
    }

    if (item.page === 'packages') {
      if (onNavigatePackages) onNavigatePackages(item.anchor || null);
      else window.location.hash = item.href;
      return;
    }

    if (onNavigateHome) {
      onNavigateHome(item.href);
    }
    setTimeout(() => {
      const el = document.querySelector(item.href);
      if (el) {
        const navOffset = 80;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Callout Banner */}
        <div className="footer-cta-card">
          <div>
            <h4>Need Immediate Vehicle Confirmation in Hyderabad?</h4>
            <p>Our fleet coordinator is available 24/7 on WhatsApp & Phone to dispatch vehicles.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={getPhoneUrl()} className="btn btn-call btn-sm">
              <PhoneIcon size={16} />
              <span>Call: {BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              href={getWhatsAppUrl("Hi, I want to book a vehicle immediately.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <WhatsAppIcon size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="footer-top-grid">
          {/* Col 1: About Company */}
          <div className="footer-col">
            <Logo variant="dark" showTagline={true} />
            <p className="footer-about-text">
              Hyderabad’s trusted car, tempo traveller, and luxury coach rental service. We deliver safe, punctual, and comfortable travel experiences with clean vehicles, courteous chauffeurs, and 100% transparent pricing.
            </p>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-soft-gold)' }}>
              ★ Force Urbania • Tempo Travellers • Luxury Buses • Innova Crysta
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    <ArrowRightIcon size={12} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tour Packages */}
          <div className="footer-col">
            <h4 className="footer-col-title">Popular Tour Packages</h4>
            <ul className="footer-links-list">
              {TOUR_PACKAGES.slice(0, 6).map((pkg) => (
                <li key={pkg.id}>
                  <a
                    href="#packages"
                    className="footer-link"
                    onClick={(e) => handleSmoothScroll(e, "#packages")}
                  >
                    <ArrowRightIcon size={12} />
                    <span>{pkg.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Information</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><MapPinIcon size={18} /></span>
                <span>{BUSINESS_CONFIG.address}</span>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon"><PhoneIcon size={18} /></span>
                <a href={getPhoneUrl()}>{BUSINESS_CONFIG.phone}</a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon" style={{ color: '#25D366' }}><WhatsAppIcon size={18} /></span>
                <a
                  href={getWhatsAppUrl("Hi The Hyderabad Tours & Travels, I want to book a trip.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon"><MailIcon size={18} /></span>
                <a href={`mailto:${BUSINESS_CONFIG.email}`}>{BUSINESS_CONFIG.email}</a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon"><ClockIcon size={18} /></span>
                <span>{BUSINESS_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All Rights Reserved.
          </div>

          <div className="footer-social-strip">
            <a href={BUSINESS_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              f
            </a>
            <a href={BUSINESS_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              📸
            </a>
            <a
              href={getWhatsAppUrl("Hello The Hyderabad Tours & Travels")}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="WhatsApp"
              style={{ backgroundColor: '#25D366', color: '#fff', borderColor: '#25D366' }}
            >
              <WhatsAppIcon size={16} />
            </a>
          </div>

          <div className="footer-developer-credit">
            <span>Developed by <span className="dev-names">Ajay and Swetha</span></span>
            <span className="dev-sep">&nbsp;&nbsp;</span>
            <span className="dev-contact-wrap">contact- <a href="tel:8074704568" className="dev-contact-num">8074704568</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
