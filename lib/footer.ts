// Footer lib
import FooterData from "@/data/footer.json";
import { LinkProps } from "@/sys-app-webkit/next/types/link";

interface FooterLink extends LinkProps {
    target: string | FooterClass
}

type FooterClass = {
    name: string,
    target: string
}

type FooterConfigProps = {
    links: FooterLink[],
    classes: FooterClass[]
}

export { FooterData };
export type { FooterLink, FooterClass, FooterConfigProps };