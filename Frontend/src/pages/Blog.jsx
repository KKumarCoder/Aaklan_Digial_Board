import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  Tag,
  BookOpen,
  Search,
  ChevronRight,
  TrendingUp,
  Bookmark,
  Heart,
  MessageCircle,
  Filter,
  X,
} from "lucide-react";
import Fill_Your_Enquiry_form from "../components/Fill_Your_Enquiry_form";

// Banner images array for blog
const bannerImages = [
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

// Blog categories
const categories = [
  {
    id: "all",
    name: "All Posts",
    count: 89,
    color: "bg-gray-100 text-gray-800",
  },
  {
    id: "tech",
    name: "Technology",
    count: 23,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "iot",
    name: "IoT Projects",
    count: 18,
    color: "bg-green-100 text-green-800",
  },
  {
    id: "robotics",
    name: "Robotics",
    count: 15,
    color: "bg-purple-100 text-purple-800",
  },
  { id: "ai-ml", name: "AI & ML", count: 12, color: "bg-red-100 text-red-800" },
  {
    id: "tutorials",
    name: "Tutorials",
    count: 32,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "news",
    name: "Industry News",
    count: 10,
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "reviews",
    name: "Product Reviews",
    count: 8,
    color: "bg-pink-100 text-pink-800",
  },
];

// Popular tags
const popularTags = [
  "Raspberry Pi",
  "Arduino",
  "Python",
  "Robotics",
  "IoT",
  "Machine Learning",
  "Embedded Systems",
  "3D Printing",
  "Drones",
  "Automation",
  "STEM",
  "Education",
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building an Electronic Drum Business Card with RP2040",
    excerpt:
      "Learn how we created a fully functional electronic drum kit that fits in your wallet. A perfect conversation starter and practical project for learning embedded systems.",
    author: "David Crookes",
    date: "Nov 20, 2025",
    readTime: "8 min",
    category: "tech",
    tags: ["RP2040", "Embedded", "Audio"],
    featured: true,
    likes: 142,
    comments: 23,
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How Students Are Growing Plants in Space Using IoT",
    excerpt:
      "An in-depth look at how thousands of students worldwide are participating in space agriculture experiments using Raspberry Pi and custom sensors.",
    author: "Ashley Whittaker",
    date: "Nov 19, 2025",
    readTime: "12 min",
    category: "iot",
    tags: ["Space Tech", "Education", "IoT"],
    featured: true,
    likes: 189,
    comments: 45,
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Raspberry Pi Zero Projects",
    excerpt:
      "From smart mirrors to retro gaming consoles, discover what you can build with the affordable and versatile Raspberry Pi Zero.",
    author: "Phil King",
    date: "Nov 17, 2025",
    readTime: "15 min",
    category: "tutorials",
    tags: ["Raspberry Pi", "DIY", "Tutorial"],
    featured: true,
    likes: 256,
    comments: 30,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "AI-Powered Plant Growth Monitoring System",
    excerpt:
      "Building an automated plant monitoring system using computer vision and machine learning to optimize growth conditions.",
    author: "Ritu Sharma",
    date: "Nov 12, 2025",
    readTime: "10 min",
    category: "ai-ml",
    tags: ["AI", "Computer Vision", "Agriculture"],
    likes: 98,
    comments: 14,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Building a Mini IoT Satellite Simulator",
    excerpt:
      "A hands-on guide to creating your own satellite simulator for learning space technology and communication protocols.",
    author: "Krishna Kumar",
    date: "Nov 10, 2025",
    readTime: "18 min",
    category: "iot",
    tags: ["Satellite", "IoT", "Space"],
    likes: 167,
    comments: 32,
    img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "New Robotics Kit Review: Perfect for STEM Beginners",
    excerpt:
      "Our comprehensive review of the latest robotics kit designed specifically for students and hobbyists getting started with robotics.",
    author: "Aaklan Team",
    date: "Nov 5, 2025",
    readTime: "7 min",
    category: "reviews",
    tags: ["Robotics", "Review", "STEM"],
    likes: 76,
    comments: 19,
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Advanced Motor Control with PID Algorithms",
    excerpt:
      "Deep dive into implementing PID control for precise motor movements in robotics applications.",
    author: "David Chen",
    date: "Nov 3, 2025",
    readTime: "20 min",
    category: "robotics",
    tags: ["PID", "Control Systems", "Robotics"],
    likes: 89,
    comments: 21,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Wireless Sensor Networks for Smart Agriculture",
    excerpt:
      "Building cost-effective wireless sensor networks to monitor and optimize agricultural operations.",
    author: "Ritu Sharma",
    date: "Oct 28, 2025",
    readTime: "14 min",
    category: "iot",
    tags: ["Agriculture", "Sensors", "Wireless"],
    likes: 123,
    comments: 28,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Real-time Object Detection on Edge Devices",
    excerpt:
      "Implementing computer vision models on Raspberry Pi for real-time object detection without cloud dependency.",
    author: "Krishna Kumar",
    date: "Oct 25, 2025",
    readTime: "16 min",
    category: "ai-ml",
    tags: ["Computer Vision", "Edge AI", "Python"],
    likes: 198,
    comments: 42,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Building Your First Quadcopter from Scratch",
    excerpt:
      "Step-by-step guide to assembling and programming your own quadcopter with flight stabilization.",
    author: "Phil King",
    date: "Oct 20, 2025",
    readTime: "22 min",
    category: "tutorials",
    tags: ["Drones", "DIY", "Flight Control"],
    likes: 145,
    comments: 36,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Energy Harvesting for IoT Devices",
    excerpt:
      "Exploring innovative ways to power IoT devices using solar, vibration, and thermal energy harvesting.",
    author: "Ashley Whittaker",
    date: "Oct 15, 2025",
    readTime: "11 min",
    category: "iot",
    tags: ["Energy", "Sustainability", "IoT"],
    likes: 112,
    comments: 25,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Industry 4.0: The Future of Manufacturing",
    excerpt:
      "How IoT and AI are revolutionizing manufacturing processes and creating smart factories.",
    author: "David Chen",
    date: "Oct 10, 2025",
    readTime: "13 min",
    category: "news",
    tags: ["Industry 4.0", "Manufacturing", "Future Tech"],
    likes: 134,
    comments: 31,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 9;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    if (searchQuery.trim() === "") {
      return matchesCategory;
    }

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      post.author.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Featured posts (first 3 with featured flag)
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  // Auto-change banner every 5 seconds
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(bannerInterval);
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentItems = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleBookmark = (postId) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter((id) => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  // Animation variants
  const bannerVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      pages.push(1);
      if (startPage > 2) pages.push("...");

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed top-20 right-4 z-50">
        <motion.button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-white shadow-lg rounded-full border border-gray-200"
        >
          {showMobileFilter ? (
            <X className="w-5 h-5" />
          ) : (
            <Filter className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Banner Section - CENTERED TEXT */}
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            variants={bannerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={bannerImages[currentBanner]}
              alt="Blog Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x600/4F46E5/FFFFFF?text=Leela+Blog";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" />
          </motion.div>
        </AnimatePresence>

        {/* Banner Content - CENTERED */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-center"
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Leela Blog
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-gray-200 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Insights, tutorials, and stories from the world of technology,
                IoT, and robotics. Learn, build, and innovate with us.
              </motion.p>

              <motion.div
                className="max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, and guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Banner Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentBanner === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-1 space-y-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Categories
                </h3>
                {(selectedCategory !== "all" || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                      selectedCategory === cat.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          cat.color.split(" ")[0]
                        }`}
                      />
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        selectedCategory === cat.id
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                    }}
                    className={`px-3 py-2 rounded-full text-sm transition-colors ${
                      searchQuery === tag
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest posts delivered directly to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </motion.button>
              </div>
            </motion.div>

            {/* Active Filters */}
            {(selectedCategory !== "all" || searchQuery) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Active Filters
                </h3>
                <div className="space-y-2">
                  {selectedCategory !== "all" && (
                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                      <span className="font-medium">
                        Category:{" "}
                        {
                          categories.find((c) => c.id === selectedCategory)
                            ?.name
                        }
                      </span>
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {searchQuery && (
                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                      <span className="font-medium">
                        Search: "{searchQuery}"
                      </span>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile Filter Sidebar */}
          <AnimatePresence>
            {showMobileFilter && (
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-y-0 left-0 z-40 w-72 bg-white shadow-2xl overflow-y-auto pt-20 px-4 pb-4"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setShowMobileFilter(false);
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl ${
                            selectedCategory === cat.id
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span className="font-medium">{cat.name}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              selectedCategory === cat.id
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {cat.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSearchQuery(tag);
                            setShowMobileFilter(false);
                          }}
                          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
                  Featured Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Featured+Post";
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              categories.find((c) => c.id === post.category)
                                ?.color || "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {post.category.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-gray-900">
                              {post.author}
                            </span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                          >
                            Read <ChevronRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            )}

            {/* All Posts Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Latest Articles
                </h2>
                <p className="text-gray-600 mt-2">
                  {filteredPosts.length} posts found
                  {selectedCategory !== "all" &&
                    ` in ${
                      categories.find((c) => c.id === selectedCategory)?.name
                    }`}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="lg:hidden">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                {(selectedCategory !== "all" || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Blog Posts Grid */}
            {currentItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentItems.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Blog+Post";
                          }}
                        />
                        <button
                          onClick={() => toggleBookmark(post.id)}
                          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              bookmarkedPosts.includes(post.id)
                                ? "fill-blue-600 text-blue-600"
                                : "text-gray-600"
                            }`}
                          />
                        </button>
                        <div className="absolute bottom-3 left-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              categories.find((c) => c.id === post.category)
                                ?.color || "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-900">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-500">
                            <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span className="text-xs">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span className="text-xs">{post.comments}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {filteredPosts.length > ITEMS_PER_PAGE && (
                  <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-sm text-gray-600">
                      Showing {indexOfFirst + 1} to{" "}
                      {Math.min(indexOfLast, filteredPosts.length)} of{" "}
                      {filteredPosts.length} posts
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                        className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                          currentPage === 1
                            ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                            : "hover:bg-gray-50 border-gray-300 text-gray-700"
                        }`}
                      >
                        Previous
                      </motion.button>

                      <div className="flex items-center gap-1">
                        {getPageNumbers().map((page, index) =>
                          page === "..." ? (
                            <span
                              key={`dots-${index}`}
                              className="px-3 py-2 text-gray-400"
                            >
                              ...
                            </span>
                          ) : (
                            <button
                              key={page}
                              onClick={() => goToPage(page)}
                              className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                                currentPage === page
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              }`}
                            >
                              {page}
                            </button>
                          )
                        )}
                      </div>

                      <motion.button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        whileHover={
                          currentPage !== totalPages ? { scale: 1.05 } : {}
                        }
                        whileTap={
                          currentPage !== totalPages ? { scale: 0.95 } : {}
                        }
                        className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                          currentPage === totalPages
                            ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                            : "hover:bg-gray-50 border-gray-300 text-gray-700"
                        }`}
                      >
                        Next
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              /* No Results Message */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow border border-gray-200"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No posts found
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {searchQuery
                    ? `No posts found for "${searchQuery}". Try searching for something else.`
                    : "No posts match your current filters. Try adjusting your criteria."}
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Clear filters & show all posts
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Enquiry form */}
      <Fill_Your_Enquiry_form />
    </div>
  );
}
