import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ExternalLink } from "lucide-react";
import Link from "@/components/link";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { GetProjects } from "@/lib/project";
import { GetNavbarLinks } from "@/lib/navbar";

const ProjectsSection = () => {
  // Get projects
  const Projects = GetProjects(5);
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="select-text text-sm transition-all hover:text-color-primary">
        Projects
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="bg-background flex flex-col py-2 px-4">
          {Projects.map((project) => {
            return (
              <li
                className="text-sm p-1"
                key={project.name.toLocaleLowerCase()}
              >
                <Link
                  href={project.href.href}
                  className="transition-all w-full hover:text-color-primary justify-between gap-2"
                  isExternal
                  hideIcon
                >
                  {project.name}
                  <ExternalLink className={cn("w-4")} />
                </Link>
              </li>
            );
          })}
          <li className="p-1 m-0">
            <Separator />
          </li>
          <li className="text-sm p-1">
            <Link
              href="https://github.com/Runkang10/"
              className="transition-all w-full hover:text-color-primary justify-between"
              isExternal
            >
              More projects
            </Link>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const FixedSection = () => (
  <>
    {GetNavbarLinks().map((NavbarLink) => (
      <NavigationMenuItem key={NavbarLink.name.toLowerCase()}>
        <Link
          href={NavbarLink.href.href}
          className="transition-all text-sm hover:text-color-primary"
          isExternal={NavbarLink.href.external}
        >
          {NavbarLink.name}
        </Link>
      </NavigationMenuItem>
    ))}
  </>
);

const DesktopNavbar = () => (
  <NavigationMenu>
    <NavigationMenuList className="hidden md:flex items-center justify-end gap-4">
      <ProjectsSection />
      <FixedSection />
    </NavigationMenuList>
  </NavigationMenu>
);

export { DesktopNavbar };
