"use client"

import { motion } from "framer-motion"

export function SkillsGrid() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "Next.js", icon: "▲", level: 85 },
        { name: "TypeScript", icon: "TS", level: 80 },
        { name: "Tailwind CSS", icon: "🌊", level: 95 },
        { name: "Framer Motion", icon: "🎭", level: 75 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Express", icon: "🚂", level: 80 },
        { name: "MongoDB", icon: "🍃", level: 75 },
        { name: "PostgreSQL", icon: "🐘", level: 70 },
        { name: "GraphQL", icon: "◆", level: 65 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: "📊", level: 90 },
        { name: "Docker", icon: "🐳", level: 70 },
        { name: "AWS", icon: "☁️", level: 65 },
        { name: "Firebase", icon: "🔥", level: 80 },
        { name: "Jest", icon: "🃏", level: 75 },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-6">
          <motion.h4
            className="text-2xl font-bold text-green-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {category.name}
          </motion.h4>

          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white">
                      {skill.icon}
                    </span>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-green-400 font-medium">{skill.level}%</span>
                </div>

                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: skillIndex * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
