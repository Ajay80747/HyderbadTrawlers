// Centralized Business Configuration
// The Hyderabad Tours & Travels

export const BUSINESS_CONFIG = {
  name: "The Hyderabad Tours & Travels",
  altName: "Hyderabad Travels and Tours",
  tagline: "Discover Every Journey With Comfort & Care",
  location: "Hyderabad, Telangana, India",
  phone: "+91 93814 89147",
  phoneRaw: "+919381489147",
  whatsapp: "919381489147",
  whatsappDisplay: "+91 93814 89147",
  email: "mktourtravels3@gmail.com",
  address: "3-24/B, Sharada Nagar, Ramanthapur, Hyderabad, Telangana 500013, India",
  hours: "24/7 Available for Bookings & Support",
  googleMapsUrl: "https://maps.app.goo.gl/K1drzedRmfW68Bzy8",
  extraChargesNote: "Tolls, state taxes & parking charges are extra at actuals.",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919381489147",
    youtube: "https://youtube.com"
  }
};

/**
 * Generate a pre-filled WhatsApp click-to-chat URL
 * @param {string} text - URL-encoded or plain text message
 * @returns {string} - wa.me link
 */
export const getWhatsAppUrl = (text = "") => {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encoded}`;
};

/**
 * Generate click-to-call URL
 * @returns {string} - tel: link
 */
export const getPhoneUrl = () => {
  return `tel:${BUSINESS_CONFIG.phoneRaw}`;
};

