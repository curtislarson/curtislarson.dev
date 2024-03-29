import { readdirSync } from "node:fs";
import { basename, join } from "node:path";
import { DefaultTheme, defineConfig } from "vitepress";

function toTitleCase(str: string) {
  return str.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
    return match.toUpperCase();
  });
}

function getGuidesSidebarItems() {
  const guidesPath = new URL("../src/guides", import.meta.url).pathname;
  const allGuides = readdirSync(guidesPath);
  const sidebarItems = allGuides.map((path) => {
    const baseLink = basename(path, ".md");
    if (baseLink === "index") {
      return null;
    }
    const link = join("/guides/", baseLink);
    const text = toTitleCase(baseLink).replaceAll("-", " ");
    return {
      link,
      text,
    };
  }).filter((v): v is NonNullable<typeof v> => v != null);

  return sidebarItems;
}

const sidebar: DefaultTheme.Sidebar = {
  "/guides/": [{
    text: "Guides",
    items: getGuidesSidebarItems(),
  }],
};

export default defineConfig({
  title: "Guides and Documentation",
  description: "Useful guides and documentation for Software Development",
  srcDir: "./src",
  srcExclude: ["./src/drafts/*"],
  base: "/docs/",
  outDir: "./dist/docs",
  themeConfig: {
    nav: [
      { text: "Home", link: "https://curtislarson.dev" },
      { text: "Guides", link: "/guides/" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/curtislarson" },
    ],
  },
});
