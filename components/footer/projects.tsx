import { GetProjects } from "@/lib/project";
import Link from "@/sys-app-webkit/next/components/link";
import { Separator } from "../ui/separator";

const ProjectsSection = () => {
  // Get projects then shows only 8
  let getProjects = GetProjects(8);

  return (
    <section className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm">
      <span className="text-primary font-semibold" id="projects" key="projects">
        Projects
      </span>
      <div className="flex-1 flex flex-col space-y-2">
        {getProjects.map((project, idx) => (
          <Link
            href={project.href.href}
            isExternal={project.href.external}
            className="w-max text-muted-foreground transition-colors hover:text-primary"
            key={idx}
          >
            {project.name}
          </Link>
        ))}
      </div>
      <div className="md:max-w-40 space-y-3">
        <Separator />
        <Link
          href="/projects"
          className="w-max text-muted-foreground transition-colors hover:text-color-primary"
        >
          More projects
        </Link>
      </div>
    </section>
  );
};

export { ProjectsSection };
