import Image from "next/image";
import GithubLogo from "@/public/github/github-mark-white.svg";
import DiscordLogo from "@/public/discord/discord-mark-white.svg";

interface SocialProps {
  image: React.ReactNode;
  url: string;
}

const SocialLinksList: SocialProps[] = [
  {
    image: <Image src={GithubLogo} alt="" width={17.5} height={17.5} />,
    url: "https://github.com/Runkang10/website/",
  },
  {
    image: <Image src={DiscordLogo} alt="" width={17.5} height={17.5} />,
    url: "https://discord.com/invite/p8EnCgwWMd",
  },
];

export type { SocialProps };
export { SocialLinksList };
