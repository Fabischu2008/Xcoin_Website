import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import RotatingFavicon from "@/components/rotating-favicon"

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
        url: "/img/xcoin.svg",
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
    images: ["/img/xcoin.svg"],
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/xcoin-logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/xcoin-logo.png",
    shortcut: "/favicon.svg",
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
      <body className="font-sans antialiased">
        <RotatingFavicon />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
