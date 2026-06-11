import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
<<<<<<< HEAD
    formats: ["image/avif", "image/webp"]
=======
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.instagram.com"
      }
    ]
>>>>>>> 24279f0c85be6566a992323a272dae8f0650c14a
  }
};

export default nextConfig;
