import preact from "@preact/preset-vite";
import presetWebFonts from "@unocss/preset-web-fonts";
import { presetUno } from "unocss";
import unocss from "unocss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
    unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Roboto",
            mono: ["Fira Code", "Fira Mono:400,700"],
          },
        }),
      ],
    }),
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
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
