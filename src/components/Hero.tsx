import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Wifi,
  Tv,
  Wind,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  UserCheck
} from "lucide-react";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/919099877766?text=Hello%20Hotel%20Dream%20View,%20I%20would%20like%20to%20make%20an%20enquiry.";

  return (
    <section className="relative min-h-screen bg-slate-50 flex items-center pt-24 pb-16 overflow-hidden font-sans">
      
      {/* OYO-inspired Top Accent Banner */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />

      {/* Decorative Background Graphics */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-100 rounded-l-[100px] hidden lg:block -z-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Value Propositions & Badges (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Instant Trust Tag */}
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full text-rose-600">
              <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Top Rated Budget Stay in Surat
              </span>
            </div>

            {/* Punchy Hotel Header */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
                Hotel <span className="text-rose-600 inline-block relative">Dream View</span>
              </h1>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-lg">
                <span>4.2</span>
                <div className="flex text-sm">★ ★ ★ ★ ☆</div>
                <span className="text-slate-400 text-sm font-normal ml-2">(140+ Reviews)</span>
              </div>
            </div>

            {/* Location with Micro Map Shortcut Look */}
            <div className="flex items-start gap-2 text-slate-600 bg-white p-3 rounded-xl shadow-sm border border-slate-100 max-w-md">
              <MapPin className="text-rose-500 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-sm text-slate-800">Dindoli, Surat</p>
                <p className="text-xs text-slate-500">Opp. Dindoli Fire Station — Near Business Hubs</p>
              </div>
            </div>

            {/* OYO-Style Property Highlights (The Clenchers) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: "Couple Friendly", desc: "Local IDs Accepted" },
                { label: "Pay At Hotel", desc: "No Advance Needed" },
                { label: "Sanitized Rooms", desc: "100% Safe Stay" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-start gap-2 shadow-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.label}</p>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Standard Amenities Row */}
            <div className="pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Free Amenities Included:</p>
              <div className="flex flex-wrap gap-4 text-slate-700 text-sm">
                <span className="flex items-center gap-1.5"><Wifi size={16} className="text-slate-400" /> Free High-Speed WiFi</span>
                <span className="flex items-center gap-1.5"><Wind size={16} className="text-slate-400" /> Air Conditioned</span>
                <span className="flex items-center gap-1.5"><Tv size={16} className="text-slate-400" /> Smart TV</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-slate-400" /> 24x7 CCTV</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: App-style Instant Booking Widget (5 Columns) */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative background image peek */}
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-orange-500 rounded-3xl blur opacity-10" />

            {/* The Booking Card Container */}
            <div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6">
              
              {/* Image Preview Window inside the Widget */}
              <div className="relative h-40 rounded-2xl overflow-hidden group">
                <img
                  src="/images/gallery/image3.jpeg"
                  alt="Hotel Dream View Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md">
                  Premium Room
                </span>
              </div>

              {/* Pseudo App Form Inputs */}
              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                  <Calendar className="text-slate-400" size={18} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Timing</p>
                    <p className="text-xs font-semibold text-slate-700">Standard 24-Hour Stay Check-In</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                  <UserCheck className="text-slate-400" size={18} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Guest Policy</p>
                    <p className="text-xs font-semibold text-slate-700">Couples & Families Welcome</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Call to Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/20 text-center"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp (Instant)
                </a>

                <a
                  href="tel:+919099877766"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition text-center"
                >
                  <Phone size={18} />
                  Call Desk to Check Rooms
                </a>
              </div>

              {/* Micro Assurance Copy */}
              <p className="text-center text-[11px] text-slate-400 font-medium">
                ⚡ No credit card required. Lock the room now, pay at reception.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}