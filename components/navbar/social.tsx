import Links from "@/content/data/sociallinks.json";
import { cn } from "@/lib/utils";
import Link from "@/sys-app-webkit/next/components/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

const SocialLinks: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  ...props
}) => (
  <ul {...props}>
    {Links.map((link) => (
      <li className="text-sm p-1" key={link.name}>
        <Link
          href={link.href}
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          isExternal
          hideIcon
        >
          <Image src={link.image} alt={link.name} width={20} height={20} />
        </Link>
      </li>
    ))}
  </ul>
);

export { SocialLinks };
