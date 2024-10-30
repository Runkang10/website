// Page brand template
import Link from "@/components/link";
import Image from "next/image";
import { LogoPNG } from "@/content/ImageProvider";
import { cn } from "@/lib/utils";

const BaseClass = "m-0 p-0 flex justify-start items-center gap-2 font-bold";
const LinkClass = "cursor-pointer select-none";
const Text = "Runkang10";
const Suffix = ".dev";

const PageBrandTemplate = () => (
  <div className={BaseClass}>
    <Image src={LogoPNG} alt={Text} width={40} height={40} priority />
    <span className="text-lg">
      {Text}
      <span className="text-xs">{Suffix}</span>
    </span>
  </div>
);

const PageBrandTemplateLink = () => (
  <Link href="/" className={cn(BaseClass, LinkClass)}>
    <PageBrandTemplate />
  </Link>
);

export { PageBrandTemplate, PageBrandTemplateLink };
