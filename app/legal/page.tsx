import Link from "next/link"

const sections = [
  {
    id: "terms",
    title: "Terms of Service",
    content: `By accessing and using the Xcoin website and services, you agree to be bound by these terms and conditions.

The Xcoin network is currently under development. Any tokens or digital assets mentioned are subject to change. "Xcoin" is a temporary placeholder name; the final name will be announced before mainnet launch.

Users are responsible for complying with all applicable laws and regulations in their jurisdiction regarding cryptocurrency and digital assets.

We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.`,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: `We are committed to protecting your privacy and personal information.

Data Collection: We collect minimal information necessary to provide our services, including email addresses for waitlist signup and analytics data for website improvement.

Data Usage: Your information is used solely for communication about Xcoin developments and improving our services. We never sell or share personal data with third parties.

Data Security: We implement industry-standard security measures to protect your information. However, no method of electronic transmission is 100% secure.

Your Rights: You may request access to, correction of, or deletion of your personal data by contacting us through our community channels.`,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: `This website and its contents are for informational purposes only and do not constitute financial, legal, or investment advice.

Cryptocurrency investments carry significant risks. The value of digital assets can fluctuate dramatically, and you may lose some or all of your investment.

The Xcoin network is under development, and there is no guarantee that the mainnet will launch or function as described. Technical specifications and features are subject to change.

Past performance is not indicative of future results. Always conduct your own research and consult with qualified professionals before making investment decisions.

Nothing on this website should be construed as an offer to sell or a solicitation of an offer to buy any securities or financial instruments.`,
  },
]

export default function LegalPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Legal
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Important legal information about using Xcoin services and website.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-border bg-card px-6 py-2 text-sm font-medium transition-all hover:border-accent/50"
            >
              {section.title}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="mx-auto mt-16 max-w-3xl space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{section.title}</h2>
              <div className="mt-6 space-y-4">
                {section.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Last Updated */}
        <div className="mt-24 text-center text-sm text-muted-foreground">Last updated: December 2024</div>
      </div>
    </div>
  )
}
