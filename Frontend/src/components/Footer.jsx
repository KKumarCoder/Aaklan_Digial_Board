import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Cpu,
  Package,
  Code,
  Microchip,
  BookOpen,
  Wrench,
  FileText,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-800">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 relative z-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-light.png"
                alt="Aaklan Logo"
                className="w-48 mb-5"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Advanced development board for robotics, IoT, and embedded
              systems. Featuring 4 dedicated motor ports, comprehensive
              connectivity, and industrial-grade components for next-generation
              projects.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                title="YouTube Tutorials"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-cyan-400" />
              Products
            </h3>

            <ul className="text-gray-300 space-y-3">
              {[
                { name: "Leela Board Pro", desc: "Advanced Edition" },
                { name: "Leela Board Lite", desc: "Beginner Friendly" },
                { name: "Motor Driver Shield", desc: "Add-on Module" },
                { name: "Sensor Kit", desc: "15+ Sensors" },
                { name: "Robotics Chassis", desc: "Complete Kit" },
                { name: "IoT Expansion Kit", desc: "WiFi/BLE" },
              ].map((item) => (
                <li key={item.name} className="group">
                  <a className="hover:text-cyan-400 transition-all hover:translate-x-1 inline-block">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500 group-hover:text-cyan-300">
                      {item.desc}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Resources
            </h3>

            <ul className="text-gray-300 space-y-3">
              {[
                "Documentation",
                "Technical Specs",
                "Schematics",
                "API Reference",
                "Tutorials",
                "Sample Projects",
                "Community Forum",
                "GitHub Repository",
              ].map((item) => (
                <li key={item}>
                  <a className="hover:text-cyan-400 transition-all hover:translate-x-1 inline-block flex items-center gap-2">
                    {item}
                    {item === "GitHub Repository" && (
                      <Github className="w-3 h-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-cyan-400" />
              Support
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">Technical Support</div>
                  <a
                    href="mailto:support@leelaboard.com"
                    className="text-gray-300 hover:text-cyan-400 text-sm"
                  >
                    support@leelaboard.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">
                    Sales & Bulk Orders
                  </div>
                  <a
                    href="mailto:sales@leelaboard.com"
                    className="text-gray-300 hover:text-cyan-400 text-sm"
                  >
                    sales@leelaboard.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">Helpline</div>
                  <a
                    href="tel:+911234567890"
                    className="text-gray-300 hover:text-cyan-400 text-sm"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">
                    Development Center
                  </div>
                  <span className="text-gray-300 text-sm">
                    Bengaluru - 560001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with circuit style */}
        <div className="relative my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Microchip className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6">
          <div>
            <p className="text-gray-400 text-sm">
              © {year} Leela Board Technologies |
              <span className="text-cyan-400 ml-1">
                Hardware Solutions for Innovators
              </span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Patent Pending • CE Certified • RoHS Compliant
            </p>
          </div>

          <div className="flex gap-6 text-sm flex-wrap justify-center">
            <a className="text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Privacy Policy
            </a>
            <a className="text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Terms of Service
            </a>
            <a className="text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Warranty Policy
            </a>
            <a className="text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Shipping Policy
            </a>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {[
            "ARM Cortex-M4",
            "WiFi + Bluetooth",
            "4 Motor Ports",
            "Python/C++",
            "Arduino Compatible",
            "Industrial I/O",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-cyan-300 text-xs rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
