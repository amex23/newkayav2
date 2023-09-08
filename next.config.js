/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // TO DO: This is mock data from Figma => Remove it
        hostname: 's3-alpha-sig.figma.com'
      }
    ]
  }
}

module.exports = nextConfig
