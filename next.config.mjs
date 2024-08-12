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
            {
                protocol: 'http',
                hostname: '91.201.214.206',
                port: '4001',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
