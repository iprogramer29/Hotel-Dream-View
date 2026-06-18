import AmenitiesSection from "../components/AmenitiesSection";
import ContactSection from "../components/ContactSection";
import EventsSection from "../components/EventsSection";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ReviewQRSection from "../components/ReviewQRSection";
import ReviewsSection from "../components/ReviewsSection";
import TrustBar from "../components/TrustBar";
import WhyChooseUs from "../components/WhyChooseUs";

export default function HomePage() {
    return (
        <div className="bg-[#F8F6F3] min-h-screen">
            <Navbar />

            <Hero />

            <TrustBar />

            <EventsSection />

            <WhyChooseUs />

            <GallerySection />

            <AmenitiesSection />

            <ReviewsSection />

            {/* <ReviewQRSection /> */}

            <ContactSection />

        </div>
    );
}