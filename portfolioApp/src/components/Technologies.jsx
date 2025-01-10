import { motion } from "framer-motion";
import {
  FaCode,
  FaMicrosoft,
  FaDatabase,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaApple,
  FaMobile,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiPostgresql, SiPostman, SiDbeaver, SiMysql } from "react-icons/si";

const Technologies = () => {
  const technologies = [
    {
      name: "Backend",
      items: [
        {
          name: "C#",
          icon: <FaCode className="text-[#178600]" />,
          level: 80,
          color: "from-[#178600] to-[#0e5300]",
        },
        {
          name: ".NET Core",
          icon: <FaMicrosoft className="text-[#512BD4]" />,
          level: 70,
          color: "from-[#512BD4] to-[#3c20a0]",
        },
        {
          name: "ASP.NET Core MVC",
          icon: <FaMicrosoft className="text-[#512BD4]" />,
          level: 65,
          color: "from-[#512BD4] to-[#3c20a0]",
        },
        {
          name: "Entity Framework",
          icon: <FaDatabase className="text-[#264DE4]" />,
          level: 85,
          color: "from-[#264DE4] to-[#1a37b0]",
        },
        {
          name: "Python",
          icon: <FaPython className="text-[#3776AB]" />,
          level: 40,
          color: "from-[#3776AB] to-[#2b5a8b]",
        },
      ],
    },
    {
      name: "Frontend",
      items: [
        {
          name: "React",
          icon: <FaReact className="text-[#61DAFB]" />,
          level: 50,
          color: "from-[#61DAFB] to-[#00b0d6]",
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-[#F7DF1E]" />,
          level: 50,
          color: "from-[#F7DF1E] to-[#c7b218]",
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-[#E34F26]" />,
          level: 90,
          color: "from-[#E34F26] to-[#b33d1e]",
        },
        {
          name: "CSS",
          icon: <FaCss3 className="text-[#1572B6]" />,
          level: 80,
          color: "from-[#1572B6] to-[#105a8c]",
        },
      ],
    },
    {
      name: "Mobile",
      items: [
        {
          name: "Swift",
          icon: <FaApple className="text-[#F05138]" />,
          level: 65,
          color: "from-[#F05138] to-[#b33d2a]",
        },
        {
          name: "SwiftUI",
          icon: <FaMobile className="text-[#0C86E7]" />,
          level: 60,
          color: "from-[#0C86E7] to-[#0964ad]",
        },
      ],
    },
    {
      name: "Database & Tools",
      items: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-[#336791]" />,
          level: 85,
          color: "from-[#336791] to-[#264d6d]",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#4479A1]" />,
          level: 80,
          color: "from-[#4479A1] to-[#335a77]",
        },
        {
          name: "DBeaver",
          icon: <SiDbeaver className="text-[#382923]" />,
          level: 85,
          color: "from-[#382923] to-[#1f1714]",
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-[#FF6C37]" />,
          level: 90,
          color: "from-[#FF6C37] to-[#cc5629]",
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-[#2496ED]" />,
          level: 75,
          color: "from-[#2496ED] to-[#1b70b2]",
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-[#F05032]" />,
          level: 85,
          color: "from-[#F05032] to-[#b33c25]",
        },
      ],
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gray-50">
      {/* Dekoratif Arkaplan */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-DEFAULT/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technologies <span className="text-gradient">I Use</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Main technologies and my expertise levels that I use to develop
            modern web applications
          </p>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{tech.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {tech.name}
                        </h4>
                        <p className="text-gray-600">{tech.level}%</p>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${tech.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ek Bilgi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            And I work with many other modern technologies...
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-custom btn-primary inline-flex items-center gap-2"
          >
            <FaCode className="text-xl" />
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
