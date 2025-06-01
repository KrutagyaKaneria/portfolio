"use client";
import React from "react";
import BlurText from "../ui/BlurText/BlurText";

export default function SparklesPreview({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="h-40 w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <BlurText
        text=" Krutagya Kaneria"
        delay={150}
        animateBy="words"
        direction="top"
        className="md:text-6xl text-4xl lg:text-7xl font-bold text-center text-white relative z-20"
      />

      <div className="w-[40rem] h-full relative flex flex-col items-center justify-center overflow-hidden rounded-md">
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
        <div className="top-0 absolute">{children}</div>
        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full absolute top-0 left-0"
          particleColor="#FFFFFF"
        />
        

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-[rgb(41,41,41)] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>
    </div>
  );
}
