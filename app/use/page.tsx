"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const useCards = [
  {
    badge: 'WHY IT MATTERS',
    title: 'What Xcoin Is Really For',
    text: `Let's be honest. Xcoin doesn't exist yet. It is still in development, being tested, strengthened, and prepared. So no, there are no live use cases. Not yet. But that is not entirely true. Because what Xcoin is being built for is already happening. Right now. All over the world. People are being censored, blocked, and punished. Not just for what they have done, but also for how they think, who they support, or what they believe.<br/><br/>Or worse, because someone in power decided to flip the switch without warning or explanation. People just try to move money. Communicate. Escape. Survive. And they hit walls. Surveillance. Blacklists. Frozen accounts. This can only happen because you gave others the power to decide what you're allowed to do. The tools you need to protect yourself do not exist until someone builds them. <br/><br/>To understand that, you do not need a roadmap or a whitepaper. You just need to realize what is going on.`,
    button: 'Check this for example',
    image: '/img/use/fear.jpg',
    hasButton: true,
  },
  {
    badge: 'VISIBLE ≠ SAFE',
    title: 'The Illusion of Control',
    text: `Modern finance gives you dashboards, apps, 2FA, the illusion of control. But behind the interface, you own nothing. You rent access. A switch flips. An account freezes. A transaction is denied. Not because of what you did, but because someone decided so.<br/><br/>Xcoin isn't here to upgrade the interface. It's here to end the illusion, and give you real, irreversible control.`,
    image: '/img/use/illusion_of_control.jpg',
    hasButton: false,
  },
  {
    badge: 'NO FICTION, NO FUTURE',
    title: 'Real People. Real Reasons.',
    list: [
      "A father sending money home across borders, without problems or frozen accounts.",
      "A journalist funding whistleblower hosting infrastructure, without exposing the server or themselves.",
      "A woman escaping an abusive marriage, without the bank knowing she's planning to leave.",
      "A business shielding payroll data from competitors, or hostile regimes.",
      "A donor supporting controversial science, without reputation risk.",
      "A dissident getting help from abroad, without being accused of treason."
    ],
    text: `These aren't edge cases. They're edge lives. And they're happening now. Not on testnets. Not in whitepapers. In courtrooms, protests, private chats. Xcoin isn't solving hypothetical problems. It's for those who need privacy not as a feature, but as a condition for survival.`,
    image: '/img/use/real_people.jpg',
    hasButton: false,
  },
  {
    badge: 'PRIVACY BY DEFAULT',
    title: 'Dignity Needs Design',
    text: `Privacy isn't just about hiding — it's about being seen on your own terms. About choosing who sees what, when, and why. It's how people protect their voice, their values, their choices. In a world that demands exposure to participate, dignity becomes a privilege. Xcoin makes it a right. Not optional. Not premium. Not advanced settings. But built in. From the first line of code.`,
    image: '/img/use/dignity.jpg',
    hasButton: false,
  },
]

