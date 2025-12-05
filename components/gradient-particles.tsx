"use client"

import { motion } from "framer-motion"
import type { CSSProperties } from "react"

type GradientLayer = {
  size: number
  className?: string
  style: CSSProperties
  duration: number
  delay?: number
}

const gradientLayers: GradientLayer[] = [
  {
    size: 520,
    style: {
      background:
        "radial-gradient(circle at 30% 30%, rgba(162, 75, 255, 0.35), rgba(32, 26, 56, 0.08) 60%, transparent 80%)",
    },
    duration: 36,
  },
  {
    size: 420,
    style: {
      background:
        "radial-gradient(circle at 70% 20%, rgba(76, 62, 219, 0.4), rgba(26, 23, 63, 0.1) 60%, transparent 85%)",
    },
    duration: 28,
    delay: 4,
  },
  {
    size: 360,
    style: {
      background:
        "radial-gradient(circle at 50% 50%, rgba(31, 44, 90, 0.45), rgba(20, 20, 40, 0.08) 55%, transparent 80%)",
    },
    duration: 32,
    delay: 2,
  },
]

const sparkleConfig = Array.from({ length: 12 }, (_, index) => {
  const base = index + 1
  return {
    size: 6 + (base % 3) * 2,
    duration: 5 + ((base * 7) % 6),
    delay: (base * 0.7) % 6,
    top: `${(base * 11) % 90 + 5}%`,
    left: `${(base * 17) % 90 + 5}%`,
  }
})

export function GradientParticles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {gradientLayers.map((layer, index) => (
        <motion.div
          key={`glow-${index}`}
          className="absolute rounded-full blur-[120px] mix-blend-screen opacity-70"
          style={{
            width: layer.size,
            height: layer.size,
            ...layer.style,
          }}
          initial={{ x: "-10%", y: "-10%", scale: 0.9 }}
          animate={{
            x: ["-8%", "6%", "-4%", "8%", "-8%"],
            y: ["-6%", "4%", "-2%", "6%", "-6%"],
            scale: [0.95, 1.05, 0.98],
            rotate: [0, 25, -15, 0],
          }}
          transition={{
            duration: layer.duration,
            delay: layer.delay ?? 0,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0">
        {sparkleConfig.map((sparkle, index) => (
          <motion.span
            key={`sparkle-${index}`}
            className="absolute rounded-full bg-gradient-to-br from-white/70 via-purple-200/40 to-transparent opacity-0 blur-[2px]"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              top: sparkle.top,
              left: sparkle.left,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.4, 0.9],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
