// Extended Next Link
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends NextLinkProps {
    iconSize?: string | number,
    hideIcon?: boolean,
    isExternal?: boolean
}

const Link: React.FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, className, iconSize = "4", hideIcon, isExternal, ...props }) => {
    const LinkStyle = "flex flex-row items-center gap-1";

    return (
        <NextLink href={href} className={cn(LinkStyle, className)} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} {...props}>
            {props.children}
            {isExternal && !hideIcon && (
                <ExternalLink className={cn(`w-${iconSize}`)} />
            )}
        </NextLink>
    )
}

export type { LinkProps };
export default Link;