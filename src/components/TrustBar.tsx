import {
  Wifi,
  Car,
  Shield,
  Heart,
  Clock3,
} from "lucide-react";

export default function TrustBar() {
  const features = [
    {
      icon: Wifi,
      title: "Free High-Speed WiFi",
      subtitle: "Always connected",
    },
    {
      icon: Car,
      title: "On-Site Parking",
      subtitle: "Safe & reserved space",
    },   
    {
      icon: Shield,
      title: "CCTV Security",
      subtitle: "24/7 round-the-clock protection",
    },
    {
      icon: Heart,
      title: "Couple Friendly",
      subtitle: "Local IDs welcome",
    },
    {
      icon: Clock3,
      title: "24×7 Reception",
      subtitle: "Express check-in anytime",
    },
  ];

  return (
    <section className="bg-white py-10 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section subtle identifier line for app feel */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <div className="h-1 w-8 bg-rose-500 rounded-full" />
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Hotel Assured Promises
          </p>
        </div>

        {/* Dynamic Responsive Grid System */}
        {/* Auto-adjusts: 2 columns on small screens, 3 on tablets, 5 on desktops */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-rose-100 rounded-2xl p-4 flex flex-col items-start justify-between text-left hover:shadow-[0_10px_30px_rgba(244,63,94,0.06)] transition-all duration-300"
              >
                {/* Floating micro accent border shown on hover */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

                <div className="w-full">
                  {/* Icon container block */}
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-rose-50 border border-slate-100 group-hover:border-rose-100 flex items-center justify-center transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-slate-600 group-hover:text-rose-500 transition-colors duration-300"
                    />
                  </div>

                  {/* Text Meta Stack */}
                  <div className="mt-4">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400 font-medium group-hover:text-slate-500 transition-colors">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}