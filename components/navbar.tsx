"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"
import { ThemeToggle } from "./theme-toggle"

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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/60 z-50">
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
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground border-0 transition-all duration-300 rounded-full px-6 tracking-wide uppercase"
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
                    className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="bg-primary text-primary-foreground w-full uppercase tracking-wide"
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
