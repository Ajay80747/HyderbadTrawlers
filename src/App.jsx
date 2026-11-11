import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vehicles from './components/Vehicles';
import HourlyPackages from './components/HourlyPackages';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FleetGalleryPage from './components/FleetGalleryPage';
import TourPackagesPage from './components/TourPackagesPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './styles/global.css';
import './styles/Sections.css';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#/gallery' || hash.startsWith('#/gallery')) return 'gallery';
      if (hash === '#/packages' || hash.startsWith('#/packages') || hash === '#/tour-packages') return 'packages';
    }
    return 'home';
  });
  const [galleryInitialVehicle, setGalleryInitialVehicle] = useState('all');

  // Synchronize with URL hash for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/gallery' || hash.startsWith('#/gallery')) {
        setCurrentPage('gallery');
        const match = hash.match(/#\/gallery\/([a-zA-Z0-9-]+)/);
        setGalleryInitialVehicle(match && match[1] ? match[1] : 'all');
      } else if (hash === '#/packages' || hash.startsWith('#/packages') || hash === '#/tour-packages') {
        setCurrentPage('packages');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToGallery = (vehicleId = 'all') => {
    setGalleryInitialVehicle(vehicleId);
    setCurrentPage('gallery');
    if (vehicleId && vehicleId !== 'all') {
      window.location.hash = `#/gallery/${vehicleId}`;
    } else {
      window.location.hash = '#/gallery';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPackages = (anchor = null) => {
    setCurrentPage('packages');
    if (anchor) {
      window.location.hash = `#/packages${anchor}`;
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) {
          const navOffset = 80;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.location.hash = '#/packages';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = (targetHash = '#home') => {
    setCurrentPage('home');
    window.location.hash = targetHash;
    if (targetHash === '#home' || !targetHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (currentPage !== 'home') {
      navigateToHome('#contact');
      setTimeout(() => {
        const el = document.querySelector('#contact');
        if (el) {
          const navOffset = 70;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }, 120);
      return;
    }

    const el = document.querySelector('#contact');
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleSelectVehicleForBooking = (vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedPackage(null);
    scrollToContact();
  };

  const handleSelectPackageForBooking = (pkg) => {
    setSelectedPackage(pkg);
    setSelectedVehicle(null);
    scrollToContact();
  };

  const handleSelectServiceForBooking = (service) => {
    setSelectedPackage({ title: `${service.title} (${service.tagline})` });
    setSelectedVehicle(null);
    scrollToContact();
  };

  const handleResetSelection = () => {
    setSelectedVehicle(null);
    setSelectedPackage(null);
  };

  return (
    <div className="app-container">
      {/* Sticky Clean Header & Navbar */}
      <Navbar
        currentPage={currentPage}
        onBookNowClick={scrollToContact}
        onNavigateHome={() => navigateToHome('#home')}
        onNavigateGallery={() => navigateToGallery('all')}
        onNavigatePackages={(anchor) => navigateToPackages(anchor)}
      />

      {/* Page Routing */}
      {currentPage === 'gallery' ? (
        <FleetGalleryPage
          onNavigateHome={() => navigateToHome('#home')}
          initialVehicleId={galleryInitialVehicle}
        />
      ) : currentPage === 'packages' ? (
        <TourPackagesPage
          onNavigateHome={() => navigateToHome('#home')}
          onSelectPackageForBooking={handleSelectPackageForBooking}
        />
      ) : (
        /* Streamlined Home Page */
        <main>
          {/* 1. Hero Section with Quick Enquiry */}
          <Hero
            onBookClick={scrollToContact}
            onExploreFleet={() => navigateToGallery('all')}
            onExplorePackages={() => navigateToPackages()}
          />

          {/* 2. Our Vehicles & Per-Km Rates */}
          <Vehicles
            onSelectVehicleForBooking={handleSelectVehicleForBooking}
            onViewFleetGallery={(vehId) => navigateToGallery(vehId || 'all')}
          />

          {/* 3. Our Travel Services (Professional Fleet Solutions) */}
          <Services onBookService={handleSelectServiceForBooking} />

          {/* 4. Local City Mobility - Hyderabad Hourly Rental Packages */}
          <HourlyPackages onSelectPackage={handleSelectPackageForBooking} />

          {/* 5. Tour Packages Teaser Banner */}
          <section className="section section-white" style={{ padding: '30px 0' }}>
            <div className="container">
              <div className="home-packages-banner">
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
                    ⭐ 30+ Sacred Temple Yatras & Scenic Trips
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-serif, "Playfair Display", serif)',
                    fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)',
                    color: '#FFFFFF',
                    margin: '0 0 8px 0',
                    fontWeight: '700'
                  }}>
                    Explore All South Indian Tour Packages from Hyderabad
                  </h3>
                  <p style={{
                    color: 'rgba(250, 248, 241, 0.88)',
                    fontSize: '0.96rem',
                    margin: 0,
                    maxWidth: '680px',
                    lineHeight: 1.55
                  }}>
                    Srisailam, Tirupati Balaji, Shirdi, Vijayawada, Vemulawada, Bhadrachalam, Ramappa, Hampi, Rameswaram, and 20+ holy shrines with verified highway drivers and sanitized AC fleet.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateToPackages()}
                  className="home-packages-banner-btn"
                >
                  <span>🏛️ View All Tour Packages</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </button>
              </div>
            </div>
          </section>

          {/* 6. Photo Gallery with Lightbox & Car-wise Fleet Redirect */}
          <Gallery onOpenFleetGallery={() => navigateToGallery('all')} />

          {/* 7. Contact & Booking Form with WhatsApp & Map */}
          <Contact
            initialVehicle={selectedVehicle}
            initialPackage={selectedPackage}
            onResetSelection={handleResetSelection}
          />
        </main>
      )}

      {/* Luxury Footer */}
      <Footer
        onNavigateGallery={() => navigateToGallery('all')}
        onNavigatePackages={(anchor) => navigateToPackages(anchor)}
        onNavigateHome={navigateToHome}
      />

      {/* Floating WhatsApp and Scroll to Top */}
      <WhatsAppButton />
    </div>
  );
}
