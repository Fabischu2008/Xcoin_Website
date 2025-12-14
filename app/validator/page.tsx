import { Server, Zap, Coins, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ValidatorPage() {
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
              <Server className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Become a Validator
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Run a validator node to secure the network, earn transaction fees, and support decentralization. No mining hardware required.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Zap className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Easy Setup</h3>
            <p className="mt-4 text-muted-foreground">
              The XXX DAO provides an official Validator Package that handles installation and connection automatically. Setup takes minutes, not days.
            </p>
            <ul className="mt-6 space-y-3">
              {["One-click installation", "Automatic updates", "Standard hardware", "Minimal maintenance"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Coins className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Earn Rewards</h3>
            <p className="mt-4 text-muted-foreground">
              Validators earn a portion of transaction fees for their service. No staking required, no lock-up periods—just run a node and earn for securing the network.
            </p>
            <ul className="mt-6 space-y-3">
              {["Transaction fee rewards", "No staking required", "No lock-up periods", "Fair distribution"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Hardware Requirements</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">CPU</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                4+ cores recommended for optimal performance
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">RAM</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                8GB minimum, 16GB recommended
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Storage</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                100GB+ SSD for network data and logs
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Ready to Start Validating?</h2>
          <p className="mt-4 text-muted-foreground">
            Join the network of validators securing the Xcoin ecosystem. Read our validator guide to get started.
          </p>
          <Link
            href="/docs"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Read Validator Guide
          </Link>
        </div>
      </div>
    </div>
  )
}

