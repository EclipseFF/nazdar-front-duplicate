/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dl.dropbox.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
