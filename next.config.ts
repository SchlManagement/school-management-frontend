/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Keep this if you still use Unsplash for the hero images
      },
      {
        protocol: 'https',
        hostname: 'img.magnific.com',    // ADDED: This fixes your logo error
      },
      // Note for the future: When you build the backend, you will add your 
      // AWS S3, Cloudinary, or Firebase domain here for user-uploaded logos.
    ],
  },
};

export default nextConfig;