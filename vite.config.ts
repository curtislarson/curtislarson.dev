import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    manifest: true,
  },
  server: {
    port: 8999,
    open: true,
  },
});
