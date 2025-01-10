import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
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

const DNAHelix = () => {
  const groupRef = useRef();
  const particlesCount = 80;
  const radius = 4;
  const height = 8;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particlesCount; i++) {
      const angle = (i / particlesCount) * Math.PI * 4;
      const x = Math.cos(angle) * radius;
      const y = (i / particlesCount) * height - height / 2;
      const z = Math.sin(angle) * radius;
      temp.push({ position: [x, y, z], angle });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* DNA Sarmalı */}
      {particles.map((particle, i) => (
        <group key={i} position={particle.position}>
          {/* Sol Parçacık */}
          <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#4f46e5"
              emissive="#4f46e5"
              emissiveIntensity={0.5}
            />
          </mesh>
          {/* Sağ Parçacık */}
          <mesh
            position={[
              Math.cos(particle.angle + Math.PI) * radius * 0.5,
              0,
              Math.sin(particle.angle + Math.PI) * radius * 0.5,
            ]}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0ea5e9"
              emissiveIntensity={0.5}
            />
          </mesh>
          {/* Bağlantı Çizgisi */}
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, radius * 0.5, 8]} />
            <meshStandardMaterial
              color="#6366f1"
              emissive="#6366f1"
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <DNAHelix />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

const About = () => {
  const skills = [
    {
      icon: (
        <FaCode className="text-5xl text-sky-500 group-hover:text-white transition-colors" />
      ),
      title: "Backend Geliştirme",
      description: "C#, .NET, ASP.NET Core, Entity Framework Core",
      features: ["Clean Architecture", "N Tier Architecture", "RESTful APIs"],
    },
    {
      icon: (
        <FaServer className="text-5xl text-sky-500 group-hover:text-white transition-colors" />
      ),
      title: "iOS Geliştirme",
      description: "Swift, SwiftUI, TableView",
      features: ["Mobile UI/UX", "Firebase Integration", "API Integration"],
    },
    {
      icon: (
        <FaDatabase className="text-5xl text-sky-500 group-hover:text-white transition-colors" />
      ),
      title: "Full Stack Geliştirme",
      description: "React, JavaScript, HTML, CSS",
      features: [
        "Modern UI/UX",
        "Responsive Design",
        "Frontend-Backend Integration",
      ],
    },
  ];

  const stats = [
    { number: "4+", label: "Yıl Deneyim" },
    { number: "8+", label: "Tamamlanan Proje" },
    { number: "5+", label: "Sertifika" },
    { number: "2+", label: "Teknoloji" },
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
            <div className="relative z-10 group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500 rounded-2xl opacity-75 blur-lg animate-pulse-slow" />
              <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl bg-gray-900 aspect-square transform-gpu transition-transform duration-500 hover:scale-[1.02]">
                <Scene />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

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
