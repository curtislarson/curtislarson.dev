export interface IndexHeaderProps {
  title?: string;
  description?: string;
  tags?: string[];
}

export default function IndexHeader(props: IndexHeaderProps) {
  const { title, description, tags } = props;

  return (
    <header class="w-full h-60 bg-cover bg-center bg-no-repeat">
      <div class="max-w-screen-md h-full px-6 mx-auto flex flex-col items-center justify-center">
        <a href="/">
          <h1 class="mt-3 text-6xl font-semibold text-white">{title}</h1>
        </a>
        <h2 class="text-2xl mt-4 font-light text-white">{description}</h2>
        {tags && tags.length > 0 && (
          <h3 class="mt-2">
            Showing results for tags: <span class="text-accent">{tags.join(", ")}</span>
          </h3>
        )}
      </div>
    </header>
  );
}
