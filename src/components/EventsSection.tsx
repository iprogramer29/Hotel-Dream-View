import {
  Cake,
  Heart,
  PartyPopper,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const events = [
  {
    title: "Birthday Celebration",
    image: "/images/gallery/image7.webp",
    icon: Cake,
    description:
      "Celebrate birthdays with room decoration, cake arrangements and comfortable stay options.",
  },
  {
    title: "Anniversary Celebration",
    image: "/images/gallery/image6.webp",
    icon: Heart,
    description:
      "Romantic room setup and memorable anniversary celebrations for couples.",
  },
  {
    title: "Private Events",
    image: "/images/gallery/image3.webp",
    icon: PartyPopper,
    description:
      "Host family gatherings, engagement functions and private celebrations.",
  },
];

export default function EventsSection() {
  const whatsappLink =
    "https://wa.me/919099877766?text=Hello%20Hotel%20Dream%20View,%20I%20want%20information%20about%20event%20booking.";

  return (
    <section
      id="events"
      className="py-16 bg-[#f5f5f5]"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="mb-10">

          <p className="text-[#d84e55] font-semibold text-sm uppercase tracking-wider">
            EVENT BOOKINGS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Celebrate Special Moments at Hotel Dream View
          </h2>

          <p className="text-gray-600 mt-3 max-w-3xl">
            Birthday parties, anniversary celebrations, family gatherings
            and private events with comfortable rooms and personalized setup.
          </p>

        </div>

        {/* Event Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition"
              >

                <div className="relative">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-white rounded-xl p-2 shadow">
                    <Icon
                      className="text-[#d84e55]"
                      size={20}
                    />
                  </div>

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-2">

                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-600"
                      />
                      Decoration Available
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-600"
                      />
                      Family Friendly
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-600"
                      />
                      Food Arrangements
                    </div>

                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 w-full bg-[#d84e55] hover:bg-[#c43c43] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
                  >
                    <MessageCircle size={18} />
                    Enquire Now
                  </a>

                </div>

              </div>
            );
          })}
        </div>

        {/* OYO Style Booking Banner */}

        <div className="mt-10 bg-white border rounded-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center">

            <div className="p-8 md:p-10">

              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                Event Booking Available
              </span>

              <h3 className="text-3xl font-bold mt-4">
                Planning a Birthday or Anniversary?
              </h3>

              <p className="text-gray-600 mt-4">
                Contact Hotel Dream View for room availability,
                decoration setup, food arrangements and celebration packages.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  WhatsApp Booking
                </a>

                <a
                  href="tel:+919099877766"
                  className="border px-6 py-3 rounded-xl font-semibold"
                >
                  Call Now
                </a>

              </div>

            </div>

            <img
              src="/images/gallery/image7.webp"
              alt="Event Booking"
              className="h-[350px] w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}