"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
    onClick?: () => void
    external?: boolean
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(true)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[90vw] md:max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pl-4 py-1 items-center justify-center space-x-1 md:space-x-4",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => {
              if (!navItem.external && navItem.onClick) {
                e.preventDefault()
                navItem.onClick()
              }
            }}
            target={navItem.external ? "_blank" : undefined}
            rel={navItem.external ? "noopener noreferrer" : undefined}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-3 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 group",
            )}
          >
            <span className="text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 py-3 rounded-full flex item-center justify-center hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white/30 shadow-md ">
              {navItem.icon}
            </span>
            <span className="absolute top-full mt-4 text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-all bg-white/20 ease-in-out duration-300 shadow-lg">
              {navItem.name}
            </span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
