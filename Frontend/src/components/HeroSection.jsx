import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Zap,
  Code,
  Wifi,
  Play,
  Sparkles,
  CircuitBoard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [direction, setDirection] = useState(0);

  const heroImages = [
    {
      src: "./Leela_Front_board.png",
      alt: "LEELA Front Board",
      title: "Front Board View",
      description: "Advanced circuit design with modular components",
      features: ["ARM Cortex", "20+ I/O", "USB-C"],
    },
    {
      src: "./new_aaklan.jpeg",
      alt: "LEELA Complete Setup",
      title: "Complete Setup",
      description: "Full robotics kit ready for innovation",
      features: ["Complete Kit", "Ready to Use", "Plug & Play"],
    },
    {
      src: "./Leela_8_8Matrix.png",
      alt: "LEELA 8x8 Matrix",
      title: "8x8 LED Matrix",
      description: "MOTOR L • MOTOR R • BETA - Precision motor control",
      features: ["Dual Motors", "LED Display", "Real-time"],
    },
    {
      src: "./leela_Board_direction.png",
      alt: "LEELA Board Direction",
      title: "Board Direction",
      description: "Easy navigation and component placement",
      features: ["Plug & Play", "Beginner", "Guided"],
    },
    {
      src: "./Leela_Ardino.png",
      alt: "LEELA Arduino Compatible",
      title: "Arduino Compatible",
      description: "Seamless integration with Arduino ecosystem",
      features: ["Arduino IDE", "Libraries", "Community"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setShowImage(false);
      setTimeout(() => {
        setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
        setShowImage(true);
      }, 600);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setShowImage(false);
    setTimeout(() => {
      setActiveImageIndex(
        (prev) => (prev - 1 + heroImages.length) % heroImages.length
      );
      setShowImage(true);
    }, 600);
  };

  const handleNext = () => {
    setDirection(1);
    setShowImage(false);
    setTimeout(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
      setShowImage(true);
    }, 600);
  };

  const features = [
    {
      icon: <Cpu className="w-5 h-5" />,
      text: "Advanced Processor",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Motor Control",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Arduino Compatible",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      text: "Wireless Connectivity",
      color: "from-orange-600 to-red-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Removed gradient orbs and floating bubbles — plain white background now */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-full px-5 py-3 w-fit shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(249, 115, 22, 0.6)",
              }}
            >
              <Sparkles className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-bold text-gray-800">
                Next-Gen Robotics Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-orange-400 via-red-500 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  LEELA
                </motion.span>
                <br />
                <span className="text-gray-800">By Aaklan</span>
                <br />
                <span className="text-gray-600 text-4xl lg:text-5xl">
                  Build. Learn. Innovate.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Experience the future of electronics with LEELA - a cutting-edge
              robotics platform designed for innovators, educators, and
              creators. Built with precision engineering and advanced
              technology.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <span className="font-bold text-gray-800 text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-blue-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2 justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-600 to-orange-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get LEELA Kit</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="group px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 justify-center hover:border-orange-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <a
                  target="_blank"
                  href="https://youtube.com/playlist?list=PLEm-2AuinyZc2_xe2opvWMnWcavdRNlIL&si=hVQHUkFW8v5GkbLW"
                >
                  {" "}
                  Watch Demo{" "}
                </a>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Popup Image Showcase */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Rotating Tech Icons */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/50"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Cpu className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-red-200 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -360],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-0 w-16 h-16  bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-400/50"
              animate={{
                x: [0, 15, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <CircuitBoard className="w-7 h-7 text-white" />
            </motion.div>

            {/* Main Image Area - Pure Popup Style */}
            <div className="relative w-full max-w-lg">
              <AnimatePresence mode="wait">
                {showImage && (
                  <motion.div
                    key={activeImageIndex}
                    className="relative"
                    initial={{
                      scale: 0,
                      opacity: 0,
                      rotate: direction > 0 ? 180 : -180,
                      x: direction > 0 ? 200 : -200,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      rotate: 0,
                      x: 0,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      rotate: direction > 0 ? -180 : 180,
                      x: direction > 0 ? -200 : 200,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      scale: { type: "spring", stiffness: 200, damping: 20 },
                    }}
                  >
                    {/* Glowing Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-100 via-red-500 to-blue-500 opacity-5 blur-2xl"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Pure Image - No Card */}
                    <motion.img
                      src={heroImages[activeImageIndex].src}
                      alt={heroImages[activeImageIndex].alt}
                      className="relative w-full h-96 object-contain drop-shadow-2xl"
                      initial={{ filter: "blur(10px)" }}
                      animate={{ filter: "blur(0px)" }}
                      transition={{ duration: 0.4 }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop";
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
              <motion.button
                onClick={handlePrevious}
                className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-orange-500/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border-2 border-gray-200 shadow-lg">
                {heroImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeImageIndex ? 1 : -1);
                      setShowImage(false);
                      setTimeout(() => {
                        setActiveImageIndex(index);
                        setShowImage(true);
                      }, 600);
                    }}
                    className="relative w-2 h-2"
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className={`w-full h-full rounded-full ${
                        index === activeImageIndex
                          ? "bg-gradient-to-r from-orange-500 to-red-500"
                          : "bg-white/30"
                      }`}
                      animate={
                        index === activeImageIndex ? { scale: [1, 1.3, 1] } : {}
                      }
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Background Wave Layer */}
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            className="fill-blue-100"
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z",
                "M0,0V56.29c47.79,12.2,103.59,22.17,158,18,70.36-5.37,136.33-23.31,206.8-27.5C438.64,42.43,512.34,63.67,583,82.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,35,1113-4.29,1200,62.47V120H0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Middle Tech Wave Layer */}
          <motion.path
            d="M0,20V66.29c47.79,15.2,103.59,25.17,158,21,70.36-5.37,136.33-28.31,206.8-32.5C438.64,50.43,512.34,68.67,583,85.05c69.27,15,138.3,20.88,209.4,10.08,36.15-5,69.85-14.84,104.45-24.34C989.49,45,1113,5.71,1200,65.47V120H0Z"
            className="fill-orange-200"
            animate={{
              d: [
                "M0,20V66.29c47.79,15.2,103.59,25.17,158,21,70.36-5.37,136.33-28.31,206.8-32.5C438.64,50.43,512.34,68.67,583,85.05c69.27,15,138.3,20.88,209.4,10.08,36.15-5,69.85-14.84,104.45-24.34C989.49,45,1113,5.71,1200,65.47V120H0Z",
                "M0,20V76.29c47.79,8.2,103.59,18.17,158,14,70.36-5.37,136.33-20.31,206.8-24.5C438.64,62.43,512.34,78.67,583,92.05c69.27,12,138.3,18.88,209.4,8.08,36.15-4,69.85-12.84,104.45-20.34C989.49,55,1113,18.71,1200,72.47V120H0Z",
                "M0,20V66.29c47.79,15.2,103.59,25.17,158,21,70.36-5.37,136.33-28.31,206.8-32.5C438.64,50.43,512.34,68.67,583,85.05c69.27,15,138.3,20.88,209.4,10.08,36.15-5,69.85-14.84,104.45-24.34C989.49,45,1113,5.71,1200,65.47V120H0Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Front Tech Wave Layer with Circuit Pattern */}
          <motion.path
            d="M0,40V80.29c47.79,10.2,103.59,18.17,158,15,70.36-4.37,136.33-22.31,206.8-26.5C438.64,65.43,512.34,78.67,583,92.05c69.27,12,138.3,18.88,209.4,8.08,36.15-4,69.85-12.84,104.45-20.34C989.49,60,1113,25.71,1200,78.47V120H0Z"
            className="fill-red-200"
            animate={{
              d: [
                "M0,40V80.29c47.79,10.2,103.59,18.17,158,15,70.36-4.37,136.33-22.31,206.8-26.5C438.64,65.43,512.34,78.67,583,92.05c69.27,12,138.3,18.88,209.4,8.08,36.15-4,69.85-12.84,104.45-20.34C989.49,60,1113,25.71,1200,78.47V120H0Z",
                "M0,40V88.29c47.79,6.2,103.59,14.17,158,11,70.36-4.37,136.33-18.31,206.8-22.5C438.64,73.43,512.34,84.67,583,96.05c69.27,10,138.3,16.88,209.4,6.08,36.15-3,69.85-10.84,104.45-16.34C989.49,70,1113,38.71,1200,84.47V120H0Z",
                "M0,40V80.29c47.79,10.2,103.59,18.17,158,15,70.36-4.37,136.33-22.31,206.8-26.5C438.64,65.43,512.34,78.67,583,92.05c69.27,12,138.3,18.88,209.4,8.08,36.15-4,69.85-12.84,104.45-20.34C989.49,60,1113,25.71,1200,78.47V120H0Z",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Tech Circuit Lines */}
          <g
            className="stroke-orange-400"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          >
            <motion.path
              d="M100,60 L150,50 L200,55 L250,45"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M400,70 L450,65 L500,72 L550,68"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />
            <motion.path
              d="M800,55 L850,60 L900,52 L950,58"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
          </g>

          {/* Tech Dots */}
          <motion.circle
            cx="200"
            cy="55"
            r="3"
            className="fill-orange-500"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="500"
            cy="72"
            r="3"
            className="fill-red-500"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="900"
            cy="52"
            r="3"
            className="fill-blue-500"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
