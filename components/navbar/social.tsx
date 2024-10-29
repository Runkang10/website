import { SocialLinksList } from "@/content/social";
import { cn } from "@/lib/utils";
import Link from "@/components/link";
import { buttonVariants } from "../ui/button";

const SocialLinks: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  ...props
}) => (
  <ul {...props}>
    {SocialLinksList.map((link, idx) => (
      <li className="text-sm p-1 flex justify-center items-center" key={idx}>
        <Link
          href={link.url}
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          isExternal
          hideIcon
        >
          {link.image}
        </Link>
      </li>
    ))}
  </ul>
);

export { SocialLinks };
