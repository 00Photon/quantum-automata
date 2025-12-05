"use client"

import type React from "react"
import { motion } from "framer-motion"
import { BarChart3, Users, Zap, Globe } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: string
  label: string
}

const stats: StatItem[] = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    value: "5+",
    label: "Products",
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "100+",
    label: "Active Users",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "5",
    label: "Years Vision",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "Africa",
    label: "Focused",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-lg p-6 md:p-8 rounded-2xl text-center space-y-4 transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                className="flex justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                <div className="p-3 bg-gradient-brand rounded-xl text-white/90">{stat.icon}</div>
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-black text-gradient font-heading"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.15 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
