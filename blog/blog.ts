import { Blog } from "https://raw.githubusercontent.com/curtislarson/mdx-static/master/mod.ts";

await new Blog({
  index: {
    title: "blog",
    description: "Thoughts and Ideas",
  },
  author: "Curtis Larson",
  blogDir: new URL("./posts", import.meta.url).pathname,

  css: { theme: "dracula" },
}).serve();
