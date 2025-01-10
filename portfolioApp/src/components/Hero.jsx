import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import myPhoto from "../assets/myPhoto.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Arkaplan Gradient ve Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-500 to-sky-500 opacity-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Dekoratif Şekiller */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Sol Taraf - İçerik */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Merhaba, Ben{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500">
                Sevda Abbasi
              </span>
            </h1>

            <div className="text-2xl lg:text-3xl text-gray-700 mb-8 h-[40px]">
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "iOS Developer",
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Modern teknolojiler kullanarak yenilikçi çözümler üretiyorum.
              Clean Code ve SOLID prensiplerine bağlı kalarak, sürdürülebilir ve
              ölçeklenebilir yazılımlar geliştirmeye özen gösteriyorum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                İletişime Geç
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 rounded-full font-medium hover:bg-indigo-50 transition-all duration-300"
              >
                Projelerimi Gör
              </motion.a>
            </div>

            {/* Sosyal Medya Linkleri */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">
              {[
                {
                  icon: <FaGithub />,
                  href: "View Github Profile linki",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin />,
                  href: "View LinkedIn Profile linki",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Sağ Taraf - Profil Resmi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10">
              {/* Dekoratif Çerçeve */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500 rounded-full opacity-75 blur-lg" />

              {/* Profil Resmi */}
              <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl aspect-square">
                <img
                  src={myPhoto}
                  alt="Sevda Abbasi"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />

                {/* Metrikler - Profil Resmi Etrafında */}
                <div className="absolute -top-4 -right-4 bg-white px-6 py-3 rounded-2xl shadow-xl">
                  <p className="text-xl font-bold text-indigo-500">4+ Yıl</p>
                  <p className="text-sm text-gray-600">Deneyim</p>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-2xl shadow-xl">
                  <p className="text-xl font-bold text-indigo-500">8+</p>
                  <p className="text-sm text-gray-600">Proje</p>
                </div>

                <div className="absolute -top-4 -left-4 bg-white px-6 py-3 rounded-2xl shadow-xl">
                  <p className="text-xl font-bold text-indigo-500">5+</p>
                  <p className="text-sm text-gray-600">Sertifika</p>
                </div>
              </div>
            </div>

            {/* Dekoratif Arka Plan Şekilleri */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full blur-3xl opacity-20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
