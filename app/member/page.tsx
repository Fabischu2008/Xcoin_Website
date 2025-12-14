import { User, Users, MessageCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function MemberPage() {
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <User className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Become a Member
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Join our community to stay updated, participate in discussions, and support the Xcoin ecosystem. Everyone is welcome.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Join the Community</h3>
            <p className="mt-4 text-muted-foreground">
              Connect with thousands of members from around the world. Participate in discussions, share ideas, and learn from other community members about privacy, security, and decentralized finance.
            </p>
            <ul className="mt-6 space-y-3">
              {["Global community", "Active discussions", "Knowledge sharing", "Support network"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <MessageCircle className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Stay Informed</h3>
            <p className="mt-4 text-muted-foreground">
              Get early access to announcements, updates, and launch information. Members receive priority notifications about protocol developments, governance proposals, and ecosystem news.
            </p>
            <ul className="mt-6 space-y-3">
              {["Early access to news", "Announcements first", "Project updates", "Community events"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Ready to Join?</h2>
          <p className="mt-4 text-muted-foreground">
            Connect with the Xcoin community across multiple platforms and start engaging today.
          </p>
          <Link
            href="/community"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Join Community Channels
          </Link>
        </div>
      </div>
    </div>
  )
}

