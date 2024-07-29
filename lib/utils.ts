import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const getDateYear = () => {
  const date = new Date();
  return date.getFullYear()
}

export { cn, getDateYear };