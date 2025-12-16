import RoadmapTimeline from "@/components/roadmap-timeline"
import BackButton from "@/components/back-button"

export default function RoadmapPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Roadmap
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Our journey to building the future of private finance. Track our progress from foundation to mainnet launch
            and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-20 max-w-3xl">
          <RoadmapTimeline />
        </div>

        {/* Milestones */}
        <div className="mt-24 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold">Key Milestones</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">Q1</div>
              <div className="mt-2 font-semibold">Testnet Launch</div>
              <p className="mt-1 text-sm text-muted-foreground">Public testing begins</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">Q2</div>
              <div className="mt-2 font-semibold">Security Audits</div>
              <p className="mt-1 text-sm text-muted-foreground">Third-party verification</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">Q3</div>
              <div className="mt-2 font-semibold">Mainnet Launch</div>
              <p className="mt-1 text-sm text-muted-foreground">XXX DAG goes live</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">Q4</div>
              <div className="mt-2 font-semibold">DAO Activation</div>
              <p className="mt-1 text-sm text-muted-foreground">Community governance</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
