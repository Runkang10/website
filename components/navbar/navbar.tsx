// Navbar
import ProjectsData from "@/content/data/projects.json";
import Links from "@/content/data/sociallinks.json";
import Image from "next/image";
import Link from "@/sys-app-webkit/next/components/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { HTMLAttributes } from "react";
import { PageBrandTemplate } from "../pagebrandtemplate";

export type projectProps = {
  name: string;
  href: {
    href: string;
    external: boolean;
  };
};

const SocialLinks: React.FC<HTMLAttributes<HTMLUListElement>> = ({
  ...props
}) => (
  <ul {...props}>
    {Links.map((link, idx) => (
      <li className="text-sm p-1" key={idx}>
        <Link
          href={link.href}
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          isExternal
          hideIcon
        >
          <Image src={link.image} alt={link.alt} width={20} height={20} />
        </Link>
      </li>
    ))}
  </ul>
);

const NavBar = () => {
  let getProjects: projectProps[] = ProjectsData;
  getProjects = getProjects.slice(0, 5);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-shadow">
      <nav className="max-w-7xl flex flex-row items-center mx-auto px-4 py-3 gap-8">
        <PageBrandTemplate />
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex items-center justify-end gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="select-text text-sm transition-all hover:text-color-primary">
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="bg-background flex flex-col py-2 px-4">
                  {getProjects.map((project, idx) => {
                    return (
                      <li className="text-sm p-1" key={idx}>
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
            <NavigationMenuItem>
              <NavigationMenuTrigger className="select-text text-sm transition-all hover:text-color-primary">
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="bg-background flex flex-col py-2 px-4">
                  {getProjects.map((project, idx) => {
                    return (
                      <li className="text-sm p-1" key={idx}>
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
            <NavigationMenuItem>
              <Link
                href="https://docs.runkang10.sysapp.org"
                className="transition-all text-sm hover:text-color-primary"
                isExternal
              >
                Docs
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className="transition-all text-sm hover:text-color-primary"
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="transition-all text-sm hover:text-color-primary"
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex-grow" />
        <SocialLinks className="hidden md:flex space-x-2" />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden block rounded"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="flex flex-row items-center">
                <PageBrandTemplate />
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col text-sm">
                <p className="font-semibold">Projects</p>
                <ul className="bg-background flex flex-col py-2 px-4">
                  {getProjects.map((project, idx) => {
                    return (
                      <li className="text-sm p-1" key={idx}>
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
              <div className="flex flex-col text-sm">
                <p className="font-semibold">Projects</p>
                <ul className="bg-background flex flex-col py-2 px-4">
                  {getProjects.map((project, idx) => {
                    return (
                      <li className="text-sm p-1" key={idx}>
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
              <div className="flex flex-col text-sm">
                <Link
                  href="https://docs.runkang10.sysapp.org"
                  className="transition-all text-sm font-semibold hover:text-color-primary"
                  isExternal
                >
                  Docs
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <Link
                  href="/about"
                  className="transition-all text-sm font-semibold hover:text-color-primary"
                >
                  About
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <Link
                  href="/contact"
                  className="transition-all text-sm font-semibold hover:text-color-primary"
                >
                  Contact
                </Link>
              </div>
              <div className="flex-1" />
              <SocialLinks className="flex flex-wrap gap-2" />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export { PageBrandTemplate };
export default NavBar;
