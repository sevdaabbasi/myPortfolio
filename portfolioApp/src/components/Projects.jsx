import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Blog Website Backend",
      description:
        "ASP.NET Core ile geliştirilmiş, Clean Architecture ve katmanlı mimari prensiplerine uygun blog sitesi backend projesi.",
      image: "/blog-project.jpg",
      tags: ["ASP.NET Core", "EF Core", "Clean Architecture", "SQL Server"],
      github: "https://github.com/sevdaabbasi/BlogSite",
      features: [
        "Katmanlı Mimari",
        "Clean Architecture",
        "EF Core Operasyonları",
      ],
    },
    {
      title: "Stock Management System",
      description:
        ".NET kullanılarak geliştirilmiş, işletmelerde stok yönetimini sağlayan backend projesi.",
      image: "/stock-project.jpg",
      tags: [".NET", "C#", "SQL Server", "Backend"],
      github: "https://github.com/sevdaabbasi/stockManagement",
      features: ["Stok Takibi", "Envanter Yönetimi", "Raporlama"],
    },
    {
      title: "TO-DO List Backend",
      description:
        "Swift ve TableView kullanılarak geliştirilen, çocukların eğlenerek okuyacağı masalları içeren uygulama.",
      image: "/todo-project.jpg",
      tags: ["Swift", "TableView", "iOS", "Mobile"],
      github: "https://github.com/sevdaabbasi/TodoList",
      features: [
        "Kullanıcı Dostu Arayüz",
        "Görev Yönetimi",
        "Kategori Sistemi",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Arkaplan Dekorasyonu */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Öne Çıkan <span className="text-gradient">Projelerim</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern teknolojiler kullanarak geliştirdiğim bazı projeler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-custom overflow-hidden">
                {/* Proje Görseli */}
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay Butonları */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>

                {/* Proje Detayları */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Özellikler */}
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center text-gray-600 gap-2"
                      >
                        <FaCode className="text-primary-DEFAULT" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Teknoloji Etiketleri */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            Daha fazla projemi GitHub profilimde inceleyebilirsiniz
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-custom btn-primary inline-flex items-center gap-2"
          >
            <FaGithub className="text-xl" />
            GitHub Profilim
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
