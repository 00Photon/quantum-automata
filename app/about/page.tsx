"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Heart, Shield, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description:
        "To develop and deliver innovative automation and AI solutions that enhance operational efficiency and digital capability for businesses across Africa.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Vision",
      description:
        "To be a leading technology partner for African businesses, enabling them to compete globally through ethical AI and sustainable automation practices.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Values",
      description:
        "Innovation, integrity, and impact. We believe in creating solutions that are not just technologically advanced but also ethically sound and socially responsible.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance",
      description:
        "We maintain the highest standards of regulatory compliance and data security, ensuring our solutions meet international best practices and local requirements.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Enhanced hero section with animated gradient background and compelling visual */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 via-purple-900/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/15 via-purple-900/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              <span className="text-gradient">About Quantum Automata</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leading the charge in ethical AI and automation solutions for Africa's digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quantum Automata Limited is a technology and automation solutions company dedicated to developing software
              systems designed to enhance operational efficiency, decision-making, and digital capability for
              individuals and businesses within the financial and commercial sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by visionary leaders including CEO Yomi Richard, we bring together expertise in artificial
              intelligence, automation engineering, and business transformation to deliver solutions that truly make a
              difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Updated core values section with better glassmorphism and animations */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass p-6 md:p-8 rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="p-3 bg-gradient-brand rounded-lg text-white w-fit mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced commitment section with better visual hierarchy */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">Our Commitment to Society</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Contribution to Society",
                  description:
                    "We believe that technology should serve humanity. Through our solutions, we contribute to economic growth, job creation, and the development of a digital-savvy workforce across Africa. We are committed to making AI and automation accessible and beneficial to businesses of all sizes.",
                },
                {
                  title: "Ethical AI & Compliance",
                  description:
                    "We are deeply committed to developing and deploying AI systems that are ethical, transparent, and compliant with all relevant regulations. We adhere to international standards for data protection, privacy, and responsible AI development, ensuring that our solutions respect individual rights and promote fair practices across all sectors.",
                },
                {
                  title: "Driving Africa's Digital Future",
                  description:
                    "Our Africa-focused approach ensures that all our solutions are tailored to the unique needs, challenges, and opportunities of African businesses. We support digital education initiatives and provide resources to help organizations understand and effectively leverage automation and AI for sustainable growth.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced team section with better styling */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Leadership</h2>

            <div className="grid md:grid-cols-1 max-w-md mx-auto gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(99, 102, 241, 0.2)",
                      "0 0 40px rgba(99, 102, 241, 0.4)",
                      "0 0 20px rgba(99, 102, 241, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="w-20 h-20 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                >
                  YR
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-1">Yomi Richard</h3>
                <p className="text-primary font-semibold mb-3">Chief Executive Officer</p>
                <p className="text-muted-foreground">
                  Visionary leader driving Quantum Automata's mission to transform businesses across Africa with
                  innovative AI and automation solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
