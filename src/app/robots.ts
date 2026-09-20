import type { MetadataRoute } from "next";
import { headers } from "next/headers";

const CANONICAL_HOSTS = new Set(["jevol.com.ua", "www.jevol.com.ua"]);

// Vercel keeps the *.vercel.app URL reachable forever, even once a custom
// domain is attached, so this must check the request host at runtime rather
// than being a static file — otherwise the vercel.app deployment would stay
// indexable and compete with the real domain for search rankings.
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host") ?? "";

  if (!CANONICAL_HOSTS.has(host)) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jevol.com.ua/sitemap.xml",
  };
}
