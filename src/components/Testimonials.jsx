import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Client Feedback</span>
          <h2 className="section-title font-serif">Customer Experiences</h2>
          <p className="section-description">
            Read what travelers say about our vehicles, drivers, and journey reliability.
          </p>
        </div>

        <div className="testimonial-carousel-wrap">
          <div className="testimonial-card">
            {current.isPlaceholder && (
              <span className="testimonial-card-badge">
                Sample Feedback Placeholder (Awaiting Business Submission)
              </span>
            )}

            <div className="testimonial-stars">
              {[...Array(current.rating)].map((_, i) => (
                <StarIcon key={i} size={20} />
              ))}
            </div>

            <p className="testimonial-quote">
              "{current.quote}"
            </p>

            <div className="testimonial-author-row">
              <div className="testimonial-avatar">
                {current.avatar}
              </div>
              <div>
                <div className="testimonial-author-name">{current.clientName}</div>
                <div className="testimonial-author-trip">
                  {current.tripRoute} • {current.vehicleUsed}
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button
              onClick={prevTestimonial}
              className="carousel-btn"
              aria-label="Previous Testimonial"
            >
              <ChevronLeftIcon size={20} />
            </button>

            <div className="carousel-indicators">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="carousel-btn"
              aria-label="Next Testimonial"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

