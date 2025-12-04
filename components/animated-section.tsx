"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Intensity = "subtle" | "default" | "bold"

type GlowLayer = {
  size: number
  opacity: number
  blur: number
  duration: number
  delay?: number
  background: string
  x: number
  y: number
}

const glowMap: Record<Intensity, GlowLayer[]> = {
  subtle: [
    {
      size: 420,
      opacity: 0.35,
      blur: 120,
      duration: 26,
      background: "radial-gradient(circle, rgba(124,58,173,0.45), transparent 70%)",
      x: -12,
      y: -6,
    },
    {
      size: 320,
      opacity: 0.3,
      blur: 110,
      duration: 22,
      delay: 4,
      background: "radial-gradient(circle, rgba(25,169,221,0.35), transparent 75%)",
      x: 8,
      y: 6,
    },
  ],
  default: [
    {
      size: 560,
      opacity: 0.45,
      blur: 140,
      duration: 28,
      background: "radial-gradient(circle, rgba(100,58,144,0.55), transparent 75%)",
      x: -10,
      y: -4,
    },
    {
      size: 460,
      opacity: 0.4,
      blur: 130,
      duration: 24,
      delay: 3,
      background: "radial-gradient(circle, rgba(25,169,221,0.45), transparent 80%)",
      x: 10,
      y: 8,
    },
  ],
  bold: [
    {
      size: 620,
      opacity: 0.55,
      blur: 160,
      duration: 32,
      background: "radial-gradient(circle, rgba(124,58,173,0.6), transparent 80%)",
      x: -14,
      y: -6,
    },
    {
      size: 520,
      opacity: 0.5,
      blur: 150,
      duration: 30,
      delay: 5,
      background: "radial-gradient(circle, rgba(25,169,221,0.5), transparent 85%)",
      x: 12,
      y: 10,
    },
    {
      size: 420,
      opacity: 0.35,
      blur: 130,
      duration: 26,
      delay: 2,
      background: "radial-gradient(circle, rgba(155,95,209,0.5), transparent 75%)",
      x: -6,
      y: 12,
    },
  ],
}

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  intensity?: Intensity
}

export function AnimatedSection({
  children,
  delay = 0.1,
  className,
  intensity = "default",
}: AnimatedSectionProps) {
  const layers = glowMap[intensity]

  return (
    <div className={cn("relative isolate", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {layers.map((layer, index) => (
          <motion.div
            key={`layer-${index}`}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: layer.size,
              height: layer.size,
              opacity: layer.opacity,
              filter: `blur(${layer.blur}px)`,
              background: layer.background,
            }}
            initial={{ x: `${layer.x}%`, y: `${layer.y}%`, scale: 0.95 }}
            animate={{
              x: [`${layer.x}%`, `${layer.x + 6}%`, `${layer.x - 4}%`, `${layer.x}%`],
              y: [`${layer.y}%`, `${layer.y - 4}%`, `${layer.y + 6}%`, `${layer.y}%`],
              scale: [0.95, 1.05, 0.98],
              rotate: [0, 15, -10, 0],
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.98, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
