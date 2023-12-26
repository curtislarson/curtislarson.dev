import { PostFrontmatter } from "../../../blog/src/types.ts";
import Author from "./Author.tsx";
import PrettyDate from "./PrettyDate.tsx";
import ReadMore from "./ReadMore.tsx";
import Tags from "./Tags.tsx";

export interface PostCardProps extends PostFrontmatter {
  href: string;
}

export default function PostCard(props: PostCardProps) {
  return (
    <div class="card w-[28rem] bg-base-300 shadow-xl mb-6">
      <div class="card-body">
        <a href={props.href}>
          <h3 class="card-title text-2xl text-primary">{props.title}</h3>
        </a>
        <div class="mt-2 flex flex-col">
          <div class="flex flex-row items-center text-gray-300 text-sm">
            {props.author && (
              <div>
                <Author author={props.author} />
              </div>
            )}

            {props.date && (
              <div class="ml-2">
                <PrettyDate date={new Date(props.date)} />
              </div>
            )}
            <div class="ml-2">{props.tags && <Tags tags={props.tags} />}</div>
          </div>
          <p class="mt-3 text-base">{props.preview}</p>
          <div class="card-actions mt-4">
            <ReadMore href={props.href} title={props.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
