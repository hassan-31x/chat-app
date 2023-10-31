/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'localhost',
            'res.cloudinary.com',
            'uploadthing.com',
        ],
    }
}

module.exports = nextConfig
