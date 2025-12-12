import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xcoin-website.vercel.app"

  const routes = [
    "",
    "/technology",
    "/roadmap",
    "/tokenomics",
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
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}

