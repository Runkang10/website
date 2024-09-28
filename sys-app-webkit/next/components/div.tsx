// All div components

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const DivBox: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const DivClass = "flex flex-col";
  return (
    <div className={cn(DivClass, props.className)} {...props}>
      {props.children}
    </div>
)};

export { DivBox };
