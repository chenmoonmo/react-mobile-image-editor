import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import svgr from "vite-plugin-svgr";
import tsTreeshaking from "rollup-plugin-ts-treeshaking";

import path from "path";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
      },
    }),
    typescript({
      target: "es5",
      rootDir: resolve("package/"),
      declaration: true,
      declarationDir: resolve("lib"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
      include: [resolve("custom.d.ts"), "**/*.ts", "**/*.tsx"],
    }),
    tsTreeshaking(),
  ],
  build: {
    outDir: "lib",
    cssTarget: "chrome61",
    lib: {
      entry: resolve("package/index.ts"),
      name: "react-mobile-image-editor",
      fileName: "react-mobile-image-editor",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        // "@emotion/react",
        // "@emotion/styled",
        // "konva",
        // "react-konva-utils",
        // "stateshot",
        // "use-image",
      ],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});
