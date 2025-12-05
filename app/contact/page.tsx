"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "support@quantumautomata.ng",
      link: "mailto:support@quantumautomata.ng",
      color: "from-blue-500 to-blue-600",
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: "Phone",
    //   value: "+234 705 539 4888",
    //   link: "tel:+234705539488",
    //   color: "from-purple-500 to-purple-600",
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Abuja, Nigeria",
      link: "#",
      color: "from-pink-500 to-pink-600",
    },
  ]

  return (
    <div className="pt-16">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, 10, 0],
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
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about our products or services? We'd love to hear from you. Reach out and let's discuss how
              we can help your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to our team using any of the methods below. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className={`block p-6 rounded-xl bg-gradient-to-r ${method.color} hover:shadow-lg transition-all duration-300 cursor-pointer group text-white`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-white/90 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-white/80 text-sm mt-1">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-brand rounded-lg text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday – Friday: 9:00 AM – 6:00 PM WAT
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Send size={24} />
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Located in the heart of Abuja, we welcome visitors and are happy to discuss your business needs in person.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/20 to-purple-900/10 rounded-2xl h-96 overflow-hidden border border-white/10 backdrop-blur-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-3 opacity-70" />
                  </motion.div>
                  <p className="text-muted-foreground font-semibold">No 12, Emmanuel Close, Life Camp, Abuja</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
