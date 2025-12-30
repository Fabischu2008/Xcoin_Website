import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { UserX, Shield, Eye, ArrowLeft } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "The Man in the Background",
  description:
    "There's a name you won't find on this site. No photos. No interviews. No social media. Just whispers. Traces. A signal behind the signal.",
  openGraph: {
    title: "The Man in the Background",
    description: "He is member #1. We call him Mr. X.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Man in the Background",
    description: "The man behind Xcoin remains in the shadows. Not out of fear. But out of strategy.",
  },
}

export default function TheManInTheBackgroundPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Image with Content Overlay */}
        <div className="mx-auto max-w-6xl mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/xcoin_grid/box3.jpeg"
              alt="The Man in the Background"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}


            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  The Man in the Background
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-muted-foreground">
            <p>
              There's a name you won't find on this site. No photos. No interviews. No social media. Just whispers. Traces. A signal behind the signal.
            </p>
            <p className="font-semibold text-foreground">
              He is member #1. We call him Mr. X.
            </p>
            <p>
              He doesn't want attention — and that's not a branding strategy. It's self-preservation.
            </p>
            <p>
              For over 25 years, Mr. X has worked at the edge of what's possible in secure communication. Not for fame. Not for funding. But for one belief: that privacy is not a feature — it's a fundamental right.
            </p>
            <p>
              He's created tools used by businessmen, activists, journalists, and people under regimes where truth itself is illegal. Tools that leave no metadata. Tools that can't be traced. Tools that make surveillance impossible — and that makes them a threat to certain people who built their power on controlling others.
            </p>
            <p className="font-semibold text-foreground">
              Powerful people.
            </p>
            <p>
              Not everyone appreciates this kind of work. More than once, Mr. X has paid the price for what he built. He's been watched. Silenced. And at one point, even locked away — his freedom traded for refusing to compromise the freedoms of others.
            </p>
            <p>
              But he didn't give up.
            </p>
            <p>
              During those quiet years, something new was forming in the shadows. A blueprint not just for a secure communication tool — but for an entire financial system that couldn't be tracked, traced, or turned off.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-accent/30 bg-accent/5">
            <p className="text-lg font-semibold text-foreground mb-2">
              That idea became Xcoin.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">But here's the twist — "Xcoin" isn't even the real name.</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              It's a placeholder. A shield. A necessary layer of misdirection. The true name of the network remains secret. Not because it isn't ready — but because revealing it too soon would make it a target.
            </p>
            <p className="text-muted-foreground">
              A name can be trademarked, attacked, copied, hijacked. So until the last moment, the real name stays off the radar — quietly waiting.
            </p>
            <Link
              href="/why-is-the-name-xcoin"
              className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Curious why? Here's why.
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Xcoin is just the visible part of something far greater. A broader vision. A network of protocols, systems, and technologies — all designed to return control to the individual. To make privacy the default, not the exception. To make freedom digital, unstoppable, and permanent.
            </p>
            <p className="font-semibold text-foreground">
              That vision is unfolding now.
            </p>
            <p>
              And yet… the man behind it all remains in the background. Not out of fear. But out of strategy. Because those who tried to stop him before are still out there. They fear him — and they're really not going to like what's coming next.
            </p>
            <p>
              Once Xcoin is live, it will be too late to shut it down. Too decentralized. Too encrypted. Too resilient. Like a message that can't be unsent.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                So for now, Mr. X stays in the shadows.
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              But don't mistake silence for inaction. Behind the scenes, he's working relentlessly. Days, nights, weeks — disappearing into code, infrastructure, encryption, coordination. Doing everything it takes to get this thing online.
            </p>
            <p className="text-muted-foreground">
              Not for attention. Not for legacy. But because he knows one thing: <strong className="text-foreground">Once it's live, they can't stop it.</strong>
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-accent/30 bg-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                At some point, his name will be revealed.
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              And when it is, many will gasp — because they already know him. They've seen him in documentaries. Read about him in court cases. He's been called a criminal. A genius. A threat. A pioneer.
            </p>
            <p className="text-muted-foreground">
              But when he steps into the spotlight, the world will realize: <strong className="text-foreground">he was always here. Watching. Building. Preparing.</strong>
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              And only then — once Xcoin is live, locked in, and out of anyone's reach — only then will he step into the spotlight. Only then will he give interviews. Do AMAs. Tell the story.
            </p>
            <p>
              But by then, it won't matter anymore. Because even if they silence him… Even if they call him the godfather of crime… Even if they try — again — to lock him away, or worse…
            </p>
            <p className="font-semibold text-foreground text-lg">
              Xcoin will already be out. Already running. Already free. Too distributed to kill. Too encrypted to find. Too late to stop.
            </p>
            <p className="text-lg">
              It's not just a protocol. It's his final message to the world. And this time, they can't delete it.
            </p>
          </div>

          {/* Placeholder for Image */}
          <div className="mt-12">
            <div className="rounded-2xl border border-border bg-muted/20 aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">Image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


