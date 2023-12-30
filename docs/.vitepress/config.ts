import { readdirSync } from "node:fs";
import { join } from "node:path";
import { DefaultTheme, defineConfig } from "vitepress";

function toTitleCase(str: string) {
  return str.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
    return match.toUpperCase();
  });
}

function getSidebarItems(path: "guides" | "wiki") {
  const filePath = new URL(`../src/${path}`, import.meta.url).pathname;
  const allPaths = readdirSync(filePath, {
    recursive: true,
    withFileTypes: true,
  });
  const sidebarItems = allPaths.map((dirent) => {
    // Don't provide links to directories (in the future we may want to have this be tiered on the sidebar)
    if (dirent.isDirectory()) {
      return null;
    }
    // Don't provide links to non markdown files or the index markdown file
    if (!dirent.name.endsWith(".md") || dirent.name === "index.md") {
      return null;
    }

    const absoluteFilePath = join(dirent.path, dirent.name);

    // Gets the important bits of the path for title and link generation
    const pathWithoutBase = absoluteFilePath.replace(filePath + "/", "")
      .replace(
        ".md",
        "",
      );

    // Combine the base path with the important bits
    const link = join(`/${path}/`, pathWithoutBase);
    // Text for display in the sidebar
    const text = toTitleCase(pathWithoutBase.replaceAll("/", " ").trim())
      .replaceAll("-", " ");

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
    items: getSidebarItems("guides"),
  }],
  "wiki": [{
    text: "Wiki",
    items: getSidebarItems("wiki"),
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
      { text: "Wiki", link: "/wiki/" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/curtislarson" },
    ],
  },
});
