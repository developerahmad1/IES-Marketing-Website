/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  
  async redirects() {
    return [
      {
        source: '/our-projects', 
        destination: '/housing-societies-in-multan/',
        permanent: true,
      },
      {
        source: '/blog/real-estate-opportunities-1', 
        destination: '/blog/real-estate-opportunities/',
        permanent: true,
      },
      {
        source: '/blog/commercial-plots-investment-opportunities-multan/', 
        destination: '/blog/commercial-shops-investment-opportunities-multan/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
