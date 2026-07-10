import type { NextConfig } from "next";

const repoName = "personal-website";
const isProductionBuild = process.env.NODE_ENV === "production";
const basePath = isProductionBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
