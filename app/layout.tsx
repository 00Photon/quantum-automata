import type React from "react"
import type { Metadata } from "next"
import { Schibsted_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumautomata.com"),
  title: "Quantum Automata| AI & Automation Solutions",
  description:
    "Automating the future of businesses with ethical AI and automation solutions for Global's financial and commercial sectors.",
  openGraph: {
    title: "Quantum Automata Limited",
    description:
      "Ethical AI and automation products that help Global businesses streamline operations, scale securely, and stay compliant.",
    url: "https://quantumautomata.com",
    siteName: "Quantum Automata Limited",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/meta-img.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Automata brand gradient with logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Automata| Ethical AI & Automation",
    description:
      "Building sleek, compliant AI platforms that automate mission-critical work for Global's financial and commercial teams.",
    images: ["/meta-img.jpg"],
    creator: "@quantumautomata",
  },
  icons: {
    icon: [
      { url: "/logo-white.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/logo-white.png"],
    apple: ["/apple-icon.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${schibstedGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="bg-background text-foreground min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
