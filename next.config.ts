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
      // Add old Tilda URLs here once known, e.g.:
      // {
      //   source: "/old-tilda-page",
      //   destination: "/new-page",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
