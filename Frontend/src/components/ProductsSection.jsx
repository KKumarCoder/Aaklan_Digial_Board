import { useEffect, useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

const product = {
  id: 1,
  name: "Leela Arduino",
  tagline: "The Ultimate Robotics Development Board",
  description:
    "Leela Arduino combines the simplicity of Arduino with powerful robotics capabilities, built specially for robotics and embedded learners.",
  features: [
    "Arduino Compatible",
    "Motor Drivers Built-in",
    "Wireless Connectivity",
    "Sensor Ready",
    "Smart Robotics Support",
    "Easy for Students",
  ],
  specs: {
    processor: "ATmega328P",
    flashMemory: "32KB",
    clockSpeed: "16MHz",
    voltage: "5V",
    digitalPins: "14",
    connectivity: "Wi-Fi/Bluetooth Ready",
  },
};

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 px-4 bg-gradient-to-b from-white to-blue-50 h-[50vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg overflow-hidden transition duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* LEFT — VIDEO (Auto Play) */}
          <div className="relative h-[50vh]">
            <video
              src="/Our_Kits/Leela_Board_Video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* RIGHT — SIMPLE INFORMATION */}
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-[#0F2348]">
              {product.name}
            </h1>
            <p className="text-[#0F2348]/70 text-sm mt-1 mb-3">
              {product.tagline}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            {/* FEATURES (Compact) */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {product.features.map((f, i) => (
                <div
                  key={i}
                  className="text-xs bg-gray-50 p-2 rounded-lg text-gray-700"
                >
                  • {f}
                </div>
              ))}
            </div>

            {/* SPECS (Compact Block Style) */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-[10px] uppercase text-gray-500">{k}</p>
                  <p className="text-sm font-semibold text-[#0F2348]">{v}</p>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-2">
              {/* Normal Enquiry */}
              <button className="flex-1 bg-[#0F2348] text-white py-2 rounded-lg text-sm font-medium hover:scale-[1.02] transition">
                Enquiry Now
              </button>

              {/* WhatsApp Enquiry */}
              <a
                href="https://wa.me/918084379164?text=Hello%20Aaklan,%20I%20want%20details%20about%20Leela%20Arduino."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:scale-[1.03] transition"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
