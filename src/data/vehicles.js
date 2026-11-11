// Vehicle Rental Fleet Data - The Hyderabad Tours & Travels
// Confirmed client pricing. Tolls, parking, and interstate permit taxes are extra.

export const VEHICLE_CATEGORIES = [
  { id: "all", label: "All Vehicles" },
  { id: "cars-suv", label: "Cars & SUVs (₹13 - ₹19/km)" },
  { id: "tempo-traveller", label: "Tempo Traveller (₹27/km)" },
  { id: "force-urbania", label: "Force Urbania (₹34/km)" },
  { id: "mini-bus", label: "Mini Bus (22 - 28 Seater)" },
  { id: "luxury-bus", label: "Luxury Bus (30 - 50 Seater)" }
];

export const VEHICLES = [
  // --- CARS & SUVS ---
  {
    id: "maruti-ciaz",
    name: "Maruti Suzuki Ciaz",
    category: "cars-suv",
    categoryLabel: "Sedan Car",
    seats: "4 Passengers + 1 Driver",
    acType: "Climate Control AC",
    ratePerKm: "₹13 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Best Value Sedan",
    highlight: "Spacious rear legroom, generous boot space, and smooth city & outstation ride.",
    image: "/fleet/maruti-ciaz/ciaz-01.jpg"
  },
  {
    id: "honda-city",
    name: "Honda City Sedan",
    category: "cars-suv",
    categoryLabel: "Executive Sedan",
    seats: "4 Passengers + 1 Driver",
    acType: "Automatic Climate AC",
    ratePerKm: "₹14 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Premium Executive",
    highlight: "Plush leather seating, silent luxury cabin, rear AC vents, and executive comfort.",
    image: "/fleet/honda-city/city-01.jpg"
  },
  {
    id: "innova-car",
    name: "Toyota Innova",
    category: "cars-suv",
    categoryLabel: "Family SUV / MPV",
    seats: "7 Passengers + 1 Driver",
    acType: "Dual Chilled AC",
    ratePerKm: "₹16 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Reliable Family Choice",
    highlight: "Spacious 7-seater comfort, high luggage capacity, and proven highway reliability.",
    image: "/fleet/toyota-innova/innova-01.jpg"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "cars-suv",
    categoryLabel: "Luxury SUV",
    seats: "6-7 Passengers + 1 Driver",
    acType: "Multi-Zone Automatic AC",
    ratePerKm: "₹19 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Top Luxury SUV",
    highlight: "Plush captain seats, supreme suspension smoothness, and silent highway comfort.",
    image: "/fleet/innova-crysta/crysta-01.jpg"
  },

  // --- TEMPO TRAVELLER ---
  {
    id: "tempo-12",
    name: "12 Seater Tempo Traveller",
    category: "tempo-traveller",
    categoryLabel: "Tempo Traveller",
    seats: "12 Passengers + 1 Driver",
    acType: "Dual Powerful AC",
    ratePerKm: "₹27 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Most Popular Group Fleet",
    highlight: "2x1 pushback bucket seats, individual AC louvers, LED TV & sound, luggage boot.",
    image: "/fleet/tempo-traveller/tempo-02.jpg"
  },
  {
    id: "tempo-17",
    name: "17 Seater Tempo Traveller",
    category: "tempo-traveller",
    categoryLabel: "Tempo Traveller",
    seats: "17 Passengers + 1 Driver",
    acType: "Full Cabin Air Conditioning",
    ratePerKm: "₹30 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Extended Family Fleet",
    highlight: "High roof headroom, wide aisle, recliner seats, and rooftop carrier for luggage.",
    image: "/fleet/tempo-traveller/tempo-01.jpg"
  },

  // --- FORCE URBANIA ---
  {
    id: "urbania-12",
    name: "12 Seater Force Urbania",
    category: "force-urbania",
    categoryLabel: "Luxury Force Urbania",
    seats: "12 Passengers + 1 Driver",
    acType: "World-Class Sealed Climate AC",
    ratePerKm: "₹34 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Next-Gen Luxury Van",
    highlight: "European monocoque body, executive captain seats, personal USB fast chargers.",
    image: "/fleet/force-urbania/urbania-01.jpg"
  },
  {
    id: "urbania-16",
    name: "16 Seater Force Urbania",
    category: "force-urbania",
    categoryLabel: "Luxury Force Urbania",
    seats: "16 Passengers + 1 Driver",
    acType: "Multi-Zone Climate Control",
    ratePerKm: "₹38 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "VIP & Corporate Choice",
    highlight: "Ultra-quiet cabin, panoramic tinted glass, mood lighting, and supreme ride comfort.",
    image: "/fleet/force-urbania/urbania-03.jpg"
  },

  // --- MINI BUS ---
  {
    id: "mini-bus-22",
    name: "22 Seater Mini Bus",
    category: "mini-bus",
    categoryLabel: "Mini Bus",
    seats: "22 Passengers + 1 Driver",
    acType: "High-Power Roof AC",
    ratePerKm: "₹42 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Events & Excursions",
    highlight: "Pushback 2x2 seating, smooth air suspension, sound system with tour mic.",
    image: "/fleet/mini-bus/bus-02.jpg"
  },
  {
    id: "mini-bus-28",
    name: "28 Seater Mini Bus",
    category: "mini-bus",
    categoryLabel: "Mini Bus",
    seats: "28 Passengers + 1 Driver",
    acType: "Central Air Conditioned",
    ratePerKm: "₹48 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "School & College Trips",
    highlight: "Deep cushioning, wide windows, large underfloor luggage bays, and speed governor.",
    image: "/fleet/mini-bus/bus-01.jpg"
  },

  // --- LUXURY BUS ---
  {
    id: "luxury-bus-30",
    name: "30 Seater Luxury Bus",
    category: "luxury-bus",
    categoryLabel: "Luxury Bus",
    seats: "30 Passengers + 1 Driver",
    acType: "Dual Compressor Powerful AC",
    ratePerKm: "₹52 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Wedding & Guest Fleet",
    highlight: "Pneumatic air suspension, luxury pushback recliners, LED entertainment screen.",
    image: "/fleet/mini-bus/bus-03.jpg"
  },
  {
    id: "luxury-bus-40",
    name: "40 Seater Luxury Bus",
    category: "luxury-bus",
    categoryLabel: "Luxury Bus",
    seats: "40 Passengers + 1 Driver",
    acType: "Heavy-Duty Commercial AC",
    ratePerKm: "₹65 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Corporate & Conventions",
    highlight: "Interstate long-haul coach, generous luggage belly space, dual highway drivers.",
    image: "/fleet/mini-bus/bus-07.jpg"
  },
  {
    id: "luxury-bus-50",
    name: "50 Seater Luxury Bus",
    category: "luxury-bus",
    categoryLabel: "Grand Luxury Coach",
    seats: "50 Passengers + 1 Driver",
    acType: "Full Climate Control AC",
    ratePerKm: "₹75 / km",
    rateNote: "Tolls, parking & taxi extra",
    tag: "Grand Yatras & Barat",
    highlight: "Maximum passenger capacity, high-power cooling, all-India permit, professional crew.",
    image: "/fleet/mini-bus/bus-08.jpg"
  }
];
