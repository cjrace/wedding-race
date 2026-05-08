/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/rsvp",
        destination: "/your-invitation",
        permanent: true,
      },
      {
        source: "/rsvp/:id",
        destination: "/your-invitation/:id",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/your-invitation",
        permanent: true,
      },
      {
        source: "/venue",
        destination: "/your-invitation",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@tabler/icons-react",
    ],
  },
  output: "standalone",
  outputFileTracingIncludes: {
    "*": ["./node_modules/@img/sharp-*/lib/*"],
  },
};

export default nextConfig;
