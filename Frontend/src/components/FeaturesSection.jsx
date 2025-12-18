import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Pointer } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "8×8 LED Matrix",
    description:
      "Vibrant full-color displays for smooth visual feedback and animations.",
    image: "Advanced_Features/Matrix_8_8.png",
  },
  {
    id: 2,
    title: "Ultrasonic Sensor",
    description:
      "Precise distance measurement for obstacle detection and navigation.",
    image: "Advanced_Features/Ultrasonic_Sensor.png",
  },
  {
    id: 3,
    title: "USB-C Ports",
    description:
      "Fast charging and stable high-speed data transfer capabilities.",
    image: "Advanced_Features/C_Type.png",
  },
  {
    id: 4,
    title: "5 Touch Sensors",
    description: "Responsive touch-based control for interactive projects.",
    image: "Advanced_Features/Five_touch_senser.png",
  },
  {
    id: 5,
    title: "On-board Motor Driver",
    description: "Direct dual-motor control with no external modules required.",
    image: "Advanced_Features/On_boardMotorDriver.png",
  },
  {
    id: 6,
    title: "I2C Module",
    description: "Plug-and-play connectivity with built-in power output.",
    image: "Advanced_Features/I2C_Module.png",
  },
  {
    id: 7,
    title: "4 Motor Ports",
    description: "Multiple motor connections for complex robotic mechanisms.",
    image: "Advanced_Features/4_Motor_Ports.png",
  },
  {
    id: 8,
    title: "Battery + Ports",
    description: "Convenient power management with easy battery connectivity.",
    image: "Advanced_Features/BatteryPorts.png",
  },
];

export default function FeaturesSectionClean() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#102348] mb-4">
            Advanced Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed for performance and reliability, Leela board comes packed
            with premium features for your robotics projects
          </p>
        </motion.div>

        {/* 4×4 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0F2348] to-[#e12213] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 opacity-90">
              Explore all features and start building with Leela today
            </p>

            <a href="/contact">
              <button className="bg-white cursor-pointer text-[#e12213] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Submit Enquiry
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer"
    >
      {/* Image Container with Rectangle Border */}
      <div className="relative p-4">
        <div className="w-40 h-40 mx-auto rounded-full border-2 border-[#e12213] p-2 group-hover:border-[#ea8e0a] transition-colors duration-300 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 pt-2 text-center">
        <h3 className="text-xl font-bold text-[#102348] mb-3 group-hover:text-[#e12213] transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Learn More Link */}
        {/* <div className="mt-4">
          <button className="text-[#e12213] font-semibold text-sm hover:text-[#ea8e0a] transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
            Learn More
            <svg
              className="w-4 h-4"
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
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}
