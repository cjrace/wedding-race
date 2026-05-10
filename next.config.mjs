/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/rsvp",
        destination: "/guest-information",
        permanent: true,
      },
      {
        source: "/rsvp/:id",
        destination: "/guest-information/:id",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/guest-information",
        permanent: true,
      },
      {
        source: "/venue",
        destination: "/guest-information",
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
