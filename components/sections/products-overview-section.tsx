"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react"
import { ArrowRight } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"
import { useState } from "react"

const externalLinks: Record<string, string> = {
  botsbyqa: "https://qasoftwares.online/quantum",
  forexed: "https://forexedbyqa.online/forexed",
  "arbitrage-monkey": "https://qasoftwares.online/arbitrage-monkey-page",
}

const contactSlugs = new Set(["interl", "precision-automation"])

export function ProductsOverviewSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-heading">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive solutions tailored to streamline your business operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = (Icons as any)[product.icon] || Icons.Zap
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="glass-lg p-8 rounded-2xl transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className="p-3 bg-gradient-brand rounded-xl text-white w-fit mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.shortDescription}</p>
                {contactSlugs.has(product.slug) ? (
                  <Button
                    variant="ghost"
                    className="text-secondary hover:bg-white/10 p-0 group-hover:translate-x-2 transition-transform"
                    onClick={() => setIsContactOpen(true)}
                  >
                    <span className="flex items-center gap-2">
                      Contact Us <ArrowRight size={16} />
                    </span>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="ghost"
                    className="text-secondary hover:bg-white/10 p-0 group-hover:translate-x-2 transition-transform"
                  >
                    <Link
                      href={externalLinks[product.slug] ?? `/products/${product.slug}`}
                      className="flex items-center gap-2"
                      target={externalLinks[product.slug] ? "_blank" : undefined}
                      rel={externalLinks[product.slug] ? "noopener noreferrer" : undefined}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </Button>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-brand hover:shadow-lg text-white font-semibold">
            <Link href="/products" className="flex items-center gap-2">
              View All Products <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
      </section>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
