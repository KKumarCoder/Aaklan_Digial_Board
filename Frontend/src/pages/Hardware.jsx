import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hardware = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBanner, setCurrentBanner] = useState(0);
  const productsPerPage = 12;

  // Local images array (placeholders - replace with real assets in public/)
  const bannerImages = [
    "/boy-turning-camera-standing-near-charge-board.jpg",
    "/children-learning-more-about-chemistry-class.jpg",
    "/father-son-making-robot.jpg",
    "/girls-female-teacher-doing-science-experiments-together-with-robotic-car.jpg",
    "/smart-asian-female-programer-learning-robot-arm-ai-coding-electronic-board-cable-stem-steam-she-try-testing-her-autonomous-robotic-arm-with-sensors-via-arduino-platform-home.jpg",
    "/two-friends-doing-science-experiments.jpg",
  ];

  // Hardware products data (dummy)
  const hardwareProducts = [
    {
      id: 1,
      name: "Leela 500",
      description:
        "A fast, powerful computer built into a high-quality keyboard.",
      price: "Available from $100",
      features: ["Quad-core processor", "4GB RAM", "Built-in cooling"],
      image: "/Hardwares/1N4007_Diode.png",
    },
    {
      id: 2,
      name: "Leela 500 Desktop Kit",
      description:
        "Your complete home computer setup with everything you need to get started.",
      price: "Complete kit from $150",
      features: [
        "Includes monitor",
        "Keyboard & mouse",
        "Pre-installed software",
        "1-year warranty",
      ],
      image: "Hardwares/4x4 keypad.jpg",
    },
    {
      id: 3,
      name: "Leela Zero 2 W",
      description:
        "Your tiny, tiny $15 computer with impressive performance for embedded projects.",
      price: "Starting at $15",
      features: [
        "Compact size",
        "WiFi & Bluetooth",
        "Low power consumption",
        "GPIO pins",
      ],
      image: "Hardwares/5v-2-channel-relay-module.jpg",
    },
    {
      id: 4,
      name: "Leela 400 Personal Computer Kit",
      description:
        "A complete personal computer, built into a compact keyboard.",
      price: "Kit from $120",
      features: [
        "All-in-one design",
        "4GB RAM",
        "Fast processor",
        "Multiple connectivity options",
      ],
      image: "Hardwares/5V-Single-Channel-Relay-Module.jpg",
    },
    {
      id: 5,
      name: "Leela Pico Series",
      description:
        "A range of powerful, flexible microcontroller boards for all your projects.",
      price: "Starting at $4",
      features: [
        "RP2040 chip",
        "Programmable I/O",
        "Low cost",
        "Versatile applications",
      ],
      image: "Hardwares/16x2 LED display.png",
    },
    {
      id: 6,
      name: "Leela 500 Pro",
      description: "Enhanced version with double the RAM and storage capacity.",
      price: "Available from $150",
      features: [
        "Octa-core processor",
        "8GB RAM",
        "Advanced cooling",
        "Dual HDMI output",
      ],
      image: "Hardwares/accelerometer.jpeg",
    },
    {
      id: 7,
      name: "Leela 500 Ultimate Kit",
      description:
        "Premium desktop kit with 4K monitor and professional accessories.",
      price: "Complete kit from $250",
      features: [
        "4K Monitor included",
        "Mechanical keyboard",
        "Wireless mouse",
        "2-year warranty",
      ],
      image: "Hardwares/accelerometer.jpeg",
    },
    {
      id: 8,
      name: "Leela Zero 2 W Pro",
      description:
        "Enhanced version with improved connectivity and performance.",
      price: "Starting at $20",
      features: [
        "Extended RAM",
        "Better WiFi range",
        "Enhanced GPIO",
        "Compact design",
      ],
      image: "Hardwares/actuators.jpg",
    },
    {
      id: 9,
      name: "Leela 400 Pro",
      description: "Professional version with enhanced specifications.",
      price: "Kit from $180",
      features: [
        "8GB RAM option",
        "Faster processor",
        "Additional USB ports",
        "Premium build",
      ],
      image: "Hardwares/Arduino Pin diagram.jpg",
    },
    {
      id: 10,
      name: "Leela Pico W",
      description: "Wireless microcontroller with built-in WiFi and Bluetooth.",
      price: "Starting at $6",
      features: [
        "Wireless connectivity",
        "Low power mode",
        "Compact size",
        "Easy programming",
      ],
      image: "Hardwares/BO motor.png",
    },
    {
      id: 11,
      name: "Leela Compute Module",
      description: "Industrial-grade compute module for embedded applications.",
      price: "From $25",
      features: [
        "Industrial temperature range",
        "Extended lifecycle",
        "Customizable",
        "Reliable performance",
      ],
      image: "Hardwares/bread board large.jpg",
    },
    {
      id: 12,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/breadboard.png",
    },
    {
      id: 13,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/buzzer.jpg",
    },
    {
      id: 14,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/car chassis.jpg",
    },
    {
      id: 15,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/colour sensor.jpeg",
    },
    {
      id: 16,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/DC motor.jpg",
    },
    {
      id: 17,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/dpdt box.jpeg",
    },
    {
      id: 18,
      name: "Leela AI Kit",
      description: "Complete AI development kit with neural compute stick.",
      price: "Kit from $200",
      features: [
        "AI accelerator",
        "Pre-trained models",
        "Development tools",
        "Comprehensive documentation",
      ],
      image: "Hardwares/dpdt box.jpg",
    },
  ];

  const additionalSections = [
    {
      id: 1,
      title: "Why Choose Leela Hardware?",
      content:
        "Our hardware is designed with performance, reliability, and affordability in mind.",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Community & Support",
      content:
        "Join our vibrant community of makers and developers to share projects and get help.",
      icon: "👥",
    },
    {
      id: 3,
      title: "Educational Resources",
      content:
        "Access tutorials, project guides, and documentation to help you get started quickly.",
      icon: "📚",
    },
    {
      id: 4,
      title: "Innovation & Research",
      content:
        "We push the boundaries with R&D and partner with educators and industry alike.",
      icon: "🔬",
    },
  ];

  // Auto-change banner every 3s
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(bannerInterval);
  }, [bannerImages.length]);

  // Auto-cycle additional sections every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % additionalSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [additionalSections.length]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = hardwareProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.max(
    1,
    Math.ceil(hardwareProducts.length / productsPerPage)
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Animation variants
  const bannerVariants = {
    enter: { opacity: 0, scale: 1.02 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.03, boxShadow: "0 8px 22px rgba(0,0,0,0.18)" },
    tap: { scale: 0.97 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.5 },
    }),
    hover: { y: -6, boxShadow: "0 18px 36px rgba(0,0,0,0.12)" },
  };

  // fallback handler for banner images
  const handleImgError = (e) => {
    e.currentTarget.src =
      "https://via.placeholder.com/1200x800?text=Leela+Hardware";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO - now half screen height on small screens, responsive on larger screens */}
      <section className="relative mt-16 overflow-hidden">
        <div className="relative w-full">
          <AnimatePresence>
            <motion.div
              key={currentBanner}
              variants={bannerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-[50vh] md:h-[60vh] lg:h-[65vh]"
            >
              <img
                src={bannerImages[currentBanner]}
                alt={`banner-${currentBanner}`}
                onError={handleImgError}
                className="w-full h-full object-cover"
              />
              {/* overlay for contrast */}
              <div className="absolute inset-0 bg-black/50" aria-hidden />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay positioned within the hero area and responsive */}
          <div
            className="relative z-10 flex items-center"
            style={{ minHeight: "50vh" }}
          >
            <div className="max-w-6xl mx-auto px-4 w-full">
              <div className="max-w-2xl">
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white"
                >
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    Power in Your Hands
                  </motion.h2>

                  <motion.p
                    className="text-base sm:text-lg md:text-xl max-w-xl font-light mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Discover our range of high-performance, affordable computing
                    solutions designed for creators, developers, and innovators.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg"
                      aria-label="Explore Products"
                    >
                      Explore Products
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Banner navigation dots placed inside hero (responsive) */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center gap-3">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  aria-label={`Go to banner ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-transform ${
                    currentBanner === index
                      ? "bg-white scale-125"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Hardware Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border"
              >
                <div className="h-40 bg-gray-100 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/800x500?text=Product")
                    }
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>

                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {product.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-gray-900">
                      {product.price}
                    </div>
                    <button className="px-3 py-1 bg-orange-500 text-white rounded-md text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-10">
            <nav className="flex items-center gap-3">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500"
                    : "bg-orange-500 text-white"
                }`}
              >
                Prev
              </button>

              <div className="flex gap-2 items-center">
                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => paginate(p)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === p
                          ? "bg-orange-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500"
                    : "bg-orange-500 text-white"
                }`}
              >
                Next
              </button>
            </nav>
          </div>

          <div className="text-center text-sm text-gray-600 mt-4">
            Showing {Math.min(hardwareProducts.length, indexOfFirstProduct + 1)}{" "}
            - {Math.min(indexOfLastProduct, hardwareProducts.length)} of{" "}
            {hardwareProducts.length} products
          </div>
        </div>
      </section>

      {/* Additional small sections and footer kept simple for responsiveness */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalSections.map((s, i) => (
              <div key={s.id} className="bg-slate-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hardware;
