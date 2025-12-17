import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsCards = [
  {
    id: 1,
    tag: "Announcements",
    date: "November 2024",
    headline: "Aaklan launches Leela Robotics Learning Board 2.0",
    excerpt:
      "With enhanced AI capabilities and improved performance, Leela 2.0 brings next-generation robotics learning to classrooms and makers worldwide.",
    image:
      "https://blog.arduino.cc/wp-content/uploads/2025/11/Arduino.cc-Blogpost-Featured-385x289-26.jpg",
  },
  {
    id: 2,
    tag: "Education",
    date: "October 2024",
    headline: "New curriculum update for schools released",
    excerpt:
      "A comprehensive robotics curriculum designed for K-12 students, with lesson plans, projects, and assessment tools included.",
    image:
      "https://blog.arduino.cc/wp-content/uploads/2025/11/Arduino.cc-Blogpost-Cover-1100x600-1.jpg",
  },
  {
    id: 3,
    tag: "Partnership",
    date: "September 2024",
    headline: "Aaklan partners with leading STEM institutes",
    excerpt:
      "Strategic partnerships with top STEM organizations to bring Leela robotics education to more students across India.",
    image:
      "https://blog.arduino.cc/wp-content/uploads/2025/11/Arduino.cc-Blogpost-Featured-385x289-25.jpg",
  },
  {
    id: 4,
    tag: "Technology",
    date: "August 2024",
    headline: "Open-source community tools for Leela developers",
    excerpt:
      "New libraries and frameworks for building advanced robotics applications with Leela boards.",
    image:
      "https://blog.arduino.cc/wp-content/uploads/2025/10/Arduino.cc-Blogpost-Featured-385x289-24.jpg",
  },
  {
    id: 5,
    tag: "Events",
    date: "July 2024",
    headline: "First annual Leela Robotics Championship",
    excerpt:
      "500+ teams from across the country participate in the largest robotics competition powered by Leela boards.",
    image:
      "https://blog.arduino.cc/wp-content/uploads/2025/10/Arduino.cc-Blogpost-Featured-385x289-23.jpg",
  },
  {
    id: 6,
    tag: "Innovation",
    date: "June 2024",
    headline: "AI integration features now available",
    excerpt:
      "Connect your Leela board with AI models for machine learning-powered robotics projects.",
    image:
      "https://blog.arduino.cc/wp-content/uploads/2025/10/Arduino.cc-Blogpost-Featured-385x289-1.jpg",
  },
];

export default function LatestNewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cardsPerView = 3;
  const totalCards = newsCards.length;

  const autoplayRef = useRef(null);
  const isHoveredRef = useRef(false);

  // Intersection Observer for section visibility
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

  const nextCards = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCards = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Start autoplay (3s) and handle pause-on-hover
  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        if (!isHoveredRef.current) nextCards();
      }, 3000);
    };

    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const getVisibleCards = () => {
    return Array.from({ length: cardsPerView }).map((_, i) => {
      const index = (startIndex + i) % totalCards;
      return newsCards[index];
    });
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2348] mb-4">
            Latest News
          </h2>
          <p className="text-lg text-[#0F2348]/70 max-w-2xl mx-auto">
            Stay updated with the latest developments in Leela robotics
          </p>
        </div>

        {/* News Cards Slider */}
        <div
          className="relative"
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {getVisibleCards().map((card, index) => (
              <article
                key={`${card.id}-${startIndex}`}
                className={`bg-white border border-[#0F2348]/10 rounded-xl overflow-hidden hover:border-[#E98F0B] hover:shadow-lg transition-all duration-700 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Image */}
                <div className="w-full h-56 overflow-hidden border-b border-[#0F2348]/10 bg-[#f3f6fb]">
                  <img
                    src={card.image}
                    onError={(e) => {
                      // fallback to a local image if remote fails
                      e.currentTarget.src = "/fallback.jpg";
                    }}
                    alt={card.headline}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-[#E98F0B]/10 text-[#E98F0B] rounded-full text-xs font-semibold">
                      {card.tag}
                    </span>
                    <span className="text-[#0F2348]/50 text-xs">
                      {card.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2348] mb-3 line-clamp-2">
                    {card.headline}
                  </h3>

                  <p className="text-[#0F2348]/70 text-sm mb-4 line-clamp-2">
                    {card.excerpt}
                  </p>

                  <button className="text-[#E22213] font-semibold text-sm hover:text-[#0F2348] transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                onClick={prevCards}
                className="p-2 sm:p-3 rounded-lg border-2 border-[#0F2348]/20 text-[#0F2348] hover:border-[#E98F0B] hover:bg-[#E98F0B]/10 transition-all duration-300 hover:scale-110"
                aria-label="Previous news"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextCards}
                className="p-2 sm:p-3 rounded-lg border-2 border-[#0F2348]/20 text-[#0F2348] hover:border-[#E98F0B] hover:bg-[#E98F0B]/10 transition-all duration-300 hover:scale-110"
                aria-label="Next news"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="text-[#0F2348]/60 text-sm font-medium">
              {startIndex + 1} -{" "}
              {Math.min(startIndex + cardsPerView, totalCards)} of {totalCards}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
