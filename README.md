# THE HYDERABAD TOURS & TRAVELS (Hyderabad Travels and Tours)
> **Premium, Responsive Travel & Vehicle Rental Web Application**  
> **Location:** Hyderabad, Telangana, India  
> **Reference Inspiration:** [vaishnavitoursntravels.in](https://vaishnavitoursntravels.in/)

---

## 🌟 Project Overview

**The Hyderabad Tours & Travels** is a complete, production-ready, luxury travel and vehicle rental web platform built using **React.js** with pure **CSS3** and modern **JavaScript (ES6+)**. The design embodies a peaceful, trustworthy, luxurious aesthetic tailored to Hyderabad's heritage and modern transport needs.

---

## 🎨 Theme & Color Palette

The entire design system strictly adheres to the requested luxury palette:
- **Deep Teal (`#073C3B`):** Dominant brand tone, headers, typography, buttons, and footer.
- **Emerald Green (`#176B5B`):** Accent cards, badges, highlights, and secondary CTAs.
- **Soft Gold (`#D5AA58`):** Royal accents, borders, star ratings, and primary action buttons.
- **Sage Green (`#E9F2EC`):** Soft section backgrounds, pills, and icon containers.
- **Warm Ivory (`#FAF8F1`):** Luxurious page background, input fields, and pricing tables.
- **White (`#FFFFFF`):** Crisp elevated cards, modals, and container surfaces.
- **Dark Text (`#263C38`):** High-contrast, readable body typography.

---

## 🚗 Confirmed Vehicle Fleet & Rates

| Vehicle Category | Model / Capacity | Confirmed Base Rate | Notes |
| :--- | :--- | :--- | :--- |
| **Maruti Suzuki** | Ciaz Sedan (4 Passengers) | **₹13 / km** | Tolls, parking & taxes extra |
| **Honda** | Honda City Sedan (4 Passengers) | **₹14 / km** | Tolls, parking & taxes extra |
| **Toyota** | Innova Car (7 Passengers) | **₹16 / km** | Tolls, parking & taxes extra |
| **Toyota** | Innova Crysta (6-7 Passengers) | **₹19 / km** | Tolls, parking & taxes extra |
| **Tempo Traveller** | 12 Seater Tempo Traveller | **₹27 / km** | Tolls, parking & taxes extra |
| **Tempo Traveller** | 17 Seater Tempo Traveller | **₹30 / km** | Tolls, parking & taxes extra |
| **Force Urbania** | 12 Seater Force Urbania | **₹34 / km** | Tolls, parking & taxes extra |
| **Force Urbania** | 16 Seater Force Urbania | **₹38 / km** | Tolls, parking & taxes extra |
| **Mini Bus** | 22 Seater Mini Bus | **₹42 / km** | Tolls, parking & taxes extra |
| **Mini Bus** | 28 Seater Mini Bus | **₹48 / km** | Tolls, parking & taxes extra |
| **Luxury Bus** | 30 Seater Bus | **₹52 / km** | Tolls, parking & taxes extra |
| **Luxury Bus** | 40 Seater Bus | **₹65 / km** | Tolls, parking & taxes extra |
| **Luxury Bus** | 50 Seater Bus | **₹75 / km** | Tolls, parking & taxes extra |

*Note: Toll taxes, state permit taxes, and parking fees are charged extra at actuals as noted across the website.*

---

## 🏛️ Popular Tour Packages Included

1. **Hyderabad to Srisailam:** Mallikarjuna Swamy Jyotirlinga, Pathalganga ropeway, and Nallamala forest ghats.
2. **Hyderabad to Yadagirigutta:** Sri Lakshmi Narasimha Swamy Temple hill-shrine.
3. **Hyderabad to Swarnagiri Temple:** Bhuvanagiri Golden Temple of Telangana.
4. **Hyderabad to Tirupati:** Lord Venkateswara Balaji Darshan.
5. **Hyderabad to Sabarimala:** Devotee Yatra with dual-driver long-haul support.
6. **Hyderabad to Goa:** Coastal holiday road trip with sightseeing.
7. **Hyderabad Sightseeing:** Charminar, Golconda Fort, Salar Jung Museum, and Hussain Sagar.
8. **Ramoji Film City Tour:** Full-day excursion to the world's largest film studio.

---

## ⏱️ Hourly Rental Packages

- **8 Hours / 80 Kms:** Ideal for business appointments, shopping, and half-day city visits.
- **12 Hours / 120 Kms:** Ideal for full-day city tours, weddings, and factory/industrial visits.
- Detailed extra kilometer and extra hour rates for all vehicle classes.

---

## 🛠️ Complete Feature Highlights

- **Sticky Navigation Bar:** Top announcement bar, active nav links, click-to-call, click-to-WhatsApp, and Book Now action.
- **Full-Width Hero Section:** Background vehicle imagery, "Discover Every Journey With Comfort & Care", 3 CTA buttons, and interactive Quick Booking Panel.
- **Interactive Vehicles Catalogue:** Filter by category (Tempo Traveller, Force Urbania, Mini Bus, Luxury Bus, Cars & SUVs) + real-time search bar.
- **WhatsApp Integration:** All vehicle cards, package cards, enquiry panels, and floating buttons open pre-formatted, detailed WhatsApp messages.
- **Direct Phone Call Integration:** Click-to-call `tel:+919876543210` across navbar, hero, cards, contact, and mobile bottom widget.
- **Interactive Lightbox Gallery:** Category tabs, click-to-enlarge, Previous/Next navigation, keyboard controls (`Esc`, `←`, `→`).
- **Testimonial Carousel:** Clearly labelled sample placeholders pending verified business reviews.
- **Form Validation:** Comprehensive client-side validation on mobile numbers, names, locations, and travel dates.
- **Responsive Mobile Experience:** Elegant hamburger drawer menu and touch-optimized action buttons.
- **SEO & Performance Optimized:** Semantic HTML5, Google Fonts (`Plus Jakarta Sans` & `Playfair Display`), accessible ARIA attributes, and SVG icons.

---

## 📂 Project Directory Structure

```
Project-Hyd/
├── public/
│   ├── favicon.svg             # Website favicon
│   ├── logo.svg                # Vector brand logo
│   └── logo.png                # Drop your uploaded company logo here
├── src/
│   ├── assets/
│   │   ├── images/             # Local images directory
│   │   └── logo/               # Logo backup
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header & mobile drawer
│   │   ├── Hero.jsx            # Hero section with instant enquiry panel
│   │   ├── About.jsx           # About Us with 6 company commitments
│   │   ├── Vehicles.jsx        # Vehicle fleet with category filters & search
│   │   ├── VehicleCard.jsx     # Individual vehicle image card with rates & CTAs
│   │   ├── TourPackages.jsx    # 8 Popular tour packages from Hyderabad
│   │   ├── HourlyPackages.jsx  # 8h/80km & 12h/120km local packages
│   │   ├── Services.jsx        # 9 Core travel & transport services
│   │   ├── Gallery.jsx         # Responsive image gallery with modal lightbox
│   │   ├── WhyChooseUs.jsx     # 6 Pillars of trust & quality
│   │   ├── Testimonials.jsx    # Client feedback carousel
│   │   ├── BookingForm.jsx     # Full booking form with validation & WhatsApp dispatch
│   │   ├── Contact.jsx         # Contact details, helpline, & Google Maps
│   │   ├── Footer.jsx          # Comprehensive footer with quick links & info
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp widget & scroll-to-top button
│   │   ├── Logo.jsx            # Dynamic logo component (auto-detects logo.png)
│   │   └── Icons.jsx           # Crisp inline SVG icons (zero external dependencies)
│   ├── data/
│   │   ├── config.js           # Central business settings (Phone, WhatsApp, Address, Email)
│   │   ├── vehicles.js         # Fleet catalogue with client confirmed pricing
│   │   ├── packages.js         # Tour packages data
│   │   ├── hourlyPackages.js   # Hourly rentals pricing breakdown
│   │   ├── services.js         # 9 Travel services data
│   │   ├── gallery.js          # Photo gallery items & categories
│   │   └── testimonials.js     # Feedback placeholders
│   ├── styles/
│   │   ├── global.css          # Color palette variables, typography, resets
│   │   ├── Navbar.css          # Header, topbar, mobile drawer
│   │   ├── Hero.css            # Hero visual styling & enquiry card
│   │   ├── Vehicles.css        # Vehicle cards, filter tabs, search bar
│   │   ├── Sections.css        # About, packages, services, gallery, contact
│   │   ├── Footer.css          # Footer styling & social icons
│   │   └── WhatsAppButton.css  # Floating WhatsApp pulse & scroll-to-top
│   ├── App.jsx                 # Main React Application
│   └── main.jsx                # React DOM Mount Entry
├── index.html                  # HTML5 entry with meta tags & Google Fonts
├── vite.config.js              # Vite build configuration
├── package.json                # Project dependencies
└── README.md                   # Complete documentation
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed.

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).

### 3. Production Build
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory, ready to deploy to Netlify, Vercel, Firebase, AWS S3, or any static hosting server.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🖼️ How to Upload Your Company Logo

1. Simply place your image named `logo.png` directly into the `public/` directory:
   ```
   public/logo.png
   ```
2. The `Logo.jsx` component automatically detects `logo.png` and displays it instantly!
3. If no image is uploaded, the website automatically displays the handcrafted luxury SVG crest with the Charminar crown, gold ring, and typography:
   **THE HYDERABAD TOURS & TRAVELS (Hyderabad Travels and Tours)**.

---

## ⚙️ How to Update Business Phone & Contact Numbers

All business details are centralized in `src/data/config.js`:
```javascript
export const BUSINESS_CONFIG = {
  name: "The Hyderabad Tours & Travels",
  altName: "Hyderabad Travels and Tours",
  phone: "+91 98765 43210",          // Display phone
  phoneRaw: "+919876543210",         // tel: clickable link
  whatsapp: "919876543210",          // WhatsApp number for wa.me links
  email: "mktourtravels3@gmail.com",
  address: "Plot No. 48, Gachibowli - Miyapur Road, Near Hitec City & ORR, Hyderabad, Telangana 500084, India",
  hours: "24/7 Available for Bookings & Support"
};
```
Updating this single file will update the entire website automatically!

