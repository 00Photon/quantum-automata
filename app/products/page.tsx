"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/products"
import * as Icons from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  const productImages: Record<string, string> = {
    eas: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=160&fit=crop",
    botsbyqa: "https://images.unsplash.com/photo-1526378787940-076ee96c4b20?w=400&h=160&fit=crop",
    forexedbyqa: "https://images.unsplash.com/photo-1611974519248-bfa06d85b3c9?w=400&h=160&fit=crop",
    arbitrage: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=160&fit=crop",
    precision: "https://images.unsplash.com/photo-1518611505868-a4e72becb39f?w=400&h=160&fit=crop",
  }

  return (
    <div className="pt-16">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl"
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
              <span className="text-gradient">Our Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions designed to enhance operational efficiency and digital capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => {
              const IconComponent = (Icons as any)[product.icon] || Icons.Zap
              const productImage =
                productImages[product.slug] ||
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=160&fit=crop"

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="h-full glass rounded-2xl border border-white/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col">
                      <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                        <Image
                          src={productImage || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      </div>

                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <div className="p-3 bg-gradient-brand rounded-lg text-white w-fit mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed min-h-12 flex-1">
                          {product.description}
                        </p>

                        {product.features && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                            <ul className="space-y-1">
                              {product.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary font-bold mt-0.5">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.disclaimer && (
                          <p className="text-xs text-destructive bg-destructive/10 p-2 rounded mb-4">
                            {product.disclaimer}
                          </p>
                        )}

                        <div className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                          View Details →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
