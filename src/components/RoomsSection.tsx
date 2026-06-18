import {
  Users,
  Wifi,
  Tv,
  Wind,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const rooms = [
  {
    name: "Deluxe Room",
    image: "/images/rooms/deluxe-1.jpg",
    description:
      "Comfortable and affordable room ideal for couples and business travellers.",
    capacity: "2 Guests",
  },
  {
    name: "Executive Room",
    image: "/images/rooms/executive-1.jpg",
    description:
      "Modern interiors with extra comfort and premium room facilities.",
    capacity: "2 Guests",
  },
  {
    name: "Family Room",
    image: "/images/rooms/family-1.jpg",
    description:
      "Spacious accommodation designed for family stays and group visits.",
    capacity: "4 Guests",
  },
  {
    name: "Suite Room",
    image: "/images/rooms/suite-1.jpg",
    description:
      "Our premium accommodation offering maximum comfort and luxury.",
    capacity: "4 Guests",
  },
];

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      className="py-24 bg-gradient-to-b from-[#F8F6F3] to-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="inline-block bg-[#C5A378]/10 text-[#C5A378] px-4 py-2 rounded-full text-sm font-semibold">
            Premium Accommodation
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Our Rooms
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover thoughtfully designed rooms offering comfort,
            convenience and a memorable stay experience at
            Hotel Dream View.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">

                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-[#C5A378] text-white text-xs px-3 py-1 rounded-full font-semibold">
                    HOTEL DREAM VIEW
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold">
                    {room.name}
                  </h3>

                  <div className="flex items-center gap-2 text-white/90 text-sm mt-2">
                    <Users size={15} />
                    {room.capacity}
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-gray-600 text-sm leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mt-5">

                  <span className="flex items-center gap-1 bg-[#F8F6F3] px-3 py-2 rounded-full text-xs">
                    <Wind size={14} />
                    AC
                  </span>

                  <span className="flex items-center gap-1 bg-[#F8F6F3] px-3 py-2 rounded-full text-xs">
                    <Wifi size={14} />
                    WiFi
                  </span>

                  <span className="flex items-center gap-1 bg-[#F8F6F3] px-3 py-2 rounded-full text-xs">
                    <Tv size={14} />
                    TV
                  </span>

                </div>

                {/* CTA */}
                <div className="mt-6 space-y-3">

                  <a
                    href="https://wa.me/919099877766"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-medium"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Inquiry
                  </a>
                  

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
