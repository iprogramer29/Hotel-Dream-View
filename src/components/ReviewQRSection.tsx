import { Star, QrCode, ExternalLink } from "lucide-react";

export default function ReviewQRSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-[32px] overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-14">

            {/* Left Side */}

            <div>

              <div className="inline-flex items-center gap-2 bg-[#C5A378]/20 text-[#C5A378] px-4 py-2 rounded-full mb-6">
                <Star size={16} />
                <span className="text-sm font-semibold">
                  Guest Feedback Matters
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white">
                Enjoyed Your Stay?
              </h2>

              <h3 className="text-2xl font-semibold text-[#C5A378] mt-3">
                Please Review Hotel Dream View
              </h3>

              <p className="text-white/80 mt-5 leading-relaxed">
                Your feedback helps us improve our services and helps
                future guests choose Hotel Dream View with confidence.
              </p>

              <ul className="mt-6 space-y-3 text-white/90">

                <li>✓ Share your experience</li>

                <li>✓ Help other travellers</li>

                <li>✓ Support local hospitality</li>

                <li>✓ Takes less than a minute</li>

              </ul>

              <a
                href="https://www.justdial.com/Surat/Hotel-Dream-View-Near-By-Dindoli-Dindoli/0261PX261-X261-230328192609-Y4S4_BZDET/writereview?city=Surat&area=Dindoli&fid=1669889292100892"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-[#C5A378] hover:bg-[#b59267] text-white px-8 py-4 rounded-2xl font-semibold transition"
              >
                Write A Review
                <ExternalLink size={18} />
              </a>

            </div>

            {/* Right Side */}

            <div className="flex justify-center">

              <div className="bg-white p-8 rounded-3xl text-center shadow-xl">

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#F8F6F3] flex items-center justify-center mb-4">
                  <QrCode
                    size={40}
                    className="text-[#C5A378]"
                  />
                </div>

                <h4 className="font-bold text-xl text-gray-900">
                  Scan & Review
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Scan the QR code and leave your valuable review.
                </p>

                {/* Replace later with your real QR image */}

                <img
                  src="/images/review-qr.png"
                  alt="Review QR"
                  className="w-64 h-64 object-contain mx-auto mt-6"
                />

                <p className="mt-4 text-sm text-gray-600">
                  Hotel Dream View
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}