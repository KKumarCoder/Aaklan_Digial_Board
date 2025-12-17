import { ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const solutions = [
  {
    id: 1,
    title: "Advanced Tools for Innovators",
    description:
      "Cutting-edge embedded robotics solutions for research and industry.",
    textColor: "text-white",
    primaryBtn: "DISCOVER",
    bgImage:
      "https://www.arduino.cc/cdn-cgi/image/width=1080,quality=60,format=auto/https://www.datocms-assets.com/150482/1738941205-pro-solution-card.svg",
    bgColor: "#0F2348",
  },
  {
    id: 2,
    title: "Together, We Build",
    description: "A community of curious minds creating with Leela.",
    textColor: "text-[#0F2348]",
    primaryBtn: "DISCOVER",
    bgImage:
      "https://www.arduino.cc/cdn-cgi/image/width=1080,quality=60,format=auto/https://www.datocms-assets.com/150482/1738946024-maker-solution-card.svg",
    bgColor: "#E98F0B",
  },
  {
    id: 3,
    title: "Inspire the Future",
    description: "Hands-on STEM robotics learning for classrooms.",
    textColor: "text-white",
    primaryBtn: "DISCOVER",
    bgImage:
      "https://www.arduino.cc/cdn-cgi/image/width=1080,quality=60,format=auto/https://www.datocms-assets.com/150482/1739176609-edu-solution-card.svg",
    bgColor: "#E22213",
  },
];

// Custom hook replacement
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function SolutionsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [scrollY, setScrollY] = useState(0);

  // Scroll listener for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2348] mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-[#0F2348]/70 max-w-2xl mx-auto">
            Tailored robotics solutions for professionals, makers, and educators
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`relative rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                backgroundColor: solution.bgColor,
              }}
            >
              {/* Background Image with hover zoom and parallax */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out hover:scale-105"
                style={{
                  backgroundImage: `url(${solution.bgImage})`,
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              ></div>

              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/25"></div>

              {/* Card Content */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
                <div>
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${solution.textColor}`}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className={`mb-8 text-base sm:text-lg md:text-xl opacity-90 ${solution.textColor}`}
                  >
                    {solution.description}
                  </p>
                </div>

                {/* Single Primary Button with Transparent Background + Scale Text Hover */}
                <button className="relative overflow-hidden px-6 py-3 sm:py-3 md:py-4 lg:py-5 rounded-lg font-semibold flex items-center justify-center gap-2 text-center text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 border-2 border-white text-white hover:text-[#E98F0B] hover:border-[#E98F0B] group">
                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full rotate-12 pointer-events-none transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
                  {/* Text with scale on hover */}
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {solution.primaryBtn}
                  </span>
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 relative z-10" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
