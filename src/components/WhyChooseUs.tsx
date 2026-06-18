import {
  MapPin,
  ShieldCheck,
  Clock3,
  Car,
  UtensilsCrossed,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Prime Hub Location",
    description: "Conveniently located opposite Dindoli Fire Station with zero-hassle transit access across Surat.",
    badge: "Easy Transit",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
    iconColor: "text-blue-500 bg-blue-50"
  },
  {
    icon: Car,
    title: "Free On-Site Parking",
    description: "Safe, well-lit, and spacious parking facility managed entirely on-premise for guest vehicles.",
    badge: "Complimentary",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
    iconColor: "text-amber-500 bg-amber-50"
  },
  {
    icon: UtensilsCrossed,
    title: "Quick Room Service",
    description: "Hungry? Order delicious, freshly prepared meals delivered straight to your room doors rapidly.",
    badge: "On-Demand",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
    iconColor: "text-purple-500 bg-purple-50"
  },
  {
    icon: Clock3,
    title: "24/7 Front Desk",
    description: "Arriving late or leaving early? Our reception team is stationed round-the-clock for assistance.",
    badge: "Express Check-In",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconColor: "text-emerald-500 bg-emerald-50"
  },
  {
    icon: ShieldCheck,
    title: "CCTV Smart Security",
    description: "Complete perimeter surveillance and strict entry monitoring for a fully secure stay environment.",
    badge: "100% Secured",
    badgeColor: "bg-rose-50 text-rose-600 border-rose-100",
    iconColor: "text-rose-500 bg-rose-50"
  },
  {
    icon: HeartHandshake,
    title: "Couple & Family Welcoming",
    description: "A completely judgment-free, respectful, and safe booking environment for all modern guests.",
    badge: "Local IDs Accepted",
    badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
    iconColor: "text-indigo-500 bg-indigo-50"
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Structural visual cues */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/40 px-3 py-1 rounded-full text-rose-600 text-xs font-bold uppercase tracking-wider">
            ⚡ Dream View Advantages
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything You Need For A Hassle-Free Stay
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            We focus on providing the essential modern travel amenities without the premium price tags.
          </p>
        </div>

        {/* Modern App-Style Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line containing Category Badge & Icon */}
                  <div className="flex items-center justify-between gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${feature.iconColor} flex items-center justify-center shrink-0`}>
                      <Icon size={24} />
                    </div>
                    
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${feature.badgeColor} uppercase tracking-wide shadow-sm`}>
                      {feature.badge}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="mt-5 text-lg font-bold text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Feature Body Text */}
                  <p className="mt-2 text-slate-500 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom interactive feedback strip */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Standard Amenity</span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" /> Verified
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}