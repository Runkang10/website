// Navbar
import Logo from "@/public/logo.png";
import GithubLogo from "@/public/github/github-mark-white.svg";
import Image from "next/image";
import Link from "./sys-app-webkit/next/components/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReadAndGetAsList } from "@/lib/data";
import { Separator } from "./ui/separator";

type projectProps = {
    name: string,
    href: {
        href: string,
        external: boolean
    }
}

const NavBar = async () => {
    const getProjects: projectProps[] = await ReadAndGetAsList("projects.json");

    return (
        <header className="sticky top-0 z-50 w-full bg-background transition-shadow">
            <nav className="max-w-7xl flex flex-row items-center mx-auto px-4 py-3 gap-8">
                <Link href="/" className="m-0 p-0 cursor-pointer flex justify-start items-center gap-2 font-bold select-none">
                    <Image src={Logo} alt="Runkang10" width={40} height={40} priority />
                    Runkang10
                </Link>
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
                                                <Link href={project.href.href} className="transition-all w-full hover:text-color-primary justify-between" isExternal={project.href.external} hideIcon>
                                                    {project.name}
                                                    {project.href.external && <ExternalLink className={cn("w-4")} />}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                    <li className="p-1 m-0">
                                        <Separator />
                                    </li>
                                    <li className="text-sm p-1">
                                        <Link href="/projects" className="transition-all w-full hover:text-color-primary justify-between">
                                            All projects
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="https://docs.runkang10.sysapp.org" className="transition-all text-sm hover:text-color-primary" isExternal>
                                Docs
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" className="transition-all text-sm hover:text-color-primary">
                                About
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" className="transition-all text-sm hover:text-color-primary">
                                Contact
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex-grow" />
                <ul className="hidden md:flex space-x-2">
                    <Link href="https://github.com/Runkang10" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))} isExternal hideIcon>
                        <Image src={GithubLogo} alt="Github" width={20} height={20} />
                    </Link>
                </ul>
                <Button variant="ghost" size="icon" className="md:hidden block rounded">
                    <Menu />
                </Button>
            </nav >
        </header >
    )
}

export default NavBar;