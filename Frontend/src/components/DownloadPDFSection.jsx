import { useRef, useEffect, useState } from "react";

export default function DownloadPDFSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/PDF_Browsers/Leela Board's Booklet.pdf"; // Replace with your actual PDF path
    link.download = "OpenSourceReport2024.pdf";
    link.click();
  };

  // SVG Download Icon
  const DownloadIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  return (
    <div
      className="w-full bg-[#F7F9FA] px-4 py-12 flex justify-center items-center"
      ref={sectionRef}
    >
      <div className="w-full">
        <div className="relative w-full max-w-full mx-auto">
          {/* CTA Banner Card */}
          <div
            className={`relative flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-2xl border border-orange-200 overflow-hidden h-[250px] md:h-[250px] w-full transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left: Content */}
            <div className="flex flex-col justify-center md:w-1/2 px-6 md:px-12 space-y-4 h-full">
              <h1
                className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                Open Source is <span className="text-orange-500">Love</span>
              </h1>

              <p
                className={`text-gray-600 text-sm md:text-lg transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                Discover our 2024 Open Source Report now!
              </p>

              <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                <button
                  onClick={handleDownload}
                  className="text-sm md:text-base px-6 md:px-8 py-2 md:py-3 rounded-2xl flex items-center gap-2 border-2 border-blue-500 text-blue-700 bg-white hover:bg-blue-50 shadow transition-all duration-300"
                >
                  <DownloadIcon /> DOWNLOAD PDF
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div
              className={`md:w-1/2 flex justify-center items-center h-full transition-all duration-800 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <img
                src="/Gemini_Generated_Image_6bkl7k6bkl7k6bkl-removebg-preview.png"
                alt="Love Illustration"
                className="h-full object-contain drop-shadow-xl animate-pulse-slow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
