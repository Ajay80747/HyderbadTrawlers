import React, { useState } from 'react';

export default function Logo({ variant = "dark", showTagline = false, className = "", onClick }) {
  const [imgError, setImgError] = useState(false);
  const isLight = variant === "light";

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href="#home"
      onClick={handleClick}
      className={`brand-logo-container ${className}`}
      aria-label="The Hyderabad Travels & Tours Home"
    >
      <div className="brand-emblem-badge">
        {!imgError ? (
          <img
            src="/logo.png"
            alt="The Hyderabad Travels & Tours Logo"
            className="brand-logo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="crest-icon-box">
            <svg viewBox="0 0 100 100" className="brand-svg-crest" width="46" height="46">
              <circle cx="50" cy="50" r="47" fill={isLight ? "#073C3B" : "#176B5B"} stroke="#D5AA58" strokeWidth="3" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="rgba(213, 170, 88, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M28 66 L28 42 L33 42 L33 28 L37 28 L37 42 L42 42 L42 66 Z" fill="#D5AA58" />
              <path d="M58 66 L58 42 L63 42 L63 28 L67 28 L67 42 L72 42 L72 66 Z" fill="#D5AA58" />
              <path d="M36 46 Q50 36 64 46 L64 66 L36 66 Z" fill={isLight ? "#176B5B" : "#073C3B"} />
              <path d="M43 66 Q50 56 57 66 Z" fill="#D5AA58" />
              <circle cx="50" cy="27" r="3.5" fill="#D5AA58" />
              <path d="M18 73 Q50 82 82 73" stroke="#D5AA58" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {/* Large Name on Top With Our Travels Name */}
        <div className="brand-text-block">
          <span className={`brand-title-main ${isLight ? 'text-teal' : 'text-white'}`}>
            THE HYDERABAD
          </span>
          <span className="brand-title-sub">
            TRAVELS AND TOURS
          </span>
          {showTagline && (
            <span className={`brand-tagline ${isLight ? 'tagline-dark' : 'tagline-light'}`}>
              Discover Every Journey With Comfort & Care
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
