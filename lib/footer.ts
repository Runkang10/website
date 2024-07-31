// Footer lib
import FooterData from "@/data/footer.json";

interface FooterLink {
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