import { ProgrammingLanguagesType } from "@/types/tech";
import { getCurrentYear } from "./utils";
import { ProgrammingLanguages } from "@/content/tech";

const Title = "Runkang10";
const TitleTemplate = `%s - ${Title}`;

const formatedProgrammingLanguages = (
  languages: ProgrammingLanguagesType[]
): string => {
  return languages
    .map((lang) => lang.name)
    .join(", ")
    .replace(/, ([^,]+)$/, " and $1");
};

const Description = `Hi, I'm Runkang10, a ${
  getCurrentYear() - 2010
} years old ${formatedProgrammingLanguages(
  ProgrammingLanguages
)} developer.\nI am the founder of SyS App.`;

export { Title, TitleTemplate, Description };
