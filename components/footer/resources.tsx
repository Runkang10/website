import { GetResources } from "@/lib/resource";
import Link from "@/sys-app-webkit/next/components/link";
import { Separator } from "../ui/separator";

const ResourcesSection = () => {
  let Resource = GetResources(8);

  return (
    <section className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm">
      <span className="text-primary font-semibold" id="resources" key="resources">
        Resources
      </span>
      <div className="flex-1 flex flex-col space-y-2">
        {Resource.map((resource) => (
          <Link
            href={resource.href.href}
            isExternal={resource.href.external}
            className="w-max text-muted-foreground transition-colors hover:text-primary"
            key={resource.name.toLowerCase()}
          >
            {resource.name}
          </Link>
        ))}
      </div>
      <div className="md:max-w-40 space-y-3">
        <Separator />
        <Link
          href="/changelogs"
          className="w-max text-muted-foreground transition-colors hover:text-color-primary"
        >
          Changelogs
        </Link>
        <Link
          href="/blogs"
          className="w-max text-muted-foreground transition-colors hover:text-color-primary"
        >
          Blogs
        </Link>
        <Link
          href="/projects"
          className="w-max text-muted-foreground transition-colors hover:text-color-primary"
        >
          More resources
        </Link>
      </div>
    </section>
  );
};

export { ResourcesSection };
