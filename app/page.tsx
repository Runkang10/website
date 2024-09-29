import Link from "@/sys-app-webkit/next/components/link";
import { buttonVariants } from "@/components/ui/button";
import { cn, getCurrentYear } from "@/lib/utils";
import HeroBanner from "@/public/herobanner.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="relative flex flex-row items-center w-full h-full">
            <Image
              src={HeroBanner}
              alt=""
              style={{ objectFit: "cover" }}
              fill
              className="w-full h-full"
            />
          </div>
        </div>
        <header className="relative flex flex-col lg:flex-row px-4 py-32 lg:py-48">
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <div className="max-w-7xl w-full mx-auto text-center lg:text-left">
              <h1 className="font-medium leading-normal lg:text-5xl lg:leading-normal text-4xl">
                Hi, I&apos;m Runkang10.
              </h1>
              <p className="font-medium leading-normal text-color-primary lg:text-4xl lg:leading-normal text-3xl">
                A {getCurrentYear() - 2010} years old developer.
              </p>
              <br />
              <div className="flex flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "default", className: "px-8" })
                  )}
                >
                  Projects
                </Link>
                <Link
                  href="https://github.com/Runkang10"
                  className={cn(
                    buttonVariants({ variant: "outline", className: "px-8" })
                  )}
                  isExternal
                  hideIcon
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        <div className="flex-1 p-8">
          <p className="md:text-center text-left italic">
            Currently I&apos;m learning Java for Minecraft development so i have
            less time in web development. I will come back to continue other
            projects.
          </p>
        </div>
      </div>
    </>
  );
}
