import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Banner images array
const bannerImages = [
  "https://media.istockphoto.com/id/149431440/photo/tech-news.webp?a=1&b=1&s=612x612&w=0&k=20&c=XbOdBSY5aTuRxA7nZCApFSGD9u_XMXYxfGYqZREk2r4=",
  "https://media.istockphoto.com/id/1271550526/photo/white-paper-with-text-tech-news-in-male-hands-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=g0xU6AjfAzvpMJwXel1PxEK-5NYwRx884-u7m4ybDcY=",
  "https://media.istockphoto.com/id/164379537/photo/tech-news.webp?a=1&b=1&s=612x612&w=0&k=20&c=3DkUrGdNEMg-wp4HNhtfTymxJxET7lgeDgKC4jJ8GFo=",
  "https://media.istockphoto.com/id/614532632/photo/technology-digital-concept.jpg?s=612x612&w=0&k=20&c=K6qgEt4Xh0tXBk7j8xGEmai-coXAjp4IMIQk39vzOnE=",
  "https://media.istockphoto.com/id/2154259317/photo/digital-newspaper-and-magazine-subscription-plan-concept-man-decided-to-subscribe-close-up.jpg?s=612x612&w=0&k=20&c=f7SRLSGGJ4M5_HDyoRE4mFvJQ6czGXi_4eD2VU2IcPA=",
];

const dummyNews = [
  {
    id: 1,
    title: "Electronic drum business cards built on RP2040",
    desc: "A project worth making noise about",
    author: "David Crookes",
    date: "20th Nov 2025",
    comments: 3,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/Zero-2-HERO-Large-800x400.jpeg",
  },
  {
    id: 2,
    title: "How thousands of students are growing plants in space",
    desc: "Sowing seeds of discovery in space",
    author: "Ashley Whittaker",
    date: "19th Nov 2025",
    comments: 0,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/50946076_2190714414301489_9100185777735729152_n-800x400.jpg",
  },
  {
    id: 3,
    title: "What can you build with Raspberry Pi Zero?",
    desc: "Smaller, affordable & able to run a full OS",
    author: "Phil King",
    date: "17th Nov 2025",
    comments: 30,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 4,
    title: "AI-powered plant growth tracking system",
    desc: "Automation in controlled farming",
    author: "Ritu Sharma",
    date: "12th Nov 2025",
    comments: 4,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 5,
    title: "Mini IoT Satellite Simulator",
    desc: "A hands-on space tech learning experience",
    author: "Krishna Kumar",
    date: "10th Nov 2025",
    comments: 12,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/IMG_0489-800x400.jpeg",
  },
  {
    id: 6,
    title: "New robotics kit for beginners",
    desc: "Affordable STEM learning for everyone",
    author: "Aaklan Team",
    date: "5th Nov 2025",
    comments: 9,
    img: "https://www.raspberrypi.com/app/uploads/2025/08/SenS2-Internals-Large-800x400.jpeg",
  },
  {
    id: 7,
    title: "Electronic drum business cards built on RP2040",
    desc: "A project worth making noise about",
    author: "David Crookes",
    date: "20th Nov 2025",
    comments: 3,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/Zero-2-HERO-Large-800x400.jpeg",
  },
  {
    id: 8,
    title: "How thousands of students are growing plants in space",
    desc: "Sowing seeds of discovery in space",
    author: "Ashley Whittaker",
    date: "19th Nov 2025",
    comments: 0,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/50946076_2190714414301489_9100185777735729152_n-800x400.jpg",
  },
  {
    id: 9,
    title: "What can you build with Raspberry Pi Zero?",
    desc: "Smaller, affordable & able to run a full OS",
    author: "Phil King",
    date: "17th Nov 2025",
    comments: 30,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 10,
    title: "AI-powered plant growth tracking system",
    desc: "Automation in controlled farming",
    author: "Ritu Sharma",
    date: "12th Nov 2025",
    comments: 4,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 11,
    title: "Mini IoT Satellite Simulator",
    desc: "A hands-on space tech learning experience",
    author: "Krishna Kumar",
    date: "10th Nov 2025",
    comments: 12,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/IMG_0489-800x400.jpeg",
  },
  {
    id: 12,
    title: "New robotics kit for beginners",
    desc: "Affordable STEM learning for everyone",
    author: "Aaklan Team",
    date: "5th Nov 2025",
    comments: 9,
    img: "https://www.raspberrypi.com/app/uploads/2025/08/SenS2-Internals-Large-800x400.jpeg",
  },
  {
    id: 13,
    title: "How thousands of students are growing plants in space",
    desc: "Sowing seeds of discovery in space",
    author: "Ashley Whittaker",
    date: "19th Nov 2025",
    comments: 0,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/50946076_2190714414301489_9100185777735729152_n-800x400.jpg",
  },
  {
    id: 14,
    title: "What can you build with Raspberry Pi Zero?",
    desc: "Smaller, affordable & able to run a full OS",
    author: "Phil King",
    date: "17th Nov 2025",
    comments: 30,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 15,
    title: "AI-powered plant growth tracking system",
    desc: "Automation in controlled farming",
    author: "Ritu Sharma",
    date: "12th Nov 2025",
    comments: 4,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 16,
    title: "Mini IoT Satellite Simulator",
    desc: "A hands-on space tech learning experience",
    author: "Krishna Kumar",
    date: "10th Nov 2025",
    comments: 12,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/IMG_0489-800x400.jpeg",
  },
  {
    id: 17,
    title: "New robotics kit for beginners",
    desc: "Affordable STEM learning for everyone",
    author: "Aaklan Team",
    date: "5th Nov 2025",
    comments: 9,
    img: "https://www.raspberrypi.com/app/uploads/2025/08/SenS2-Internals-Large-800x400.jpeg",
  },
  {
    id: 18,
    title: "Electronic drum business cards built on RP2040",
    desc: "A project worth making noise about",
    author: "David Crookes",
    date: "20th Nov 2025",
    comments: 3,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/Zero-2-HERO-Large-800x400.jpeg",
  },
  {
    id: 19,
    title: "How thousands of students are growing plants in space",
    desc: "Sowing seeds of discovery in space",
    author: "Ashley Whittaker",
    date: "19th Nov 2025",
    comments: 0,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/50946076_2190714414301489_9100185777735729152_n-800x400.jpg",
  },
  {
    id: 20,
    title: "What can you build with Raspberry Pi Zero?",
    desc: "Smaller, affordable & able to run a full OS",
    author: "Phil King",
    date: "17th Nov 2025",
    comments: 30,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 21,
    title: "AI-powered plant growth tracking system",
    desc: "Automation in controlled farming",
    author: "Ritu Sharma",
    date: "12th Nov 2025",
    comments: 4,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 22,
    title: "Mini IoT Satellite Simulator",
    desc: "A hands-on space tech learning experience",
    author: "Krishna Kumar",
    date: "10th Nov 2025",
    comments: 12,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/IMG_0489-800x400.jpeg",
  },
  {
    id: 23,
    title: "New robotics kit for beginners",
    desc: "Affordable STEM learning for everyone",
    author: "Aaklan Team",
    date: "5th Nov 2025",
    comments: 9,
    img: "https://www.raspberrypi.com/app/uploads/2025/08/SenS2-Internals-Large-800x400.jpeg",
  },
];

