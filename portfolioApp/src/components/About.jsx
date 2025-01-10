import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
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
import { MathUtils } from "three";
import { TypeAnimation } from "react-type-animation";

const LaptopModel = ({ isDragging, setIsDragging, rotation, setRotation }) => {
  const laptopRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!isDragging) {
      // Yumuşak yüzer hareket
      laptopRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      // Hafif dönüş
      laptopRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      // Ekran açılıp kapanma efekti
      laptopRef.current.children[0].rotation.x =
        -0.5 + Math.sin(time * 0.2) * 0.1;
    } else {
      laptopRef.current.rotation.y = MathUtils.degToRad(rotation.y);
    }
  });

  return (
    <group ref={laptopRef}>
      {/* Ekran */}
      <group position={[0, 0.1, 0]}>
        {/* Ekran Çerçevesi */}
        <mesh castShadow>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshPhysicalMaterial
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>
        {/* Ekran İçeriği */}
        <mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[2.9, 1.9]} />
          <meshBasicMaterial color="#000000" />
          <Html transform position={[0, 0, 0.01]} scale={0.13}>
            <div className="w-[900px] h-[500px] bg-[#1e1e1e] p-6 font-mono text-base overflow-hidden rounded-lg">
              <TypeAnimation
                sequence={[
                  `<span class="text-[#00e5ff]">const</span> <span class="text-[#00e5ff]">developer</span> <span class="text-[#00e5ff]">=</span> {
                    name: <span class="text-[#00e5ff]">'Sevda Abbasi'</span>,
                    role: <span class="text-[#00e5ff]">'Full Stack Developer'</span>,
                    skills: [
                      <span class="text-[#00e5ff]">'C#'</span>,
                      <span class="text-[#00e5ff]">'.NET Core'</span>,
                      <span class="text-[#00e5ff]">'React'</span>,
                      <span class="text-[#00e5ff]">'Swift'</span>
                    ],
                    passion: <span class="text-[#00e5ff]">'Building innovative solutions'</span>
                  };</span>`,
                  3000,
                ]}
                repeat={Infinity}
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "1.3em",
                  lineHeight: "2",
                  letterSpacing: "1px",
                  fontWeight: "600",
                  color: "#00e5ff",
                }}
              />
            </div>
          </Html>
        </mesh>
      </group>

      {/* Alt Kısım */}
      <group position={[0, -1, 0.5]} rotation={[-0.5, 0, 0]}>
        {/* Ana Gövde */}
        <mesh castShadow>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshPhysicalMaterial
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>
        {/* Touchpad */}
        <mesh position={[0, 0.101, -0.3]}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.3}
            clearcoat={0.5}
          />
        </mesh>
      </group>
    </group>
  );
};

const CodingLaptop = ({ isDragging, setIsDragging, rotation, setRotation }) => {
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setRotation({
      x: rotation.x + e.movementY * 0.5,
      y: rotation.y + e.movementX * 0.5,
    });
  };

  return (
    <div className="relative w-full h-full">
      {/* İpucu Kartı */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg z-10">
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-sky-500 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col">
            <span className="font-medium text-gray-800">Interactive Model</span>
            <span className="text-xs text-gray-600">Click, drag and zoom</span>
          </div>
        </div>
      </div>

      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          width: "100%",
          height: "100%",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <Canvas
          shadows
          camera={{ position: [-5, 2, 5], fov: 45 }}
          className="bg-transparent"
        >
          <color attach="background" args={["transparent"]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.4} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.4}
            penumbra={1}
            intensity={0.6}
            castShadow
          />
          <LaptopModel
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            rotation={rotation}
            setRotation={setRotation}
          />
          <OrbitControls
            enabled={!isDragging}
            enableZoom={true}
            minDistance={4}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </div>
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
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const skills = [
    {
      icon: (
        <div className="flex justify-center">
          <FaCode className="text-5xl text-sky-500 transition-all duration-300 group-hover:scale-125" />
        </div>
      ),
      title: "Backend Development",
      description: "C#, .NET, ASP.NET Core, Entity Framework Core",
      features: ["Clean Architecture", "N Tier Architecture", "RESTful APIs"],
    },
    {
      icon: (
        <div className="flex justify-center">
          <FaServer className="text-5xl text-sky-500 transition-all duration-300 group-hover:scale-125" />
        </div>
      ),
      title: "iOS Development",
      description: "Swift, SwiftUI, TableView",
      features: ["Mobile UI/UX", "Firebase Integration", "API Integration"],
    },
    {
      icon: (
        <div className="flex justify-center">
          <FaDatabase className="text-5xl text-sky-500 transition-all duration-300 group-hover:scale-125" />
        </div>
      ),
      title: "Full Stack Development",
      description: "React, JavaScript, HTML, CSS",
      features: [
        "Modern UI/UX",
        "Responsive Design",
        "Frontend-Backend Integration",
      ],
    },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Completed Projects" },
    { number: "5+", label: "Certificates" },
    { number: "2+", label: "Technologies" },
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
          <h2 className="text-4xl font-bold mb-4">
            About Me & <span className="text-gradient">My Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating innovative solutions using modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Arkaplan Kartı */}
            <div className="relative z-10 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500 rounded-2xl opacity-20 blur-lg" />
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
                <div className="h-[400px]">
                  <CodingLaptop
                    isDragging={isDragging}
                    setIsDragging={setIsDragging}
                    rotation={rotation}
                    setRotation={setRotation}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-gradient">Hi, I 'm Sevda Abbasi.</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I am a computer engineer and passionate full-stack software
                  developer. With 2+ years of experience, I specialize in modern
                  web technologies and software architectures.
                </p>
                <p>
                  From the .NET ecosystem to frontend development, from database
                  management to cloud services, I develop projects across a wide
                  spectrum.
                </p>
                <p>
                  Adhering to Clean Code and SOLID principles, I focus on
                  developing sustainable and scalable software.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary p-4 rounded-xl"
              >
                Contact Me
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}Sevda_Abbasi_CV.pdf`}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline flex items-center gap-2 p-4 rounded-xl"
              >
                <FaDownload />
                Download CV
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
