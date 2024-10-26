// Page brand template

import Link from "@/sys-app-webkit/next/components/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import clsx from "clsx";

const BaseClass = "m-0 p-0 flex justify-start items-center gap-2 font-bold";
const LinkClass = "cursor-pointer select-none";
const Text = "Runkang10";
const Suffix = ".dev";

const PageBrandTemplate = () => (
  <div className={BaseClass}>
    <Image src={Logo} alt={Text} width={40} height={40} priority />
    <span className="text-lg">
      {Text}
      <span className="text-xs">{Suffix}</span>
    </span>
  </div>
);

const PageBrandTemplateLink = () => (
  <Link href="/" className={clsx(BaseClass, LinkClass)}>
    <PageBrandTemplate />
  </Link>
);

export { PageBrandTemplate, PageBrandTemplateLink };
