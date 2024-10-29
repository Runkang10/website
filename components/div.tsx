// All div components

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const DivBox: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const DivClass = "flex flex-col";
  return (
    <div className={cn(DivClass, className)} {...props}>
      {children}
    </div>
  );
};

export { DivBox };
