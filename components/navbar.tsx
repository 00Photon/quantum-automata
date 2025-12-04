"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Legal & T/C", href: "/legal" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/30 backdrop-blur-2xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-white.png"
                alt="Quantum Automata"
                width={220}
                height={70}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-brand hover:shadow-lg text-white border-0 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="bg-gradient-brand text-white w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
