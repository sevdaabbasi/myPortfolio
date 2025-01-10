import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      title: "Blog Website Backend Project",
      description:
        "In the blog site project I developed with .NET Core, I created a structure in accordance with the principles of layered architecture and Clean Architecture. I performed EF Core and database operations",
      tech: ["C#", ".NET Core", "PostgreSQL", "Clean Architecture"],
      category: "backend",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Blog+Project",
    },
    {
      title: "TO-DO List Backend Project",
      description:
        "Using .NET Core and Entity Framework Core, I developed a backend project that manages to-do lists with Clean Architecture principles and RESTful API endpoints.",
      tech: ["C#", ".NET Core", "Entity Framework", "Clean Architecture"],
      category: "backend",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=TODO+App",
    },
    {
      title: "Stock Management Backend Project",
      description:
        "Back end project was made using .Net, which provides stock management in enterprises.",
      tech: ["C#", ".NET Core", "PostgreSQL"],
      category: "backend",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Stock+Management",
    },
    {
      title: "Currency Converter App",
      description:
        "This iOS app enriched with various panels with Restful API the current exchange rate and provides the user with the exchange rate information retrieved from the internet.",
      tech: ["Swift", "REST API", "iOS"],
      category: "ios",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Currency+Converter",
    },
    {
      title: "Social Media Question Application",
      description:
        "With Swift language, a social media application is realised where students can ask questions, answer questions, add notes, and search for resources.",
      tech: ["Swift", "iOS", "Social Media"],
      category: "ios",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Social+Media+App",
    },
    {
      title: "Handicrafts with SwiftUI",
      description:
        "Developed with SwiftUI, this application is an E-Commerce Mobile application that brings together people who sell handicraft products and users who want to buy these products. The data in this application is stored and used using Firebase.",
      tech: ["Swift", "SwiftUI", "Firebase"],
      category: "ios",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Handicrafts",
    },
    {
      title: "Story Book App",
      description:
        "Using TableView with Swift, an application containing fairy tales that children will read with fun has been realised.",
      tech: ["Swift", "iOS", "TableView"],
      category: "ios",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Story+Book",
    },
    {
      title: "Crazy Moles Game",
      description:
        "This project called 'Crazy Moles' is written in Swift. The user earns points when clicking on randomly moving moles.",
      tech: ["Swift", "iOS"],
      category: "ios",
      github: "https://github.com/link-to-repo",
      image: "https://via.placeholder.com/600x400?text=Crazy+Moles",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend" },
    { id: "ios", label: "iOS" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Examples from some of my projects
          </p>

          {/* Kategori Filtreleme */}
          <div className="flex justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4 gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-sky-400 transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-sky-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
