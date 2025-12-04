"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="text-8xl font-bold bg-gradient-brand bg-clip-text text-transparent">404</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center pt-4"
        >
          <Button asChild className="bg-gradient-brand hover:opacity-90">
            <Link href="/" className="flex items-center gap-2">
              <Home size={18} />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/products" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Browse Products
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
