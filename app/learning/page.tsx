"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, Search, Network, Coins, Users, Globe, Lock, Zap, Hash, ArrowRight, X } from "lucide-react"

const glossaryTerms = [
  // Technology Terms
  {
    id: "dag",
    category: "Technology",
    title: "DAG (Directed Acyclic Graph)",
    description: "A data structure where transactions reference and validate two previous transactions, enabling parallel processing instead of sequential blocks.",
    icon: Network,
    related: ["Parallel Validation", "Scalability", "Transaction Layer"],
    learnMoreLink: "/what-is-dag-plus",
  },
  {
    id: "zk-starks",
    category: "Technology",
    title: "zk-STARKs",
    description: "Zero-Knowledge Scalable Transparent Arguments of Knowledge. Cryptographic proofs that verify transaction correctness without revealing sender, receiver, or amounts.",
    icon: Lock,
    related: ["Zero-Knowledge Proofs", "Privacy Layer", "zk-Rollups"],
    learnMoreLink: "/what-is-zk-starks",
  },
  {
    id: "zk-rollups",
    category: "Technology",
    title: "zk-Rollups",
    description: "A scaling solution that bundles thousands of transactions into a single cryptographic proof, reducing on-chain data while maintaining privacy.",
    icon: Lock,
    related: ["zk-STARKs", "Scalability", "Privacy"],
    learnMoreLink: "/what-is-zk-rollups",
  },
  {
    id: "zero-knowledge-proofs",
    category: "Technology",
    title: "Zero-Knowledge Proofs",
    description: "Cryptographic methods that allow one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself.",
    icon: Lock,
    related: ["zk-STARKs", "Privacy", "Cryptography"],
  },
  {
    id: "aes-512",
    category: "Technology",
    title: "AES-512",
    description: "A proprietary 512-bit version of the Advanced Encryption Standard, designed to deliver an extreme level of cryptographic security—far beyond what's used in any systems today.",
    icon: Lock,
    related: ["Post-Quantum Cryptography", "Quantum Resistance", "Encryption"],
    learnMoreLink: "/what-is-aes-512",
  },
  {
    id: "keccak-512",
    category: "Technology",
    title: "Keccak-512",
    description: "The hash function at the heart of Xcoin's cryptographic foundation. It transforms any input into a unique, fixed-length fingerprint that can't be reversed, forged, or faked. Optimized for zero-knowledge proofs and quantum-resistant.",
    icon: Hash,
    related: ["Hash Function", "Zero-Knowledge Proofs", "zk-STARKs", "Poseidon Hash"],
    learnMoreLink: "/what-is-keccak-512",
  },
  {
    id: "poseidon-hash",
    category: "Technology",
    title: "Poseidon Hash",
    description: "A modern hash function designed specifically for use in zero-knowledge proof systems like zk-Rollups and zk-STARKs. Optimized for efficiency inside zk-proofs, reducing proof size, generation time, and computation cost.",
    icon: Hash,
    related: ["Zero-Knowledge Proofs", "zk-STARKs", "zk-Rollups", "Keccak-512"],
    learnMoreLink: "/what-is-poseidon-hash",
  },
  {
    id: "post-quantum-cryptography",
    category: "Technology",
    title: "Post-Quantum Cryptography",
    description: "Cryptographic algorithms designed to be secure against attacks from both classical and quantum computers. Xcoin uses NIST-approved post-quantum algorithms.",
    icon: Lock,
    related: ["SPHINCS+", "WOTS+", "NIST", "Quantum Resistance"],
  },
  {
    id: "sphincs-plus",
    category: "Technology",
    title: "SPHINCS+",
    description: "A stateless hash-based signature scheme approved by NIST for post-quantum security. Provides long-term security against quantum computer attacks.",
    icon: Lock,
    related: ["Post-Quantum Cryptography", "WOTS+", "NIST"],
    learnMoreLink: "/what-is-sphincs-plus",
  },
  {
    id: "wots-plus",
    category: "Technology",
    title: "WOTS+",
    description: "Winternitz One-Time Signature Plus. A hash-based signature scheme used in post-quantum cryptography for quantum-resistant security.",
    icon: Lock,
    related: ["SPHINCS+", "Post-Quantum Cryptography", "Hash-based Signatures"],
    learnMoreLink: "/what-is-wots-plus",
  },
  {
    id: "nist",
    category: "Technology",
    title: "NIST",
    description: "National Institute of Standards and Technology. A U.S. federal agency that approves cryptographic standards. Xcoin uses NIST-approved post-quantum algorithms.",
    icon: Lock,
    related: ["Post-Quantum Cryptography", "SPHINCS+", "WOTS+"],
  },
  {
    id: "stealth-addresses",
    category: "Technology",
    title: "Stealth Addresses",
    description: "One-time addresses generated for each transaction, making it impossible to link payments to your identity or wallet. Ensures complete unlinkability.",
    icon: Lock,
    related: ["Privacy", "Zero-Knowledge Privacy", "Transaction Privacy"],
    learnMoreLink: "/what-is-stealth-addresses",
  },
  {
    id: "ring-signature",
    category: "Technology",
    title: "Ring Signature",
    description: "A cryptographic method that lets a user sign a transaction anonymously within a group—so that no one can tell who actually signed it.",
    icon: Lock,
    related: ["Privacy", "Stealth Addresses", "Zero-Knowledge Privacy"],
    learnMoreLink: "/what-is-ring-signature",
  },
  {
    id: "halo-2",
    category: "Technology",
    title: "Halo 2",
    description: "An advanced cryptographic protocol used in Xcoin for efficient zero-knowledge proof generation and verification.",
    icon: Lock,
    related: ["Zero-Knowledge Proofs", "zk-STARKs", "Cryptography"],
    learnMoreLink: "/what-is-halo-2",
  },
  {
    id: "validator-network",
    category: "Technology",
    title: "Validator Network",
    description: "A distributed network of independent servers that verify cryptographic integrity of transactions without seeing transaction contents.",
    icon: Network,
    related: ["Validator", "Validator Node", "Decentralization"],
    learnMoreLink: "/validator",
  },
  {
    id: "sep-network",
    category: "Technology",
    title: "SEP Network (Secure Encryption Protocol)",
    description: "Provides encrypted multi-hop routing. Validators also function as SEP nodes, creating comprehensive privacy infrastructure.",
    icon: Network,
    related: ["Validator Network", "Privacy", "Encrypted Routing"],
    learnMoreLink: "/what-is-sep",
  },
  {
    id: "parallel-validation",
    category: "Technology",
    title: "Parallel Validation",
    description: "The ability to validate multiple transactions simultaneously, enabled by DAG architecture. Unlike blockchains that process transactions sequentially.",
    icon: Zap,
    related: ["DAG", "Scalability", "Transaction Layer"],
  },
  {
    id: "genesis-block",
    category: "Technology",
    title: "Genesis Block",
    description: "The first block in a blockchain or DAG network. In Xcoin, all 21 million coins are created in the Genesis Block with no pre-mine.",
    icon: Hash,
    related: ["Fair Launch", "Fixed Supply", "Pre-mine"],
    learnMoreLink: "/what-is-genesis-block",
  },
  {
    id: "mainnet",
    category: "Technology",
    title: "Mainnet",
    description: "The production blockchain network where real transactions occur, as opposed to testnet. Xcoin mainnet will launch after the XXX Token phase.",
    icon: Network,
    related: ["Network", "Launch", "XXX Token"],
  },
  
  // Tokenomics Terms
  {
    id: "xxx-token",
    category: "Tokenomics",
    title: "XXX Token",
    description: "The token that entitles holders to receive one Xcoin from the Genesis supply at mainnet launch, and grants full voting power in the XXX DAO. XXX Tokens have a fixed supply with no inflation or dilution.",
    icon: Coins,
    related: ["Xcoin", "Fixed Supply", "Redemption Right", "Governance Right"],
    learnMoreLink: "/what-are-xxx-tokens",
  },
  {
    id: "xcoin",
    category: "Tokenomics",
    title: "Xcoin",
    description: "The native cryptocurrency of the XXX DAG network. A truly private, quantum-secure, and community-governed cryptocurrency with a fixed supply of 21 million.",
    icon: Coins,
    related: ["XXX Token", "Fixed Supply", "Cryptocurrency"],
  },
  {
    id: "fixed-supply",
    category: "Tokenomics",
    title: "Fixed Supply",
    learnMoreLink: "/what-is-fixed-supply",
    description: "All 21 million Xcoins are minted in the Genesis Block—with no mining, no inflation, and no future coin creation. The DAO controls how coins are used, distributed, or reserved—with no central authority, no founders holding the keys, and no corporate manipulation.",
    icon: Coins,
    related: ["Genesis Block", "XXX DAO", "Zero Inflation", "21 Million"],
  },
  {
    id: "zero-inflation",
    category: "Tokenomics",
    title: "Zero Inflation",
    description: "No block rewards, no new token generation, no staking inflation. Validators earn transaction fees only, maintaining purchasing power over time.",
    icon: Coins,
    related: ["Fixed Supply", "Sustainability", "Value Preservation"],
  },
  {
    id: "pre-mine",
    category: "Tokenomics",
    title: "Pre-mine",
    description: "Coins created before public launch, often giving advantages to early investors or developers. Xcoin has NO pre-mine - all coins are created in Genesis Block.",
    icon: Coins,
    related: ["Fair Launch", "Genesis Block", "Fair Distribution"],
  },
  {
    id: "fair-launch",
    category: "Tokenomics",
    title: "Fair Launch",
    description: "A launch model where all coins exist from the start and are distributed publicly, with no pre-mine advantages or private sale benefits.",
    icon: Coins,
    related: ["Pre-mine", "Fair Distribution", "Genesis Block"],
  },
  {
    id: "redemption-right",
    category: "Tokenomics",
    title: "Redemption Right",
    description: "Each XXX Token entitles its holder to receive one Xcoin from the Genesis supply at mainnet launch. Simple 1:1 redemption.",
    icon: Coins,
    related: ["XXX Token", "Xcoin", "Mainnet"],
  },
  {
    id: "governance-right",
    category: "Tokenomics",
    title: "Governance Right",
    description: "The right to vote in the XXX DAO. Each XXX Token grants full voting power for protocol changes, funding, and ecosystem decisions.",
    icon: Users,
    related: ["XXX DAO", "Voting Power", "XXX Token"],
  },
  {
    id: "transaction-fees",
    category: "Tokenomics",
    title: "Transaction Fees",
    description: "Fees paid by users for transactions. Validators earn a portion of these fees as rewards, creating a sustainable revenue model without inflation.",
    icon: Coins,
    related: ["Validator", "Rewards", "Zero Inflation"],
  },
  
  // Governance Terms
  {
    id: "xxx-dao",
    category: "Governance",
    title: "XXX DAO",
    description: "Decentralized Autonomous Organization. The governance layer where token holders propose and vote on protocol changes, funding, and ecosystem decisions.",
    icon: Users,
    related: ["Governance", "Voting Power", "Decentralized Autonomous Organization"],
    learnMoreLink: "/what-is-xxx-dao",
  },
  {
    id: "decentralized-autonomous-organization",
    category: "Governance",
    title: "Decentralized Autonomous Organization (DAO)",
    description: "An organization governed by smart contracts and token holder voting, with no central authority. The XXX DAO controls protocol evolution and treasury.",
    icon: Users,
    related: ["XXX DAO", "Governance", "Community Governance"],
  },
  {
    id: "voting-power",
    category: "Governance",
    title: "Voting Power",
    description: "The ability to participate in governance decisions. In XXX DAO, each XXX Token represents one vote, ensuring democratic decision-making.",
    icon: Users,
    related: ["XXX DAO", "Governance Right", "Proposals"],
  },
  {
    id: "proposals",
    category: "Governance",
    title: "Proposals",
    description: "Formal suggestions submitted by token holders for protocol changes, funding allocations, or ecosystem decisions. Voted on by the community.",
    icon: Users,
    related: ["XXX DAO", "Voting", "Governance"],
  },
  {
    id: "treasury-management",
    category: "Governance",
    title: "Treasury Management",
    description: "The XXX DAO manages treasury funds collected from transaction fees and other sources, allocating them based on community votes for ecosystem development.",
    icon: Coins,
    related: ["XXX DAO", "Governance", "Funding"],
  },
  {
    id: "on-chain-governance",
    category: "Governance",
    title: "On-chain Governance",
    description: "Governance decisions recorded and executed directly on the blockchain, ensuring transparency and immutability of all protocol changes.",
    icon: Network,
    related: ["XXX DAO", "Proposals", "Voting"],
  },
  {
    id: "community-governance",
    category: "Governance",
    title: "Community Governance",
    description: "Decision-making power distributed among all token holders rather than centralized in a company or foundation. True decentralization.",
    icon: Users,
    related: ["XXX DAO", "Decentralization", "Democratic Voting"],
  },
  
  // Network Terms
  {
    id: "validator",
    category: "Network",
    title: "Validator",
    description: "A node operator who verifies transactions and maintains network security. Anyone meeting hardware requirements can become a validator and earn transaction fees.",
    icon: Network,
    related: ["Validator Node", "Validator Network", "Open Participation"],
    learnMoreLink: "/validator",
  },
  {
    id: "validator-node",
    category: "Network",
    title: "Validator Node",
    description: "A server running validator software that participates in transaction verification and network consensus. Requires standard hardware, no mining equipment needed.",
    icon: Network,
    related: ["Validator", "Hardware Requirements", "Rewards"],
    learnMoreLink: "/validator",
  },
  {
    id: "decentralization",
    category: "Network",
    title: "Decentralization",
    description: "The distribution of network control across many independent participants rather than a central authority. Xcoin achieves true decentralization through open validator participation.",
    icon: Globe,
    related: ["Validator Network", "Open Participation", "No Central Authority"],
  },
  {
    id: "distributed-validation",
    category: "Network",
    title: "Distributed Validation",
    description: "Transaction verification performed by a distributed network of independent validators worldwide, with no single point of failure or control.",
    icon: Network,
    related: ["Validator Network", "Decentralization", "Fault Tolerance"],
  },
  {
    id: "open-participation",
    category: "Network",
    title: "Open Participation",
    description: "Anyone meeting hardware requirements can become a validator. No permission required, no privileged nodes, ensuring equal participation rights.",
    icon: Globe,
    related: ["Validator", "Decentralization", "No Permission Required"],
  },
  {
    id: "censorship-resistant",
    category: "Network",
    title: "Censorship Resistant",
    description: "The network cannot be censored or controlled by any single entity, government, or organization. Transactions cannot be blocked or reversed.",
    icon: Lock,
    related: ["Decentralization", "Financial Sovereignty", "Network"],
  },
  {
    id: "fault-tolerant",
    category: "Network",
    title: "Fault Tolerant",
    description: "The network continues operating even if individual validators go offline. No single point of failure ensures high availability and resilience.",
    icon: Network,
    related: ["Distributed Validation", "Network Resilience", "Decentralization"],
  },
  
  // Privacy Terms
  {
    id: "privacy-by-default",
    category: "Privacy",
    title: "Privacy by Default",
    description: "Every Xcoin transaction is private by default — no settings, no opt-ins. Full anonymity is automatic, with sender, receiver, amounts, and metadata all hidden on-chain.",
    icon: Lock,
    related: ["Zero-Knowledge Privacy", "Transaction Privacy", "Privacy"],
    learnMoreLink: "/what-is-privacy-by-default",
  },
  {
    id: "zero-knowledge-privacy",
    category: "Privacy",
    title: "Zero-Knowledge Privacy",
    description: "Complete transaction privacy where only cryptographic correctness is verified—never the sender, receiver, or amount. Your financial activity remains completely hidden.",
    icon: Lock,
    related: ["zk-STARKs", "Privacy", "Transaction Privacy"],
  },
  {
    id: "transaction-privacy",
    category: "Privacy",
    title: "Transaction Privacy",
    description: "The ability to transact without revealing any information about the transaction. Sender, receiver, and amounts are all hidden by default.",
    icon: Lock,
    related: ["Zero-Knowledge Privacy", "Stealth Addresses", "Privacy"],
  },
  {
    id: "metadata",
    category: "Privacy",
    title: "Metadata",
    description: "Data about data. In blockchain context, information about transactions (who, when, how much) that can reveal patterns. Xcoin protects against metadata collection.",
    icon: Lock,
    related: ["Privacy", "Transaction Privacy", "Data Protection"],
  },
  {
    id: "untraceable-transactions",
    category: "Privacy",
    title: "Untraceable Transactions",
    description: "Transactions that cannot be traced back to their origin or linked to other transactions. Achieved through stealth addresses and zero-knowledge proofs.",
    icon: Lock,
    related: ["Stealth Addresses", "Privacy", "Transaction Privacy"],
  },
  {
    id: "hidden-amounts",
    category: "Privacy",
    title: "Hidden Amounts",
    description: "Transaction amounts are completely hidden from validators and observers. Only cryptographic proofs verify correctness without revealing values.",
    icon: Lock,
    related: ["Zero-Knowledge Privacy", "Privacy", "zk-STARKs"],
  },
  {
    id: "identity-protection",
    category: "Privacy",
    title: "Identity Protection",
    description: "Your real-world identity cannot be linked to your transactions or wallet addresses. Complete anonymity and privacy protection.",
    icon: Lock,
    related: ["Privacy", "Stealth Addresses", "Transaction Privacy"],
  },
  {
    id: "financial-freedom",
    category: "Privacy",
    title: "Financial Freedom",
    description: "The ability to transact without fear of surveillance, discrimination, or control based on your financial activity. True financial sovereignty.",
    icon: Globe,
    related: ["Privacy", "Financial Sovereignty", "Decentralization"],
  },
  {
    id: "financial-sovereignty",
    category: "Privacy",
    title: "Financial Sovereignty",
    description: "Complete control over your finances without third-party monitoring, censorship, or control. No one can freeze, reverse, or block your transactions.",
    icon: Globe,
    related: ["Financial Freedom", "Censorship Resistant", "Privacy"],
  },
  {
    id: "view-keys",
    category: "Privacy",
    title: "View Keys",
    description: "Secure, read-only access keys that allow you to share specific data without giving anyone your login, password, or control over anything. Designed for situations where you need to prove, not expose.",
    icon: Lock,
    related: ["Privacy", "Optional Compliance", "Transaction Privacy"],
    learnMoreLink: "/what-are-view-keys",
  },
  
  // Sustainability Terms
  {
    id: "energy-efficient",
    category: "Sustainability",
    title: "Energy Efficient",
    description: "Xcoin uses validator nodes instead of energy-intensive mining. Standard server hardware consumes minimal energy compared to proof-of-work systems.",
    icon: Zap,
    related: ["Mining", "Proof-of-Work", "Environmental Impact"],
  },
  {
    id: "mining",
    category: "Sustainability",
    title: "Mining",
    description: "The energy-intensive process of solving cryptographic puzzles to validate transactions in proof-of-work blockchains. Xcoin does NOT use mining.",
    icon: Zap,
    related: ["Proof-of-Work", "Energy Efficient", "Validator"],
  },
  {
    id: "proof-of-work",
    category: "Sustainability",
    title: "Proof-of-Work (PoW)",
    description: "A consensus mechanism requiring massive computational power and energy consumption. Xcoin uses DAG-based validation instead, which is 99% more energy efficient.",
    icon: Zap,
    related: ["Mining", "Energy Efficient", "Consensus"],
  },
  {
    id: "staking",
    category: "Sustainability",
    title: "Staking",
    description: "Locking tokens to participate in network consensus. Xcoin does NOT require staking. Validators earn transaction fees without locking tokens.",
    icon: Coins,
    related: ["Validator", "Rewards", "Zero Inflation"],
  },
  {
    id: "environmental-impact",
    category: "Sustainability",
    title: "Environmental Impact",
    description: "Xcoin's validator-based system uses 99% less energy than proof-of-work blockchains, with no mining equipment or specialized hardware required.",
    icon: Zap,
    related: ["Energy Efficient", "Mining", "Sustainability"],
  },
  
  // Performance Terms
  {
    id: "tps",
    category: "Performance",
    title: "TPS (Transactions Per Second)",
    description: "The number of transactions the network can process per second. Xcoin's DAG architecture enables 10,000+ TPS capacity.",
    icon: Zap,
    related: ["Scalability", "Throughput", "High Throughput"],
    learnMoreLink: "/how-xcoin-handles-10000-tps",
  },
  {
    id: "confirmation-time",
    category: "Performance",
    title: "Confirmation Time",
    description: "The time it takes for a transaction to be confirmed and finalized. Xcoin achieves instant confirmations (<1 second) through DAG architecture.",
    icon: Zap,
    related: ["Finality", "Instant Confirmations", "DAG"],
  },
  {
    id: "finality",
    category: "Performance",
    title: "Finality",
    description: "The point at which a transaction is permanently confirmed and cannot be reversed. Xcoin provides instant finality through DAG validation.",
    icon: Zap,
    related: ["Confirmation Time", "Instant Confirmations", "Transaction Layer"],
  },
  {
    id: "throughput",
    category: "Performance",
    title: "Throughput",
    description: "The total number of transactions the network can process over time. Xcoin's parallel validation enables high throughput suitable for global scale.",
    icon: Zap,
    related: ["TPS", "Scalability", "High Throughput"],
  },
  {
    id: "scalability",
    category: "Performance",
    title: "Scalability",
    description: "The ability of a network to handle increasing transaction volume. Xcoin's DAG architecture scales with usage, enabling thousands of transactions per second.",
    icon: Zap,
    related: ["TPS", "Throughput", "DAG"],
  },
  
  // General Terms
  {
    id: "cryptography",
    category: "General",
    title: "Cryptography",
    description: "The practice of secure communication and data protection. Xcoin uses advanced cryptography including zero-knowledge proofs and post-quantum algorithms.",
    icon: Lock,
    related: ["Zero-Knowledge Proofs", "Post-Quantum Cryptography", "Security"],
  },
  {
    id: "elliptic-curve-cryptography",
    category: "General",
    title: "Elliptic-Curve Cryptography",
    description: "Traditional cryptographic method vulnerable to quantum computers. Xcoin uses post-quantum alternatives (SPHINCS+, WOTS+) for future-proof security.",
    icon: Lock,
    related: ["Post-Quantum Cryptography", "Quantum Resistance", "Cryptography"],
  },
  {
    id: "quantum-computers",
    category: "General",
    title: "Quantum Computers",
    description: "Advanced computers that can break traditional cryptography. Xcoin uses post-quantum algorithms to remain secure even when quantum computers become available.",
    icon: Lock,
    related: ["Post-Quantum Cryptography", "Quantum Resistance", "Future-Proof"],
  },
  {
    id: "quantum-resistance",
    category: "General",
    title: "Quantum Resistance",
    description: "Protection against attacks from quantum computers. Xcoin's post-quantum algorithms ensure assets remain secure as computing power advances.",
    icon: Lock,
    related: ["Post-Quantum Cryptography", "SPHINCS+", "WOTS+", "Quantum Computers"],
  },
  {
    id: "hash-based-signatures",
    category: "General",
    title: "Hash-based Signatures",
    description: "Cryptographic signatures based on hash functions rather than mathematical problems. SPHINCS+ and WOTS+ are hash-based, providing quantum resistance.",
    icon: Lock,
    related: ["SPHINCS+", "WOTS+", "Post-Quantum Cryptography"],
  },
  {
    id: "cryptographic-primitives",
    category: "General",
    title: "Cryptographic Primitives",
    description: "Basic cryptographic building blocks (hash functions, signatures, proofs) used to construct secure systems. Xcoin uses advanced primitives for privacy and security.",
    icon: Lock,
    related: ["Cryptography", "zk-STARKs", "SPHINCS+"],
  },
  {
    id: "protocol",
    category: "General",
    title: "Protocol",
    description: "The set of rules and standards that govern how the Xcoin network operates. Includes transaction validation, privacy mechanisms, and governance processes.",
    icon: Network,
    related: ["Network", "XXX DAO", "Technology"],
  },
  {
    id: "blockchain",
    category: "General",
    title: "Blockchain",
    description: "A sequential chain of blocks containing transactions. Xcoin uses DAG instead, which enables parallel processing and better scalability.",
    icon: Network,
    related: ["DAG", "Block", "Transaction Layer"],
  },
  {
    id: "block",
    category: "General",
    title: "Block",
    description: "A collection of transactions grouped together in traditional blockchains. Xcoin's DAG doesn't use blocks—transactions reference each other directly.",
    icon: Hash,
    related: ["Blockchain", "DAG", "Transaction"],
  },
]

