// Implementation to read resources
import ResourcesData from "@/content/data/resources.json";
import { ProjectProps } from "@/types/project";

const GetAllResources = (): ProjectProps[] => {
  return ResourcesData;
};

const GetResources = (length: number) => {
  let getProjects: ProjectProps[] = ResourcesData;
  return getProjects.slice(0, length);
};

export { GetAllResources, GetResources };
