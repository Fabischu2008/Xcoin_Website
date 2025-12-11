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
  title: "Xcoin - The Future of Finance",
  description:
    "A truly private, quantum-secure, and community-governed cryptocurrency. Fixed supply of 21 million. Zero inflation. Zero-knowledge privacy by default.",
  generator: "v0.app",
  keywords: ["cryptocurrency", "privacy", "quantum-secure", "DAG", "blockchain", "decentralized"],
  icons: {
    icon: "/favicon.gif",
    apple: "/apple-icon.png",
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
