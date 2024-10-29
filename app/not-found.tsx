import { MainBox } from "@/components/MainBox";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "404",
  description: "This page could not be found.",
  openGraph: {
    title: "404",
    description: "This page could not be found.",
  },
  twitter: {
    title: "404",
    description: "This page could not be found.",
  },
};

const E404 = () => {
  return (
    <MainBox includeNavBar>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-center font-semibold">404</h1>
          <p className="text-sm lg:text-base text-center font-normal">
            This page could not be found.
          </p>
        </div>
      </div>
    </MainBox>
  );
};

export { metadata };
export default E404;
