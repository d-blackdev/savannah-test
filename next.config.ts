import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ hostname: "dummyjson.com" }],
	},
	/* config options here */
};

export default nextConfig;
