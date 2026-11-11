import React, { useState, useEffect } from 'react';
import { WhatsAppIcon, PhoneIcon, ArrowUpIcon } from './Icons';
import { getWhatsAppUrl, getPhoneUrl } from '../data/config';
import '../styles/WhatsAppButton.css';

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-widgets-container" aria-label="Quick Actions">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon size={20} />
      </button>

      {/* Mobile Floating Direct Call */}
      <a
        href={getPhoneUrl()}
        className="floating-call-btn"
        aria-label="Call The Hyderabad Tours & Travels"
      >
        <PhoneIcon size={22} />
      </a>

      {/* Floating WhatsApp with Tooltip */}
      <a
        href={getWhatsAppUrl("Hello The Hyderabad Tours & Travels, I need vehicle rental / tour package details.")}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="floating-wa-tooltip">
          Chat on WhatsApp • Instant Reply
        </span>
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
}

