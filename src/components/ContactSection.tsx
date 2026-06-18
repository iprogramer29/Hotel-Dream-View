import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Navigation,
    Headphones,
    CheckCircle,
    ExternalLink,
} from "lucide-react";

export default function ContactSection() {
    const whatsappLink =
        "https://wa.me/919099877766?text=Hello%20Hotel%20Dream%20View,%20I%20would%20like%20to%20make%20an%20enquiry.";

    return (
        <>
            {/* =========================================================================
          CONTACT SECTION
         ========================================================================= */}
            <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Header */}
                    <div className="text-center mb-12 space-y-3">
                        <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/40 px-3 py-1 rounded-full text-rose-600 text-xs font-bold uppercase tracking-wider">
                            <Headphones size={14} />
                            Instant Booking Desk
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Need Assistance? Contact Us Now
                        </h2>

                        <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
                            Skip the intermediate platform surcharges. Reserve directly via Call or WhatsApp for real-time optimal rates.
                        </p>
                    </div>

                    {/* OYO-Style Micro Action Call-out Strip */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 text-white relative overflow-hidden shadow-xl shadow-slate-950/20">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left space-y-1">
                                <h3 className="text-lg font-black tracking-tight">
                                    Looking For A Comfortable Stay In Surat?
                                </h3>
                                <p className="text-slate-400 text-xs font-medium">
                                    Deluxe • Executive • Family Suite Rooms — Instant confirmation status guaranteed.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
                                <a
                                    href="tel:+919099877766"
                                    className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold uppercase tracking-wide px-5 py-3.5 rounded-xl shadow-md transition w-full sm:w-auto"
                                >
                                    <Phone size={14} />
                                    <span>Call Direct Support</span>
                                </a>

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wide px-5 py-3.5 rounded-xl shadow-md transition w-full sm:w-auto"
                                >
                                    <MessageCircle size={14} />
                                    <span>WhatsApp Booking</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Direct-Action Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-4">

                        {/* Card: Location */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="mt-4 text-sm font-bold text-slate-900 tracking-tight">Property Location</h3>
                                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium">
                                    Opp. Dindoli Fire Station, Dindoli, Surat, Gujarat - 394210
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-100">
                                <span className="text-[10px] font-extrabold uppercase text-rose-600 tracking-wider">Surat Core Hub</span>
                            </div>
                        </div>

                        {/* Card: Phone Support */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                                    <Phone size={20} />
                                </div>
                                <h3 className="mt-4 text-sm font-bold text-slate-900 tracking-tight">Hotline Service</h3>
                                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium">
                                    +91 90998 77766 <br />
                                    Alternative Desk assistance routing.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-100">
                                <span className="text-[10px] font-extrabold uppercase text-emerald-600 tracking-wider">Available 24×7</span>
                            </div>
                        </div>

                        {/* Card: Email Relations */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                                    <Mail size={20} />
                                </div>
                                <h3 className="mt-4 text-sm font-bold text-slate-900 tracking-tight">Digital Helpdesk</h3>
                                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium break-all">
                                    hoteldreamview7776@gmail.com <br />
                                    Corporate billing invoices support.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-100">
                                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Fast Turnaround</span>
                            </div>
                        </div>

                    </div>

                    {/* Embed Map Integration Container with Embedded Action Trigger Overlay */}
                    <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-2 shadow-sm relative group overflow-hidden">
                        <iframe
                            src="https://maps.google.com/maps?q=Hotel%20Dream%20View%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="380"
                            style={{ border: 0 }}
                            loading="lazy"
                            className="rounded-xl filter grayscale contrast-125"
                        />

                        <div className="absolute bottom-6 right-6">
                            <a
                                href="https://maps.google.com/?q=Hotel+Dream+View+Surat"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wide uppercase px-4 py-2.5 rounded-xl shadow-lg hover:bg-slate-900 transition"
                            >
                                <Navigation size={14} className="text-rose-400 fill-rose-400/20" />
                                <span>Open In Maps GPS</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================================================
          FOOTER COMPONENT
         ========================================================================= */}
            <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-24 md:pb-16 text-xs font-medium">
                <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Info Block */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black tracking-wider text-white uppercase">
                            Hotel Dream View
                        </h3>
                        <p className="leading-relaxed max-w-xs text-slate-400">
                            Smart hotel accommodation structured to provide clean, premium lodging services across Surat without luxury price premiums.
                        </p>
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
                            <CheckCircle size={12} className="fill-emerald-400/10" />
                            <span>Justdial Verified Business</span>
                        </div>
                    </div>

                    {/* Quick Links Router Map */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black tracking-wider text-white uppercase">Navigation</h4>
                        <div className="grid grid-cols-1 gap-2.5">
                            {["Home", "Gallery", "Reviews", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="hover:text-white transition-colors duration-150 w-fit"
                                >
                                    {link} Stays
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explicit Core Contacts Array mapping */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black tracking-wider text-white uppercase">Direct Assistance</h4>
                        <div className="space-y-2.5">
                            <p className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone size={12} className="text-rose-500" />
                                <span>+91 90998 77766</span>
                            </p>
                            <p className="flex items-center gap-2 hover:text-white transition-colors break-all">
                                <Mail size={12} className="text-rose-500" />
                                <span>hoteldreamview7776@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Geographic Location Label Strip */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black tracking-wider text-white uppercase">Surat Coordinates</h4>
                        <p className="leading-relaxed text-slate-400">
                            Opposite Dindoli Fire Station Area,<br />
                            Dindoli Infrastructure Hub,<br />
                            Surat, Gujarat, India.
                        </p>
                    </div>

                </div>

                {/* Global Copyright Baseline Strip */}
                <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                    © {new Date().getFullYear()} Hotel Dream View. All Rights Reserved Hub.
                </div>
            </footer>

            {/* =========================================================================
          MOBILE STICKY ACTION NAV BAR
         ========================================================================= */}
            <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl shadow-slate-900/50 px-3 py-2.5">
                <div className="grid grid-cols-2 gap-2.5">

                    <a
                        href="tel:+919099877766"
                        className="flex items-center justify-center gap-2 bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl active:bg-slate-200 transition-colors"
                    >
                        <Phone size={14} className="text-rose-600" />
                        <span>Call Desk</span>
                    </a>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl active:bg-emerald-700 shadow-md shadow-emerald-600/10 transition-colors"
                    >
                        <MessageCircle size={14} />
                        <span>WhatsApp</span>
                    </a>

                </div>
            </div>
        </>
    );
}