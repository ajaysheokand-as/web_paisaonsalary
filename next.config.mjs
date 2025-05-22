/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
    env: {
    // server-only, baked into your SSR/API Lambdas
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_HOST: process.env.MYSQL_HOST,
    // public, available in both server & client bundles
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
