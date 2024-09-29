import NavbarLinks from "@/content/data/navbar.json";
import { NavbarLink } from "@/types/navbar";

const GetNavbarLinks = (): NavbarLink[] => {
  return NavbarLinks;
};

export { GetNavbarLinks };
