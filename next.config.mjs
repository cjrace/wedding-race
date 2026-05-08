/** @type {import('next').NextConfig} */
const nextConfig = {
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
