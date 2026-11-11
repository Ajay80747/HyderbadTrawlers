import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { PhoneIcon, WhatsAppIcon, MenuIcon, XIcon } from './Icons';
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneUrl } from '../data/config';
import '../styles/Navbar.css';

export default function Navbar({
  onBookNowClick,
  currentPage = 'home',
  onNavigateHome,
  onNavigateGallery,
  onNavigatePackages
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#home", page: "home" },
    { label: "Vehicles", href: "#vehicles", page: "home" },
    { label: "Fleet Gallery", href: "#/gallery", page: "gallery" },
    { label: "Tour Packages", href: "#/packages", page: "packages" },
    { label: "Services", href: "#services", page: "home" },
    { label: "Hourly Rentals", href: "#hourly-packages", page: "home" },
    { label: "About", href: "#/packages#about", page: "packages", anchor: "#about" },
    { label: "Contact", href: "#contact", page: "home" }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.page === 'gallery') {
      if (onNavigateGallery) {
        onNavigateGallery();
      } else {
        window.location.hash = '#/gallery';
      }
      return;
    }

    if (item.page === 'packages') {
      if (onNavigatePackages) {
        onNavigatePackages(item.anchor || null);
      } else {
        window.location.hash = item.href;
      }
      return;
    }

    // Navigating to a home page section
    if (currentPage !== 'home') {
      if (onNavigateHome) {
        onNavigateHome();
      } else {
        window.location.hash = item.href;
      }
      setTimeout(() => {
        const targetElement = document.querySelector(item.href);
        if (targetElement) {
          const navOffset = 75;
          const pos = targetElement.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }, 120);
    } else {
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        const navOffset = 75;
        const pos = targetElement.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({
          top: pos,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      if (onNavigateHome) onNavigateHome();
      else window.location.hash = '#home';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      if (onNavigateHome) onNavigateHome();
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          const navOffset = 75;
          const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }, 120);
      return;
    }

    if (onBookNowClick) {
      onBookNowClick();
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo with Emblem & Large Travels Name */}
          <Logo variant="dark" onClick={handleLogoClick} />

          {/* Desktop Nav Links */}
          <ul className="nav-links-desktop">
            {navItems.map((item) => {
              const isActive = item.page === currentPage && !item.anchor;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active-nav-link' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Clean Action Buttons */}
          <div className="nav-actions">
            <a href={getPhoneUrl()} className="nav-phone-btn" title="Call Now">
              <PhoneIcon size={16} />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hello The Hyderabad Tours & Travels, I want to inquire about vehicle rentals.")}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-wa-btn desktop-only"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleBookNow}
              className="btn btn-primary btn-sm nav-book-btn desktop-only"
            >
              Book Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Logo variant="dark" showTagline={false} />
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="drawer-close-btn"
          >
            <XIcon size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navItems.map((item) => {
            const isActive = item.page === currentPage && !item.anchor;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active-mobile-link' : ''}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <button onClick={handleBookNow} className="btn btn-primary btn-block">
            Book Your Journey
          </button>
          <a
            href={getWhatsAppUrl("Hi, I want to inquire about Hyderabad tour packages and vehicle rentals.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-block"
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
          <a href={getPhoneUrl()} className="btn btn-call btn-block">
            <PhoneIcon size={18} />
            Call: {BUSINESS_CONFIG.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
