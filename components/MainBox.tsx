import { HTMLAttributes } from "react";
import NavBar from "./navbar/navbar";
import { cn } from "@/lib/utils";

interface MainBoxElement extends HTMLAttributes<HTMLDivElement> {
  includeNavBar: boolean;
}

const MainBox: React.FC<MainBoxElement> = ({
  children,
  className,
  includeNavBar,
  ...props
}) => {
  return (
    <main className="min-w-full min-h-[550px] mx-auto flex-1 flex flex-col">
      <div className={cn("flex-1 flex flex-col", className)} {...props}>
        {includeNavBar ? <NavBar /> : null}
        {children}
      </div>
    </main>
  );
};

export { MainBox };
