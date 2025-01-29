const nextConfig: import("next").NextConfig = {
    // output: "export",  // Comment or remove this line if needed
    eslint: {
        ignoreDuringBuilds: true
    },
    images: { unoptimized: true }
};

export default nextConfig;
