import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Paquetes locales del monorepo escritos en TypeScript que Next debe transpilar.
  transpilePackages: ["@marcheli/auth", "@marcheli/database"],
};

export default nextConfig;
