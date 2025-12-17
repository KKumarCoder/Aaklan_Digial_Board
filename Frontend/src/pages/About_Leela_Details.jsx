import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "https://www.datocms-assets.com/32427/1705678320-icons-plc-landing_1-course.png?auto=format&w=600",
      title: "Full Course Access",
      description:
        "Get 20 hours of lessons with the Explore PLC course. Learn about Programmable Logic Controllers, Modbus RS-485 communications, and integration with industrial simulated systems, among other comprehensive topics.",
    },
    {
      icon: "https://www.datocms-assets.com/32427/1705678354-icons-plc-landing_2-program.png?auto=format&w=600",
      title: "5 PLC Programming Languages",
      description:
        "Program the kit effortlessly using the Arduino PLC IDE. Choose from Ladder, Functional Block Diagram, Structured Text, Sequential Function Chart, or Instruction List to swiftly code PLC applications.",
    },
    {
      icon: "https://www.datocms-assets.com/32427/1705678354-icons-plc-landing_2-program.png?auto=format&w=600",
      title: "Industry Ready Skills",
      description:
        "Prepare for real-world industrial automation challenges with hands-on experience using modern PLC standards and practices.",
    },
  ];

  const contentSections = [
    {
      image:
        "https://www.datocms-assets.com/32427/1705593831-plccontent-01-920x517.png?auto=format&max-w=980",
      title: "Why PLC Education Matters",
      description:
        "Programmable Logic Controller (PLC) technology is vital for industrial automation. Our educational PLC Starter Kit acts as a bridge between theory and practice, preparing students for real-world challenges in modern industrial environments.",
      reverse: false,
    },
    {
      image:
        "https://www.datocms-assets.com/32427/1705497225-6545.jpg?auto=format&max-w=980",
      title: "5 PLC Programming Languages Supported",
      description:
        "Program the kit effortlessly using the Arduino PLC IDE. This user-friendly environment simplifies PLC programming for teachers and students. Choose from any of the five programming languages defined by the IEC 61131-3 standard: Ladder, Functional Block Diagram, Structured Text, Sequential Function Chart, or Instruction List.",
      reverse: true,
    },
    {
      image:
        "https://www.datocms-assets.com/32427/1705594025-plccontent-02-920x517.png?auto=format&max-w=980",
      title: "Enhanced Arduino IDE 2",
      description:
        "With PLC Starter Kit you will have an Intro to IEC 61131-3 standard programming languages. However, one strong point of Arduino Opta WiFi is that it can be programmed and integrated into an industrial automation system completely with our powerful IDE 2.",
      reverse: false,
    },
    {
      image:
        "https://www.datocms-assets.com/32427/1705594410-6453.jpg?auto=format&max-w=980",
      title: "The Core of Arduino Opta",
      description:
        "At the heart of the Arduino PLC Starter Kit is the Arduino Opta WiFi, already a proven success in industry. Featuring the STM32H74X8 dual-core Arm® Cortex®-M7 processor, this powerful core enables real-time control, monitoring, and predictive maintenance applications.",
      reverse: true,
    },
    {
      image:
        "https://www.datocms-assets.com/32427/1705594148-integrated-system-din-i-o-simulators-920x517.png?auto=format&max-w=980",
      title: "Integrated System DIN I/O Simulators",
      description:
        "Facilitate classroom setup and simulate practical industry applications for enhanced hands-on learning with the NIX hardware. Includes digital input and output simulators, Arduino DIN Simulator, custom-designed board featuring eight switches and power control, resistor array, and temperature sensor.",
      reverse: false,
    },
    {
      image:
        "https://www.datocms-assets.com/32427/1705594618-6550.jpg?auto=format&max-w=980",
      title: "Prepare for Industry Applications",
      description:
        "Start your educational journey with us and gain practical experience that directly translates to industrial automation careers. Our comprehensive kit provides everything needed to master PLC programming and industrial control systems.",
      reverse: true,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Banner Section - Fixed to Half Screen */}
      <section className="relative h-[50vh] mt-16 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
        {/* Background Image with Proper Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://www.datocms-assets.com/32427/1705593327-banner-mobile-2000x2800.png?auto=format&max-w=600"
            alt="PLC Education Banner"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=PLC+Education+Banner";
            }}
          />
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                MICHEL EDUCATION
              </motion.h1>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                PLC Starter Kit
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Plug into the Future of Industrial Automation
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  EXPLORE PLC
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-xl text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  REQUEST A QUOTE
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white hidden sm:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <svg
              className="w-5 h-5 mx-auto mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="text-xs font-light">Scroll to explore</span>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What the Kit Offers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl cursor-pointer transition-all ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl transform scale-105"
                    : "bg-gradient-to-br from-blue-50 to-orange-50 text-gray-800 shadow-lg hover:shadow-xl"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className={`w-16 h-16 object-contain ${
                      activeFeature === index
                        ? "filter brightness-0 invert"
                        : ""
                    }`}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=Icon";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    activeFeature === index ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections with Alternating Layout */}
      {contentSections.map((section, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-12`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=PLC+Content";
                    }}
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="flex-1 w-full">
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {section.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Start Your Educational Journey With Us
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prepare for Industry Applications with our comprehensive PLC Starter
            Kit
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              BUY NOW
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              REQUEST A QUOTE
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-3">
            Leela By Aaklan
          </h3>
          <p className="text-gray-400 text-base">
            Innovative Educational Solutions for Industrial Automation
          </p>
          <div className="mt-4 text-gray-500 text-sm">
            <p>© 2025 Leela By Aaklan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
