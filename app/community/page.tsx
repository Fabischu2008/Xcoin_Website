import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Twitter, Send, Github, Users } from "lucide-react"

const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Join discussions, get support, and connect with other community members.",
    href: "#",
    members: "15,000+",
  },
  {
    icon: Twitter,
    name: "X (Twitter)",
    description: "Follow for announcements, updates, and community highlights.",
    href: "#",
    members: "25,000+",
  },
  {
    icon: Send,
    name: "Telegram",
    description: "Real-time chat with the global Xcoin community.",
    href: "#",
    members: "20,000+",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Contribute to open-source development and review the code.",
    href: "#",
    members: "500+",
  },
]

const stats = [
  { label: "Community Members", value: "60,000+" },
  { label: "Countries", value: "120+" },
  { label: "Contributors", value: "500+" },
  { label: "Validators", value: "Coming Soon" },
]

export default function CommunityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20">
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
            <source src="/1211-compressed.mp4" type="video/mp4" />
          </video>
          {/* Overlay für bessere Textlesbarkeit */}
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <Image 
                src="/img/xcoin.svg" 
                alt="Xcoin Logo" 
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Join the <span className="text-accent">Community</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground lg:text-xl px-4">
              Connect with builders, validators, and supporters from around the world who are shaping the future of
              private finance.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-24 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 sm:p-6 text-center">
              <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Channels */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">Connect With Us</h2>
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {channels.map((channel) => (
              <Link
                key={channel.name}
                href={channel.href}
                className="group flex items-start gap-4 sm:gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 transition-all hover:border-accent/50"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <channel.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold">{channel.name}</h3>
                    <span className="text-xs sm:text-sm text-muted-foreground">{channel.members}</span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">{channel.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Validator CTA */}
        <div className="mt-16 sm:mt-20 lg:mt-24 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Users className="h-4 w-4" />
                Become a Validator
              </div>
              <h2 className="mt-6 font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold">
                Help Secure the Network
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Run a validator node to earn transaction fees while contributing to the decentralization and security of
                the Xcoin network.
              </p>
              <ul className="mt-6 space-y-2 sm:space-y-3">
                {[
                  "Earn transaction fee rewards",
                  "No mining hardware required",
                  "Support network decentralization",
                  "Join a global community",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/docs"
                className="mt-6 sm:mt-8 inline-flex rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
              >
                Read Validator Guide
              </Link>
            </div>
            <div className="relative bg-accent/5 overflow-hidden min-h-[400px]">
              <Image 
                src="/Validator.webp" 
                alt="Xcoin Validator" 
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
