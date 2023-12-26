import { ProjectData } from "../types";
import TagBadge from "./TagBadge";

export default function ProjectCard(project: ProjectData) {
  return (
    <div key={project.title} class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body">
        <a href={project.slug ? `/project/${project.slug}` : project.href}>
          <h2 class="text-xl text-secondary card-title">{project.title}</h2>
          <p class="mt-3 text-base">{project.preview}</p>
        </a>
        <div class="mt-4 flex items-center">
          <div class="flex space-x-1 text-sm">
            {project.tags.map((tag) => (
              <a href={`/projects?tag=${tag}`} key={tag}>
                <TagBadge key={tag} text={tag} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
