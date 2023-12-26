import { DefaultTheme, defineConfig } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/guides/": [],
};

export default defineConfig({
  title: "Docs",
  description: "Guides and Documentation",
  srcDir: "./src",
  srcExclude: ["./src/drafts/*"],
  base: "/docs/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides/" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
