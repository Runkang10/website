// Projects (Show all projects)

import Header from "@/components/header";
import { DivBox } from "@/sys-app-webkit/next/components/div";

const Projects = () => {
  return (
    <DivBox>
      <Header disableDefaultBackground headerClassName="py-32 lg:py-40">
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="max-w-7xl w-full space-y-4 mx-auto text-center">
            <h1 className="font-semibold leading-normal lg:text-5xl lg:leading-normal text-4xl">
              My Projects
            </h1>
            <p className="text-base text-muted-foreground">Here you can find all my projects</p>
          </div>
        </div>
      </Header>
    </DivBox>
  );
};

export default Projects;
