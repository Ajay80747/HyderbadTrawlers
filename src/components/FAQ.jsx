import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How are toll charges, parking fees, and state taxes calculated?",
      a: "As transparently indicated throughout our website, tolls, interstate state border taxes, and parking fees are charged extra at actual cost. You pay the exact amounts shown on the official government Fastag / toll plaza receipts without any agency markups."
    },
    {
      q: "What are the confirmed per-kilometer rates for vehicles?",
      a: "Our confirmed outstation rates start at ₹13/km for Maruti Ciaz, ₹14/km for Honda City, ₹16/km for Innova, ₹19/km for Innova Crysta, ₹27/km for 12 Seater Tempo Traveller, and ₹34/km for the premium 12 Seater Force Urbania. Mini buses and luxury coaches are also available at competitive rates."
    },
    {
      q: "How does the garage-to-garage distance calculation work?",
      a: "For outstation and hourly trips in Hyderabad, the kilometer and hour counting starts from our vehicle dispatch hub (Gachibowli / Airport ORR hub) to your doorstep pickup and ends when the vehicle returns back to the garage."
    },
    {
      q: "Are the vehicles air-conditioned for ghat roads and summer trips?",
      a: "Yes, 100% of our fleet (including Tempo Travellers, Force Urbanias, and Buses) is equipped with high-power cooling and dual AC vents. On steep uphill ghat sections (such as Srisailam or Tirumala), drivers may temporarily adjust AC for engine safety and power performance."
    },
    {
      q: "How do I confirm a vehicle booking and make payments?",
      a: "You can book directly via WhatsApp or Phone call with zero hassle. We share the confirmed vehicle photos, driver name, and vehicle registration number in advance. We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cash."
    },
    {
      q: "Do you provide vehicles for weddings, corporate offsites, and school tours?",
      a: "Yes! We specialize in bulk fleet coordination. Whether you need 5 Force Urbanias for wedding guests or multiple 40-seater luxury buses for corporate team outings in Cyberabad and Financial District, our dedicated transport coordinator manages all logistics seamlessly."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Clear Answers</span>
          <h2 className="section-title font-serif">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about our vehicle rentals, billing transparency, and tour arrangements in Hyderabad.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className={`faq-icon ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDownIcon size={20} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

