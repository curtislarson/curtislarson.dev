import { ProjectProps } from "../pages/Project";

export const PROJECT_DATA: ProjectProps[] = [
  {
    href: "https://github.com/orgs/quackware/repositories?q=&type=all&language=typescript",
    title: "Deno Utility Libraries",
    preview: "A large collection of utility libraries for the Deno runtime",
    tags: ["deno", "typescript"],
  },
  {
    href: "https://github.com/curtislarson/mdx-static",
    title: "MDX Static",
    preview: "A simple static site generator using MDX and Deno",
    tags: ["deno", "typescript", "ssr"],
  },
  {
    href: "https://github.com/curtislarson/beers",
    title: "Beers",
    preview: "A visualization of my Untappd checkins and travel history.",
    tags: ["vis", "leaflet", "data"],
  },
  {
    href: "https://github.com/curtislarson/spotify",
    title: "Spotify Now Playing",
    preview: "Show your currently playing spotify song in a markdown file.",
    tags: ["deno", "typescript", "api", "ssr"],
  },
  {
    href: "https://github.com/curtislarson/shikisaurus",
    title: "Shikisaurus",
    preview: "Beautiful auto updating code samples in your GitHub README.",
    tags: ["deno", "typescript", "github", "ssr"],
  },
  {
    href: "https://github.com/curtislarson/typebox-form",
    title: "TypeBox Form",
    preview: "Dynamically generate forms with input validation and type safety",
    tags: ["typescript", "preact", "schema", "typebox"],
  },
];
