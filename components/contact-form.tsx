"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, User, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setFormState({ name: "", email: "", subject: "", message: "" })

      // Reset the submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="p-3 bg-primary rounded-full text-white w-fit mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select a subject</option>
          <option value="product-inquiry">Product Inquiry</option>
          <option value="demo-request">Demo Request</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="technical-support">Technical Support</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your inquiry..."
            rows={5}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-brand hover:opacity-90 text-white disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">We'll respond to your inquiry within 24 hours.</p>
    </form>
  )
}
