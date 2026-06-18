import {
  Wifi,
  Wind,
  Car,
  UtensilsCrossed,
  Tv,
  ShieldCheck,
  Clock3,
  Bath,
  BellRing,
  Building2,
  CheckCircle2,
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free High-Speed WiFi",
    desc: "Uninterrupted connectivity inside all rooms.",
    tag: "Complimentary"
  },
  {
    icon: Wind,
    title: "Powerful AC",
    desc: "Individual room climate control systems.",
    tag: "Essential"
  },
  {
    icon: UtensilsCrossed,
    title: "In-House Dining",
    desc: "Fresh, hot meals prepared locally on order.",
    tag: "Fresh Food"
  },
  {
    icon: Car,
    title: "Hassle-Free Parking",
    desc: "Secure space for vehicles directly on site.",
    tag: "Free Parking"
  },
  {
    icon: BellRing,
    title: "Prompt Room Service",
    desc: "In-room assistance available at one click.",
    tag: "24/7"
  },
  {
    icon: Building2,
    title: "Modern Lift Access",
    desc: "Smooth elevator facility to all hotel floors.",
    tag: "Easy Access"
  },
  {
    icon: Bath,
    title: "24h Geyser Hot Water",
    desc: "Continuous hot and cold running water supply.",
    tag: "Essential"
  },
  {
    icon: Tv,
    title: "Flat Screen LED TV",
    desc: "Loaded with dynamic entertainment channels.",
    tag: "Entertainment"
  },
  {
    icon: ShieldCheck,
    title: "Strict CCTV Security",
    desc: "Monitored paths for completely safe premises.",
    tag: "100% Secure"
  },
  {
    icon: Clock3,
    title: "Always-On Front Desk",
    desc: "Round-the-clock express reception counter.",
    tag: "Flexible"
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Typography Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/40 px-3 py-1 rounded-full text-rose-600 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 size={14} />
            Verified Stay Amenities
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Premium Features. Budget Pricing.
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
            Everything you expect from an upscale stay experience, structured perfectly for smart, budget-conscious travelers.
          </p>
        </div>

        {/* Dynamic Mobile App-Style Core Summary Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 text-white relative overflow-hidden shadow-xl shadow-slate-950/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            <div className="p-2">
              <span className="block text-2xl font-black text-rose-500">24/7</span>
              <p className="mt-1 text-xs text-slate-400 font-bold uppercase tracking-wider">Active Desk Desk</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2 lg:pl-6">
              <span className="block text-2xl font-black text-emerald-400">100% Free</span>
              <p className="mt-1 text-xs text-slate-400 font-bold uppercase tracking-wider">High-Speed WiFi</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2 lg:pl-6">
              <span className="block text-2xl font-black text-amber-400">Hi-Power AC</span>
              <p className="mt-1 text-xs text-slate-400 font-bold uppercase tracking-wider">In Every Room</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2 lg:pl-6">
              <span className="block text-2xl font-black text-blue-400">Smart Safe</span>
              <p className="mt-1 text-xs text-slate-400 font-bold uppercase tracking-wider">Perimeter Security</p>
            </div>
          </div>
        </div>

        {/* Dense, High-Scannability Amenities Grid (5-Columns on Desktop) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Line Meta Category Tag */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-rose-50 group-hover:border-rose-100 flex items-center justify-center transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-slate-600 group-hover:text-rose-500 transition-colors"
                      />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-500">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description Structural Block */}
                  <h3 className="mt-4 text-sm font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-medium group-hover:text-slate-500 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Simulated Verification Checked Micro-Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Property Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}