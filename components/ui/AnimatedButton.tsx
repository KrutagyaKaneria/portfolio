"use client"

import type React from "react"
import { motion } from "framer-motion"

export default function AnimatedButton({
  children,
  color = "pink",
}: {
  children: React.ReactNode
  color?: "pink" | "green" | "blue"
}) {
  const getGradient = () => {
    switch (color) {
      case "pink":
        return "from-pink-500 to-red-500"
      case "green":
        return "from-emerald-400 to-emerald-600"
      case "blue":
        return "from-blue-400 to-blue-600"
      default:
        return "from-pink-500 to-red-500"
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${getGradient()} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full font-light bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
        <span>{children}</span>
      </div>
      <span
        className={`absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r ${getGradient()} transition-opacity duration-500 group-hover:opacity-40`}
      />
    </motion.button>
  )
}
