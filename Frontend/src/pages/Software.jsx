import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Software = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 - 9571677609";
    const message = "Hello, I have a question about your products.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Banner carousel state with useMemo to prevent unnecessary recalculations
  const bannerImages = useMemo(
    () => [
      "https://media.istockphoto.com/id/1189775247/photo/stem-robot.jpg?s=612x612&w=0&k=20&c=fkOZxZFBjtCV663CtATNuE1hGmdgRdOVc0OS-iFcArc=",
      "https://media.istockphoto.com/id/870664512/photo/stem-or-diy-electronic-kit-line-tracking-walking-robot-competition-ideas.jpg?s=612x612&w=0&k=20&c=BZcAM9dxQuMwdxIttAbEy1lr01U-g-knKsh5VLc7oTg=",
      "https://media.istockphoto.com/id/1188168938/photo/form-for-a-text-in-the-form-of-a-frame-with-electronic-parts-background-of-small-electronic.jpg?s=612x612&w=0&k=20&c=sa-nAMr7sHGoSlQ2mQ9PbzrZ2UmmI6HrZHQhdcj_aVc=",
      "https://media.istockphoto.com/id/1161986665/photo/robotics-line-tracking-sensors-development-closeup-and-electronic-invention-engineer.jpg?s=612x612&w=0&k=20&c=pzce2avKc5gAE3CXVYfgxb81ey-wwgVZpMaBWEpBLEU=",
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play banner with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // Increased interval for better UX

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Memoized data to prevent unnecessary re-renders
  const getStartedSteps = useMemo(
    () => [
      {
        step: 1,
        title: "Connect the Battery",
        description:
          "Connect the battery to the frontside of the Leela board using the provided connector.",
        detailedDescription:
          "Ensure the battery is fully charged before connecting. The battery connector is designed to fit only one way - align the pins properly before applying pressure. A secure connection will power all the onboard LEDs.",
        image: "Get_Start_With_Leela/Battery_Connect_Step1.png",
      },
      {
        step: 2,
        title: "Power via USB-C",
        description:
          "You can also power it up using USB-C cable for development.",
        detailedDescription:
          "The USB-C port provides both power and data connectivity. Use a high-quality USB-C cable that supports data transfer. This method is ideal when programming the board or when you need stable power for extended periods.",
        image: "Get_Start_With_Leela/USB_C_Cable_Step2.png",
      },
      {
        step: 3,
        title: "Switch On Leela Board",
        description:
          "Switch on the Leela Board using the power button located on the side.",
        detailedDescription:
          "Locate the power switch on the edge of the board. Slide it to the ON position. You should see the status LED light up indicating the board is receiving power. The board will now initialize its components.",
        image: "Get_Start_With_Leela/Switch_On_leela_Step3.png",
      },
      {
        step: 4,
        title: "Welcome to Robotics World",
        description:
          "You are in the world of robotics now. Ready to play with the robots?",
        detailedDescription:
          "Your Leela board is now ready for action! Explore the various sensors, motors, and interfaces. The board comes pre-loaded with demo programs that you can run immediately to test all functionalities.",
        image: "Get_Start_With_Leela/Robotics_Play_world_Step4.png",
      },
    ],
    []
  );

  const connectionSteps = useMemo(
    () => [
      {
        step: 1,
        title: "Launch PictoBlox",
        description:
          "Open PictoBlox application and enable pairing mode from settings.",
        detailedDescription:
          "Download and install PictoBlox from the official website. Launch the application and navigate to the settings menu. Enable Bluetooth pairing mode to allow connection with your Leela board.",
        image: "Get_Start_With_Leela/Pictoblox_Step1.jpeg",
      },
      {
        step: 2,
        title: "Activate Pairing Mode",
        description:
          "Make sure your Leela board is powered on and in pairing mode.",
        detailedDescription:
          "Press and hold the pairing button on your Leela board for 3 seconds until the Bluetooth LED starts blinking rapidly. This indicates the board is discoverable and ready to connect.",
        image: "Get_Start_With_Leela/Pictoblox_Step2.jpeg",
      },
      {
        step: 3,
        title: "Select Leela Device",
        description:
          "Select Leela from the available devices list in PictoBlox.",
        detailedDescription:
          "In PictoBlox, go to the Connect menu and scan for available devices. Look for 'Leela Board' in the list. The device ID usually starts with 'LEELA-' followed by numbers.",
        image: "Get_Start_With_Leela/Pictoblox_Step3.jpeg",
      },
      {
        step: 4,
        title: "Establish Connection",
        description:
          "Wait for the connection to establish successfully with confirmation.",
        detailedDescription:
          "Click on your Leela board in the devices list. PictoBlox will attempt to establish connection. A success message and connected status indicator will appear once the pairing is complete.",
        image: "Get_Start_With_Leela/Pictoblox_Step4.jpeg",
      },
      {
        step: 5,
        title: "Start Programming",
        description:
          "Begin creating your first robotics program in the scripting area!",
        detailedDescription:
          "Now you can drag and drop blocks from the palette to create programs. Test basic commands like controlling LEDs or reading sensor values to verify the connection is working properly.",
        image: "Get_Start_With_Leela/Pictoblox_Step5.jpeg",
      },
    ],
    []
  );

  const arduinoSteps = useMemo(
    () => [
      {
        step: 1,
        title: "Download Arduino IDE",
        description:
          "Download the Arduino IDE from the official website using Chrome browser.",
        detailedDescription:
          "Visit arduino.cc/en/software and download the latest version compatible with your operating system. The IDE is available for Windows, MacOS, and Linux systems.",
        image: "Get_Start_With_Leela/Ardino_Connects_1.png",
      },
      {
        step: 2,
        title: "Install Leela Board Package",
        description:
          "Add Leela board support to Arduino IDE via Board Manager.",
        detailedDescription:
          "Open Arduino IDE, go to File > Preferences. In Additional Boards Manager URLs, add the Leela board repository URL. Then go to Tools > Board > Boards Manager and install the Leela board package.",
        image: "Get_Start_With_Leela/Ardino_connect_2.png",
      },
      {
        step: 3,
        title: "Connect Leela Board",
        description:
          "Connect your Leela board to computer using USB-C data cable.",
        detailedDescription:
          "Use a high-quality USB-C cable that supports data transfer. Connect the Leela board to your computer. The board should be detected and appear in the device manager/port list.",
        image: "Get_Start_With_Leela/Ardino_Connect_3.png",
      },
      {
        step: 4,
        title: "Select Board and Port",
        description:
          "Configure Arduino IDE with correct board type and communication port.",
        detailedDescription:
          "In Arduino IDE, go to Tools > Board and select 'Leela Robotics Board'. Then go to Tools > Port and select the COM port assigned to your Leela board (on Windows) or /dev/ttyUSB* (on Linux) or /dev/cu.* (on Mac).",
        image: "Get_Start_With_Leela/Ardino_Connect_4.png",
      },
      {
        step: 5,
        title: "Upload Your First Program",
        description:
          "Write and upload your first text-based program to Leela board!",
        detailedDescription:
          "Start with a simple blink program to verify the setup. Write the code, click the upload button, and watch the compilation and upload process. The onboard LED should start blinking upon successful upload.",
        image: "Get_Start_With_Leela/Ardino_Connect_5.png",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        icon: <i class="fa-brands fa-bluetooth"></i>,
        title: "Powerful ESP32 Processor",
        description:
          "Dual-core processor with Wi-Fi and Bluetooth capabilities for advanced robotics applications",
      },
      {
        icon: <i className="fa-solid fa-wifi text-2xl"></i>,
        title: "Multiple Connectivity Options",
        description:
          "USB-C, Bluetooth, Wi-Fi, and multiple GPIO pins for versatile project connections",
      },
      {
        icon: <i className="fa-solid fa-puzzle-piece text-2xl"></i>,
        title: "Easy Expansion",
        description:
          "Compatible with various sensors, motors, and add-on modules for endless possibilities",
      },
      {
        icon: <i className="fa-solid fa-terminal text-2xl"></i>,
        title: "Dual Programming Support",
        description:
          "Support for both block-based (PictoBlox) and text-based (Arduino) programming",
      },
    ],
    []
  );

  const systemRequirements = useMemo(
    () => [
      {
        category: "Operating System",
        requirements: [
          "Windows 10/11",
          "macOS 10.14+",
          "Linux Ubuntu 18.04+",
          "Chrome OS",
        ],
      },
      {
        category: "Hardware",
        requirements: [
          "4GB RAM minimum",
          "2GB free storage",
          "USB-C port",
          "Bluetooth 4.0+",
        ],
      },
      {
        category: "Software",
        requirements: [
          "Chrome Browser 90+",
          "Arduino IDE 1.8+",
          "PictoBlox App/Web",
          "Drivers (if required)",
        ],
      },
    ],
    []
  );

  const troubleshootingTips = useMemo(
    () => [
      {
        problem: "Board not powering on",
        solution:
          "Check battery connection, ensure proper USB cable, verify power switch position",
      },
      {
        problem: "Bluetooth not connecting",
        solution:
          "Enable pairing mode, check device proximity, restart both devices, update firmware",
      },
      {
        problem: "Program upload failed",
        solution:
          "Verify board selection, check USB cable, restart IDE, check driver installation",
      },
      {
        problem: "Sensors not responding",
        solution:
          "Check connections, verify pin assignments, test with example code, update libraries",
      },
    ],
    []
  );

  // Memoized components to prevent unnecessary re-renders
  const LaptopFrame = useCallback(
    ({ image, alt, className = "" }) => (
      <div className={`relative ${className}`}>
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-4 shadow-2xl border-4 border-gray-700 transform perspective-1000">
          <div className="bg-black rounded-xl overflow-hidden border-2 border-gray-600 shadow-inner">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-contain bg-white min-h-[250px]"
              loading="lazy"
            />
          </div>
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-8 rounded-b-2xl shadow-lg border-t-2 border-gray-600 relative">
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full"></div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-t-sm"></div>
        </div>

        <div className="w-3/4 h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-b-lg mx-auto -mt-1 opacity-60 blur-sm"></div>
      </div>
    ),
    []
  );

  const EnhancedStepCard = useCallback(
    ({ step, index, isEven }) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`flex flex-col lg:flex-row items-stretch mb-16 ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div
          className={`w-full lg:w-1/2 ${
            isEven ? "lg:pr-8" : "lg:pl-8"
          } mb-8 lg:mb-0`}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-2xl border border-gray-200 h-full flex flex-col justify-center">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] rounded-2xl flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-lg">
                {step.step}
              </div>
              <div className="ml-4 lg:ml-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-700 font-medium mb-4">
                  {step.description}
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
              {step.detailedDescription}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-2xl"
          >
            <LaptopFrame image={step.image} alt={`Step ${step.step}`} />
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full font-semibold text-sm shadow-lg">
              Step {step.step}
            </div>
          </motion.div>
        </div>
      </motion.div>
    ),
    [LaptopFrame]
  );

  // Slide change handler
  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 overflow-x-hidden">
      {/* Enhanced Banner Carousel Section */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerImages[currentSlide]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Your Robotics Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-4xl mb-6 sm:mb-8 leading-relaxed font-light px-4"
          >
            Begin your adventure into the world of robotics with Leela -
            <span className="text-[#e12213] font-semibold">
              {" "}
              Powerful, Affordable,{" "}
            </span>
            and designed for innovators
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(225, 34, 19, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#e12213] to-[#ea8e0a] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all shadow-lg"
            >
              Start Building Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              View Documentation
            </motion.button>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {bannerImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleSlideChange(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 border-white ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-xs sm:text-sm flex flex-col items-center"
          >
            <span>Scroll to explore</span>
            <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center mt-1 sm:mt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] bg-clip-text text-transparent">
              Why Choose Leela?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Designed with beginners in mind, but powerful enough for advanced
              projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 text-center group cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] bg-clip-text text-transparent">
              Get Started with Leela
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to power up your Leela board and begin
              your robotics journey
            </p>
          </motion.div>

          {getStartedSteps.map((stepData, index) => (
            <EnhancedStepCard
              key={stepData.step}
              step={stepData}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section> */}

      {/* System Requirements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] bg-clip-text text-transparent">
              System Requirements
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Ensure your setup meets these requirements for optimal performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {systemRequirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                  {req.category}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {req.requirements.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-600 text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 bg-[#e12213] rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Methods Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] bg-clip-text text-transparent"
          >
            How To Program Leela
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12 px-4"
          >
            Choose your preferred programming method - both beginner-friendly
            and powerful
          </motion.p>

          <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* PictoBlox */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-center group cursor-pointer"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-3xl mb-4 sm:mb-6 mx-auto shadow-2xl  group-hover:border-blue-600 transition-all duration-300 transform group-hover:shadow-3xl">
                <img
                  src="Get_Start_With_Leela/PictoBlox.png"
                  alt="PictoBlox Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                PictoBlox
              </h3>
              <p className="text-blue-700 font-semibold text-base sm:text-lg">
                Block Based{" "}
                <span className="text-orange-400 text-xl sm:text-2xl mx-2">
                  /
                </span>{" "}
                Visual Coding
              </p>
              <p className="text-gray-600 mt-2 sm:mt-3 max-w-xs text-sm sm:text-base">
                Perfect for beginners - drag and drop blocks to create programs
              </p>
            </motion.div>

            {/* VS Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl font-bold text-gray-400 bg-white px-4 sm:px-6 py-2 sm:py-4 rounded-full shadow-lg"
            >
              OR
            </motion.div>

            {/* Arduino */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.3,
              }}
              className="text-center group cursor-pointer"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-3xl mb-4 sm:mb-6 mx-auto shadow-2xl  transition-all duration-300 transform group-hover:shadow-3xl">
                <img
                  src="Get_Start_With_Leela/Arduno_ide.png"
                  alt="Arduino Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                Arduino IDE
              </h3>
              <p className="text-green-700 font-semibold text-base sm:text-lg">
                Text Based{" "}
                <span className="text-orange-400 text-xl sm:text-2xl mx-2">
                  /
                </span>{" "}
                Advanced Coding
              </p>
              <p className="text-gray-600 mt-2 sm:mt-3 max-w-xs text-sm sm:text-base">
                For experienced users - write code in C++ for full control
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PictoBlox Connection Steps */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text text-transparent"
          >
            Connect with PictoBlox
          </motion.h2>

          {connectionSteps.map((step, index) => (
            <EnhancedStepCard
              key={step.step}
              step={step}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 sm:mt-20"
          >
            <div className="bg-gradient-to-r from-[#e12213] to-[#440fc2] rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -mt-16 -mr-16 sm:-mt-32 sm:-mr-32"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -mb-16 -ml-16 sm:-mb-32 sm:-ml-32"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Hurray! Connection Successful!
                </h3>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="/projects"> Start Your First Project</a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e12213] to-[#ea8e0a] bg-clip-text text-transparent">
              Quick Troubleshooting
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Common issues and their solutions to keep you moving forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {troubleshootingTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-red-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 font-bold text-base sm:text-lg mr-4 flex-shrink-0">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {tip.problem}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {tip.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <p className="text-gray-600 mb-4 sm:mb-6">
              Still facing issues? We're here to help!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#e12213] to-[#ea8e0a] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <a href="/contact"> Contact Us</a>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Arduino Connection Steps */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
          >
            Connect with Arduino IDE
          </motion.h2>

          {arduinoSteps.map((step, index) => (
            <EnhancedStepCard
              key={step.step}
              step={step}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 sm:mt-20"
          >
            <div className="bg-gradient-to-r from-orange-600 to-[#b50a01] rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -mt-16 -ml-16 sm:-mt-32 sm:-ml-32"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -mb-16 -mr-16 sm:-mb-32 sm:-mr-32"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Awesome! Setup Complete!
                </h3>
                <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8">
                  You are now ready to write advanced text-based programs.
                  Explore libraries, create complex logic, and build amazing
                  projects!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#070a18] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <a href="/contact"> Send Message</a>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#e12213] to-[#ea8e0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Robotics Journey?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto px-4">
              Join thousands of creators who are building amazing projects with
              Leela. From beginners to experts, everyone can create something
              incredible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#e12213] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg"
              >
                <a href="/contact">Get Leela Board Now</a>
              </motion.button>
              <button
                onClick={handleWhatsAppClick}
                className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                Join Community
              </button>
            </div>
            <p className="mt-6 sm:mt-8 opacity-75 text-sm sm:text-base">
              Need help? Contact our support team or visit our documentation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Software;
