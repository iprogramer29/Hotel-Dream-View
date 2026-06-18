import { Room, AddOnOption } from '../types';

export const ROOMS: Room[] = [
  {
    id: 'penthouse-suite',
    name: 'Penthouse Dream Suite',
    tagline: 'The ultimate sanctuary of absolute luxury',
    description: 'Bespoke custom-designed suite on the highest floor. Includes private heated plunge pool, dedicated personalized butler portal, and fully panoramic floor-to-ceiling vistas.',
    longDescription: 'Our Penthouse Dream Suite represents the pinnacle of hospitality. Positioned exclusively on our top floor, this suite is designed for guests seeking complete privacy combined with extraordinary, unobstructed views. It features an array of high-end finishes, including a master bathroom with a deep Italian soaking tub, a multi-zone ambient lighting controller, and a private heated terrace plunge pool. Your stay is complemented by direct concierge paging and upscale local organic refreshments refreshed daily.',
    price: 350,
    capacity: 2,
    size: 95,
    bedType: 'Ultra King Size (Sertapedic)',
    view: 'Panoramic Sunset & Coastal View',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Private Heated Plunge Pool',
      'In-Room Butler Paging Service',
      'Interactive Smart Home Console',
      'Deep Soaking Freestanding Tub',
      'Nespresso Vertuo Coffee Station',
      'Premium Organic Towels & Robes',
      'Priority Evening Turndown Service',
      'Complimentary Optical High-Speed WiFi'
    ],
    featured: true
  },
  {
    id: 'horizon-deluxe',
    name: 'Horizon Deluxe Balcony',
    tagline: 'Panoramic vistas framed by classic comfort',
    description: 'Chic modern layout featuring an expansive open-air private balcony. Optimized for gorgeous sunset relaxation with top-tier amenities and smart climate systems.',
    longDescription: 'The Horizon Deluxe Balcony room strikes a seamless balance between elegant indoor aesthetics and refreshing outdoor space. Slide open the heavy double-glazed acoustic doors to step onto your private timber-decked balcony, complete with padded lounge seating. The room incorporates modern minimalist design elements, a floating oak desk for business calls, high-end organic bath amenities, and an advanced automated blackout blind controller to guarantee peaceful, undisturbed rest.',
    price: 180,
    capacity: 2,
    size: 45,
    bedType: 'Executive King Size',
    view: 'Skyline & Ocean Horizon View',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Expansive Open-Air Wooden Balcony',
      'Luxury Rain Shower System',
      'Automated Somfy Blackout Blinds',
      'Ergonomic Workstation with Hubs',
      'Nespresso Espresso Machine',
      '4K Smart Television with Streaming',
      'Marshall Bluetooth Sound Cylinder',
      'Plush Egyptian Cotton Bathrobes'
    ],
    featured: true
  },
  {
    id: 'pacific-family-villa',
    name: 'Pacific Family Oasis Villa',
    tagline: 'Multi-room grandeur surrounded by nature',
    description: 'Spacious multi-bedroom private layout facing the calm garden landscape. Equipped with lounge area, dining space, and customized child bedding systems.',
    longDescription: 'The Pacific Family Oasis Villa is our premier solution for family stays. This sprawling ground-level layout enjoys high pitched ceilings, offering multiple distinct areas including two separate sleep quarters, a shared central central lounge with a plush wrap-around sofa, and a private botanical terrace. It provides child-safe environments with optional guard rail configurations, customizable twin-bed options, and high-efficiency washer/dryer facilities for maximum multi-day stay convenience.',
    price: 290,
    capacity: 5,
    size: 110,
    bedType: '1 King Bed + 2 Twin Beds + 1 Rollaway',
    view: 'Botanical Garden & Tranquil Pond View',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Spacious Double Bedroom Layout',
      'Private Landscaped Botanical Patio',
      'Well-Equipped Kitchenette & Table',
      'In-Suite Direct Washer & Dryer',
      'Double Sinks & Walk-In Wardrobes',
      'Pre-loaded Kid Console & Board Games',
      'Fully-Stocked Mineral Water Bar',
      'Exclusive Room-Service Priority'
    ],
    featured: false
  },
  {
    id: 'vista-executive',
    name: 'Vista Executive Twin',
    tagline: 'Efficient layouts for premium corporate travelers',
    description: 'Dual beds meticulously styled for maximum utility. Equipped with noise-reducing acoustic wall treatments, premium espresso hubs and rich study chairs.',
    longDescription: 'Our Vista Executive Twin is engineered for traveling colleagues, corporate executives, or close friends seeking elite comfort. Every element has been optimized: dual separate premium twin beds, high-efficiency task desks, smart multi-point USB outlets, state-of-the-art acoustic wall insulation for high-focus calls, and dual therapeutic armchairs. The spacious bathroom is equipped with quick-warming floors and high-pressure rainfall jets to refresh you before major morning events.',
    price: 150,
    capacity: 2,
    size: 38,
    bedType: '2 Premium Double Beds',
    view: 'Metropolitan Landscape View',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Dual Certified Orthopedic Beds',
      'Acoustic Soundproofing Cladding',
      'Premium Heated Bathroom Floor Tiles',
      'Dual USB-C Task Reading Lamps',
      'Double-Sized Safe for High-End Gear',
      'Organic Herbal Tea Apothecary',
      'Smart Climate Nest Control Unit',
      'Complimentary Laundry Steam Press'
    ],
    featured: false
  }
];

export const ADD_ONS: AddOnOption[] = [
  {
    id: 'airport-transfer',
    name: 'Private Luxury Airport Pick-up',
    price: 65,
    description: 'Chauffeur-driven luxury EV directly from the terminal to the hotel gates.',
    isPerDay: false
  },
  {
    id: 'spa-pass',
    name: 'Day Pass: Serene Spa & Hot Stone Wellness',
    price: 45,
    description: 'All-day unlimited access to Swedish saunas, volcanic salt scrub steam rooms and herbal lounge.',
    isPerDay: true
  },
  {
    id: 'early-checkin',
    name: 'Guaranteed Early Check-in (10:00 AM)',
    price: 30,
    description: 'Bypass standard 3:00 PM check-in and access your suite fresh from the morning flight.',
    isPerDay: false
  },
  {
    id: 'laundry-unlimited',
    name: 'Unlimited Steam Express Laundry',
    price: 20,
    description: 'Daily pickup and same-day delivery of up to five garments, perfectly steamed and pressed.',
    isPerDay: true
  }
];

export const GALLERY_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    title: 'Infinity Pool & Exterior Sunset',
    category: 'Exterior'
  },
  {
    url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    title: 'Grand Marble Lobby Entrance',
    category: 'Lobby'
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    title: 'Aura Thermal Spa Sanctuary',
    category: 'Amenities'
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    title: 'Suite Bath with Botanical Views',
    category: 'Rooms'
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    title: 'Morning Zenith Sunrise Lounge',
    category: 'Dining'
  },
  {
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    title: 'Deluxe Horizon Bedroom Balcony',
    category: 'Rooms'
  }
];
