"use client"

import type React from "react"
import Squares from "./Squares/Squares"

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col bg-black min-h-screen w-full overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
      <div className="fixed inset-0 w-full h-full bg-black z-0">
        <Squares
          speed={0.4}
          squareSize={40}
          direction="diagonal"
          borderColor="rgb(41,41,41)"
          hoverFillColor="#444444"
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
