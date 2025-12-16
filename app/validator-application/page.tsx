"use client"

import { useState } from "react"
import Image from "next/image"
import { Server, FileText, Coins, Gift, Zap, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

const benefits = [
  {
    icon: Server,
    title: "A SEP Node validator license, tied to your node",
  },
  {
    icon: FileText,
    title: "A SEP Node install package (Linux-based)",
  },
  {
    icon: FileText,
    title: "SEP Node setup documentation",
  },
  {
    icon: Coins,
    title: "Earn transaction fees once the Mainnet is live",
  },
  {
    icon: Gift,
    title: "Qualify for DAO-funded bonus programs after launch",
  },
  {
    icon: Zap,
    title: "Included by default in Mainnet rollout and future upgrades",
  },
]

export default function ValidatorApplicationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serverSpecs: "",
    connectionSpeed: "",
    location: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // TODO: Implement actual form submission
    // For now, simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          serverSpecs: "",
          connectionSpeed: "",
          location: "",
        })
        setSubmitStatus("idle")
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/validator" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Apply to Run a SEP Node
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Running a SEP Node is simple. Applying for one is even easier.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            This is your chance to contribute directly to a global infrastructure where privacy is protected at the protocol level. By operating a SEP Node, you help build and secure the foundation of a censorship-resistant, quantum-secure network — not just for yourself, but for everyone.
          </p>
        </div>

        {/* Key Points */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-foreground">
              Every validator strengthens the network.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Every active node pushes back against global surveillance.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Every connection matters.
            </p>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            Participation is open. No fees. No token purchases. No KYC. Just commitment. If you support privacy, this is your moment to act — with real impact, and real rewards.
          </p>
        </div>

        {/* What You Get */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
              ✅ What You Get
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <benefit.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Apply Now */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              The Testnet is not live yet — so why apply now?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Validator licenses are currently free of charge. If you apply now, your license is guaranteed at no cost — permanently.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Once the Mainnet launches, the DAO may introduce validator auctions and license fees for new applications.
            </p>
            <p className="text-lg font-semibold text-foreground">
              That means now is an excellent time to apply.
            </p>
          </div>
        </div>

        {/* Ready Section */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Ready?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Complete the form and secure your license.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Your node will be part of the most private, scalable, and quantum-secure blockchain ever built. The protocol is ready. The DAO is ready.
            </p>
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Are you?
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-8">
              SEP Node Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name or Alias
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                  placeholder="Enter your name or alias"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="serverSpecs" className="block text-sm font-medium text-foreground mb-2">
                  Server or VPS Specs
                </label>
                <textarea
                  id="serverSpecs"
                  name="serverSpecs"
                  value={formData.serverSpecs}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-y"
                  placeholder="e.g. 4 CPU cores, 8GB RAM, 100GB SSD"
                />
              </div>

              <div>
                <label htmlFor="connectionSpeed" className="block text-sm font-medium text-foreground mb-2">
                  Connection Speed
                </label>
                <input
                  type="text"
                  id="connectionSpeed"
                  name="connectionSpeed"
                  value={formData.connectionSpeed}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                  placeholder="e.g. 100 Mbps or 1 Gbps"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                  Geographic Location (City / Country)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                  placeholder="e.g. Berlin, Germany"
                />
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-400">
                  Application submitted successfully! We'll be in touch soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-400">
                  There was an error submitting your application. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

