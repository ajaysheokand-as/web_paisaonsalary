/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "chart.googleapis.com",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
