import type { Metadata } from "next"
import Link from "next/link"
import BackButton from "@/components/back-button"
import { Bell, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Stay Updated",
  description: "Join our community channels and be the first to hear what's next.",
}

export default function StayUpdatedPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Bell className="h-8 w-8 text-accent" />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Stay Updated
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Join our community channels and be the first to hear what's next.
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                The Xcoin project is constantly evolving. From protocol upgrades to community initiatives, there's always something new happening. Stay connected to be the first to know about:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Protocol updates and improvements</li>
                <li>Governance proposals and voting</li>
                <li>Community events and meetups</li>
                <li>Partnership announcements</li>
                <li>Technical developments</li>
                <li>Early access opportunities</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Community Channels
              </h2>

              <p>
                Join our community channels to stay informed:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Discord</strong> — Real-time discussions and support</li>
                <li><strong className="text-foreground">Telegram</strong> — Community announcements and updates</li>
                <li><strong className="text-foreground">Twitter/X</strong> — Latest news and developments</li>
                <li><strong className="text-foreground">GitHub</strong> — Technical documentation and code</li>
                <li><strong className="text-foreground">Newsletter</strong> — Monthly updates delivered to your inbox</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Governance Notifications
              </h2>

              <p>
                As a token holder, you'll receive notifications about:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>New proposals submitted to the DAO</li>
                <li>Voting periods and deadlines</li>
                <li>Proposal outcomes and execution</li>
                <li>Treasury allocations and decisions</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Technical Updates
              </h2>

              <p>
                Stay informed about technical developments:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Protocol upgrades and improvements</li>
                <li>Security audits and bug fixes</li>
                <li>New features and capabilities</li>
                <li>Validator requirements and changes</li>
                <li>Network performance metrics</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Get Involved
              </h2>

              <p>
                Staying updated is just the beginning. You can also:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Participate in governance discussions</li>
                <li>Submit proposals to the DAO</li>
                <li>Contribute to development</li>
                <li>Help grow the community</li>
                <li>Share feedback and ideas</li>
              </ul>

              <p>
                The Xcoin community is built by its members. By staying updated and getting involved, you help shape the future of private finance.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/participate-in-governance"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Participate in Governance
                </Link>
                <Link
                  href="/validator-application"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Become a Validator
                </Link>
                <Link
                  href="/fund"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Join Early Access
                </Link>
              </div>
            </div>

            {/* CTA to Community */}
            <div className="mt-16 mx-auto max-w-4xl text-center">
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
                  Join the Community
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with other Xcoin supporters, share ideas, and be part of the future of private finance.
                </p>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
                >
                  Visit Community
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