const categories = [
  { name: "All", icon: BookOpen },
  { name: "Technology", icon: Network },
  { name: "Tokenomics", icon: Coins },
  { name: "Governance", icon: Users },
  { name: "Network", icon: Globe },
  { name: "Privacy", icon: Lock },
  { name: "Sustainability", icon: Zap },
  { name: "Performance", icon: Zap },
  { name: "General", icon: Hash },
]

export default function LearningPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  // Check if we're on desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024) // lg breakpoint
    }
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory
    const matchesSearch =
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Auto-select first term when category or search changes (Desktop only)
  useEffect(() => {
    if (isDesktop && filteredTerms.length > 0) {
      const currentTermExists = selectedTerm && filteredTerms.find(t => t.id === selectedTerm)
      if (!currentTermExists) {
        setSelectedTerm(filteredTerms[0].id)
      }
    } else if (!isDesktop) {
      // On mobile, clear selection when category/search changes
      setSelectedTerm(null)
    }
  }, [selectedCategory, searchTerm, isDesktop])

  // Update selected term if it's no longer in filtered results
  useEffect(() => {
    if (selectedTerm && !filteredTerms.find(t => t.id === selectedTerm)) {
      if (isDesktop && filteredTerms.length > 0) {
        setSelectedTerm(filteredTerms[0].id)
      } else {
        setSelectedTerm(null)
      }
    }
  }, [filteredTerms, selectedTerm, isDesktop])

  const selectedTermData = selectedTerm
    ? glossaryTerms.find((term) => term.id === selectedTerm)
    : isDesktop && filteredTerms.length > 0 ? filteredTerms[0] : null

  return (
    <div className="relative overflow-hidden pt-32 pb-24 min-h-screen">
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
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
              Learning Center
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Comprehensive glossary of all Xcoin terms and concepts. Learn everything from basics to advanced topics.
            </p>
          </div>

          <div className="flex gap-6 h-[calc(100vh-12rem)]">
          {/* Categories Sidebar - Left */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="rounded-2xl border border-border bg-card p-4 h-full overflow-y-auto">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name)
                      setSelectedTerm(null)
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      selectedCategory === category.name
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Terms List - Middle */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="rounded-2xl border border-border bg-card p-4 h-full flex flex-col">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Terms List */}
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                  Terms ({filteredTerms.length})
                </h3>
                <div className="space-y-1">
                  {filteredTerms.map((term) => (
                    <button
                      key={term.id}
                      onClick={() => setSelectedTerm(term.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedTerm === term.id
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {term.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Term Details - Right */}
          <div className="flex-1 min-w-0">
            {selectedTermData ? (
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 h-full overflow-y-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <selectedTermData.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {selectedTermData.category}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-bold">
                      {selectedTermData.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedTermData.description}
                </p>

                {(selectedTermData as any).learnMoreLink && (
                  <div className="mb-8">
                    <Link
                      href={selectedTermData.id === "fixed-supply" ? "/what-is-fixed-supply" : (selectedTermData as any).learnMoreLink}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                    >
                      LEARN MORE
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}

                {selectedTermData.related && selectedTermData.related.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">
                      Related Terms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTermData.related.map((related) => {
                        const relatedTerm = glossaryTerms.find(
                          (t) => t.title === related || t.id === related.toLowerCase().replace(/\s+/g, "-")
                        )
                        if (relatedTerm) {
                          return (
                            <button
                              key={related}
                              onClick={() => setSelectedTerm(relatedTerm.id)}
                              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                            >
                              {related}
                            </button>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 h-full flex items-center justify-center">
                <p className="text-muted-foreground text-center">Select a term from the list to learn more.</p>
              </div>
            )}

          </div>
        </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {selectedTerm ? (
            // Mobile: Show selected term details (full screen overlay style)
            <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
              <div className="max-w-2xl mx-auto px-6 py-6">
                {/* Back Button */}
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <span>Back to Terms</span>
                </button>

                {/* Term Details */}
                {selectedTermData && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                        <selectedTermData.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                            {selectedTermData.category}
                          </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                          {selectedTermData.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {selectedTermData.description}
                    </p>

                    {(selectedTermData as any).learnMoreLink && (
                      <div className="mb-6">
                        <Link
                          href={selectedTermData.id === "fixed-supply" ? "/what-is-fixed-supply" : (selectedTermData as any).learnMoreLink}
                          className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                        >
                          LEARN MORE
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}

                    {selectedTermData.related && selectedTermData.related.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">
                          Related Terms
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedTermData.related.map((related) => {
                            const relatedTerm = glossaryTerms.find(
                              (t) => t.title === related || t.id === related.toLowerCase().replace(/\s+/g, "-")
                            )
                            if (relatedTerm) {
                              return (
                                <button
                                  key={related}
                                  onClick={() => setSelectedTerm(relatedTerm.id)}
                                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                                >
                                  {related}
                                </button>
                              )
                            }
                            return null
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Mobile: Show terms list (default view)
            <>
              {/* Header */}
              <div className="mx-auto max-w-4xl text-center mb-8">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
                  Learning Center
                </h1>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  Comprehensive glossary of all Xcoin terms and concepts.
                </p>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                  Categories
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                        selectedCategory === category.name
                          ? "bg-accent text-accent-foreground font-medium"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <category.icon className="h-4 w-4" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms Grid */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                  Terms ({filteredTerms.length})
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {filteredTerms.map((term) => (
                    <button
                      key={term.id}
                      onClick={() => setSelectedTerm(term.id)}
                      className="rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-accent/50 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                          <term.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-muted-foreground">{term.category}</span>
                          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold mt-1 line-clamp-2">
                            {term.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                            {term.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

