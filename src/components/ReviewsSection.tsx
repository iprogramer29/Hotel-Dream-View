import {
  Star,
  ExternalLink,
  Quote,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Ahmedabad",
    type: "Business Trip",
    date: "June 2026",
    color: "bg-blue-500",
    review:
      "Very clean rooms and excellent service. Staff was polite and helpful throughout our stay.",
  },
  {
    name: "Priya Patel",
    city: "Vadodara",
    type: "Couple Stay",
    date: "May 2026",
    color: "bg-rose-500",
    review:
      "Comfortable rooms, good location and smooth check-in process. Highly recommended.",
  },
  {
    name: "Amit Verma",
    city: "Mumbai",
    type: "Family Vacation",
    date: "April 2026",
    color: "bg-emerald-500",
    review:
      "Family-friendly hotel with good facilities and excellent hospitality.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/40 px-3 py-1 rounded-full text-rose-600 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck size={14} />
            Real Customer Feedback
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Our Guests Say About Us
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
            Read authentic experiences shared directly by verified guests who stayed at our Surat property.
          </p>
        </div>

        {/* OYO-Style Smart Rating Dashboard Aggregator */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-5 text-center md:text-left w-full md:w-auto justify-center md:justify-start">
            <div className="bg-rose-600 text-white rounded-2xl p-4 font-black text-4xl shadow-lg shadow-rose-600/20">
              4.2
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Very Good Rating</h3>
              <div className="flex justify-center md:justify-start text-amber-500 text-sm mt-0.5">
                ★ ★ ★ ★ ☆
              </div>
              <p className="text-xs text-slate-400 font-medium mt-1">Based on 140+ individual reviews</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
            {[
              "Clean Rooms (4.4/5)",
              "Location (4.3/5)",
              "Staff Behavior (4.5/5)",
              "Value for Money (4.2/5)",
            ].map((tag, i) => (
              <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 shadow-sm">
                👍 {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Dense Guest Review Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Identity Bar Top Structure */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-black text-sm uppercase shadow-inner`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 tracking-tight flex items-center gap-1">
                        {review.name}
                        <CheckCircle2 size={12} className="text-emerald-500 fill-emerald-500/20" />
                      </h4>
                      <p className="text-[11px] font-medium text-slate-400">{review.city}</p>
                    </div>
                  </div>

                  <Quote size={20} className="text-slate-200" />
                </div>

                {/* Stars and Trip Metadata row */}
                <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-100">
                  <div className="flex text-amber-500 text-xs">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-rose-50 border border-rose-100 text-rose-600 px-2 py-0.5 rounded">
                    {review.type}
                  </span>
                </div>

                {/* Review Text Body */}
                <p className="text-slate-600 text-sm leading-relaxed mt-4 font-medium italic">
                  "{review.review}"
                </p>
              </div>

              {/* Verified Verification Label Footer strip */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <span>Verified Stay</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic conversion external route button action */}
        <div className="text-center mt-12">
          <a
            href="https://www.justdial.com/Surat/Hotel-Dream-View-Near-By-Dindoli-Dindoli/0261PX261-X261-230328192609-Y4S4_BZDET"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold tracking-wide uppercase px-6 py-3.5 rounded-xl hover:bg-slate-800 transition shadow-lg shadow-slate-900/10"
          >
            <span>Read All Verified Reviews On Justdial</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}