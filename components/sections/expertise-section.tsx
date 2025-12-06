"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Brain, Workflow, BookOpen } from "lucide-react"
import Image from "next/image"

interface ExpertiseItem {
  icon: React.ReactNode
  title: string
  description: string
  imageUrl: string
}

const expertise: ExpertiseItem[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Tools",
    description:
      "Advanced artificial intelligence systems that enhance decision-making and automate complex workflows.",
    imageUrl: "/ai.jpg",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Automation Engineering",
    description: "Combining AI with intelligent workflows to streamline operations and reduce manual intervention.",
    imageUrl: "/ima-1.jpg",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Digital Education",
    description: "Comprehensive training and resources to help businesses leverage our automation solutions.",
    imageUrl: "/education.jpg",
  },
]

export function ExpertiseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-heading">
            Our Expertise in AI & Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            We combine cutting-edge artificial intelligence with intelligent automation to transform your business
            operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="group glass-lg p-0 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="p-8 space-y-4">
                <motion.div
                  className="p-4 bg-gradient-brand rounded-xl text-white w-fit group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground font-heading">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
