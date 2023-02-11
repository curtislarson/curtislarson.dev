import { ProjectProps } from "../pages/Project";

export const PROJECT_DATA: ProjectProps[] = [
  {
    href: "https://github.com/curtislarson/mdx-static",
    title: "MDX Static",
    preview: "A simple static site generator using MDX and Deno",
    tags: ["deno", "typescript", "ssr"],
  },
  {
    href: "https://github.com/curtislarson/daotw",
    title: "Drinkin' All Over the World",
    preview: "A visualization of my Untappd checkins and travel history.",
    tags: ["vis", "leaflet", "data"],
  },
  {
    href: "https://github.com/curtislarson/spotify",
    title: "Spotify Now Playing",
    preview: "Embed your currently playing song as a SVG in markdown",
    tags: ["deno", "typescript", "api", "ssr"],
  },
  {
    href: "https://github.com/curtislarson/shikisaurus",
    title: "Shikisaurus",
    preview: "Embed auto updating code samples from any github repo in your markdown files.",
    tags: ["deno", "typescript", "github", "ssr"],
  },
  {
    href: "https://github.com/curtislarson/typebox-form",
    title: "TypeBox Form",
    preview: "Dynamically generate forms with input validation and type safety",
    tags: ["typescript", "preact", "schema", "typebox"],
  },
];
