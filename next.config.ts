import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tflgmyvvavucbmcawtzv.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      // www -> apex domain, for every path. Must stay FIRST in this array:
      // redirects() matches in order and stops at the first hit, and the
      // /contacts rule below has no `has` host constraint, so if it ran
      // first it would match www requests too and redirect them to a
      // relative "/contact" — which preserves the www host instead of
      // migrating to the apex domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jevol.com.ua" }],
        destination: "https://jevol.com.ua/:path*",
        permanent: true,
      },
      // Old Tilda site used /contacts; this site's route is /contact.
      // (The other old slugs — /stacionarni-galmivni-stendi/,
      // /peresuvni-galmivni-stendi/, /jvs-600, /jve-501,
      // /detektor-lyuftiv/, /regloskopp/ — already match this site's
      // routes once Next's default trailing-slash redirect strips the
      // trailing slash, so they don't need entries here.)
      {
        source: "/contacts",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
