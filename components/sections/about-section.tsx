"use client";
import React, { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiPostman,
  SiCplusplus,
  SiFigma,
  SiFramer,
  SiSocketdotio,
  SiPostgresql,
  SiAppwrite,
  SiPhp,
  SiPython 
} from "react-icons/si";

// Type definitions
type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  grade: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
};

type TechCategory = "frontend" | "backend" | "tools" | "languages" | "design";
type TechItem = {
  name: string;
  icon: React.ReactNode;
  category: TechCategory;
  iconKey: string;
};

export const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  // Education data
  const education: EducationItem[] = [
    {
      institution: "Rai School of Engineering",
      degree: "Bachelor of Technology in Computer Science",
      period: "2024 - 2028",
      grade: "CGPA: 9.65",
    },
  ];

  // Experience data
  const experience: ExperienceItem[] = [
    {
    company: "Hackathon at Gujarat Vidyapeeth",
    role: "Backend Developer",
    period: "Mar 2025",
    location: "Ahmedabad, Gujarat",
    achievements: [
      "Contributed as a backend developer in a national-level hackathon project",
      "Implemented REST APIs, JWT auth, and MongoDB integration for the platform",
      "Achieved finalist position among 2000+ participants"
    ],
  },
  {
    company: "Odoo India Headquarters",
    role: "Visitor – Industry Interaction",
    period: "Feb 2025",
    location: "Gandhinagar, Gujarat",
    achievements: [
      "Visited Odoo HQ and interacted with industry professionals",
      "Explored ERP architecture and learned about real-world enterprise software workflows",
    ],
  }
  ];

  // Tech stack data
  const techStack: TechItem[] = useMemo(
    () => [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        category: "frontend",
        iconKey: "html5",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        category: "frontend",
        iconKey: "css3",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        category: "frontend",
        iconKey: "javascript",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        category: "frontend",
        iconKey: "typescript",
      },
      {
        name: "React.JS",
        icon: <FaReact />,
        category: "frontend",
        iconKey: "react",
      },
      {
        name: "Next.JS",
        icon: <SiNextdotjs />,
        category: "frontend",
        iconKey: "nextjs",
      },
     
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        category: "frontend",
        iconKey: "tailwindcss",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        category: "frontend",
        iconKey: "framer",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux />,
        category: "frontend",
        iconKey: "redux",
      },
      {
        name: "Node.JS",
        icon: <FaNodeJs />,
        category: "backend",
        iconKey: "nodejs",
      },
      {
        name: "Express.JS",
        icon: <SiExpress />,
        category: "backend",
        iconKey: "express",
      }, {
        name: "Socket.IO",
        icon: <SiSocketdotio />,
        category: "backend",
        iconKey: "socket",
      },
      {
        name: "Appwrite",
        icon: <SiAppwrite />,
        category: "backend",
        iconKey: "appwrite",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        category: "backend",
        iconKey: "mongodb",
      },
     
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        category: "backend",
        iconKey: "postgresql",
      },
      
      { name: "Git", icon: <FaGitAlt />, category: "tools", iconKey: "git" },
      {
        name: "GitHub",
        icon: <FaGithub />,
        category: "tools",
        iconKey: "github",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        category: "tools",
        iconKey: "vercel",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        category: "tools",
        iconKey: "postman",
      },
      {
        name:"PHP",
        icon: <SiPhp />,
        category: "languages",
        iconKey: "php",
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
        category: "languages",
        iconKey: "cplusplus",
      },
      {
        name:"Python",
        icon: <SiPython />,
        category: "languages",
        iconKey: "python",
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        category: "design",
        iconKey: "figma",
      },
    ],
    []
  );

  const ICON_COLORS: Record<string, string> = {
    html5: "text-orange-600",
    css3: "text-blue-500",
    javascript: "text-yellow-400",
    typescript: "text-blue-600",
    react: "text-cyan-400",
    nextjs: "text-black dark:text-white",
    tailwindcss: "text-cyan-500",
    framer: "text-purple-600",
    nodejs: "text-green-600",
    express: "text-gray-800 dark:text-gray-300",
    mongodb: "text-green-500",
    redux: "text-purple-700",
    git: "text-red-500",
    github: "text-gray-800 dark:text-gray-300",
    vercel: "text-black dark:text-white",
    postman: "text-orange-500",
    cplusplus: "text-blue-700",
    figma: "text-pink-600",
    socket: "text-white",
    postgresql: "text-blue-700",
    appwrite: "text-red-500",
    php: "text-blue-700",
    python: "text-green-500",
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen w-full py-20 px-4 md:px-10"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-400 uppercase tracking-wider mb-2">
            GET TO KNOW ME
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left column with image and bio */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center border-0 md:border-r border-white/50 pr-0 md:pr-8 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-red-500 blur-xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full border-2 border-gray-800 overflow-hidden">
                <Image
                  src="/ProfilePic1.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-center max-w-md">
              <p className="text-gray-300 leading-relaxed mb-6">
                "As a Full-Stack Developer with a strong foundation in Computer
                Science, I'm passionate about building user-friendly, dynamic
                applications that make a real impact. I take pride in solving
                problems, refining experiences, and always seeking ways to
                improve. Eager to continuously learn and expand my skill set,
                I'm excited to contribute to projects that push the boundaries
                of what's possible, while growing both professionally and
                personally."
              </p>

              <div className="flex items-center justify-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right column with education, experience, and tech stack */}
          <motion.div
            className="lg:col-span-8 space-y-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Education */}
            <div className="border-b border-white/50 pb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <h4 className="text-base md:text-xl font-semibold text-white">
                      {item.institution}
                    </h4>
                    <span className="text-gray-400 text-xs md:text-base">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <p className="text-gray-300 text-sm md:text-base">
                      {item.degree}
                    </p>
                    <span className="text-gray-400 text-xs md:text-base">
                      {item.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience */}
            <div className="border-b border-white/50 pb-6">
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <h4 className="text-lg md:text-xl font-semibold text-white">
                      {item.company}
                    </h4>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <span className="text-gray-400 text-sm md:text-base">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-3">
                    {item.role}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`px-4 py-2 rounded-full border-white/20  flex items-center gap-2 bg-transparent border-2 cursor-pointer transition-colors duration-200`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <span className={`text-lg ${ICON_COLORS[tech.iconKey]}`}>
                      {tech.icon}
                    </span>
                    <span className="text-white text-xs md:text-sm">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
