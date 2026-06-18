import { Booking, Inquiry, Review } from '../types';

// Pre-seeded Google Reviews for a 4.9-star experience
const PRE_SEEDED_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Vance',
    rating: 5,
    text: 'An absolutely flawless stay at the Dream View. The floor-to-ceiling vistas from the private terrace in the Horizon suite were breathtaking, and the custom bedding made me feel like I was sleeping on clouds. Check-in was painless and the team accommodated my early arrival seamlessly. I will be recommending this to everyone visiting.',
    stayDate: 'May 2026',
    roomType: 'Horizon Deluxe Balcony',
    approved: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    createdAt: new Date('2026-05-18T10:00:00Z').toISOString()
  },
  {
    id: 'rev-2',
    author: 'Marcus Brody',
    rating: 5,
    text: 'Spent our anniversary in the Penthouse Dream Suite. The private heated plunge pool overlooking the sunset was worth every single dollar. The personalized service and butler console was highly attentive without being intrusive. Truly five-star level attention to detail. We are already looking for excuses to return next winter.',
    stayDate: 'June 2026',
    roomType: 'Penthouse Dream Suite',
    approved: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    createdAt: new Date('2026-06-05T14:30:00Z').toISOString()
  },
  {
    id: 'rev-3',
    author: 'Siddharth Patel',
    rating: 4,
    text: 'Wonderful, relaxing family weekend. The Pacific Family Oasis design fits 5 of us comfortably without feeling crowded. The enclosed garden patio was a beautiful, safe spot for kids to play in the mornings. The unlimited express streaming console kept everyone happy in the evenings. Only constructive note is to book the spa treatment a few days in advance as it fills up!',
    stayDate: 'June 2026',
    roomType: 'Pacific Family Oasis Villa',
    approved: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    createdAt: new Date('2026-06-11T09:15:00Z').toISOString()
  },
  {
    id: 'rev-4',
    author: 'Helena Carter',
    rating: 5,
    text: 'A clean, modern twin setup with incredible city sunset scenery. As a frequent business traveler, I highly valued the solid acoustic isolation of the Vista Twin room; it made late-night Zoom coordination quiet and highly productive. The espressos, rain shower water pressure, and heated floor tiles are remarkable touches.',
    stayDate: 'April 2026',
    roomType: 'Vista Executive Twin',
    approved: true,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    createdAt: new Date('2026-04-22T16:45:00Z').toISOString()
  }
];

// Pre-seeded reservation bookings for lookup tests (e.g. searching "RES-1001" or email)
const PRE_SEEDED_BOOKINGS: Booking[] = [
  {
    id: 'RES-1001',
    roomTypeId: 'horizon-deluxe',
    roomName: 'Horizon Deluxe Balcony',
    checkIn: '2026-07-15',
    checkOut: '2026-07-18',
    guests: 2,
    guestName: 'Richard Hendrick',
    guestEmail: 'richard@piedpiper.com',
    guestPhone: '+1 (555) 732-8411',
    specialRequests: 'High floor requested. Prefer hypoallergenic pillows if possible.',
    totalPrice: 540,
    status: 'Confirmed',
    addOns: ['Guaranteed Early Check-in (10:00 AM)'],
    createdAt: new Date('2026-06-10T12:00:00Z').toISOString()
  },
  {
    id: 'RES-1002',
    roomTypeId: 'penthouse-suite',
    roomName: 'Penthouse Dream Suite',
    checkIn: '2026-08-01',
    checkOut: '2026-08-03',
    guests: 2,
    guestName: 'Erlich Bachman',
    guestEmail: 'erlich@aviato.com',
    guestPhone: '+1 (415) 869-3221',
    specialRequests: 'Champagne on arrival and extra towels near the plunge pool.',
    totalPrice: 765,
    status: 'Confirmed',
    addOns: ['Private Luxury Airport Pick-up', 'Day Pass: Serene Spa & Hot Stone Wellness'],
    createdAt: new Date('2026-06-12T17:40:00Z').toISOString()
  }
];

const STORAGE_KEYS = {
  BOOKINGS: 'dreamview_bookings',
  INQUIRIES: 'dreamview_inquiries',
  REVIEWS: 'dreamview_reviews'
};

export const storage = {
  // --- Bookings Database ---
  getBookings(): Booking[] {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(PRE_SEEDED_BOOKINGS));
      return PRE_SEEDED_BOOKINGS;
    }
    return JSON.parse(data);
  },

  getBookingById(id: string): Booking | undefined {
    const bookings = this.getBookings();
    return bookings.find(b => b.id.toUpperCase() === id.toUpperCase());
  },

  getBookingsByEmail(email: string): Booking[] {
    const bookings = this.getBookings();
    return bookings.filter(b => b.guestEmail.toLowerCase().trim() === email.toLowerCase().trim());
  },

  saveBooking(booking: Booking): void {
    const bookings = this.getBookings();
    bookings.push(booking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  },

  cancelBooking(id: string): boolean {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      bookings[index].status = 'Cancelled';
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
      return true;
    }
    return false;
  },

  // --- Inquiries Database ---
  getInquiries(): Inquiry[] {
    const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return data ? JSON.parse(data) : [];
  },

  saveInquiry(inquiry: Inquiry): void {
    const inquiries = this.getInquiries();
    inquiries.push(inquiry);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  },

  // --- Reviews Database ---
  getReviews(): Review[] {
    const data = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(PRE_SEEDED_REVIEWS));
      return PRE_SEEDED_REVIEWS;
    }
    return JSON.parse(data);
  },

  saveReview(review: Review): void {
    const reviews = this.getReviews();
    reviews.unshift(review); // Add user reviews to the top
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  },

  // Reset helper if user wants a clean slate
  resetAll(): void {
    localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
    localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.REVIEWS);
  }
};
