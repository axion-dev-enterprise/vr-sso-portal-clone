/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vr.com.br',
      },
      {
        protocol: 'https',
        hostname: 'sso-acesso.vr.com.br',
      },
    ],
  },
};

module.exports = nextConfig;
