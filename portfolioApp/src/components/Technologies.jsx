import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaMicrosoft,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaCloud,
  FaServer,
  FaCogs,
  FaNodeJs,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";

const Technologies = () => {
  const technologies = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      level: 90,
    },
    {
      name: ".NET Core",
      icon: <FaMicrosoft className="text-[#512BD4]" />,
      level: 95,
    },
    {
      name: "TypeScript",
      icon: <FaCode className="text-[#3178C6]" />,
      level: 85,
    },
    {
      name: "Frontend",
      icon: <FaCode className="text-[#06B6D4]" />,
      level: 90,
    },
    {
      name: "MongoDB",
      icon: <FaDatabase className="text-[#47A248]" />,
      level: 80,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-[#2496ED]" />,
      level: 85,
    },
    {
      name: "Azure",
      icon: <FaCloud className="text-[#0078D4]" />,
      level: 80,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-[#181717]" />,
      level: 90,
    },
    {
      name: "Backend",
      icon: <FaServer className="text-[#DC382D]" />,
      level: 95,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-[#4169E1]" />,
      level: 85,
    },
    {
      name: "DevOps",
      icon: <FaCogs className="text-[#326CE5]" />,
      level: 70,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
      level: 75,
    },
  ];

  return (
    <section id="technologies" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Kullandığım <span className="text-gradient">Teknolojiler</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern web uygulamaları geliştirmek için kullandığım başlıca
            teknolojiler ve araçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tech.name}
                  </h3>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"
                  />
                </div>
                <div className="text-right mt-1 text-sm text-gray-600">
                  {tech.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            Ve daha birçok modern teknoloji ile çalışıyorum...
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Projelerimi Görüntüle
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
