import Link from "@/sys-app-webkit/next/components/link";
import { getCommitID } from "@/lib/data";
import { SocialLinks } from "./social";
import { PageBrandTemplate } from "../pagebrandtemplate";

const BrandSection = () => {
  // Get current commit id
  const CommitID = getCommitID();

  return (
    <section className="flex flex-col gap-4 md:mr-8">
      <div className="flex justify-between items-center md:justify-start md:items-start md:flex-col">
        <PageBrandTemplate />
        <SocialLinks reverse />
      </div>
      {/* Shows website version and commit */}
      <div className="flex flex-col flex-wrap gap-1">
        <span className="text-sm text-muted-foreground gap-1 whitespace-nowrap flex flex-row items-center">
          My portfolio is open-source.
        </span>
        <span className="text-sm text-muted-foreground gap-1 whitespace-nowrap flex flex-row items-center">
          Inspired by
          <Link href="https://modrinth.com" isExternal>
            Modrinth
          </Link>
        </span>
        <span className="text-sm text-muted-foreground whitespace-nowrap flex flex-row items-center">
          prod@
          <Link
            href={`https://github.com/Runkang10/website/commit/${CommitID.id}`}
            className="text-color-primary transition-all hover:underline"
            isExternal
            hideIcon
            key={CommitID.id}
            title={CommitID.id}
          >
            {CommitID.id.slice(0, 7)}
          </Link>
        </span>
      </div>
    </section>
  );
};

export { BrandSection };
