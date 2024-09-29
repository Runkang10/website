import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { ExternalLink } from "lucide-react";
import { PageBrandTemplate } from "../pagebrandtemplate";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { SocialLinks } from "./social";
import Link from "@/sys-app-webkit/next/components/link";
import { Menu } from "lucide-react";
import { GetProjects } from "@/lib/project";
import { GetNavbarLinks } from "@/lib/navbar";
import { GetResources } from "@/lib/resource";

const HamburgerMenu = () => (
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="md:hidden block rounded">
      <Menu />
    </Button>
  </SheetTrigger>
);

const ProjectsSection = () => {
  let Projects = GetProjects(5);

  return (
    <div className="flex flex-col text-sm">
      <p className="font-semibold">Projects</p>
      <ul className="bg-background flex flex-col py-2 px-4">
        {Projects.map((project) => {
          return (
            <li className="text-sm p-1" key={project.name.toLowerCase()}>
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
            All projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ResourcesSection = () => {
  let Resources = GetResources(5);

  return (
    <div className="flex flex-col text-sm">
      <p className="font-semibold">Resources</p>
      <ul className="bg-background flex flex-col py-2 px-4">
        {Resources.map((resource) => {
          return (
            <li className="text-sm p-1" key={resource.name.toLowerCase()}>
              <Link
                href={resource.href.href}
                className="transition-all w-full hover:text-color-primary justify-between"
                isExternal={resource.href.external}
                hideIcon
              >
                {resource.name}
                {resource.href.external && (
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
            href="/projects"
            className="transition-all w-full hover:text-color-primary justify-between"
          >
            All resources
          </Link>
        </li>
      </ul>
    </div>
  );
};

const FixedSection = () => {
  return GetNavbarLinks().map((NavbarLink) => (
    <div className="flex flex-col text-sm" key={NavbarLink.name.toLowerCase()}>
      <Link
        href={NavbarLink.href.href}
        className="transition-all text-sm font-semibold hover:text-color-primary"
        isExternal={NavbarLink.href.external}
      >
        {NavbarLink.name}
      </Link>
    </div>
  ));
};

const MobileNavbar = () => {
  return (
    <Sheet>
      <HamburgerMenu />
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex flex-row items-center">
            <PageBrandTemplate />
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-4">
          <ProjectsSection />
          <ResourcesSection />
          <FixedSection />
          <div className="flex-1" />
          <SocialLinks className="flex flex-wrap gap-2" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavbar };
