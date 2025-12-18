import React from "react";
import Fill_Your_Enquiry_form from "../components/Fill_Your_Enquiry_form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaHeadset,
  FaShippingFast,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 - 9571677609";
    const message = "Hello, I have a question about your products.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="mt-16 bg-gray-50">
      {/* ============================
          HEADER SECTION
      ============================== */}
      <header className="relative overflow-hidden bg-gradient-to-r from-red-700 via-blue-900 to-orange-700 text-white pt-20 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch With Us
            </h1>
            <p className="text-xl opacity-90">
              We're here to help! Reach out to our team for any questions about
              our products, services, or partnership opportunities.
            </p>
          </div>
        </div>
      </header>

      {/* ============================
          MAIN CONTENT - TWO COLUMN LAYOUT
      ============================== */}
      <main className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN - COMPANY INFO */}
          <div className="space-y-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About TechRobotics
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                We are pioneers in the field of educational robotics and
                automation solutions. With over a decade of experience, we've
                empowered thousands of students, developers, and industries with
                cutting-edge technology kits that bridge the gap between
                theoretical knowledge and practical application.
              </p>

              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-blue-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mt-1">
                    To democratize robotics education and make advanced
                    technology accessible to learners at all levels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaHeadset className="text-purple-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Our technical support team is available 24/7 to help you
                    with any challenges in your learning journey.
                  </p>
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                <FaCheckCircle className="mr-3" />
                Why Choose Us?
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    High-quality, durable robotics kits with comprehensive
                    documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    24/7 Technical Support & Learning Guidance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Project-based learning approach with 100% hands-on
                    experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Fast & reliable shipping across India with easy returns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Regular workshops, webinars and learning resources
                  </span>
                </li>
              </ul>
            </div>

            {/* PRODUCT RANGE */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Our Product Range
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">Arduino Kits</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Beginner to advanced development kits
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">IoT Systems</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Smart home & industrial automation
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">AI Robotics</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Machine learning enabled robots
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">
                    Wireless Modules
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    RF, Bluetooth, WiFi communication
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM (USING COMPONENT) */}
          <div>
            <Fill_Your_Enquiry_form />
          </div>
        </div>
      </main>

      {/* ============================
          CONTACT INFO CARDS
      ============================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">+91 - 9571677609</p>
              <p className="text-gray-500 text-sm">Mon-Sat, 9AM-8PM</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Info@aaklan.com</p>
              <p className="text-gray-500 text-sm">sales@techrobotics.com</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">
                Aaklan, IT - 9 A, EPIP, IT Park Rd Sitapura Industrial Area,
                Sitapura, Jaipur, Rajasthan 302022
              </p>
              <p className="text-gray-500 text-sm">Rajasthan, India - 342001</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-2">Mon - Sat: 9AM - 5PM</p>
              <p className="text-gray-500 text-sm">Sun: closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          FINAL CTA SECTION
      ============================== */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl opacity-90 mb-10">
              Our customer support team typically responds within 30 minutes
              during business hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                WhatsApp Us Now
              </button>

              <a
                href="tel:+919571677609"
                className="px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3"
              >
                <FaPhone />
                Call Directly
              </a>
            </div>

            <p className="mt-10 text-lg">
              For technical support, email us at{" "}
              <span className="font-bold">Info@aaklan.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Add some custom animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
