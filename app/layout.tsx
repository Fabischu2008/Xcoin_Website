import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _inter = Inter({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: "Xcoin - The Future of Finance",
    template: "%s | Xcoin",
  },
  description:
    "A truly private, quantum-secure, and community-governed cryptocurrency. Fixed supply of 21 million. Zero inflation. Zero-knowledge privacy by default.",
  keywords: ["cryptocurrency", "privacy", "quantum-secure", "DAG", "blockchain", "decentralized", "Xcoin", "private finance"],
  authors: [{ name: "Xcoin" }],
  creator: "Xcoin",
  publisher: "Xcoin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://xcoin-website.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Xcoin - The Future of Finance",
    description:
      "A truly private, quantum-secure, and community-governed cryptocurrency. Fixed supply of 21 million. Zero inflation. Zero-knowledge privacy by default.",
    siteName: "Xcoin",
    images: [
      {
        url: "/xcoin-logo.png",
        width: 1200,
        height: 630,
        alt: "Xcoin Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcoin - The Future of Finance",
    description:
      "A truly private, quantum-secure, and community-governed cryptocurrency. Fixed supply of 21 million. Zero inflation. Zero-knowledge privacy by default.",
    images: ["/xcoin-logo.png"],
    creator: "@xcoin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/xcoin-logo.png",
    apple: "/xcoin-logo.png",
    shortcut: "/xcoin-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${_spaceGrotesk.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
