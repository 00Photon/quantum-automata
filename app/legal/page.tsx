import type { Metadata } from "next"
import { LegalPageContent } from "@/components/legal-page-content"

export const metadata: Metadata = {
  title: "Legal | Quantum Automata Limited",
  description:
    "Review the legal notice, terms, and compliance commitments guiding how Quantum Automata delivers ethical AI and automation solutions.",
}

export default function LegalPage() {
  return <LegalPageContent />
}
