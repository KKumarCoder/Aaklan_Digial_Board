import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Leela_Projects_Details = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    "https://media.istockphoto.com/id/1280863330/photo/young-asian-teen-enjoy-with-toy-car-workshop.jpg?s=612x612&w=0&k=20&c=OKMNyM45GytNVx0fmQRBjAUzRKIfKBquVawVPszyZyU=",
    "https://media.istockphoto.com/id/2205736389/photo/young-african-american-boy-in-stem-education-by-assembling-robot-at-home-stem-education.jpg?s=612x612&w=0&k=20&c=9m0lxNx9jd1Ucn_z0BRNyFkd16bPMQkqvjpqbaIm8mo=",
    "https://media.istockphoto.com/id/1176477598/photo/boy-with-tablet-pc-computer-programming-electric-toys-and-building-robots.jpg?s=612x612&w=0&k=20&c=n73MJFIoeDS6fqyixUp2xAOEcZo7qPXUDBA0agRlgnU=",
  ];

  // Rotate banner images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

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

  // IMPORTANT: images must be placed in Frontend/public/Projects/ for local images used below
  const contentSections = [
    {
      image: "/Projects/Smart_Distance_Indicator.jpeg",
      title: (
        <div>
          SMART <b className="text-[#ea8e0a]">DISTANCE INDICATOR</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>Ultrasonic Sensor</li>
              <li>HW Battery</li>
              <li>OLED Display</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project measures the distance of an object using an
              ultrasonic sensor. The detected distance is then displayed on the
              OLED screen in real time whenever an object comes within the
              sensor's range.
            </p>
          </div>
        </div>
      ),
      reverse: false,
    },
    {
      image: "/Projects/Auto_Detect_lamp.JPG",
      title: (
        <div>
          AUTO <b className="text-[#ea8e0a]">DETECT LAMP</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>Ultrasonic Sensor</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project works as an automatic lamp that changes color based
              on object detection. When an object is detected within 5 cm, the
              LED matrix glows red, and when no object is nearby, it shows
              green. It can also be used as a normal lamp for illumination.
            </p>
          </div>
        </div>
      ),
      reverse: true,
    },
    {
      image: "/Projects/SMART EMOTION DISPLAY.jpeg",
      title: (
        <div>
          SMART <b className="text-[#ea8e0a]">EMOTION DISPLAY</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project displays different emotions on the LED matrix. The
              expressions can be changed based on programmed inputs, making it
              suitable for interactive or decorative display purposes.
            </p>
          </div>
        </div>
      ),
      reverse: false,
    },
    {
      image: "/Projects/BLUETOOTH CONTROLLED CAR.jpeg",
      title: (
        <div>
          BLUETOOTH <b className="text-[#ea8e0a]">CONTROLLED CAR</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>Ultrasonic Sensor</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project allows the car to be operated wirelessly through a
              mobile phone using Bluetooth connectivity. Once paired, the car's
              movement can be controlled in different directions directly from
              the phone.
            </p>
          </div>
        </div>
      ),
      reverse: true,
    },
    {
      image: "Projects/ULTRASONIC DISTANCE INDICATOR.jpeg",
      title: (
        <div>
          ULTRASONIC <b className="text-[#ea8e0a]">DISTANCE INDICATOR</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>Ultrasonic Sensor</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project measures the distance of an object using an
              ultrasonic sensor. The detected distance is then displayed on LED
              Matrix in real time whenever an object comes within the sensor's
              range.
            </p>
          </div>
        </div>
      ),
      reverse: false,
    },
    {
      image: "Projects/Flame_Detection_Alarm_System.jpg",
      title: (
        <div>
          FLAME <b className="text-[#ea8e0a]">DETECTION ALARM SYSTEM</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
              <li>Flame Sensor</li>
              <li>Buzzer</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project detects the presence of a flame using a flame sensor.
              When a flame is detected, the buzzer automatically sounds an
              alarm, and the 8×8 LED matrix glows red to indicate danger
            </p>
          </div>
        </div>
      ),
      reverse: true,
    },
    {
      image: "/Projects/Bluetooth_Message_display.jpeg",
      title: (
        <div>
          BLUETOOTH <b className="text-[#ea8e0a]">MESSAGE DISPLAY</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              In this project, the Leela Board is connected to a mobile phone
              via Bluetooth. Using a Serial Bluetooth app, the user can send any
              message from the phone, which is then displayed on the LED matrix
              in real time.
            </p>
          </div>
        </div>
      ),
      reverse: false,
    },
    {
      image: "/Projects/Touch_Control_Robot_Car.jpeg",
      title: (
        <div>
          TOUCH <b className="text-[#ea8e0a]">CONTROL ROBOT CAR</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
              <li>4 Wheels</li>
              <li>4 Motors</li>
              <li>4 Motor Clips</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project uses the in-built touch sensors of the Leela Board to
              control the car's movement. Each touch sensor is assigned a
              specific function — Touch 1 for Forward, Touch 2 for Backward,
              Touch 3 for Right, Touch 4 for Left, and Touch 5 for Stop. Thus,
              the car can be easily operated through touch inputs.
            </p>
          </div>
        </div>
      ),
      reverse: true,
    },
    {
      image: "/Projects/Message_Detection_Robot_Car.JPG",
      title: (
        <div>
          MESSAGE <b className="text-[#ea8e0a]">DETECTION ROBOT CAR</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>Ultrasonic Sensor</li>
              <li>C type Cable</li>
              <li>4 Wheels</li>
              <li>4 Motors</li>
              <li>4 Motor Clips</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              In this project, an ultrasonic sensor is connected to the
              dedicated port on the Leela Board. The sensor detects objects at
              different distances, and based on the detected range, specific
              messages are displayed on the LED matrix. The robot car can thus
              display real-time messages according to object proximity.
            </p>
          </div>
        </div>
      ),
      reverse: false,
    },
    {
      image: "/Projects/Bluetooth_Control_Lamp.jpg",
      title: (
        <div>
          BLUETOOTH <b className="text-[#ea8e0a]">CONTROL LAMP</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>

              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              In this project, the Leela Board is connected to a mobile phone
              via Bluetooth using a Serial Bluetooth app. Through the app, all
              LEDs of the 8×8 LED matrix can be turned on to make it glow
              brightly, allowing it to be used as a decorative or functional
              lamp.
            </p>
          </div>
        </div>
      ),
      reverse: true,
    },
    {
      // Replaced image with video for this project
      video: "/Projects/Videos_Project/LEARN ALPHABETS WITH LEELA.mp4",
      title: (
        <div>
          LEARN <b className="text-[#ea8e0a]">ALPHABETS WITH LEELA</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              In this project, the Leela Board connects to a mobile phone via
              Bluetooth using a Serial Bluetooth app. The user can send numbered
              inputs (for example, 1 for A, 2 for B, and so on) to display
              corresponding alphabets from A to Z on the LED matrix, making it a
              fun and interactive learning tool.
            </p>
          </div>
        </div>
      ),
      reverse: false,
    },
    {
      image: "/Projects/LEARN COUNTING WITH LEELA.png",
      title: (
        <div>
          LEARN <b className="text-[#ea8e0a]"> COUNTING WITH LEELA</b>
        </div>
      ),
      description: (
        <div className="space-y-3">
          <div>
            <strong className="text-gray-800">Components Used:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Leela Board</li>
              <li>HW Battery</li>
              <li>C type Cable</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Working Principle:</strong>
            <p className="mt-2 text-gray-600">
              This project displays counting numbers on the LED matrix of the
              Leela Board. It helps users learn and visualize numbers in a
              simple and interactive way.
            </p>
          </div>
        </div>
      ),
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

  const qrVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // small helper for img fallback
  const handleImgError = (e) => {
    e.currentTarget.src = "/assets/fallback-project.png";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Banner Section - Responsive Height */}
      <section className="relative h-[50vh] sm:h-[50vh] lg:h-[60vh] mt-16 overflow-hidden bg-gradient-to-br from-blue-400 to-orange-400">
        {/* Background Images with Rotation */}
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Project Building ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentBanner === index ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentBanner === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              onError={(e) =>
                (e.currentTarget.src = "/assets/fallback-banner.jpg")
              }
              loading="lazy"
            />
          ))}
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                BUILD INNOVATE CREATE
              </motion.h1>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#ea8e0a] to-[#b50a01]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Leela Project Showcase
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 font-light max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Hands-on STEM Projects for Future Innovators
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
                  className="bg-[#b50a01] text-white font-bold py-3 px-6 sm:py-4 sm:px-10 lg:py-4 lg:px-12 rounded-xl text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  EXPLORE PROJECTS
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-10 lg:py-4 lg:px-12 rounded-xl text-base sm:text-lg lg:text-xl hover:bg-white hover:text-blue-600 transition-all"
                >
                  GET STARTED
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Banner Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentBanner === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hidden sm:block"
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
            <span className="text-xs font-light">
              Scroll to explore projects
            </span>
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
            Project Features & Benefits
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
                    ? "bg-gradient-to-br from-[#102348] to-[#e12213] text-white shadow-2xl transform scale-105"
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
                      e.currentTarget.src = "/assets/fallback-icon.png";
                    }}
                    loading="lazy"
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

      {/* Content Sections */}
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
              {/* Media column - fixed height for consistent card size */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="w-full h-64 md:h-80 lg:h-100 overflow-hidden bg-gray-100">
                    {section.video ? (
                      // Video Player for LEARN ALPHABETS WITH LEELA
                      <video
                        src={section.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          // Fallback to image if video fails to load
                          e.currentTarget.style.display = "none";
                          const fallbackImg = document.createElement("img");
                          fallbackImg.src = "/assets/fallback-project.png";
                          fallbackImg.className =
                            "w-full h-full object-cover object-center";
                          fallbackImg.alt =
                            typeof section.title === "string"
                              ? section.title
                              : "section image";
                          e.currentTarget.parentNode.appendChild(fallbackImg);
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Image for other projects
                      <img
                        src={section.image}
                        alt={
                          typeof section.title === "string"
                            ? section.title
                            : "section image"
                        }
                        className="w-full h-full object-cover object-center"
                        onError={handleImgError}
                        loading="lazy"
                      />
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Text column */}
              <div className="flex-1 w-full">
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>

                <motion.div
                  className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {section.description}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://www.aaklan.com/ai-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#08214f] text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base cursor-pointer"
                    >
                      Learn More
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#e12213] via-[#ea8e0a] to-[#b50a01] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Start Your Project Building Journey
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Build amazing projects and develop practical skills with our Leela
            STEM kits
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
              className="bg-white text-[#08214f] font-bold py-3 px-8 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              GET YOUR KIT
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl text-base sm:text-lg hover:bg-white hover:text-[#08214f] transition-all"
            >
              VIEW ALL PROJECTS
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* QR Code Section for More Projects */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-center gap-12"
          >
            {/* QR Code Image */}
            <motion.div variants={qrVariants} className="flex-1 max-w-md">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-[#ea8e0a]">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Scan for More Projects
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Scan this QR code to explore additional Leela projects
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/Projects/QR_Code_for_More_projects.jpeg"
                    alt="QR Code for More Projects"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/fallback-qr.png";
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">
                    Point your camera at the QR code to discover more exciting
                    projects
                  </p>
                </div>
              </div>
            </motion.div>

            {/* QR Code Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 max-w-2xl"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Discover More{" "}
                <span className="text-[#ea8e0a]">Exciting Projects</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  <strong className="text-gray-800">
                    Unlock a World of Possibilities:
                  </strong>{" "}
                  Our QR code gives you instant access to a comprehensive
                  collection of Leela projects beyond what you see here.
                </p>

                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#08214f]">
                  <h4 className="font-bold text-gray-800 mb-2">
                    What You'll Find:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Advanced robotics and automation projects</li>
                    <li>IoT and smart home applications</li>
                    <li>Interactive gaming and entertainment projects</li>
                    <li>Educational tools and learning aids</li>
                    <li>Real-world industrial applications</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  <strong>How to use:</strong> Simply open your smartphone
                  camera, point it at the QR code, and tap the notification to
                  explore our complete project library.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#08214f] text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-base"
                >
                  DOWNLOAD PROJECT CATALOG
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leela_Projects_Details;
