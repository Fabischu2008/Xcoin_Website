import { Shield, Zap, Lock, CheckCircle2 } from "lucide-react"

export default function QuantumSafePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Shield className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Quantum-Safe by Design
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Protected against current and future decryption technologies with NIST-approved post-quantum cryptographic algorithms.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Shield className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Post-Quantum Cryptography</h3>
            <p className="mt-4 text-muted-foreground">
              Xcoin uses SPHINCS+ and WOTS+ signature schemes—algorithms approved by the National Institute of Standards and Technology (NIST) for post-quantum security. These protect against attacks from future quantum computers.
            </p>
            <ul className="mt-6 space-y-3">
              {["NIST-approved algorithms", "SPHINCS+ signatures", "WOTS+ hash-based signatures", "Future-proof security"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Lock className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Quantum Resistance</h3>
            <p className="mt-4 text-muted-foreground">
              Traditional blockchain cryptography relies on elliptic-curve cryptography, which will be broken by quantum computers. Xcoin's post-quantum algorithms ensure your assets remain secure even as computing power advances.
            </p>
            <ul className="mt-6 space-y-3">
              {["Resistant to quantum attacks", "No quantum vulnerabilities", "Long-term security guarantee", "Prepared for future threats"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Why Quantum Safety Matters</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Future-Proof</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Your investments today will remain secure even when quantum computers become available.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">NIST Standards</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Built on cryptographic standards approved by leading security organizations worldwide.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">No Migration Needed</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Unlike other cryptocurrencies, Xcoin won't require future protocol upgrades to remain secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

