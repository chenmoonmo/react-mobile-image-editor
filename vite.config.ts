import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import alias from "@rollup/plugin-alias";

import dts from "vite-plugin-dts";

import { visualizer } from "rollup-plugin-visualizer";

import path from "path";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias(),
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
      },
    }),
    dts(),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@": resolve("package/"),
    },
  },
  optimizeDeps: {
    exclude: ["react-reconciler"],
  },
  build: {
    outDir: "lib",
    cssTarget: "chrome61",
    lib: {
      entry: resolve("package/index.ts"),
      name: "react-mobile-image-editor",
      formats: ["es", "umd"],
      fileName: "react-mobile-image-editor",
    },
    rollupOptions: {
      external: ["react", "react-dom","konva","react-konva"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});
