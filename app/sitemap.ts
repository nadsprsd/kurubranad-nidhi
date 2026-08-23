import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { primaryNav } from "@/config/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return primaryNav.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
