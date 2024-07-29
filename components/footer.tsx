// Footer component
import Link from "./sys-app-webkit/next/components/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import GithubLogo from "@/public/github/github-mark-white.svg";
import { getDateYear } from "@/lib/utils";
// import { FooterConfig, FooterConfigItems } from "@/config/footer";
// import { CLink } from "@/components/ui/CLink";
// import { LogoWithText } from "@/components/logo/default";
// import { GithubLogo } from "@/components/logo/github";
// import { SocialProps } from "@/types/social";
// import { DiscordLogo } from "@/components/logo/discord";

interface ReverseProps {
    reverse: Boolean
}

interface SocialProps {
    image: React.ReactNode,
    url: string
}

// All social links (External)
const SocialList: SocialProps[] = [
    {
        image: <Image src={GithubLogo} alt="Github" width={17.5} height={17.5} />,
        url: "https://github.com/SyS-App/"
    }
]

const SocialLinks = ({ reverse }: ReverseProps) => {
    const SocialLinksStyle = !reverse ? "md:flex hidden items-center space-x-2" : "md:hidden flex items-center space-x-2";
    return (
        <div className={SocialLinksStyle}>
            {SocialList.map((social, idx) => (
                <Link href={social.url} key={idx} isExternal hideIcon>
                    {social.image}
                </Link>
            ))}
        </div>
    )
}

const Footer = () => {

    return (
        // Footer
        <footer className="z-30 w-full p-4 border-t bg-background flex flex-col space-y-8">
            <div className="w-full block md:grid grid-cols-4 p-4 gap-8 justify-start items-start">
                <section className="flex justify-between items-center md:justify-start md:items-start md:flex-col min-h-[64px]">
                    <div className="m-0 p-0 flex justify-start items-center gap-2 font-bold select-none">
                        <Image src={Logo} alt="Runkang10" width={40} height={40} priority />
                        Runkang10
                    </div>
                    <SocialLinks reverse={true} />
                </section>
                {/* {FooterConfig.map((section) => (
                    <section className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm" id={section.id} key={section.id}>
                        <span className="text-primary font-[500]">{section.label}</span>
                        <div className="flex-1 flex flex-col space-y-2">
                            {FooterConfigItems.map((item, idx) => {
                                if (item.to === section.id) {
                                    return (
                                        <div key={idx}>
                                            <CLink href={item.href} isExternal className="text-muted-foreground transition-colors hover:text-primary">
                                                {item.label}
                                            </CLink>
                                        </div>
                                    )
                                }
                                return
                            })}
                        </div>
                    </section>
                )
                )} */}
            </div>
            {/* Copyright & Social links */}
            <div className="flex flex-row justify-between items-center">
                <p className="text-balance text-sm flex-1 leading-loose text-muted-foreground text-center md:text-left underline-offset-4">
                    © {getDateYear()} Runkang10, all rights reserved.
                </p>
                <SocialLinks reverse={false} />
            </div>
        </footer>
    )
}

export default Footer;