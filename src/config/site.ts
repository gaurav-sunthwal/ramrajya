// Single source of truth for Ramrajya's details. Anything marked TODO still needs client input.

export const site = {
  name: "Ramrajya",
  legalName: "Ramrajya Cineplex",
  nameDevanagari: "रामराज्य",
  descriptor: "Cineplex · Restaurant",
  description:
    "Ramrajya in Karanja Lad brings a multiplex cinema and a pure-vegetarian restaurant together under one roof at Sambhaji Chowk. Dinner, then the big screen.",
  url: "https://ramrajya.in", // TODO: confirm domain
  contact: {
    phoneDisplay: "+91 84828 88222",
    phoneLocal: "084828 88222",
    phoneHref: "tel:+918482888222",
    email: "", // TODO
    street: "Sambhaji Chowk, near Ramayan Hotel",
    city: "Karanja Lad",
    region: "Maharashtra",
    postalCode: "444105",
    mapsQuery: "Ramrajya Cineplex, Sambhaji Chowk, Karanja Lad, Maharashtra 444105",
  },
  // TODO: replace with real hours once the client shares them.
  hours: [] as { label: string; time: string }[],
  social: {
    instagram: "", // TODO
    facebook: "", // TODO
  },
  // Set to an online ticketing link (e.g. BookMyShow) if available; falls back to phone.
  ticketsUrl: "",
  nav: [
    { label: "The Cineplex", href: "#cineplex" },
    { label: "The Restaurant", href: "#restaurant" },
    { label: "An Evening Out", href: "#evening" },
    { label: "Menu", href: "#menu" },
    { label: "Find Us", href: "#visit" },
  ],
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.contact.mapsQuery)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapsQuery)}&output=embed`;
export const ticketsHref = site.ticketsUrl || site.contact.phoneHref;

// Placeholder photography (Unsplash licence, IDs in /public/images/credits.json).
// Replace files in /public/images with the client's own photos, keeping the names.
const photo = (name: string, alt: string) => ({ src: `/images/${name}.jpg`, alt });

export const images = {
  thaliVeg: photo("thali-veg", "A steel thali with paneer, chole, dal and roti"),
  thaliFestive: photo("thali-festive", "A festive vegetarian thali with sabzis, dal, sweets and paratha"),
  paneerSizzler: photo("paneer-sizzler", "Paneer tikka sizzling on a hot plate"),
  paneerMasala: photo("paneer-masala", "Paneer butter masala with rice and papad"),
  paneerCurry: photo("paneer-curry", "A rich paneer curry served with jeera rice and papad"),
  pakora: photo("pakora", "Crisp vegetable pakoras"),
  dosa: photo("dosa", "A crisp dosa on a banana leaf with chutney"),
  choleBhature: photo("chole-bhature", "Chole bhature with onion and pickle"),
  jalebi: photo("jalebi", "Fresh jalebis being fried at a sweet stall"),
  seat23: photo("seat-23", "A red velvet cinema seat, number 23"),
  seatsRow: photo("seats-row", "Rows of red cinema seats"),
  seatsAisle: photo("seats-aisle", "Red cinema seats either side of a lit aisle"),
  chaiHands: photo("chai-hands", "Two hands around a kulhad of hot chai"),
  chaiKulhad: photo("chai-kulhad", "Chai in a clay kulhad"),
  misalDip: photo("misal-dip", "Pav being dipped into spicy misal"),
  misalTop: photo("misal-top", "Misal pav with onions, lemon and farsan"),
  vadaPav: photo("vada-pav", "Vada pav with chutney and fried chilli"),
  streetChef: photo("street-chef", "A cook at work over a smoking stove at night"),
  tandoorCook: photo("tandoor-cook", "A cook slapping roti onto the wall of a tandoor"),
  roti: photo("roti", "A roti puffing on a hot tawa"),
  masalaDabba: photo("masala-dabba", "A steel masala dabba of whole and ground spices"),
  marigoldHeap: photo("marigold-heap", "A heap of fresh marigolds"),
  audience: photo("audience", "A packed audience lit by the cinema screen"),
  oldHall: photo("old-hall", "A classic cinema hall with a glowing screen"),
  popcornMachine: photo("popcorn-machine", "Fresh popcorn being scooped from the machine"),
  popcornBoxes: photo("popcorn-boxes", "Striped boxes of popcorn"),
  projectorsVintage: photo("projectors-vintage", "Vintage film projectors and reels"),
  filmReels: photo("film-reels", "A film projector and reels in black and white"),
  dal: photo("dal", "Dal tadka with dried red chillies"),
} as const;

// Hero films (Pexels / Pixabay licences, sources in /public/images/credits.json). Muted, played in sequence.
// Swap for footage of Ramrajya's own hall and kitchen when available, keeping the file names.
export const heroFilms = [
  {
    label: "The Cineplex",
    src: "/video/cinema.mp4",
    srcSmall: "/video/cinema-sm.mp4",
    poster: "/video/cinema-poster.jpg",
  },
  {
    label: "The Restaurant",
    src: "/video/restaurant.mp4",
    srcSmall: "/video/restaurant-sm.mp4",
    poster: "/video/restaurant-poster.jpg",
  },
] as const;

// Decorative still-lifes on white; rendered with the .cutout blend.
export const deco = {
  spices: "/images/deco/spice-scatter.jpg",
  cinnamon: "/images/deco/cinnamon.jpg",
  chilli: "/images/deco/chilli.jpg",
  chillies: "/images/deco/chillies.jpg",
  chilliTrio: "/images/deco/chilli-trio.jpg",
  peppercorns: "/images/deco/peppercorns.jpg",
  popcorn: "/images/deco/popcorn-kernel.jpg",
  popcornBucket: "/images/deco/popcorn-bucket.jpg",
} as const;

export type Photo = (typeof images)[keyof typeof images];

// Films currently screening. Leave empty to show the "call for showtimes" card.
export const nowShowing: { title: string; language: string; times: string[] }[] = [];

// SAMPLE menu to show the layout (pure vegetarian) — replace with the client's actual menu.
export const menu = [
  {
    category: "Starters",
    items: [
      { name: "Paneer Tikka", note: "Cottage cheese and peppers, smoked in the tandoor" },
      { name: "Hara Bhara Kebab", note: "Spinach, peas and potato, mint chutney" },
      { name: "Misal Pav", note: "Spicy sprout tarri, farsan, onion, lemon" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Varhadi Shev Bhaji", note: "Vidarbha's fiery gram-flour sev curry" },
      { name: "Paneer Butter Masala", note: "Tomato, cream, kasuri methi" },
      { name: "Dal Tadka", note: "Yellow lentils, ghee, cumin, garlic" },
    ],
  },
  {
    category: "Rice & Breads",
    items: [
      { name: "Veg Dum Biryani", note: "Slow-cooked, sealed, fragrant" },
      { name: "Jeera Rice", note: "Basmati with toasted cumin" },
      { name: "Butter Naan & Tandoori Roti", note: "Fresh from the tandoor" },
    ],
  },
  {
    category: "For the Interval",
    items: [
      { name: "Popcorn", note: "Salted, caramel or cheese" },
      { name: "Garam Jalebi", note: "Crisp, syrupy, straight from the kadhai" },
      { name: "Cold Coffee", note: "Thick, chilled, generous" },
    ],
  },
];
