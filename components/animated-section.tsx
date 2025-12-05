"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Intensity = "subtle" | "default" | "bold"

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
  void intensity
  return (
    <div className={cn("relative isolate", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5, delay, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
