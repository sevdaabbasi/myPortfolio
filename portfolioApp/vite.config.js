import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/myPortfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
  },
});
