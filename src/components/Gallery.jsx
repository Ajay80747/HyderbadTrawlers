import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { ChevronLeftIcon, ChevronRightIcon, XIcon, SparklesIcon } from './Icons';

export default function Gallery({ onOpenFleetGallery }) {
  const [selectedCat, setSelectedCat] = useState("all");
  const [activeImgIndex, setActiveImgIndex] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (selectedCat === "all") return true;
    return item.category === selectedCat;
  });

  const openLightbox = (index) => {
    setActiveImgIndex(index);
  };

  const closeLightbox = () => {
    setActiveImgIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImgIndex === null) return;
    setActiveImgIndex((prev) => (prev + 1) % filteredItems.length);
  }, [activeImgIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeImgIndex === null) return;
    setActiveImgIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [activeImgIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImgIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImgIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Visual Tour</span>
          <h2 className="section-title font-serif">Fleet & Travel Moments Gallery</h2>
          <p className="section-description">
            Glimpse into our fleet of luxury Tempo Travellers, Force Urbanias, modern buses, and scenic destination journeys across Telangana and beyond.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="gallery-filter-tabs">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`category-tab-btn ${selectedCat === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(idx); }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-thumb"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-item-cat">{item.categoryLabel}</span>
                <h4 className="gallery-item-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Car Gallery Redirection Banner */}
        <div style={{
          marginTop: '36px',
          background: 'linear-gradient(135deg, #073C3B 0%, #176B5B 100%)',
          borderRadius: '16px',
          padding: '28px 32px',
          border: '2px solid #D5AA58',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 8px 24px rgba(7, 60, 59, 0.15)'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              background: 'rgba(213, 170, 88, 0.25)',
              color: '#FAF8F1',
              border: '1px solid #D5AA58',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '8px'
            }}>
              ⭐ Official Garage Showcase
            </span>
            <h3 style={{
              fontFamily: 'var(--font-serif, "Playfair Display", serif)',
              fontSize: '1.45rem',
              color: '#FFFFFF',
              margin: '0 0 6px 0',
              fontWeight: '700'
            }}>
              Explore Car-Wise Photos of Our Complete Hyderabad Fleet
            </h3>
            <p style={{
              color: 'rgba(250, 248, 241, 0.88)',
              fontSize: '0.94rem',
              margin: 0,
              maxWidth: '650px',
              lineHeight: 1.5
            }}>
              Browse 65+ authentic photos categorized vehicle-by-vehicle: Force Urbania, Tempo Traveller, Innova Crysta, Maruti Ciaz, and Honda City.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenFleetGallery}
            style={{
              background: 'linear-gradient(135deg, #D5AA58 0%, #c49540 100%)',
              color: '#073C3B',
              border: 'none',
              padding: '13px 26px',
              borderRadius: '999px',
              fontWeight: '800',
              fontSize: '0.96rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <span>🚗 View Full Car Gallery</span>
            <span style={{ fontSize: '1.1rem' }}>→</span>
          </button>
        </div>

        {/* Lightbox Modal */}
        {activeImgIndex !== null && filteredItems[activeImgIndex] && (
          <div className="lightbox-modal" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <XIcon size={24} />
              </button>

              <button
                className="lightbox-nav-btn lightbox-prev"
                onClick={showPrev}
                aria-label="Previous Image"
              >
                <ChevronLeftIcon size={24} />
              </button>

              <img
                src={filteredItems[activeImgIndex].image}
                alt={filteredItems[activeImgIndex].title}
                className="lightbox-img"
              />

              <button
                className="lightbox-nav-btn lightbox-next"
                onClick={showNext}
                aria-label="Next Image"
              >
                <ChevronRightIcon size={24} />
              </button>

              <div className="lightbox-caption">
                <h4>{filteredItems[activeImgIndex].title}</h4>
                <p>{filteredItems[activeImgIndex].description}</p>
                <span style={{ fontSize: '0.8rem', color: '#D5AA58', marginTop: '6px', display: 'inline-block' }}>
                  {activeImgIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

