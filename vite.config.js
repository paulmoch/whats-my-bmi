import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/whats-my-bmi/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/variables.scss";`, // This ensures your SCSS variables are available globally
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
