"use client";

import { AnimatedDescription } from "@/components/AnimatedDescription";
import { GlassmorphismDiv } from "@/components/GlassmorphismDiv";
import { MainBox } from "@/components/MainBox";
import React from "react";

export default function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MainBox includeNavBar className="relative">
      {/* Background gradient color animation */}
      <div className="absolute inset-0 z-10"></div>

      {/* Outline Earth-like logo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <svg
          className="w-[150%] h-[150%] max-w-none"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <g style={{ transformOrigin: "center" }}>
            {/* Main globe outline */}
            <circle
              cx="400"
              cy="400"
              r="390"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="2"
            />

            {/* Inner details */}
            <path
              d="M400,10 Q550,100 500,200 T600,400 T500,600 T400,790 Q250,700 300,600 T200,400 T300,200 T400,10"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <path
              d="M100,400 Q200,350 300,400 T500,450 T700,400 Q600,500 500,550 T300,500 T100,400"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1"
              strokeOpacity="0.3"
            />

            {/* Outer details */}
            <circle
              cx="400"
              cy="400"
              r="420"
              fill="none"
              stroke="#1e40af"
              strokeWidth="0.5"
              strokeOpacity="0.5"
              strokeDasharray="5,10"
            />
            <circle
              cx="400"
              cy="400"
              r="450"
              fill="none"
              stroke="#1e40af"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              strokeDasharray="2,8"
            />

            {/* Additional line details */}
            <line
              x1="0"
              y1="400"
              x2="800"
              y2="400"
              stroke="#3b82f6"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <line
              x1="400"
              y1="0"
              x2="400"
              y2="800"
              stroke="#3b82f6"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />

            {/* Circular paths */}
            <circle
              cx="400"
              cy="400"
              r="200"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <circle
              cx="400"
              cy="400"
              r="300"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <AnimatedDescription />
      {/* Glassmorphism effect at the bottom */}
      <GlassmorphismDiv />
    </MainBox>
  );
}
