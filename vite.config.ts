import preact from "@preact/preset-vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    preact(),
    tsconfigPaths(),
  ],
  root: "./packages/www",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
  },
  server: {
    port: 8999,
    open: true,
  },
});
