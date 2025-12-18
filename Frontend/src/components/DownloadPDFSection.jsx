import { useRef, useEffect, useState } from "react";

export default function DownloadPDFSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/PDF_Browsers/Leela Board's Booklet.pdf";
    link.download = "OpenSourceReport2024.pdf";
    link.click();
  };

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
      ref={sectionRef}
      className="w-full bg-[#F7F9FA] px-4 py-12 flex justify-center"
    >
      <div className="w-full max-w-6xl">
        <div
          className={`flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-xl border border-orange-200 px-6 md:px-12 py-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Content */}
          <div className="space-y-4 max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
              Open Source is <span className="text-orange-500">Love</span>
            </h1>

            <p className="text-gray-600 text-sm md:text-lg">
              Discover our 2024 Open Source Report now!
            </p>
          </div>

          {/* Right Button */}
          <div className="mt-6 md:mt-0">
            <button
              onClick={handleDownload}
              className="px-8 py-3 rounded-2xl flex items-center gap-2 border-2 border-blue-500 text-blue-700 bg-white hover:bg-blue-50 shadow transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <DownloadIcon />
              DOWNLOAD PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
