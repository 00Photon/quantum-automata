"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

export function TransformationSection() {
  const commitmentItems = [
    { title: "Compliance", desc: "Full adherence to regulatory requirements and industry standards" },
    { title: "Ethics", desc: "Responsible AI development that prioritizes human values and societal benefit" },
    { title: "Innovation", desc: "Continuous advancement to stay at the forefront of AI and automation technology" },
    { title: "Support", desc: "Dedicated assistance to ensure your success with our solutions" },
  ]

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-background/10 rounded-2xl" />
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop"
              alt="Transforming Visions into Reality"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading">
              Transforming Visions into Reality
            </h2>

            <motion.div
              className="glass-lg p-8 md:p-10 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl font-semibold text-gradient mb-3">
                "Streamline your business with ethical AI"
              </p>
              <p className="text-muted-foreground">
                Our commitment to compliance and ethical AI practices ensures your business operates with confidence and
                integrity.
              </p>
            </motion.div>

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-foreground font-heading">Our Commitment</h3>
              <div className="grid gap-4">
                {commitmentItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-sm p-6 rounded-xl flex gap-4"
                  >
                    <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">{item.title}</strong>
                      <span className="text-muted-foreground text-sm">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
