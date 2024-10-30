import Image from "next/image";
import { Github } from "@/content/ImageProvider";
import { Discord } from "@/content/ImageProvider";

interface SocialProps {
  image: React.ReactNode;
  url: string;
}

const SocialLinksList: SocialProps[] = [
  {
    image: <Image src={Github} alt="" width={17.5} height={17.5} />,
    url: "https://github.com/Runkang10/website/",
  },
  {
    image: <Image src={Discord} alt="" width={17.5} height={17.5} />,
    url: "https://discord.com/invite/p8EnCgwWMd",
  },
];

export type { SocialProps };
export { SocialLinksList };
