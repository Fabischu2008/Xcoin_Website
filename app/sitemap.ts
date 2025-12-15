import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xcoin-website.vercel.app"

  const routes = [
    "",
    "/overview",
    "/develop",
    "/fund",
    "/docs",
    "/faq",
    "/community",
    "/privacy",
    "/quantum-safe",
    "/scalability",
    "/sustainability",
    "/governance",
    "/network",
    "/member",
    "/contributor",
    "/validator",
    "/legal",
    "/what-is-wots-plus",
    "/what-is-sphincs-plus",
    "/what-is-zk-starks",
    "/what-are-view-keys",
    "/what-is-aes-512",
    "/what-is-stealth-addresses",
    "/what-is-xxx-dao",
    "/what-is-dag-plus",
    "/what-is-zk-rollups",
    "/how-xcoin-handles-10000-tps",
    "/what-is-halo-2",
    "/what-is-poseidon-hash",
    "/what-is-ring-signature",
    "/what-is-sep",
    "/what-is-genesis-block",
    "/what-are-xxx-tokens",
    "/what-is-fixed-supply",
    "/validator-application",
    "/learning",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}

