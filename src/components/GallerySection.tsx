import { useState, useMemo } from "react";
import {
  Camera,
  ImageIcon,
  Layers,
  Home,
  DoorOpen,
  Building,
} from "lucide-react";

const galleryImages = [
  { id: 1, image: "/images/gallery/image1.webp", category: "Exterior" },
  { id: 2, image: "/images/gallery/image2.webp", category: "Reception" },
  { id: 3, image: "/images/gallery/image3.webp", category: "Rooms" },
  { id: 4, image: "/images/gallery/image4.webp", category: "Rooms" },
  { id: 5, image: "/images/gallery/hotel-front.webp", category: "Exterior" },
  { id: 6, image: "/images/gallery/image6.webp", category: "Rooms" },
  { id: 7, image: "/images/gallery/image7.webp", category: "Rooms" },
  { id: 8, image: "/images/gallery/image8.webp", category: "Rooms" },
];

const categories = [
  { id: "All", label: "All Photos", icon: Layers },
  { id: "Rooms", label: "Our Rooms", icon: Home },
  { id: "Reception", label: "Lobby & Reception", icon: DoorOpen },
  { id: "Exterior", label: "Exterior & Parking", icon: Building },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return galleryImages;

    return galleryImages.filter(
      (image) => image.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="gallery"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/40 px-3 py-1 rounded-full text-rose-600 text-xs font-bold uppercase tracking-wider">
            <Camera size={14} />
            Verified Property Photos
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Take A Virtual Walkthrough
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
            100% real photographs of our rooms, reception,
            parking area and facilities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border
                ${
                  activeFilter === category.id
                    ? "bg-rose-600 text-white border-rose-600"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Icon size={14} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={`Hotel Dream View ${item.category}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold">
                {item.category}
              </span>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-base">
                  {item.category}
                </h3>

                <div className="flex items-center gap-2 text-slate-300 text-xs mt-1">
                  <ImageIcon size={12} />
                  Dream View Certified Stay
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl">
          {[
            { metric: "4 Premium", label: "Room Types" },
            { metric: "24/7", label: "Reception" },
            { metric: "100%", label: "Safe & Sanitized" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                {item.metric}
              </h4>

              <p className="text-slate-400 text-xs uppercase font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}