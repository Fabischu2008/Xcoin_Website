import { Code2, GitBranch, FileText, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContributorPage() {
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
              <Code2 className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Become a Contributor
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Help build the future of private finance by contributing code, documentation, or other valuable resources to the project.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <GitBranch className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Code Contributions</h3>
            <p className="mt-4 text-muted-foreground">
              Contribute to the core protocol, developer tools, or ecosystem projects. All contributions are reviewed by the community and can earn recognition and rewards.
            </p>
            <ul className="mt-6 space-y-3">
              {["Open source codebase", "Community review process", "Developer tools", "SDKs and libraries"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <FileText className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Documentation & Content</h3>
            <p className="mt-4 text-muted-foreground">
              Help improve documentation, write tutorials, create educational content, or translate materials to make Xcoin accessible to users worldwide.
            </p>
            <ul className="mt-6 space-y-3">
              {["Technical documentation", "Tutorials and guides", "Translation", "Educational content"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to Contribute */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">How to Get Started</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">1</div>
              <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Explore</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse open issues, documentation needs, or areas where you can help.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">2</div>
              <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Contribute</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Submit pull requests, documentation improvements, or other contributions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">3</div>
              <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Collaborate</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Engage with the community, get feedback, and help shape the project's future.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Ready to Contribute?</h2>
          <p className="mt-4 text-muted-foreground">
            Join our developer community and start making an impact today.
          </p>
          <Link
            href="/community"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Join Developer Community
          </Link>
        </div>
      </div>
    </div>
  )
}

