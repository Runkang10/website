import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear()
}

export { cn, getCurrentYear };