// Hourly Rental Packages Data - The Hyderabad Tours & Travels
// Designed for local city travel, business meetings, shopping, events, and airport transfers.

export const HOURLY_PACKAGES = [
  {
    id: "pkg-8hr-80km",
    name: "8 Hours / 80 Kilometers",
    badge: "Most Popular for City Work",
    idealFor: "Local business meetings, shopping sprees, family events, city appointments, and half-day sightseeing.",
    rates: [
      { vehicle: "Sedan (Ciaz / City)", startingFrom: "₹2,200", extraKm: "₹13/km", extraHr: "₹150/hr" },
      { vehicle: "Innova / Crysta", startingFrom: "₹3,400", extraKm: "₹19/km", extraHr: "₹250/hr" },
      { vehicle: "Tempo Traveller (12S)", startingFrom: "₹4,800", extraKm: "₹27/km", extraHr: "₹350/hr" },
      { vehicle: "Force Urbania (12S)", startingFrom: "₹6,000", extraKm: "₹34/km", extraHr: "₹450/hr" },
      { vehicle: "Mini Bus (22/28S)", startingFrom: "₹7,500", extraKm: "₹42/km", extraHr: "₹500/hr" }
    ],
    inclusions: [
      "Fuel charges included up to 80 Kms",
      "8 Hours of car & chauffeur availability",
      "Doorstep pickup & drop anywhere in Hyderabad",
      "Air-conditioned luxury ride"
    ],
    exclusions: [
      "Toll charges, parking fees & entry tickets (at actuals)",
      "Extra km and extra hour charges beyond package limits"
    ]
  },
  {
    id: "pkg-12hr-120km",
    name: "12 Hours / 120 Kilometers",
    badge: "Full Day City & Extended Travel",
    idealFor: "Complete day sightseeing, wedding family movement, outstation fringe visits, industrial tours, and full-day shoots.",
    rates: [
      { vehicle: "Sedan (Ciaz / City)", startingFrom: "₹3,200", extraKm: "₹13/km", extraHr: "₹150/hr" },
      { vehicle: "Innova / Crysta", startingFrom: "₹4,800", extraKm: "₹19/km", extraHr: "₹250/hr" },
      { vehicle: "Tempo Traveller (12S)", startingFrom: "₹6,800", extraKm: "₹27/km", extraHr: "₹350/hr" },
      { vehicle: "Force Urbania (12S)", startingFrom: "₹8,200", extraKm: "₹34/km", extraHr: "₹450/hr" },
      { vehicle: "Mini Bus (22/28S)", startingFrom: "₹10,500", extraKm: "₹42/km", extraHr: "₹500/hr" }
    ],
    inclusions: [
      "Fuel charges included up to 120 Kms",
      "12 Full Hours of vehicle & driver service",
      "Flexible stopovers and multiple pickup points",
      "Clean, sanitized vehicle with mobile charging"
    ],
    exclusions: [
      "Tolls, parking fees & municipal entry charges (at actuals)",
      "Night driver allowance if trip extends beyond 10:00 PM"
    ]
  }
];

