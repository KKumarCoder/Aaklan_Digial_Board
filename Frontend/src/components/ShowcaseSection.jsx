import { useState } from "react";

const ShowcaseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const showcaseItems = [
    {
      id: 1,
      title: "Main Control Board",
      description:
        "Powerful central processing unit with integrated sensors for optimal performance and real-time data processing.",
      image: "./new_aaklan2.jpeg",
      badge: "Hardware",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Sensor Array",
      description:
        "Advanced ultrasonic and environmental sensors with high precision measurement capabilities.",
      image: "./new_aaklan.jpeg",
      badge: "Hardware",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "Motor Controller",
      description:
        "Precise motor control with advanced feedback mechanisms and smooth operation.",
      image: "./Leela_moter_driver.png",
      badge: "Hardware",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="hardware"
      className="py-2 lg:py-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50" />

      {/* Wave Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-20 lg:h-32"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Explore Our
            {"   "}
            <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Hardware
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium-quality components engineered for precision, reliability,
            and exceptional performance.
          </p>
        </div>

        {/* Showcase grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image container */}
                <div
                  className={`w-full h-full relative transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop";
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                  />
                </div>

                {/* Content - shown on hover */}
                <div
                  className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="mb-4 inline-flex w-fit">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.gradient} shadow-lg border border-white/20`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
               {/* <button className="w-fit px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50">
                    Learn More
                  </button>    */}
                </div>

                {/* Static content - hidden on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-0 translate-y-8"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <div className="w-3 h-3 rounded-full bg-green-400 relative">
                      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute top-6 right-6 w-4 h-4 rounded-full bg-green-400 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 scale-125"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
            View All Products
            <span className="ml-3">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
