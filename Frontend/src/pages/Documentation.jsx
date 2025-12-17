import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Documentation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tutorialsPerPage = 6;

  const tutorials = [
    {
      id: 1,
      title: "How to build a Raspberry Pi cluster",
      description:
        "A Raspberry Pi cluster is a low-cost, versatile system you can use for all kinds of clustered-computing related technologies, and you have total control over the machines that constitute it.",
      image:
        "https://www.raspberrypi.com/tutorials/tutorials/images/Cluster-800x533.jpg",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Host a Wi-Fi hotspot with a Raspberry Pi",
      description:
        "This Raspberry Pi-hosted Wi-Fi hotspot connects to a guest Wi-Fi network, then runs a separate private Wi-Fi network for all of your devices.",
      image:
        "https://www.raspberrypi.com/tutorials/tutorials/images/hotspot/hero.jpg",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Block ads at home with Pi-hole",
      description:
        "Pi-hole blocks internet ads at your router, removing bandwidth-sucking and privacy-invading ads from your whole network.",
      image: "https://www.raspberrypi.com/tutorials/assets/images/banner.jpg",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "How to play retro games on your Raspberry Pi with RetroPie",
      description:
        "Are you looking to (re)discover the joy of playing retro video games using a Raspberry Pi and RetroPie? Here's everything you need to know to get started.",
      image:
        "https://www.raspberrypi.com/tutorials/tutorials/images/RetroPie_GREY-800x532.jpg",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "How to add ambient lighting to your TV with Raspberry Pi",
      description:
        "Make watching TV more immersive with Raspberry Pi-powered ambient lighting.",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=300&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Raspberry Pi Pico Iron Man Arc Reactor",
      description:
        "Build your own Iron Man Arc Reactor using a Raspberry Pi Pico, a strip of LEDs, and some wizardry to produce a 30 infinity mirror effect.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      readTime: "15 min read",
    },
    {
      id: 7,
      title: "How to build a Raspberry Pi NAS",
      description:
        "A Raspberry Pi NAS (network-attached storage) lets you save files from all your devices to external third drives via your wireless network.",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=300&fit=crop",
      readTime: "9 min read",
    },
    {
      id: 8,
      title: "How to use a Raspberry Pi in kiosk mode",
      description:
        "Kiosk mode lets you boot to a web page or application without giving users access to anything else. It's the basis for all kinds of projects.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 9,
      title: "Smart Home Automation with Leela",
      description:
        "Transform your home into a smart ecosystem using Leela By Aaklan with voice control and automation.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055897?w=500&h=300&fit=crop",
      readTime: "11 min read",
    },
    {
      id: 10,
      title: "Weather Station with Real-time Monitoring",
      description:
        "Build your own weather monitoring station that provides real-time data and historical analytics.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      readTime: "14 min read",
    },
  ];

  // Calculate pagination
  const indexOfLastTutorial = currentPage * tutorialsPerPage;
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialsPerPage;
  const currentTutorials = tutorials.slice(
    indexOfFirstTutorial,
    indexOfLastTutorial
  );
  const totalPages = Math.ceil(tutorials.length / tutorialsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Leela By Aaklan Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're doing some smart home improvements or just want to
            inject a bit of fun into your life, we've got something that you can
            build easily and affordably.
          </p>
        </motion.div>

        {/* Featured Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Getting Started with Leela
            </h2>
            <p className="text-lg mb-6">
              New to Leela By Aaklan? Start your journey with our
              beginner-friendly guides and build amazing projects from day one.
            </p>
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Beginner's Guide
            </button>
          </div>
        </motion.section>

        {/* Tutorials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {tutorial.readTime}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                <Link
                  to={`/documentation/${tutorial.id}`}
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
                >
                  Read more →
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center space-x-2"
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </motion.div>

        {/* Community Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">
              Connect with other Leela By Aaklan enthusiasts, share your
              projects, and get help from the community.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Discord
              </button>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Documentation;
