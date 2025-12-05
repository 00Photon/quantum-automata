"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Only enable mouse parallax on desktop (touch devices = no hover)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return // disable on mobile
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6 py-20 md:py-0"
        onMouseMove={handleMouseMove}
      >
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black" />

        {/* Very subtle breathing orb — only visible on larger screens */}
        <div className="absolute inset-0 opacity-20 hidden md:block">
          <motion.div
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle at 30% 70%, #00ff88, transparent 70%)",
              left: "10%",
              top: "20%",
              x: useTransform(smoothX, (v) => (window.innerWidth >= 768 ? v * 0.04 : 0)),
              y: useTransform(smoothY, (v) => (window.innerWidth >= 768 ? v * 0.04 : 0)),
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle at 70% 30%, #0066ff, transparent 70%)",
              right: "10%",
              bottom: "10%",
            }}
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Tiny rising particles — lightweight & mobile-safe */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px md:w-0.5 md:h-0.5 bg-white/40 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
              initial={{ y: "100vh" }}
              animate={{ y: "-100px" }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Main content — perfectly responsive */}
        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto"
          style={
            window.innerWidth >= 768
              ? {
                  x: useTransform(smoothX, (v) => v * 0.02),
                  y: useTransform(smoothY, (v) => v * 0.02),
                }
              : {}
          }
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-light mb-8 md:mb-12"
          >
            The Future of Automation is Here
          </motion.p>

          {/* Headline — scales beautifully */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight md:leading-[0.9] tracking-tighter"
          >
            <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AUTOMATING
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              THE FUTURE
            </span>
            <span className="block text-white/90 text-3xl md:text-5xl lg:text-7xl mt-4 font-light">
              of African Enterprise
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 md:mt-12 text-base md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Ethical AI systems that don’t just automate — they understand Africa.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-12 md:mt-16 justify-center"
          >
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-7 text-lg font-medium bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-full hover:scale-105 transition-transform"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-10 py-7 text-lg rounded-full border-white/20 hover:bg-white/10 transition-all"
            >
              <Link href="/products">View Solutions</Link>
            </Button>
          </motion.div>

          {/* Footer tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 md:mt-20 text-xs tracking-widest text-white/30"
          >
            BUILT FOR AFRICA • ETHICAL BY DESIGN • ENTERPRISE SCALE
          </motion.p>
        </motion.div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}