"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react"
import { notFound } from "next/navigation"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!product) {
    notFound()
  }

  const IconComponent = (Icons as any)[product.icon] || Icons.Zap

  const productHeroImages: Record<string, string> = {
    eas: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop",
    botsbyqa: "https://images.unsplash.com/photo-1526378787940-076ee96c4b20?w=1200&h=500&fit=crop",
    forexedbyqa: "https://images.unsplash.com/photo-1611974519248-bfa06d85b3c9?w=1200&h=500&fit=crop",
    arbitrage: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&h=500&fit=crop",
    precision: "https://images.unsplash.com/photo-1518611505868-a4e72becb39f?w=1200&h=500&fit=crop",
  }

  const productThumbImages: Record<string, string> = {
    eas: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=128&fit=crop",
    botsbyqa: "https://images.unsplash.com/photo-1526378787940-076ee96c4b20?w=400&h=128&fit=crop",
    forexedbyqa: "https://images.unsplash.com/photo-1611974519248-bfa06d85b3c9?w=400&h=128&fit=crop",
    arbitrage: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=128&fit=crop",
    precision: "https://images.unsplash.com/photo-1518611505868-a4e72becb39f?w=400&h=128&fit=crop",
  }

  const heroImage =
    productHeroImages[product.slug] ||
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=500&fit=crop"
  const thumbImage =
    productThumbImages[product.slug] ||
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=128&fit=crop"

  return (
    <>
      <div className="pt-16">
        <section className="relative py-16 md:py-24 overflow-hidden">
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

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/products" className="text-primary hover:text-primary/80 mb-6 inline-block font-semibold">
                ← Back to Products
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gradient-brand rounded-lg text-white">
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">{product.name}</h1>
              </div>

              <p className="text-xl text-muted-foreground mb-8">{product.description}</p>

              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-gradient-brand hover:shadow-lg text-white"
              >
                Request Demo
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 z-10" />
              <Image src={heroImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 z-10" />
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-2 space-y-8"
              >
                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-3 glass p-4 rounded-lg hover:border-primary/30 border border-white/10 transition-all"
                      >
                        <div className="p-1 bg-gradient-brand rounded-full h-fit flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer if exists */}
                {product.disclaimer && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg"
                  >
                    <h3 className="font-bold text-destructive mb-2">Important Notice</h3>
                    <p className="text-sm text-destructive/90">{product.disclaimer}</p>
                  </motion.div>
                )}
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Pricing Card */}
                {product.pricing && (
                  <div className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                    <h3 className="text-lg font-bold text-foreground mb-4">Pricing</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Monthly</p>
                        <p className="text-3xl font-bold text-gradient">
                          ${product.pricing.monthly}
                          <span className="text-sm text-muted-foreground">/mo</span>
                        </p>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm text-muted-foreground mb-1">Annual (Save 17%)</p>
                        <p className="text-3xl font-bold text-gradient">
                          ${product.pricing.annually}
                          <span className="text-sm text-muted-foreground">/yr</span>
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full mt-6 bg-gradient-brand hover:shadow-lg text-white"
                    >
                      Get Started
                    </Button>
                  </div>
                )}

                {/* Info Box */}
                <div className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                  <h3 className="font-bold text-foreground mb-4">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact our team to learn more about this product and how it can benefit your business.
                  </p>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    className="w-full bg-transparent border-white/20 hover:bg-white/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            >
              Other Products
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((otherProduct, index) => {
                  const OtherIcon = (Icons as any)[otherProduct.icon] || Icons.Zap
                  const otherImage =
                    productThumbImages[otherProduct.slug] ||
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=128&fit=crop"
                  return (
                    <motion.div
                      key={otherProduct.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={`/products/${otherProduct.slug}`}>
                        <div className="h-full glass rounded-2xl border border-white/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col">
                          <div className="relative h-32 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                            <Image
                              src={otherImage || "/placeholder.svg"}
                              alt={otherProduct.name}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                          </div>

                          <div className="p-6 flex flex-col flex-1">
                            <div className="p-3 bg-gradient-brand rounded-lg text-white w-fit mb-4">
                              <OtherIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{otherProduct.name}</h3>
                            <p className="text-sm text-muted-foreground flex-1">{otherProduct.shortDescription}</p>
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
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
