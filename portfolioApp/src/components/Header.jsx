import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { href: "#home", label: "Ana Sayfa" },
    { href: "#about", label: "Hakkımda" },
    { href: "#projects", label: "Projeler" },
    { href: "#contact", label: "İletişim" },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient">Sevda Abbasi</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.li key={item.href} whileHover={{ y: -2 }}>
                  <a
                    href={item.href}
                    className={`relative py-2 text-gray-600 hover:text-primary-DEFAULT transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-primary-DEFAULT font-medium"
                        : ""
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-DEFAULT"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-DEFAULT transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-custom btn-primary"
            >
              İletişime Geç
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 text-gray-600 hover:text-primary-DEFAULT transition-colors"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: "100%" },
            }}
            className={`fixed inset-0 bg-white z-0 md:hidden ${
              isMobileMenuOpen ? "flex" : "hidden"
            }`}
          >
            <div className="container mx-auto px-4 py-20">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 10 }}
                    className="border-b border-gray-100 pb-4"
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl ${
                        activeSection === item.href.slice(1)
                          ? "text-primary-DEFAULT font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 space-y-6">
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-600 hover:text-primary-DEFAULT transition-colors"
                      whileHover={{ scale: 1.1 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-custom btn-primary w-full text-center"
                >
                  İletişime Geç
                </motion.a>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
