"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Scale, FileText, Lock, Mail, CheckCircle2 } from "lucide-react"

const termSections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using Quantum Automata Limited products, platforms, or services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.",
  },
  {
    title: "2. Services & Licensing",
    body: "We provide AI-driven software, automation platforms, consulting, and support services. Unless stated otherwise, all deliverables and platform access are licensed, not sold. Clients receive a non-transferable, non-exclusive license to use our solutions strictly for agreed business purposes.",
  },
  {
    title: "3. Data Protection & Privacy",
    body: "We implement enterprise-grade security controls, encryption, and ongoing audits to protect customer data. Where we process personal or financial data on your behalf, we act as a data processor and comply with relevant regulations (e.g., NDPR, GDPR where applicable). Clients remain the data controller and are responsible for lawful data collection and usage.",
  },
  {
    title: "4. Compliance & Responsible AI",
    body: "Our products are built with ethical AI guardrails and auditability. Clients agree to deploy our technology responsibly, comply with applicable laws, and avoid use cases that could violate privacy, promote harm, or discriminate against protected classes.",
  },
  {
    title: "5. Payment & Termination",
    body: "All invoices are due within the agreed payment window. Failure to pay may result in suspension of services. Either party may terminate with written notice if the other breaches a material obligation and fails to remedy within 30 days. Upon termination, licenses revert to Quantum Automata Limited.",
  },
  {
    title: "6. Liability",
    body: "To the maximum extent permitted by law, Quantum Automata Limited is not liable for indirect, incidental, or consequential damages. Our total cumulative liability arising from any contract will not exceed the fees paid during the twelve (12) months preceding the event giving rise to the claim.",
  },
]

const commitmentCards = [
  {
    icon: ShieldCheck,
    title: "Ethical Automation",
    body: "We follow strict review processes so every model and workflow is explainable, bias-tested, and aligned with regulatory expectations.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    body: "Infrastructure is hardened with encryption, access controls, and continuous monitoring to keep your data protected end-to-end.",
  },
  {
    icon: Scale,
    title: "Regulatory Alignment",
    body: "Solutions are mapped to financial, commercial, and data protection frameworks relevant across African markets and global partners.",
  },
]

export function LegalPageContent() {
  return (
    <div className="pt-20 pb-24 space-y-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tl from-secondary/25 to-transparent blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-widest text-sm text-secondary">Legal & Compliance</p>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mt-3">
              Legal Notice, Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              This page outlines how Quantum Automata Limited collaborates with clients, handles data securely, and
              ensures that every automation product is built on ethical and regulatory foundations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {commitmentCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-brand w-fit mb-4 text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-foreground">Terms & Conditions</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            These terms apply to all engagements, pilot programs, and platform subscriptions. Specific contract terms
            may expand on the clauses below.
          </p>
        </div>

        <div className="space-y-6">
          {termSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-sm p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-lg p-8 md:p-10 rounded-3xl border border-primary/20 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-7 h-7 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Legal Contact & Notices</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For contractual questions, regulatory inquiries, or requests relating to data subject rights, reach our
            compliance desk directly. We aim to respond within two business days.
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              <span>legal@quantumautomata.com</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Quantum Automata Limited • RC 7290432 • Lagos, Nigeria</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>
    </div>
  )
}
