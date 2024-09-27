// Footer component
import Link from "@/sys-app-webkit/next/components/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import GithubLogo from "@/public/github/github-mark-white.svg";
import { getDateYear } from "@/lib/utils";
import { FooterData } from "@/lib/footer";
import { projectProps } from "./navbar";
import { getCommitId, ReadAndGetAsList } from "@/lib/data";
import { Separator } from "./ui/separator";
import ProjectPackage from "@/package.json";
import { Badge } from "./ui/badge";
// import { FooterConfig, FooterConfigItems } from "@/config/footer";
// import { CLink } from "@/components/ui/CLink";
// import { LogoWithText } from "@/components/logo/default";
// import { GithubLogo } from "@/components/logo/github";
// import { SocialProps } from "@/types/social";
// import { DiscordLogo } from "@/components/logo/discord";

interface ReverseProps {
  reverse: Boolean;
}

interface SocialProps {
  image: React.ReactNode;
  url: string;
}

// All social links (External)
const SocialList: SocialProps[] = [
  {
    image: (
      <Image src={GithubLogo} alt="Source code" width={17.5} height={17.5} />
    ),
    url: "https://github.com/Runkang10/website/",
  },
];

const SocialLinks = ({ reverse }: ReverseProps) => {
  const SocialLinksStyle = !reverse
    ? "md:flex hidden items-center space-x-2"
    : "md:hidden flex items-center space-x-2";
  return (
    <div className={SocialLinksStyle}>
      {SocialList.map((social, idx) => (
        <Link href={social.url} key={idx} isExternal hideIcon>
          {social.image}
        </Link>
      ))}
    </div>
  );
};

const Footer = async () => {
  // Get current commit id
  const CommitId = getCommitId();

  // Get projects then only shows 8
  let getProjects: projectProps[] = await ReadAndGetAsList("projects.json");
  getProjects = getProjects.slice(0, 8);

  return (
    // Footer
    <footer className="z-30 w-full p-4 border-t bg-background flex flex-col space-y-8">
      <div className="w-full block md:grid grid-cols-4 p-4 gap-8 md:space-y-0 space-y-8 justify-start items-start">
        <section className="flex flex-col md:mr-8">
          <div className="flex justify-between items-center md:justify-start md:items-start md:flex-col min-h-[64px]">
            <div className="m-0 p-0 flex justify-start items-center gap-2 font-bold select-none">
              <Image
                src={Logo}
                alt="Runkang10"
                width={40}
                height={40}
                priority
              />
              Runkang10
            </div>
            <SocialLinks reverse={true} />
          </div>
          {/* Shows website version and commit */}
          <div className="flex flex-col flex-wrap gap-1">
            <span className="text-sm text-primary whitespace-nowrap gap-2 flex flex-row items-center">
              Version:
              <Badge>v{ProjectPackage.version}</Badge>
            </span>
            <span className="text-sm text-primary whitespace-nowrap gap-2 flex flex-row items-center">
              Commit:
              <Badge>
                <Link
                  href={`https://github.com/Runkang10/website/commit/${CommitId.id}`}
                  isExternal
                  hideIcon
                  key={CommitId.ok && CommitId.id}
                  title={CommitId.ok && CommitId.id}
                >
                  {CommitId.id.slice(0, 7)}
                </Link>
              </Badge>
            </span>
          </div>
        </section>
        <section className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm">
          <span
            className="text-primary font-semibold"
            id="projects"
            key="projects"
          >
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
        {FooterData.classes.map((section) => (
          <section
            className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm"
            id={section.target}
            key={section.target}
          >
            <span className="text-primary font-semibold">{section.name}</span>
            <div className="flex-1 flex flex-col space-y-2">
              {FooterData.links.map((item, idx) => {
                if (item.target === section.target) {
                  return (
                    <Link
                      href={item.href.href}
                      isExternal={item.href.external}
                      hideIcon={item.href.external && item.href.hideicon}
                      className="w-max text-muted-foreground transition-colors hover:text-primary"
                      key={idx}
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
            </div>
          </section>
        ))}
      </div>
      {/* Copyright & Social links */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-balance text-sm flex-1 leading-loose text-muted-foreground text-center md:text-left underline-offset-4">
          © {getDateYear()} Runkang10, all rights reserved.
        </p>
        <SocialLinks reverse={false} />
      </div>
    </footer>
  );
};

export default Footer;
