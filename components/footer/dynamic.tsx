import Link from "@/components/link";
import FooterData from "@/content/data/footer.json";

const DynamicSection = () => {
  return FooterData.classes.map((section) => (
    <section
      className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm"
      id={section.target}
      key={section.target}
    >
      <span className="text-primary font-semibold">{section.name}</span>
      <div className="flex-1 flex flex-col space-y-2">
        {FooterData.links.map((item, idx) => {
          if (item.target === section.target) {
            return (
              <Link
                href={item.href.href}
                isExternal={item.href.external}
                hideIcon={item.href.external && item.href.hideicon}
                className="w-max text-muted-foreground transition-colors hover:text-primary"
                key={idx}
              >
                {item.name}
              </Link>
            );
          }
        })}
      </div>
    </section>
  ));
};

export { DynamicSection };
