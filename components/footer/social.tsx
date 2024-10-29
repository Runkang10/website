// Social links
import Link from "@/components/link";
import { SocialLinksList } from "@/content/social";

const SocialLinks = ({ reverse }: { reverse: boolean }) => {
  const SocialLinksStyle = !reverse
    ? "md:flex hidden items-center space-x-2"
    : "md:hidden flex items-center space-x-2";
  return (
    <div className={SocialLinksStyle}>
      {SocialLinksList.map((social, idx) => (
        <Link href={social.url} key={idx} isExternal hideIcon>
          {social.image}
        </Link>
      ))}
    </div>
  );
};

export { SocialLinks };
