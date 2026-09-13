import type { MetadataRoute } from "next";

const BASE_URL = "https://www.donaldmarkowitz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/catalog",
    "/contact",
    "/credits",
    "/legacy",
    "/merch",
    "/stats",
    "/studio",
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
