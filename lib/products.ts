export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  pricing?: {
    monthly: number
    annually: number
  }
  disclaimer?: string
}

export const products: Product[] = [
  {
    id: "eas",
    name: "Intellinx by QA",
    slug: "interl",
    description:
      "Intellinx by QA is powered by advanced AI to streamline your workflow and enhance productivity.",
    shortDescription: "AI-powered executive assistant for productivity",
    icon: "Zap",
    features: [
      "Calendar management and meeting scheduling",
      "Email organization and prioritization",
      "Task automation and tracking",
      "Natural language commands",
      "Integration with major platforms",
    ],
    pricing: {
      monthly: 99,
      annually: 990,
    },
  },
  {
    id: "botsbyqa",
    name: "BotsbyQA Suite",
    slug: "botsbyqa",
    description:
      "Comprehensive bot suite with Auryx, Dualyx, Voltryx, and Trionyx variants for various automation needs.",
    shortDescription: "Multi-variant automation bot suite",
    icon: "Bot",
    features: [
      "Auryx: General automation bot",
      "Dualyx: Dual-process automation",
      "Voltryx: High-voltage performance bot",
      "Trionyx: Triple-function automation",
      "Customizable workflows",
    ],
  },
  {
    id: "forexed",
    name: "ForexEdByQA",
    slug: "forexed",
    description: "Educational and analytical tools for forex trading with AI-powered insights.",
    shortDescription: "Forex education and analytics platform",
    icon: "TrendingUp",
    features: [
      "Real-time market analysis",
      "Trading signals and alerts",
      "Educational modules",
      "Risk management tools",
      "Portfolio tracking",
    ],
    disclaimer:
      "Forex trading involves significant risk of loss. Past performance is not indicative of future results.",
  },
  {
    id: "arbitrage-monkey",
    name: "Arbitrage Monkey",
    slug: "arbitrage-monkey",
    description: "Advanced arbitrage detection and execution system for financial markets.",
    shortDescription: "Automated arbitrage opportunity detector",
    icon: "Coins",
    features: [
      "Real-time arbitrage detection",
      "Multi-exchange monitoring",
      "Automated execution",
      "Risk assessment",
      "Performance analytics",
    ],
    disclaimer: "Trading and arbitrage strategies involve substantial risk. No guarantees of profit.",
  },
  {
    id: "precision-automation",
    name: "Precision Automation Architecture",
    slug: "precision-automation",
    description: "Enterprise-grade automation framework for complex business processes.",
    shortDescription: "Enterprise automation framework",
    icon: "Cog",
    features: [
      "Process automation",
      "Workflow orchestration",
      "Custom integrations",
      "Scalable architecture",
      "Enterprise support",
    ],
  },
]
