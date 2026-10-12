import type { MetadataRoute } from "next"

const SITE_URL = "https://mouakkal.me"

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/skills", priority: 0.7 },
  { path: "/writings", priority: 0.6 },
  { path: "/contact", priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}
