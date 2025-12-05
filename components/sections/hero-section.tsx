"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-black">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="px-4 py-2 rounded-full border border-white/10 text-xs tracking-[0.3em] uppercase text-white/60">
              The Future of Automation is Here
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-white"
          >
            <span className="block text-white mb-2">Automating</span>
            <span className="block text-white mb-2">the Future</span>
            <span className="block text-white/80">of Businesses with AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
          >
            Quantum Automata Limited develops software systems designed to enhance operational efficiency,
            decision-making, and digital capability for individuals and businesses within the financial and commercial
            sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:scale-105 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/products">Explore Products</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-sm text-white/60"
          >
            Africa-Focused • Ethical AI • Enterprise Solutions
          </motion.p>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
