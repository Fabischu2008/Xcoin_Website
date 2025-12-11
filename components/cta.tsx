import { CheckCircle2, ArrowRight } from "lucide-react"
import WaitlistForm from "./waitlist-form"

export default function CTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Linke Karte - Token Details */}
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-12">
            <div className="mb-6">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
                €100 / XXX Token
              </h2>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                FIXED MINIMUM PRICE AT LAUNCH, GUARANTEED
              </p>
            </div>

            <p className="mb-8 text-muted-foreground">
              The protocol is offering a one-time release of XXX Tokens. 1 XXX Token = 10 Xcoins. In addition every XXX Token grants you exclusive access to the DAO, including governance rights, voting power, proposal access, and participation in key community decisions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">Costs €100 per XXX Token</div>
                  <div className="mt-1 text-sm text-muted-foreground">One-time investment for 10 Xcoins</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">Redeemable for 10 Xcoins at launch</div>
                  <div className="mt-1 text-sm text-muted-foreground">Fixed exchange rate guaranteed</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">Guaranteed entry price of €10 per Xcoin</div>
                  <div className="mt-1 text-sm text-muted-foreground">No price volatility risk before launch</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">Delivered instantly to your wallet</div>
                  <div className="mt-1 text-sm text-muted-foreground">Automatic and secure token transfer</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-background/50 p-4 text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                AVAILABLE FROM XXXXXXXXX, 2025
              </div>
              <div className="mt-2 text-xs text-muted-foreground">Get tokens now</div>
            </div>
          </div>

          {/* Rechte Karte - Kaufprozess */}
          <div className="rounded-3xl border border-border bg-accent/5 p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight lg:text-4xl">
                Start Now. It's This Simple:
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  1
                </div>
                <div>
                  <div className="font-semibold">Choose your investment amount</div>
                  <div className="mt-1 text-sm text-muted-foreground">(starting at €100 for 10 Xcoins)</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  2
                </div>
                <div>
                  <div className="font-semibold">Send crypto to the indicated wallet address</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  3
                </div>
                <div>
                  <div className="font-semibold">Receive XXX Tokens to your wallet</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  4
                </div>
                <div>
                  <div className="font-semibold">Done. You're in.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">
                No KYC. No account. No name needed. Just you, your wallet, and your stake in the future of private finance.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">Ready to Act?</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                This sale only exists for one reason: to give you a fair shot at something most people will only hear about when it's too late. First-come, first-served. When it's gone — it's gone. When Xcoin hits exchanges, you'll either be watching... or already holding. The choice is yours.
              </p>
              <a
                href="#waitlist"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
              >
                BuyXcoin
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Waitlist Section */}
        <div className="mt-16 mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center lg:p-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight lg:text-4xl">
            Be Part of the Future
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our waitlist to get early access to the Xcoin network and stay updated on launch announcements.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            By joining, you agree to receive updates about Xcoin. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
