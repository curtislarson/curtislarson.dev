import { PostFrontmatter } from "../../../blog/src/types.ts";
import Author from "./Author.tsx";
import PrettyDate from "./PrettyDate.tsx";
import Tags from "./Tags.tsx";

export interface PostProps extends PostFrontmatter {
  // deno-lint-ignore no-explicit-any
  children: any;
}

export default function Post(props: PostProps) {
  return (
    <div
      class="mt-8 flex flex-col justify-center relative mx-auto overflow-hidden rounded-2xl max-w-7xl"
      data-theme={props.theme}
    >
      <div class="relative w-full py-6 px-2 bg-base-300 shadow-xl shadow-slate-700/10 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div class="flex flex-col px-10 pt-4">
          {props.title && <h1 class="flex-1 text-4xl font-bold text-primary">{props.title}</h1>}
          <div class="flex flex-row text-gray-300 text-sm mt-5">
            {props.author && <Author author={props.author} />}
            {props.date && (
              <div class="ml-5">
                <PrettyDate date={new Date(props.date)} />
              </div>
            )}
            <div class="ml-5">{props.tags && <Tags tags={props.tags} />}</div>
          </div>
          <hr class="text-gray-700 mt-5" />
          <article class="prose lg:text-lg max-w-none text-gray-300">{props.children}</article>
        </div>
      </div>
    </div>
  );
}
