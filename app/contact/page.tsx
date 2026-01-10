"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // API Route wird später implementiert für Datenbank-Speicherung
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/1212-compressed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <section className="relative py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg p-8 md:p-16 relative max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-heading)] text-lg md:text-2xl font-semibold text-white">
                Contact XXX DAO
              </h2>
              <p className="p-reg opacity-60 max-w-3xl text-muted-foreground leading-relaxed">
                Have questions, suggestions, or want to get involved with the future of Xcoin?<br/>
                Send us a message using the form below or email us at:{" "}
                <a href="mailto:info@xcoin.ws" className="text-[#93c5fd] hover:text-[#60a5fa] transition-colors duration-300">
                  info@xcoin.ws
                </a>
                .<br/>
                We will get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Form */}
            <form className="mx-auto space-y-6 pt-16" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    maxLength={256}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 placeholder-neutral-400 text-white focus:outline-none focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    maxLength={256}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 placeholder-neutral-400 text-white focus:outline-none focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your questions, suggestions, or how you'd like to get involved..."
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 placeholder-neutral-400 text-white focus:outline-none focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Privacy Note */}
              <div className="pt-4">
                <p className="p-reg opacity-70 leading-relaxed text-sm text-muted-foreground">
                  <span className="font-bold">Note:</span> Your message will only be used for the sole purpose of responding. Your information will be deleted afterwards and will not be shared with anyone. Your privacy is our priority.
                </p>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400">
                  There was an error sending your message. Please try again or email us directly at{" "}
                  <a href="mailto:info@xcoin.ws" className="underline hover:text-red-300">
                    info@xcoin.ws
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-[#93c5fd] rounded-lg transition-transform duration-300 group-hover:scale-105 group-disabled:scale-100" />
                  <span className="p-reg text-black relative z-10 font-semibold">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glare-card bg-blue-400/10 border border-blue-500 rounded-2xl p-8 space-y-4 text-center max-w-4xl mx-auto">
            <h3 className="h-small text-blue-300">Ready to Join the Front Line of Financial Freedom?</h3>
            <p className="p-large">Get your XXX Tokens now and become part of the Xcoin community.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black"
              >
                <div className="absolute inset-0 bg-blue-300 rounded-lg -z-10 transition-transform duration-300 group-hover:scale-105" />
                <span className="p-reg text-black relative z-10 font-semibold">Become a member</span>
              </Link>
              <Link
                href="/validator-application"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black"
              >
                <div className="absolute inset-0 bg-blue-300 rounded-lg -z-10 transition-transform duration-300 group-hover:scale-105" />
                <span className="p-reg text-black relative z-10 font-semibold">Apply to Run a SEP Node</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
