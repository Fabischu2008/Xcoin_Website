"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

const faqs = [
  {
    question: "What is Xcoin?",
    answer:
      "Xcoin is a truly private, quantum-secure, and community-governed cryptocurrency. It uses advanced cryptographic techniques including zk-STARKs and post-quantum signatures to ensure complete transaction privacy while maintaining scalability through its DAG-based architecture.",
  },
  {
    question: "Why is it called 'Xcoin' if that's not the real name?",
    answer:
      "Xcoin is a temporary placeholder name. The real name will be revealed shortly before the launch of the XXX DAG to prevent impersonation, counterfeit token launches, and domain squatting. This timing protects the ongoing trademark registration process.",
  },
  {
    question: "How does the DAG differ from traditional blockchain?",
    answer:
      "Unlike traditional blockchains with sequential blocks, a Directed Acyclic Graph (DAG) allows transactions to confirm each other directly. Each transaction references two previous transactions, enabling parallel validation, instant confirmations, and massive scalability without mining.",
  },
  {
    question: "What makes Xcoin quantum-secure?",
    answer:
      "Xcoin uses SPHINCS+ and WOTS+ signature schemes—post-quantum algorithms approved by the National Institute of Standards and Technology (NIST). These protect against attacks from future quantum computers that could break current elliptic-curve cryptography.",
    answerWithLinks: true,
  },
  {
    question: "How can I become a validator?",
    answer:
      "Anyone meeting the hardware requirements can become a validator. The XXX DAO provides an official Validator Package that handles installation and connection automatically. Validators earn transaction fees for their service without needing expensive mining equipment.",
  },
  {
    question: "What is the XXX Token?",
    answer:
      "The XXX Token serves two purposes: (1) Each token entitles the holder to receive one Xcoin from the Genesis supply at mainnet launch, and (2) it grants full voting power within the XXX DAO for governance decisions.",
  },
  {
    question: "Is there a pre-mine or private sale?",
    answer:
      "No. Xcoin follows a fair launch model with all 21 million coins created in the Genesis Block. There is no pre-mine advantage, and all coins are distributed publicly to ensure fairness and transparency.",
  },
  {
    question: "How does the XXX DAO work?",
    answer:
      "The XXX DAO is the governance layer where token holders can propose and vote on protocol changes, funding allocations, and ecosystem decisions. It operates independently from the DAG network to maintain clear separation between financial privacy and governance transparency.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know about Xcoin, the technology, and how to participate.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-16 max-w-3xl space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1" role="listitem">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpenIndex(openIndex === index ? null : index)
                  }
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  className={clsx(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-6 pb-6"
                >
                  {faq.answerWithLinks ? (
                    <p className="text-muted-foreground">
                      Xcoin uses{" "}
                      <Link href="/what-is-sphincs-plus" className="text-accent hover:text-accent/80 underline">
                        SPHINCS+
                      </Link>{" "}
                      and{" "}
                      <Link href="/what-is-wots-plus" className="text-accent hover:text-accent/80 underline">
                        WOTS+
                      </Link>{" "}
                      signature schemes—post-quantum algorithms approved by the National Institute of Standards and Technology (NIST). These protect against attacks from future quantum computers that could break current elliptic-curve cryptography.
                    </p>
                  ) : (
                    <p className="text-muted-foreground">{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Still have questions?</h2>
          <p className="mt-4 text-muted-foreground">
            Join our community channels to get answers from the team and other community members.
          </p>
          <a
            href="/community"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Join Community
          </a>
        </div>
      </div>
    </div>
  )
}
