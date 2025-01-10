import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Hızlı Linkler",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { label: ".NET Core", href: "#" },
        { label: "React", href: "#" },
        { label: "SQL Server", href: "#" },
        { label: "Azure", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/sevdaabbasi/",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/sevda-abbasi-4b00271b9/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Dekoratif Şekiller */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-DEFAULT via-secondary to-primary-DEFAULT" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container-custom relative z-10">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white"
            >
              <span className="text-gradient">Sevda Abbasi</span>
            </motion.h3>
            <p className="text-gray-400">
              I develop innovative solutions using modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg text-gray-400 bg-gray-800/50 ${social.color} hover:text-white transition-all duration-300`}
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Linkler */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg font-semibold text-white"
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + linkIndex * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* İletişim */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold text-white"
            >
              Contact
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <a
                href="mailto:sevdaabbasi37@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope />
                <span>sevdaabbasi37@gmail.com</span>
              </a>
              <p className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt />
                <span>İstanbul, Türkiye</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm"
            >
              © {new Date().getFullYear()} Sevda Abbasi. Made with{" "}
              <FaHeart className="inline-block text-red-500 animate-pulse" /> in
              İstanbul
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <span>Yukarı Çık</span>
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
