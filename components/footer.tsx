import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/50 backdrop-blur-xl border-t border-white/10 text-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center text-sm font-bold text-white">
                Q
              </div>
              <span className="font-bold text-lg font-heading">Quantum Automata</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ethical AI and automation solutions for Africa's digital future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 font-heading">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 font-heading">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@quantumautomata.ng" className="hover:text-primary transition">
                 support@quantumautomata.ng
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+234705539488" className="hover:text-primary transition">
                  +234 705 539 4888
                </a>
              </div> */}
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Abuja, Nigeria. </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 font-heading">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Quantum Automata Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