export default function UsePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section mit Video - nur oberer Bereich, volle Breite */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20">
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
            <source src="/vid/hero9.mp4" type="video/mp4" />
          </video>
          {/* Overlay für bessere Textlesbarkeit - radialer Gradient, heller in der Mitte */}
          <div className="absolute inset-0 bg-black/50" />
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)'
            }}
          />
          <div className="hero-gradient" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
              Use Xcoin
            </h1>
            <p className="p-reg text-lg lg:text-xl text-white/90 leading-relaxed">
              Xcoin is more than just a cryptocurrency. It's a fully private, quantum-secure financial protocol designed for a post-surveillance world.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative py-20" id="use">
        <div className="container px-4 mx-auto">
          <div className="space-y-32">
            {useCards.map((card, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className={`flex flex-wrap items-center -mx-4 ${index < useCards.length - 1 ? 'mb-12 lg:mb-20' : 'mb-20'}`}
                >
                  {isEven ? (
                    <>
                      {/* Text links, Bild rechts */}
                      <div className="w-full lg:w-2/5 px-4">
                        <div className="text-left lg:max-w-2xl">
                          <div className="relative inline-block">
                            <span className="p-reg block text-xs px-2 py-1 border border-white/20 bg-blue-300 rounded uppercase text-black font-semibold">
                              {card.badge}
                            </span>
                          </div>
                          <h2 className="font-[family-name:var(--font-heading)] mt-3 mb-3 text-5xl lg:leading-tight font-medium">
                            {card.title}
                          </h2>
                          {card.list && (
                            <ul className="mb-4 space-y-2 text-neutral-300">
                              {card.list.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-300 mr-2 mt-1">•</span>
                                  <span className="p-small opacity-70 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <p
                            className="p-small opacity-70 text-neutral-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: card.text }}
                          />
                          {card.hasButton && (
                            <div className="mt-6">
                              <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black"
                              >
                                <div className="absolute inset-0 bg-blue-300 rounded-lg -z-10" />
                                <span className="p-reg text-black relative z-10">{card.button}</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="order-first lg:order-last w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                        <div className="h-[500px] lg:h-full relative">
                          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 rounded-2xl filter blur-3xl" />
                          <div className="p-1 border border-white/20 rounded-2xl h-full">
                            <Image
                              src={card.image}
                              alt={card.title}
                              width={800}
                              height={600}
                              className="relative w-full h-full object-cover rounded-xl border border-neutral-800"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Bild links, Text rechts */}
                      <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                        <div className="h-[500px] relative">
                          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 rounded-2xl filter blur-3xl" />
                          <div className="p-1 border border-white/20 rounded-2xl h-full">
                            <Image
                              src={card.image}
                              alt={card.title}
                              width={800}
                              height={500}
                              className="relative w-full h-full object-cover rounded-xl border border-neutral-800"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/5 px-4">
                        <div className="text-left lg:max-w-2xl lg:ml-auto">
                          <div className="relative inline-block">
                            <span className="p-reg block text-xs px-2 py-1 border border-white/20 bg-blue-300 rounded uppercase text-black font-semibold">
                              {card.badge}
                            </span>
                          </div>
                          <h2 className="font-[family-name:var(--font-heading)] mt-3 mb-3 text-5xl lg:leading-tight font-medium">
                            {card.title}
                          </h2>
                          {card.list && (
                            <ul className="mb-4 space-y-2 text-neutral-300">
                              {card.list.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-300 mr-2 mt-1">•</span>
                                  <span className="p-small opacity-70 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <p
                            className="p-small opacity-70 text-neutral-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: card.text }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal for "Check this for example" */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-[#efeeec] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition-all z-10"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="space-y-6 mt-4">
              <h2 className="h-small text-black">Canada, 2022</h2>

              <div className="h-52 relative">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 rounded-2xl filter blur-3xl" />
                <div className="p-1 border border-white/20 rounded-2xl h-full">
                  <Image
                    src="/img/use/freedom_convoy.jpg"
                    alt="Freedom Convoy"
                    width={800}
                    height={400}
                    className="relative w-full h-full object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </div>

              <p className="p-small opacity-70 text-black leading-relaxed">
                They came in trucks. In thousands. Peaceful, loud, determined. The Freedom Convoy gathered in Ottawa to protest against vaccine mandates.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                Within days, the government responded. Not with force. With finance.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                The Emergencies Act was invoked, for the first time in Canadian history.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                Bank accounts were frozen. Crowdfunding platforms like GoFundMe blocked over 10 million dollars in donations. GiveSendGo was hacked. Donor lists were leaked. People who gave as little as 50 dollars received visits from the police.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                No trial. No charges. Just locked out.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                So they turned to crypto.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                <strong>Bitcoin.</strong>
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                Funds were raised through public wallet addresses. Shared across Twitter, Telegram, and Discord.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                Then that too was shut down.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                On February 16, 2022, Canadian authorities issued a blacklist of Bitcoin addresses. Exchanges were ordered to freeze all related funds.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                <strong>Kraken warned:</strong>
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed italic">
                "If you leave your crypto on a centralized exchange, it's not yours."
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                The government didn't need to hack anyone. They didn't have to. The public blockchains did the work for them. They watched. Traced. Flagged. Followed. Every transaction was visible. Every donation was tracked. Crypto wasn't protection. It was exposure.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                This isn't about the Freedom Convoy, and it isn't about vaccine mandates. It's about the fact that something like this can happen <em>at all</em>.
              </p>

              <p className="p-small opacity-70 text-black leading-relaxed">
                People didn't lose their money to fraud. Or theft. They lost it to visibility. To compliance. To a system that showed too much, and couldn't say no.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
