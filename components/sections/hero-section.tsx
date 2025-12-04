"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const lines = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    duration: 8 + i * 2,
    delay: i * 0.2,
  }))

  return (
    <>
      <section className="relative w-full pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          {lines.map((line) => (
            <motion.div
              key={line.id}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, 50, -50, 0],
              }}
              transition={{
                duration: line.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: line.delay,
              }}
              className="absolute w-2 h-96 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rotate-45 blur-lg"
              style={{
                left: `${line.id * 15}%`,
                top: `${line.id * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/10 via-transparent to-purple-900/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="glass-sm px-4 py-2 rounded-full flex items-center gap-2 w-fit">
                <Sparkles size={16} className="text-secondary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">The Future of Automation is Here</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-black text-balance leading-tight font-heading">
                <span className="text-gradient block mb-2">Automating</span>
                <span className="text-gradient block mb-2">the Future</span>
                <span className="text-foreground">of Businesses with AI</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty font-light"
            >
              Quantum Automata Limited develops software systems designed to enhance operational efficiency,
              decision-making, and digital capability for individuals and businesses within the financial and commercial
              sectors.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-gradient-brand hover:shadow-lg hover:scale-105 text-white transition-all duration-300 font-semibold"
              >
                Get Started <ArrowRight size={20} />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass hover:bg-white/10 border-white/20 transition-all duration-300 font-semibold bg-transparent"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </motion.div>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="text-sm text-muted-foreground pt-4 font-light">
              Africa-Focused • Ethical AI • Enterprise Solutions
            </motion.p>
          </motion.div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
