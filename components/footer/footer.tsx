// Footer
import { getCurrentYear } from "@/lib/utils";
import { BrandSection } from "./brand";
import { ProjectsSection } from "./projects";
import { DynamicSection } from "./dynamic";
import { SocialLinks } from "./social";

const Footer = () => (
  <footer className="z-30 w-full p-4 border-t bg-background flex flex-col space-y-8">
    <div className="w-full block md:grid grid-cols-4 p-4 gap-8 md:space-y-0 space-y-8 justify-start items-start">
      <BrandSection />
      <ProjectsSection />
      <DynamicSection />
      {/* <ContactSection /> */}
    </div>
    {/* Copyright & Social links */}
    <div className="flex flex-row justify-between items-center">
      <p className="text-balance text-sm flex-1 leading-loose text-muted-foreground text-center md:text-left underline-offset-4">
        © {getCurrentYear()} Runkang10, all rights reserved.
      </p>
      <SocialLinks reverse={false} />
    </div>
  </footer>
);

export default Footer;
