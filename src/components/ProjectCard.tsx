import { ProjectData } from "../types";

export default function ProjectCard(project: ProjectData) {
  return (
    <div key={project.title} class="card w-96 bg-base-300 shadow-xl">
      <a href={project.slug ? `/project/${project.slug}` : project.href}>
        <div class="card-body">
          <h2 class="text-xl text-secondary card-title">{project.title}</h2>
          <p class="mt-3 text-base">{project.preview}</p>
          <div class="mt-4 flex items-center">
            <div class="flex space-x-1 text-sm">
              {project.tags.map((tag) => (
                <div key={tag} class="badge badge-accent badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
