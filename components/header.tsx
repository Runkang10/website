import { cn } from "@/lib/utils";
import HeroBanner from "@/public/herobanner.svg";
import Image from "next/image";

interface HeaderProps {
  children: React.ReactNode;
  disableDefaultBackground?: boolean;
  parentClassName?: string;
  backgroundDivClassName?: string;
  backgroundDivDivClassName?: string;
  backgroundDivDivImageClassName?: string;
  headerClassName?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  disableDefaultBackground,
  parentClassName,
  backgroundDivClassName,
  backgroundDivDivClassName,
  backgroundDivDivImageClassName,
  headerClassName,
}) => {
  // Parent (div)
  const DIV_STYLE = "relative w-full";
  // Background (div, div, Image)
  const BACKGROUND_DIV_STYLE = "absolute inset-0 -z-10 overflow-hidden";
  const BACKGROUND_DIV_DIV_STYLE =
    "relative flex flex-row items-center w-full h-full";
  const BACKGROUND_DIV_DIV_IMAGE_STYLE = "w-full h-full";
  // Header (header)
  const HEADER_STYLE = "relative flex flex-col lg:flex-row px-4 py-32 lg:py-48";

  return (
    <div className={cn(DIV_STYLE, parentClassName)}>
      {!disableDefaultBackground && (
        <div className={cn(BACKGROUND_DIV_STYLE, backgroundDivClassName)}>
          <div
            className={cn(BACKGROUND_DIV_DIV_STYLE, backgroundDivDivClassName)}
          >
            <Image
              src={HeroBanner}
              alt="Hero"
              style={{ objectFit: "cover" }}
              fill
              className={cn(
                BACKGROUND_DIV_DIV_IMAGE_STYLE,
                backgroundDivDivImageClassName
              )}
            />
          </div>
        </div>
      )}
      <header className={cn(HEADER_STYLE, headerClassName)}>{children}</header>
    </div>
  );
};

export default Header;
