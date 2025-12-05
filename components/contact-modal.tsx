"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Mail, Phone } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const contactOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Chat with us",
      description: "Start a live chat",
      href: "#chat",
      color: "from-[#1f2c5a] to-[#4c3edb]",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Send us a mail",
      description: "yomirichard@gmail.com",
      href: "mailto:yomirichard@gmail.com",
      color: "from-[#4c3edb] to-[#a24bff]",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp",
      description: "+234 705 539 4888",
      href: "https://wa.me/2347055394888",
      color: "from-[#1f2c5a] to-[#a24bff]",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 w-96 bg-background/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-50 md:bottom-6 md:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
              <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X size={20} className="text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={index}
                  href={option.href}
                  target={option.href.startsWith("http") || option.href.startsWith("mailto") ? "_blank" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block p-4 rounded-lg bg-gradient-to-r ${option.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex items-start gap-3 text-white">
                    <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      {option.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{option.label}</p>
                      <p className="text-xs opacity-90 mt-0.5">{option.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-muted/50">
              <p className="text-xs text-muted-foreground text-center">We typically respond within 24 hours</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
