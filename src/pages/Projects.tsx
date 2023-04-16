import ProjectCard from "../components/ProjectCard";
import { PROJECT_DATA } from "../data/projects";

export default function Projects() {
  return (
    <div class="pt-8 pb-20 px-4 flex flex-col">
      <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl mb-10">
        <div class="flex flex-row">
          <h2 class="flex-none text-3xl tracking-tight text-primary sm:text-4xl">Side Projects</h2>
          <h5 class="flex-1 ml-3 mt-4">Things I hack on in my free time</h5>
        </div>
        <div class="mt-4 grid gap-16 pt-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {PROJECT_DATA.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
      <div class="flex flex-row self-center shadow-xl mt-5 p-2 bg-base-300 rounded-lg">
        <a href="https://github.com/curtislarson" alt="Github" class="text-info">
          <div class="py-5 px-5 text-center">
            <h3 class="text-2xl">More Projects</h3>
          </div>
        </a>
      </div>
    </div>
  );
}
