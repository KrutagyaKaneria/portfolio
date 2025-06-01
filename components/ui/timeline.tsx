"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  company: string
  date: string
  description: string
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l border-gray-700"
        >
          <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-green-400 border-4 border-black" />
          <div className="mb-1 text-xl font-semibold text-white">{item.title}</div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">{item.company}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{item.date}</span>
          </div>
          <p className="text-gray-400">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