const ITEMS_PER_PAGE = 12;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-change banner every 3 seconds
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(bannerInterval);
  }, []);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentItems = dummyNews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(dummyNews.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Banner animation variants
  const bannerVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-blue-50">
      {/* Banner Section */}
      <section className="relative h-[60vh] mt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            variants={bannerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={bannerImages[currentBanner]}
              alt="Tech News Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=Tech+News+Banner";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Latest Tech News
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 leading-relaxed font-light max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Stay updated with the latest innovations, projects, and
                breakthroughs from Leela By Aaklan
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-2xl text-base sm:text-lg shadow-2xl border-2 border-white/20"
                >
                  Explore Latest Articles
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Banner Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentBanner === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-center">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
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
            <span className="text-xs sm:text-sm font-light">
              Scroll for news
            </span>
          </div>
        </motion.div>
      </section>

      {/* News Content Section */}
      <div className="px-4 sm:px-6 lg:px-20 py-10">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
            News & Updates
          </h1>
          <p className="text-gray-700 mt-2 text-lg sm:text-xl font-medium">
            Latest from{" "}
            <span className="font-bold text-blue-600">Leela By Aaklan</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all"
          >
            🔎 Search Archive
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md hover:shadow-lg transition-all"
          >
            📡 RSS Feed
          </motion.button>
        </div> */}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-gray-200 overflow-hidden transform transition duration-300"
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=News+Image";
                  }}
                />
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="font-bold text-lg sm:text-xl hover:underline cursor-pointer text-gray-900 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-medium">{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={prevPage}
            disabled={currentPage === 1}
            whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            className={`px-6 py-3 rounded-xl border bg-white shadow-lg font-semibold transition-all ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-50 hover:shadow-xl"
            }`}
          >
            ← Previous
          </motion.button>

          <span className="font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Page {currentPage} of {totalPages}
          </span>

          <motion.button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            className={`px-6 py-3 rounded-xl border bg-white shadow-lg font-semibold transition-all ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-50 hover:shadow-xl"
            }`}
          >
            Next →
          </motion.button>
        </motion.div>

        {/* EXTRA SECTIONS */}

        {/* Trending Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text mb-6 text-center">
            🔥 Trending Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Robotics Innovations", "AI Projects", "STEM Courses"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl text-lg font-medium border border-gray-200 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⭐</span>
                    <span>{item}</span>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-20 p-8 sm:p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Join Our Newsletter
          </h2>
          <p className="opacity-90 text-sm sm:text-base max-w-2xl mx-auto">
            Stay updated with the latest innovations, projects, and
            announcements from Leela By Aaklan. Get exclusive content delivered
            to your inbox.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl text-gray-800 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Subscribe ›
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
