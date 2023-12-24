import { useParams } from "react-router-dom";
import { ProjectData } from "../types";
import TagBadge from "../components/TagBadge";

export interface ProjectProps extends ProjectData {}

export default function Project(props: ProjectProps) {
  const { projectId } = useParams();

  if (projectId == null || projectId === "") {
    return <></>;
  }
  return (
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              {props.tags.map((tag) => (
                <TagBadge key={tag} text={tag} />
              ))}
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {props.title}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
