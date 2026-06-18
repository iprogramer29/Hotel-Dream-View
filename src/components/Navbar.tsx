import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Why Choose Us", link: "/why-choose-us" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Reviews", link: "/reviews" },
    { name: "Contact", link: "/contact" },
  ];

  const whatsappLink =
    "https://wa.me/919099877766?text=Hello%20Hotel%20Dream%20View,%20I%20would%20like%20to%20make%20an%20enquiry.";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md rounded-2xl">
            <div className="h-16 px-4 sm:px-6 flex items-center justify-between">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden bg-slate-50 flex items-center justify-center shrink-0">
                  <img
                    src="/images/logo.jpeg"
                    alt="Hotel Dream View Logo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="space-y-0.5">
                  <h1 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                    HOTEL DREAM VIEW
                  </h1>

                  <p className="text-[9px] font-extrabold uppercase tracking-wider text-rose-600 flex items-center gap-1">
                    <ShieldCheck size={10} />
                    <span>Verified Surat Property</span>
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-5">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-xs font-bold uppercase tracking-wide text-slate-600 hover:text-rose-600 transition-colors duration-150 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-2.5">
                <a
                  href="tel:+919099877766"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  <Phone size={14} className="text-rose-500" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-xl"
                onClick={() => setMobileMenu(!mobileMenu)}
                aria-label="Toggle Navigation"
              >
                {mobileMenu ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 lg:hidden">
          <div className="absolute top-24 inset-x-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-5">
            <div className="space-y-4">

              <div className="grid gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    onClick={() => setMobileMenu(false)}
                    className="block text-sm font-bold text-slate-800 hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 grid gap-2">
                <a
                  href="tel:+919099877766"
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider py-3 rounded-xl"
                >
                  <Phone size={14} className="text-rose-600" />
                  <span>Call Direct Desk</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}