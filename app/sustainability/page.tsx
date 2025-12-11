import { Leaf, Zap, Droplets, CheckCircle2 } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Leaf className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Sustainable
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            No energy-wasting mining, no staking farms, no inflation, and near-zero environmental impact. Designed for a sustainable financial future.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Zap className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Energy Efficient</h3>
            <p className="mt-4 text-muted-foreground">
              Xcoin uses validator nodes instead of energy-intensive mining. Validators verify transactions using standard server hardware, consuming minimal energy compared to proof-of-work systems.
            </p>
            <ul className="mt-6 space-y-3">
              {["No mining required", "Low energy consumption", "Standard server hardware", "No specialized equipment"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Droplets className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">No Inflation</h3>
            <p className="mt-4 text-muted-foreground">
              With a fixed supply of 21 million coins and no mining rewards or staking inflation, Xcoin maintains purchasing power over time without creating new coins that devalue existing holdings.
            </p>
            <ul className="mt-6 space-y-3">
              {["Fixed 21M supply", "No inflation mechanism", "No staking rewards", "Value preservation"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Impact */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Environmental Impact</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">99%</div>
              <div className="mt-2 text-sm font-semibold">Less Energy</div>
              <p className="mt-1 text-sm text-muted-foreground">Compared to proof-of-work blockchains</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">0</div>
              <div className="mt-2 text-sm font-semibold">Mining Equipment</div>
              <p className="mt-1 text-sm text-muted-foreground">No specialized hardware needed</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">21M</div>
              <div className="mt-2 text-sm font-semibold">Fixed Supply</div>
              <p className="mt-1 text-sm text-muted-foreground">No inflation, sustainable economics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

