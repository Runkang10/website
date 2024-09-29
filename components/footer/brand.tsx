import Image from "next/image";
import Link from "@/sys-app-webkit/next/components/link";
import Logo from "@/public/logo.png";
import ProjectPackage from "@/package.json";
import { Badge } from "../ui/badge";
import { getCommitID } from "@/lib/data";
import { SocialLinks } from "./social";

const BrandSection = () => {
  // Get current commit id
  const CommitID = getCommitID();

  return (
    <section className="flex flex-col md:mr-8">
      <div className="flex justify-between items-center md:justify-start md:items-start md:flex-col min-h-[64px]">
        <div className="m-0 p-0 flex justify-start items-center gap-2 font-bold select-none">
          <Image src={Logo} alt="Runkang10" width={40} height={40} priority />
          Runkang10
        </div>
        <SocialLinks reverse />
      </div>
      {/* Shows website version and commit */}
      <div className="flex flex-col flex-wrap gap-1">
        <span className="text-sm text-primary whitespace-nowrap gap-2 flex flex-row items-center">
          Version:
          <Badge>v{ProjectPackage.version}</Badge>
        </span>
        <span className="text-sm text-primary whitespace-nowrap gap-2 flex flex-row items-center">
          Commit:
          <Badge>
            <Link
              href={`https://github.com/Runkang10/website/commit/${CommitID.id}`}
              isExternal
              hideIcon
              key={CommitID.id}
              title={CommitID.id}
            >
              {CommitID.id.slice(0, 7)}
            </Link>
          </Badge>
        </span>
      </div>
    </section>
  );
};

export { BrandSection };
