const LeelaDocumentationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#102348" }}>
            Leela Board Architecture & Overview
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Complete technical specifications and component details for the
            Leela Development Board
          </p>
        </div>

        {/* Images Side by Side - Larger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Front Side */}
          <div className="text-center">
            <div
              className="bg-gray-50 rounded-xl p-6 border-2 shadow-sm"
              style={{ borderColor: "#ea8e0a" }}
            >
              <img
                src="/Leela_Details_Pic/Leela_Front_Side.png"
                alt="Leela Board Front Side"
                className="w-full h-auto rounded-lg mx-auto"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
            <h3
              className="font-semibold mt-6 text-xl"
              style={{ color: "#102348" }}
            >
              Front Side Components
            </h3>
          </div>

          {/* Back Side */}
          <div className="text-center">
            <div
              className="bg-gray-50 rounded-xl p-6 border-2 shadow-sm"
              style={{ borderColor: "#ea8e0a" }}
            >
              <img
                src="/Leela_Details_Pic/Leela_back_Side.png"
                alt="Leela Board Back Side"
                className="w-full h-auto rounded-lg mx-auto"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
            <h3
              className="font-semibold mt-6 text-xl"
              style={{ color: "#102348" }}
            >
              Back Side Components
            </h3>
          </div>
        </div>

        {/* Information Sections */}
        <div className="space-y-10">
          {/* Front Side Information */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#102348" }}
            >
              Front Side Features & Specifications
            </h2>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The front side of the Leela Board features comprehensive
                connectivity options for robotics and IoT projects. It includes{" "}
                <strong style={{ color: "#f08b82" }}>
                  4 dedicated motor ports
                </strong>{" "}
                with clearly marked front and back specifications for precise
                motor control.
              </p>

              <p>
                For sensor integration, the board provides{" "}
                <strong style={{ color: "#f08b82" }}>
                  ultrasonic sensor ports
                </strong>{" "}
                for distance measurement and obstacle detection, along with{" "}
                <strong style={{ color: "#f08b82" }}>5 touch pins</strong> that
                support capacitive touch input for interactive applications.
              </p>

              <p>
                Communication capabilities include{" "}
                <strong style={{ color: "#f08b82" }}>I2C ports</strong> for
                connecting multiple peripheral devices with minimal wiring,
                while the integrated{" "}
                <strong style={{ color: "#f08b82" }}>8x8 LED matrix</strong>{" "}
                offers visual feedback for displaying patterns, text, and status
                information.
              </p>

              <p>
                Power management is handled through a comprehensive layout of{" "}
                <strong style={{ color: "#f08b82" }}>
                  power, digital, and analog pins
                </strong>
                , with a dedicated{" "}
                <strong style={{ color: "#f08b82" }}>battery connector</strong>{" "}
                for portable and wireless operation.
              </p>
            </div>
          </div>

          {/* Back Side Information */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#102348" }}
            >
              Back Side Features & Specifications
            </h2>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The back side of the Leela Board focuses on power management and
                core functionality. It features clear{" "}
                <strong style={{ color: "#f08b82" }}>
                  power status indicators
                </strong>{" "}
                for monitoring board power levels and operational status.
              </p>

              <p>
                User control is enhanced with a convenient{" "}
                <strong style={{ color: "#f08b82" }}>power switch</strong> for
                easy on/off operation without disconnecting power sources, and a
                dedicated{" "}
                <strong style={{ color: "#f08b82" }}>reset button</strong> for
                restarting the board and reloading programs when needed.
              </p>

              <p>
                Motor control is supported by an integrated{" "}
                <strong style={{ color: "#f08b82" }}>motor driver</strong> that
                efficiently handles both DC motors and servo motors, while the
                built-in <strong style={{ color: "#f08b82" }}>buzzer</strong>{" "}
                provides audio feedback for alarms, notifications, and
                sound-based projects.
              </p>

              <p>
                Modern connectivity is ensured through a{" "}
                <strong style={{ color: "#f08b82" }}>
                  USB-C type connector
                </strong>{" "}
                that supports programming, power delivery, and data transfer,
                following current industry standards for reliable and fast
                connections.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#102348" }}
            >
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Processor
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    ESP32-WROOM
                  </span>
                </div>
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Wireless Connectivity
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    WiFi + Bluetooth
                  </span>
                </div>
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Input Voltage
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    5V - 12V
                  </span>
                </div>
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Digital I/O Pins
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    20
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Analog Input Pins
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    8
                  </span>
                </div>
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    PWM Channels
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    16
                  </span>
                </div>
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Motor Ports
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    4
                  </span>
                </div>
                <div className="flex justify-between border-b-2 pb-3">
                  <span
                    className="font-medium text-lg"
                    style={{ color: "#102348" }}
                  >
                    Touch Pins
                  </span>
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#ea8e0a" }}
                  >
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Information */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#102348" }}
            >
              Board Overview & Applications
            </h2>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The Leela Development Board is designed as a comprehensive
                solution for Arduino enthusiasts, educators, and IoT developers.
                With its ESP32-WROOM processor, the board delivers robust
                processing power while maintaining compatibility with the
                Arduino IDE ecosystem.
              </p>

              <p>
                This board is particularly well-suited for robotics projects,
                thanks to its dedicated motor control ports and integrated motor
                driver. The combination of ultrasonic sensor support, touch
                inputs, and visual feedback through the LED matrix makes it
                ideal for interactive and autonomous robotic applications.
              </p>

              <p>
                For IoT applications, the built-in WiFi and Bluetooth
                capabilities enable seamless connectivity to networks and other
                devices. The comprehensive pin layout supports a wide range of
                sensors and peripherals, making the Leela Board versatile for
                smart home devices, environmental monitoring systems, and
                educational projects.
              </p>

              <p>
                The thoughtful design incorporating both front-side connectivity
                and back-side management features ensures that users have access
                to all necessary components without compromising on usability or
                expandability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeelaDocumentationSection;
