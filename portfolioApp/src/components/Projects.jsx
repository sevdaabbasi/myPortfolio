import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      title: "Personnel Tracking System (Full-Stack Project)",
      description:
        "I developed a scalable and maintainable .NET backend following Clean Architecture principles. I implemented JWT and Identity-based authentication and authorization, integrated Redis caching and rate limiting, and configured Serilog logging, global exception handling, and health checks. On the frontend, I built a modern, responsive, and user-friendly admin dashboard using React.",
      tech: [
        ".NET Core",
        "C#",
        "React",
        "Clean Architecture",
        "JWT",
        "Redis",
        "PostgreSQL",
        "Serilog",
      ],
      category: "fullstack",
    },
    {
      title: "Real-time Customer Review Processing System",
      description:
        "An end-to-end solution that analyzes real-time customer comments about businesses and delivers insights through REST APIs. Designed using microservices architecture consisting of Producer (comment generation), gRPC (comment analysis), Consumer (processing), and REST API (reporting) components.",
      tech: [
        "JavaScript",
        "express.js",
        "gRPC",
        "Redis",
        "Kafka",
        "ZooKeeper",
        "Microservice",
        "PostgreSQL",
        "Docker",
      ],
      category: "backend",
      github: "https://github.com/sevdaabbasi/lounge-restaurant",
      image: "https://via.placeholder.com/600x400?text=Review+System",
    },
    {
      title: "Papara Backend Bootcamp - Fintech Project",
      description:
        "Developed a comprehensive fintech project using .NET Core with JWT authentication, Entity Framework Core, Dapper, and Clean Architecture principles. Implemented layered structure with focus on scalability and maintainability.",
      tech: [
        "C#",
        ".NET Core",
        "JWT",
        "EF Core",
        "Dapper",
        "Clean Architecture",
      ],
      category: "backend",
      github: "https://github.com/sevdaabbasi/PaparaBootcamp",
      image: "https://via.placeholder.com/600x400?text=Papara+Fintech",
    },
    {
      title: "Personnel Expense Management Backend Project",
      description:
        "A web-based backend system for tracking, categorizing, and reporting personnel expenses. Developed core modules for company and user management, expense operations, and document management using .NET Core and Clean Architecture principles.",
      tech: ["C#", ".NET Core", "PostgreSQL", "Clean Architecture"],
      category: "backend",
      github: "https://github.com/sevdaabbasi/PersonnelExpenseManagement",
      image: "https://via.placeholder.com/600x400?text=Expense+Management",
    },
    {
      title: "OTS (Online Transfer System) Backend Project",
      description:
        "Is a financial platform that enables users to perform money transfers and manage their accounts. The system offers features for user authentication, customer profile management and secure financial transactions, allowing users to create accounts, make EFT transfers and track their transaction history.",
      tech: ["C#", ".NET Core", "MSSQL"],
      category: "backend",
      github: "https://github.com/sevdaabbasi/PersonnelExpenseManagement",
      image: "https://via.placeholder.com/600x400?text=Blog+Project",
    },
    {
      title: "Blog Website Backend Project (Sweet Dictionary)",
      description:
        "Designed and implemented the backend for a social dictionary website using .NET Core and EF Core, following Clean Architecture. Built modules for user authentication, content sharing, comments, and search features.",
      tech: ["C#", ".NET Core", "PostgreSQL", "Clean Architecture", "EF Core"],
      category: "backend",
      github: "https://github.com/sevdaabbasi/BlogSite",
      image: "https://via.placeholder.com/600x400?text=Blog+Project",
    },
    {
      title: "TO-DO List Backend Project",
      description:
        "A scalable and secure backend infrastructure that facilitates task management, scheduling and team collaboration. Performance and maintainability are at the forefront with modern architecture and JWT-based authentication.",
      tech: [
        "C#",
        ".NET Core",
        "Entity Framework",
        "Clean Architecture",
        "JWT",
      ],
      category: "backend",
      github: "https://github.com/sevdaabbasi/TodoList",
      image: "https://via.placeholder.com/600x400?text=TODO+App",
    },
    {
      title: "Stock Management Backend Project",
      description:
        "Created a backend infrastructure for tracking product stock, managing categories, and performing CRUD operations. Designed using C#, EF Core, and layered architecture principles.",
      tech: ["C#", ".NET Core", "PostgreSQL", "EF Core"],
      category: "backend",
      github: "https://github.com/sevdaabbasi/stockManagement",
      image: "https://via.placeholder.com/600x400?text=Stock+Management",
    },
    {
      title: "Currency Converter App",
      description:
        "This iOS app enriched with various panels with Restful API the current exchange rate and provides the user with the exchange rate information retrieved from the internet.",
      tech: ["Swift", "REST API", "iOS"],
      category: "ios",
      github: "https://github.com/sevdaabbasi/CurrencyConverter",
      image: "https://via.placeholder.com/600x400?text=Currency+Converter",
    },
    {
      title: "Social Media Question Application with Swift",
      description:
        "With Swift language, a social media application is realised where students can ask questions, answer questions, add notes, and search for resources.",
      tech: ["Swift", "iOS", "Social Media"],
      category: "ios",
      github: "https://github.com/sevdaabbasi/QuenstionMonster",
      image: "https://via.placeholder.com/600x400?text=Social+Media+App",
    },
    {
      title: "Handicrafts E-Commerce App with SwiftUI",
      description:
        "Developed with SwiftUI, this E-Commerce mobile application brings together people who sell handicraft products and users who want to buy these products. The data is stored and managed using Firebase.",
      tech: ["Swift", "SwiftUI", "Firebase", "E-Commerce"],
      category: "ios",
      github: "https://github.com/sevdaabbasi/HandiCraftsApp",
      image: "https://via.placeholder.com/600x400?text=Handicrafts",
    },
    {
      title: "Story Book App",
      description:
        "Using TableView with Swift, an application containing fairy tales that children will read with fun has been realised.",
      tech: ["Swift", "iOS", "TableView"],
      category: "ios",
      github: "https://github.com/sevdaabbasi/story-book",
      image: "https://via.placeholder.com/600x400?text=Story+Book",
    },
    {
      title: "Crazy Moles Game",
      description:
        "This project called 'Crazy Moles' is written in Swift. The user earns points when clicking on randomly moving moles.",
      tech: ["Swift", "iOS", "Game"],
      category: "ios",
      github: "https://github.com/sevdaabbasi/moleGame",
      image: "https://via.placeholder.com/600x400?text=Crazy+Moles",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full-Stack" },
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
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
