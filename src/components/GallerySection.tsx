import { useState } from "react";
import { Camera, ImageIcon, Layers, Home, DoorOpen, Building } from "lucide-react";

const galleryImages = [
  {
    image: "/images/gallery/image1.jpeg",
    title: "",
    category: "Exterior",
  },
  {
    image: "/images/gallery/image2.jpeg",
    title: "",
    category: "Reception",
  },
  {
    image: "/images/gallery/image3.jpeg",
    title: "",
    category: "Rooms",
  },
  {
    image: "/images/gallery/image4.jpeg",
    title: "",
    category: "Rooms",
  },
  {
    image: "/images/gallery/hotel-front.jpg",
    title: "",
    category: "Exterior",
  },
  {
    image: "/images/gallery/image6.jpeg",
    title: "",
    category: "Rooms",
  },
  {
    image: "/images/gallery/image7.jpeg",
    title: "",
    category: "Rooms",
  },
  {
    image: "/images/gallery/image8.jpeg",
    title: "",
    category: "Rooms",
  },
  {
    image: "/images/gallery/image9.jpeg",
    title: "",
    category: "Rooms",
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { id: "All", label: "All Photos", icon: <Layers size={14} /> },
    { id: "Rooms", label: "Our Rooms", icon: <Home size={14} /> },
    { id: "Reception", label: "Lobby & Reception", icon: <DoorOpen size={14} /> },
    { id: "Exterior", label: "Exterior & Parking", icon: <Building size={14} /> },
  ];

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/40 px-3 py-1 rounded-full text-rose-600 text-xs font-bold uppercase tracking-wider">
            <Camera size={14} />
            Verified Property Photos
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Take A Virtual Walkthrough
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
            100% real, unaltered photographs of our spaces so you know exactly what your room looks like before check-in.
          </p>
        </div>

        {/* OYO-Style Interactive Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm border ${activeFilter === tab.id
                  ? "bg-rose-600 border-rose-600 text-white shadow-rose-600/10"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Display Grid System */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Actual Image Asset */}
              <img
                src={item.image}
                alt={item.title || "Hotel Dream View"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Functional App Card Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* Dynamic Categorization Badge */}
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider shadow-sm">
                {item.category}
              </span>

              {/* Title Content Information Strip */}
              <div className="absolute bottom-4 inset-x-4">
                <h3 className="text-white text-base font-bold tracking-tight">
                  {item.title || `${item.category} Highlight`}
                </h3>

                <div className="flex items-center gap-1.5 text-slate-300 text-xs mt-1 font-medium">
                  <ImageIcon size={12} className="text-rose-400" />
                  <span>Dream View Certified Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic OYO Trust Banner Metrics */}
        <div className="grid grid-cols-3 gap-4 mt-12 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/40">
          {[
            { metric: "4 Premium", label: "Room Tiers" },
            { metric: "24/7", label: "Desk Desk Support" },
            { metric: "100%", label: "Safe & Sanitized" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {stat.metric}
              </h4>
              <p className="text-slate-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}