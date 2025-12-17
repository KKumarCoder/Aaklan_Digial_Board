import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechSpecsSection() {
  const carouselImages = [
    "./Leela_8_8Matrix.png",
    "./new_aaklan2.jpeg",
    "./new_aaklan2.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto Play Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Smooth animation on load
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  const specifications = [
    {
      spec: "Microcontroller",
      detail: "ARM Cortex-M4 @ 120MHz",
    },
    {
      spec: "Memory",
      detail: "512KB Flash + 192KB RAM",
    },
    {
      spec: "Sensors",
      detail: "Ultrasonic, Infrared, Temperature, Humidity",
    },
    {
      spec: "Motor Ports",
      detail: "4× DC Motor Ports with PWM Control",
    },
    {
      spec: "Programming",
      detail: "Block-based IDE, Python, C++",
    },
    {
      spec: "Connectivity",
      detail: "Wi-Fi, Bluetooth Low Energy",
    },
  ];

  return (
    <div className="relative py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced robotics platform with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT — COMPACT IMAGE CAROUSEL */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[380px] overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200">
              <div className="relative h-full rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={carouselImages[index]}
                    alt="Robot Technology"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg"></div>
              </div>

              {/* Enhanced Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carouselImages.map((_, i) => (
                  <motion.button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === index
                        ? "bg-gradient-to-r from-orange-500 to-red-500 scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-3">
                <motion.button
                  className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setIndex(
                      (prev) =>
                        (prev - 1 + carouselImages.length) %
                        carouselImages.length
                    )
                  }
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setIndex((prev) => (prev + 1) % carouselImages.length)
                  }
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — TABLE FORMAT LAYOUT */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-[380px] flex flex-col">
              {/* Simple Clean Header */}
              <motion.div
                className="bg-white p-6 border-b border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  Technical Specifications
                </h3>
              </motion.div>

              {/* Specifications Content - Table Format */}
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {specifications.map((item, i) => (
                    <motion.div
                      key={i}
                      className="group"
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      {/* Specification Title - Bold and Clean */}
                      <h4 className="font-bold text-gray-900 text-base mb-1">
                        {item.spec}
                      </h4>

                      {/* Specification Detail - Regular weight */}
                      <motion.p
                        className="text-gray-600 text-sm leading-relaxed"
                        whileHover={{ x: 2 }}
                      >
                        {item.detail}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Simple Footer */}
              <motion.div
                className="bg-gray-50 px-6 py-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center text-sm text-gray-500">
                  Comprehensive hardware specifications
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Compact Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-blue-500/20"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-orange-500/20"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-blue-600/30"
          ></path>
        </svg>
      </div>
    </div>
  );
}
