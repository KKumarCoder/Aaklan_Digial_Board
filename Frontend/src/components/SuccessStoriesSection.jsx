import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stories = [
  {
    id: 1,
    headline: "How Schools Transformed STEM With Leela",
    subtext:
      "Real stories from classrooms adopting our robotics learning system.",
    caseStudy:
      "A leading school in Delhi increased student engagement by 85% after integrating Leela boards into their curriculum.",
    category: "Education",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1741354706-23c6592450ef71869726c2743d757f4f.png",
  },
  {
    id: 2,
    headline: "Industry Innovation Through Robotics",
    subtext: "How companies are leveraging Leela for advanced R&D projects.",
    caseStudy:
      "A robotics startup accelerated their prototyping timeline by 60% using Leela's integrated platform.",
    category: "Industry",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1741354743-d482bd26c8bb05e9582a1b4927fd956c.jpeg",
  },
  {
    id: 3,
    headline: "Community Makers Building Together",
    subtext: "Creators around the world share their Leela projects.",
    caseStudy:
      "An open community has created over 500+ innovative projects ranging from automated systems to robotic art installations.",
    category: "Community",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742547498-548aa5d5935bd5928845e1c3bd13f46a.jpeg",
  },
  {
    id: 4,
    headline: "Next-Gen Robotics in Classrooms",
    subtext: "Empowering students to learn by doing.",
    caseStudy:
      "Schools integrating Leela saw a 40% improvement in STEM exam scores.",
    category: "Education",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742551590-image.png",
  },
  {
    id: 5,
    headline: "Global Robotics Competitions",
    subtext: "Students building and competing worldwide.",
    caseStudy:
      "Teams using Leela won multiple awards at international robotics contests.",
    category: "Competition",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742547772-43588221d8e652f925e71b5b347790ab.jpeg",
  },
  {
    id: 6,
    headline: "Corporate Robotics Labs",
    subtext: "Companies accelerating innovation with Leela boards.",
    caseStudy:
      "R&D teams reduced prototyping time by 50% with Leela's integrated solutions.",
    category: "Industry",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742547971-cd7a4c4170727bda365ee13b563802f8.jpeg",
  },
];

export default function SuccessStoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Education":
        return "bg-blue-500 text-white";
      case "Industry":
        return "bg-orange-500 text-white";
      case "Community":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-orange-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          </div> */}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-red-600 bg-clip-text mb-4">
            Success Stories
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how organizations and communities are transforming
            education and innovation with Leela
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Navigation Controls */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
            <button
              onClick={toggleAutoPlay}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-orange-600" />
              ) : (
                <Play className="w-5 h-5 text-orange-600" />
              )}
            </button>

            <button
              onClick={prevSlide}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600 group-hover:text-red-600" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-orange-600 group-hover:text-red-600" />
            </button>
          </div>

          {/* Carousel Content */}
          <div className="relative h-[500px] md:h-[600px]">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-10"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={story.image}
                      alt={story.headline}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20"></div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(
                          story.category
                        )}`}
                      >
                        {story.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-white to-blue-50/30">
                    <div className="max-w-lg">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                        {story.headline}
                      </h3>

                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {story.subtext}
                      </p>

                      {/* Case Study Highlight */}
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
                        <p className="text-gray-800 font-medium leading-relaxed">
                          {story.caseStudy}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Read Full Story
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-1000 ease-out"
              style={{
                width: `${((currentIndex + 1) / stories.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Carousel */}
        <div className="mt-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => goToSlide(index)}
                className={`flex-none w-48 h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-orange-500 shadow-lg scale-105"
                    : "border-gray-200 hover:border-orange-300"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={story.image}
                    alt={story.headline}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      index === currentIndex
                        ? "bg-orange-500/20"
                        : "bg-black/20 hover:bg-orange-500/30"
                    } transition-all duration-300`}
                  />

                  {/* Thumbnail Title */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-bold text-left truncate drop-shadow-sm">
                      {story.headline}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              85%
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              Engagement Increase
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
            <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              60%
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              Faster Prototyping
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              Projects Created
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              40%
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              Score Improvement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
