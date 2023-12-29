import TagIcon from "../icons/Tag.tsx";

export interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div class="text-accent items-center flex flex-row">
      <TagIcon />
      {tags.map((tag, idx) => (
        <a href={`/tags/${tag}`}>
          <div key={tag} class={`badge badge-sm badge-accent badge-outline ${idx !== 0 ? "ml-2" : "ml-1"}`}>
            {tag}
          </div>
        </a>
      ))}
    </div>
  );
}
