"use client";
import {
  House,
  SquareUserRound,
  SquareCode,
  Mail,
  ArrowDown,
} from "lucide-react";
import type React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import SparklesPreview from "@/components/demo/sparklePreviewDemo";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BackgroundWrapper } from "@/components/ui/background-wrapper";

export default function HomePage() {
  // Refs for scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection(homeRef),
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <SquareUserRound className="h-5 w-5 text-neutral-500 dark:text-white" />
      ),
      onClick: () => scrollToSection(aboutRef),
    },

    {
      name: "Projects",
      link: "/projects",
      icon: <SquareCode className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection(projectsRef),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection(contactRef),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/krutagya-kaneria/",
      icon: <i className="pi pi-linkedin  " style={{ fontSize: "1rem" }}></i>,
      external: true,
    },
    {
      name: "GitHub",
      link: "https://github.com/KrutagyaKaneria",
      icon: <i className="pi pi-github" style={{ fontSize: "1rem" }}></i>,
      external: true,
    },
  ];

  return (
    <BackgroundWrapper>
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Home Section */}
      <section
        ref={homeRef}
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen w-full p-8 pb-20 gap-10"
      >
        <main className="flex flex-col gap-[32px] items-center z-10">
          <div className="flex flex-col gap-2 items-center justify-center mt-20 md:mt-20">
            <SparklesPreview>
              <p className="text-base mt-2 text-wrap w-screen px-5 md:w-full sm:text-lg font-light text-center text-neutral-500 dark:text-white">
                Hey, I&apos;m a
                <strong className="text-pink-500 font-bold">
                  {" "}
                  Full Stack Developer
                </strong>{" "}
                passionate about building performant, user-friendly, and
                scalable applications.
              </p>
            </SparklesPreview>

            <div className="flex flex-col md:flex-row gap-2 items-center justify-center -mt-4">
              <AnimatedButton color="pink">
                <a href="#contact" onClick={() => scrollToSection(contactRef)}>
                  Let&apos;s Connect ✋
                </a>
              </AnimatedButton>
              <AnimatedButton color="pink">
                <a
                  href="https://drive.google.com/file/d/1mvP6OPo06xM9EK0CqLBjRYElTK8i6oGI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume 📄
                </a>
              </AnimatedButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            <ArrowDown className="h-8 w-8 text-pink-500 animate-bounce" />
          </motion.div>
        </main>
      </section>

      {/* About Section */}
      <AboutSection ref={aboutRef} />

      {/* Projects Section */}
      <ProjectsSection ref={projectsRef} />

      {/* Contact Section */}
      <ContactSection ref={contactRef} />
      <footer className="flex items-center justify-center w-full h-16 bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-neutral-700">
        <p className="text-sm text-neutral-500 dark:text-white">
          © {new Date().getFullYear()} Krutagya. All rights reserved.
        </p>
      </footer>
    </BackgroundWrapper>
  );
}
