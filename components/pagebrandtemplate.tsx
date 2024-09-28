// Page brand template

import Link from "@/sys-app-webkit/next/components/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

const PageBrandTemplate = () => {
  const LinkClass: string =
    "m-0 p-0 cursor-pointer flex justify-start items-center gap-2 font-bold select-none";
  const Text: string = "Runkang10";

  return (
    <Link href="/" className={LinkClass}>
      <Image src={Logo} alt={Text} width={40} height={40} priority />
      {Text}
    </Link>
  );
};

export { PageBrandTemplate };
