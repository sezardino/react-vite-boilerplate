import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// @ts-expect-error - This is a hack to get around the fact that Vite doesn't support the "path" module
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      // @ts-expect-error - This is a hack to get around the fact that Vite doesn't support the "path" module
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
