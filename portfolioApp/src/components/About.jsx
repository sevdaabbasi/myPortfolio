import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaMobile,
  FaCloud,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: (
        <FaCode className="text-5xl text-sky-500 group-hover:text-white transition-colors" />
      ),
      title: "Frontend Geliştirme",
      description: "React, Angular, HTML5, CSS3, JavaScript, TypeScript",
      color: "from-sky-400 to-sky-600",
      features: ["Modern UI/UX", "Responsive Tasarım", "SEO Optimizasyonu"],
    },
    {
      icon: (
        <FaServer className="text-5xl text-sky-500 group-hover:text-white transition-colors" />
      ),
      title: "Backend Geliştirme",
      description: ".NET Core, C#, SQL Server, RESTful APIs",
      color: "from-indigo-400 to-indigo-600",
      features: ["Mikroservisler", "API Tasarımı", "Performans Optimizasyonu"],
    },
    {
      icon: (
        <FaDatabase className="text-5xl text-sky-500 group-hover:text-white transition-colors" />
      ),
      title: "Veritabanı Yönetimi",
      description: "SQL Server, MongoDB, Redis, PostgreSQL",
      color: "from-purple-400 to-purple-600",
      features: ["Veri Modelleme", "Query Optimizasyonu", "Veri Güvenliği"],
    },
  ];

  const stats = [
    { number: "4+", label: "Yıl Deneyim" },
    { number: "50+", label: "Tamamlanan Proje" },
    { number: "20+", label: "Mutlu Müşteri" },
    { number: "100%", label: "Müşteri Memnuniyeti" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Hakkımda & <span className="text-gradient">Yeteneklerim</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern teknolojiler kullanarak yenilikçi çözümler üretiyorum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/myPhoto.jpg"
                  alt="Profil"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-gradient">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-gradient">Merhaba, Ben Sevda Abbasi</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bilgisayar mühendisi ve tutkulu bir full-stack yazılım
                  geliştiricisiyim. 4+ yıllık deneyimimle modern web
                  teknolojileri ve yazılım mimarileri konusunda uzmanlaştım.
                </p>
                <p>
                  .NET ekosistemi başta olmak üzere, frontend'den backend'e,
                  veritabanı yönetiminden cloud servislerine kadar geniş bir
                  yelpazede projeler geliştiriyorum.
                </p>
                <p>
                  Clean Code ve SOLID prensiplerine bağlı kalarak,
                  sürdürülebilir ve ölçeklenebilir yazılımlar geliştirmeye özen
                  gösteriyorum.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                İletişime Geç
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline flex items-center gap-2"
              >
                <FaDownload />
                CV İndir
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
                <ul className="space-y-3">
                  {skill.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-gray-600 gap-2"
                    >
                      <FaCheckCircle className="text-sky-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
