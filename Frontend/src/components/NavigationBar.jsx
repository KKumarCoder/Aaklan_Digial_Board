import { useState } from "react";
import { Menu, Target, X } from "lucide-react";
import { href, Link } from "react-router-dom"; // added Link

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Hardware", href: "hardware" },
    { label: "Software", href: "software" },
    { label: "projects", href: "projects" },
    { label: "Documentation", href: "documentation" },
    { label: "Blogs", href: "blog" },
    { label: "Contact", href: "contact" },
    { label: "Dashboard", href: "dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              {" "}
              {/* logo now links to home */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F262bb9f8f26f474a9e5258cbab1b9d6d%2Faee73f35761a4bc8a9a44e7601160b49?format=webp&width=200"
                alt="LEELA by Aaklan"
                className="h-20 w-auto sm:h-24 lg:h-28 transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/150x40/3B82F6/FFFFFF?text=LEELA+Arduino";
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-orange-600 text-white rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-center px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out relative group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-3/4"></span>
                </span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                className="block mx-auto w-40 px-4 py-3 rounded-full text-base font-medium bg-orange-600 text-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
