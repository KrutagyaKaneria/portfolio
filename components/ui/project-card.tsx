"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export function ProjectCard({
  title,
  description,
  tags,
  link,
  image,
  isHovered = false,
}: {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
  isHovered?: boolean
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-black border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 h-full w-full"
      style={{
        boxShadow: isHovered ? "0 25px 50px -12px rgba(22, 163, 74, 0.15)" : "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="h-full w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="flex gap-4"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
