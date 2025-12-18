import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function WhatIsLeelaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer implementation
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

  const features = [
    {
      title: "Block-based & Text-based Programming",
      desc: "Start with visual blocks, advance to Python and C++",
    },
    {
      title: "All-in-One Integration",
      desc: "Integrated sensors, motors, LED matrix, and more",
    },
    {
      title: "Hands-on Learning",
      desc: "Real robotics projects from day one",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Video with hover zoom */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#E98F0B]/20 transform transition-transform duration-500 hover:scale-105 hover:translate-y-[-5px] h-80 sm:h-96 lg:h-[28rem]">
              <video
                className="w-full h-full object-cover rounded-2xl"
                src="https://media.istockphoto.com/id/1344145502/video/inspection-robot-bench-test.mp4?s=mp4-640x640-is&k=20&c=yqLZe5nh8JX3kO74t9Hx9wJHOoga2fVyhFZ9AxQ7ZU8="
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Overlay for subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F2348]/20 to-[#E98F0B]/20 mix-blend-overlay" />
              {/* Decorative Blur Circle */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E98F0B]/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2348] mb-4">
                The easy-to-learn robotics hardware and software platform.
              </h2>

              <p className="text-lg text-[#0F2348]/70 mb-6">
                Leela combines microcontroller + sensors + motor drivers +
                chassis in one board. Designed for education, makers, and
                innovators, Leela simplifies the learning curve while providing
                professional-grade capabilities.
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#E98F0B] text-white font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2348]">
                      {feature.title}
                    </h3>
                    <p className="text-[#0F2348]/60 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 sm:px-10 sm:py-4 bg-[#E22213] text-white font-semibold rounded-lg hover:bg-[#c91a0a] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                ABOUT LEELA
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-[#E98F0B] text-[#E98F0B] font-semibold rounded-lg hover:bg-[#E98F0B] hover:text-[#0F2348] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                START LEARNING
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
