import { CheckCircle, Circle, Clock } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    items: ["Core protocol development", "zk-STARK integration", "DAG architecture design", "Whitepaper publication"],
  },
  {
    phase: "Phase 2",
    title: "Infrastructure",
    status: "current",
    items: [
      "Validator node development",
      "SEP network implementation",
      "XXX Token launch on Solana",
      "Community building",
    ],
  },
  {
    phase: "Phase 3",
    title: "Testnet",
    status: "upcoming",
    items: ["Public testnet launch", "Wallet integrations", "Security audits", "Bug bounty program"],
  },
  {
    phase: "Phase 4",
    title: "Mainnet",
    status: "upcoming",
    items: ["XXX DAG mainnet launch", "XXX DAO activation", "Token migration", "Global rollout"],
  },
]

export default function RoadmapTimeline() {
  return (
    <div className="space-y-8">
      {phases.map((phase, index) => (
        <div key={phase.phase} className="relative">
          {/* Connector Line */}
          {index < phases.length - 1 && <div className="absolute left-6 top-14 h-full w-px bg-border" />}

          <div className="flex gap-6">
            {/* Status Icon */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card">
              {phase.status === "completed" ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : phase.status === "current" ? (
                <Clock className="h-6 w-6 text-accent" />
              ) : (
                <Circle className="h-6 w-6 text-muted-foreground" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-accent">{phase.phase}</span>
                {phase.status === "current" && (
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold">{phase.title}</h3>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
