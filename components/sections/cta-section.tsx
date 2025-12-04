"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-lg p-10 md:p-16 rounded-3xl text-center space-y-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="flex justify-center"
          >
            <Zap className="w-12 h-12 text-secondary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Let's discuss how Quantum Automata can help you achieve your goals with cutting-edge AI and automation
            solutions.
          </p>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand hover:shadow-lg text-white font-semibold inline-flex items-center gap-2"
            >
              <Link href="/contact">
                Get in Touch <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
