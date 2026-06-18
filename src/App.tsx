import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import WhyChooseUsSection from "./components/WhyChooseUs";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Individual Pages */}
        <Route path="/why-choose-us" element={<WhyChooseUsSection />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/reviews" element={<ReviewsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </BrowserRouter>
  );
}