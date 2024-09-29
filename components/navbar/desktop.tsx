import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ExternalLink } from "lucide-react";
import Link from "@/sys-app-webkit/next/components/link";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { GetProjects } from "@/lib/project";
import { GetNavbarLinks } from "@/lib/navbar";
import { GetResources } from "@/lib/resource";

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
              <li className="text-sm p-1" key={project.name.toLocaleLowerCase()}>
                <Link
                  href={project.href.href}
                  className="transition-all w-full hover:text-color-primary justify-between"
                  isExternal={project.href.external}
                  hideIcon
                >
                  {project.name}
                  {project.href.external && (
                    <ExternalLink className={cn("w-4")} />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="p-1 m-0">
            <Separator />
          </li>
          <li className="text-sm p-1">
            <Link
              href="/projects"
              className="transition-all w-full hover:text-color-primary justify-between"
            >
              More projects
            </Link>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ResourcesSection = () => {
  // Get resources
  const Resources = GetResources(5);
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="select-text text-sm transition-all hover:text-color-primary">
        Resources
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="bg-background flex flex-col py-2 px-4">
          {Resources.map((Resource) => {
            return (
              <li className="text-sm p-1" key={Resource.name.toLowerCase()}>
                <Link
                  href={Resource.href.href}
                  className="transition-all w-full hover:text-color-primary justify-between"
                  isExternal={Resource.href.external}
                  hideIcon
                >
                  {Resource.name}
                  {Resource.href.external && (
                    <ExternalLink className={cn("w-4")} />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="p-1 m-0">
            <Separator />
          </li>
          <li className="text-sm p-1">
            <Link
              href="/changelogs"
              className="transition-all w-full hover:text-color-primary justify-between"
            >
              Changelogs
            </Link>
          </li>
          <li className="text-sm p-1">
            <Link
              href="/blogs"
              className="transition-all w-full hover:text-color-primary justify-between"
            >
              Blogs
            </Link>
          </li>
          <li className="text-sm p-1">
            <Link
              href="/resources"
              className="transition-all w-full hover:text-color-primary justify-between"
            >
              More resources
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
      <ResourcesSection />
      <FixedSection />
    </NavigationMenuList>
  </NavigationMenu>
);

export { DesktopNavbar };
