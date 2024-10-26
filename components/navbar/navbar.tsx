// Navbar
import { PageBrandTemplateLink } from "../pagebrandtemplate";
import { SocialLinks } from "./social";
import { DesktopNavbar } from "./desktop";
import { MobileNavbar } from "./mobile";

const NavBar = () => (
  <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-shadow">
    <nav className="max-w-7xl flex flex-row items-center mx-auto px-4 py-3 gap-8">
      <PageBrandTemplateLink />
      <DesktopNavbar />
      <div className="flex-grow" />
      <SocialLinks className="hidden md:flex space-x-2" />
      <MobileNavbar />
    </nav>
  </header>
);

export default NavBar;
