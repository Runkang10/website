import { GetProjects } from "@/lib/project";
import Link from "@/components/link";
import { Separator } from "../ui/separator";

const ProjectsSection = () => {
  let getProjects = GetProjects(5);

  return (
    <section className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm">
      <span className="text-primary font-semibold" id="projects" key="projects">
        Projects
      </span>
      <div className="flex-1 flex flex-col space-y-2">
        {getProjects.map((project, idx) => (
          <Link
            href={project.href.href}
            isExternal
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
          href="https://github.com/Runkang10/"
          isExternal
          className="w-max text-muted-foreground transition-colors hover:text-color-primary"
        >
          More on Github
        </Link>
      </div>
    </section>
  );
};

export { ProjectsSection };
