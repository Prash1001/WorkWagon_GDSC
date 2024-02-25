import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import reactPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),

    reactPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
