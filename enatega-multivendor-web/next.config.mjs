/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // if your website has no www, drop it
      },
      {
        protocol: 'https',
        hostname: 'enatega.com', // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
