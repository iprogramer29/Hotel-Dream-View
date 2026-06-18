export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  capacity: number;
  size: number; // in sq meters
  bedType: string;
  view: string;
  images: string[];
  amenities: string[];
  featured: boolean;
}

export interface Booking {
  id: string;
  roomTypeId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  totalPrice: number;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
  addOns: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  roomInterest: string;
  message: string;
  status: 'New' | 'Replied';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  stayDate: string;
  roomType: string;
  approved: boolean;
  avatar?: string;
  createdAt: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
  isPerDay: boolean;
}
