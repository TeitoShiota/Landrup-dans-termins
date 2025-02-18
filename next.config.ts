import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Preload fonts and colors in all scss files. */
  sassOptions: {
    additionalData: `@use 'sass:meta'; @use '@/styles/_colors' as *; @use '@/styles/_typography' as *;`,
    quietDeps: true
    // silenceDeprecations: [  ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/file-bucket/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
