"use client"

import Image from "next/image"

const devBlocks = [
  {
    title: 'Blockchain/DAG Development',
    text: 'At the core of Xcoin lies the XXX Network — a quantum-safe, DAG-based protocol designed for scalability, parallel transaction validation, and native privacy. The base layer is being built from the ground up with post-quantum cryptography and zero-knowledge privacy structures.',
    img: '/img/develop/dag.jpg',
  },
  {
    title: 'Anonymous P2P Network Layer',
    text: "We're developing a custom peer-to-peer communication layer built on the SEP network — ensuring that transactions are not just private, but also unlinkable at the network level and invisible to external observers.",
    img: '/img/develop/p2p.jpg',
  },
  {
    title: 'On-chain DAO Governance System',
    text: 'A lightweight governance layer is being implemented that will allow all token holders to vote on upgrades, funding proposals, and protocol parameters — fully on-chain, without revealing voter identity.',
    img: '/img/develop/dao_governance.jpg',
  },
  {
    title: 'Development of the SEP Node Software Packages',
    text: 'The SEP Node packages will run the XXX DAG and serve as the backbone for network validators — enabling consensus, transaction verification, and data propagation. Each node includes integrated privacy tooling, View Keys management, and resource-light syncing — optimized to run on Linux servers.',
    img: '/img/develop/sep.jpg',
  },
  {
    title: 'Building the XXX Token to Xcoin Exchanger',
    text: "To ensure a smooth migration path, we're developing a secure token bridge and automated exchange layer that allows holders of the existing XXX Token to convert to native Xcoin at a fixed Genesis rate.",
    img: '/img/develop/xcoin_exchange.jpg',
  },
  {
    title: 'Pre-mining 21 Million Xcoins at Genesis',
    text: 'All Xcoins will be generated at launch — no inflation, no mining, no staking. The Genesis block will contain the full 21M supply, transparently allocated across vesting contracts, DAO reserves, and public claim pools.',
    img: '/img/develop/xcoins_at_genesis.jpg',
  },
  {
    title: 'Lotus Wallet Integration',
    text: 'Lotus Wallet is a multi-chain privacy wallet with built-in stealth address support, encrypted messaging, and local key management. No centralized login. No cloud storage.',
    img: '/img/develop/lotus_wallet.jpg',
  },
  {
    title: 'Integration with MultiSwap',
    text: 'We are collaborating with MultiSwap to enable instant, permissionless conversion between Xcoin and other major privacy coins — without KYC, and without exposing transaction paths.',
    img: '/img/develop/multiswap.jpg',
  },
  {
    title: 'Integration with BlackCard',
    text: 'To bridge privacy crypto with everyday payments, we are working with BlackCard to enable Xcoin-funded debit cards — without linking real-world identity to on-chain activity.',
    img: '/img/develop/blackcard.jpg',
  },
  {
    title: 'Crowdfunding the Vision',
    text: "These components are being built in parallel — by a distributed team of engineers, cryptographers, and protocol designers. But continued progress depends on funding. That's why we're raising support through crowdfunding: to keep building, block by block, until Xcoin becomes real.",
    img: '/img/develop/crowdfunding_the_vision.jpg',
  },
]

export default function DevelopPage() {
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
            <source src="/vid/black-lines.mp4" type="video/mp4" />
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
              Development
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              The development of Xcoin and its supporting infrastructure is underway. Much of it is pioneering work — we are building an entirely new, privacy-first, censorship-resistant, quantum-proof financial ecosystem — the future standard for anonymous value transfer. Below is an overview of the key components currently in development.
            </p>
          </div>
        </div>
      </section>

      {/* Development Blocks Section */}
      <section className="section py-20">
        <div className="container mx-auto px-4 space-y-20">
          {devBlocks.map((block, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 md:items-center"
              >
                {isEven ? (
                  <>
                    {/* Text links, Bild rechts */}
                    <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg p-8 flex flex-col space-y-4 h-full">
                      <h3 className="h-small">{block.title}</h3>
                      <p className="p-large opacity-60">{block.text}</p>
                    </div>
                    <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg overflow-hidden p-0 max-h-96 h-full">
                      <Image
                        src={block.img}
                        alt={block.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Bild links, Text rechts */}
                    <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg overflow-hidden p-0 max-h-96 h-full">
                      <Image
                        src={block.img}
                        alt={block.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg p-8 flex flex-col space-y-4 h-full">
                      <h3 className="h-small">{block.title}</h3>
                      <p className="p-large opacity-60">{block.text}</p>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
