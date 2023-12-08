/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other configurations here
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['github.com', 'leetcode.com', 'www.codingninjas.com'], // Add all the external domains here
  },
};
