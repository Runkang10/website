// Social links
import GithubLogo from "@/public/github/github-mark-white.svg";
import Image from "next/image";
import Link from "@/sys-app-webkit/next/components/link";

interface SocialProps {
  image: React.ReactNode;
  url: string;
}

// All links
const SocialList: SocialProps[] = [
  {
    image: <Image src={GithubLogo} alt="" width={17.5} height={17.5} />,
    url: "https://github.com/Runkang10/website/",
  },
];

const SocialLinks = ({ reverse }: { reverse: boolean }) => {
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

export { SocialLinks };
