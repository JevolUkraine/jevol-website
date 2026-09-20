import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";

const BASE_URL = "https://jevol.com.ua";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...categories.map((c) => c.href), "/contact"];

  return paths.map((path) => ({
    // Match the no-trailing-slash canonical Next.js renders for "/".
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
