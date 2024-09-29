// Implementation to read projects
import ProjectsData from "@/content/data/projects.json";
import { ProjectProps } from "@/types/project";

const GetAllProjects = (): ProjectProps[] => {
  return ProjectsData;
};

const GetProjects = (length: number) => {
  let getProjects: ProjectProps[] = ProjectsData;
  return getProjects.slice(0, length);
};

export { GetAllProjects, GetProjects };
