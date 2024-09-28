// Markdown lib
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content", "projects");
const blogsDirectory = path.join(process.cwd(), "content", "blogs");

const getAllContentsMarkdown = async (directory: string) => {
  const fileNames = fs.readdirSync(directory);

  const allContentsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
    };
  });

  return allContentsData;
};

const getContentMarkdown = async (directory: string, id: string) => {
  const fullPath = path.join(directory, `${id}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHTML = processedContent.toString();

  return {
    id,
    contentHTML,
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format(
      "dddd, MMMM Do YYYY"
    ),
    authors: Array.isArray(matterResult.data.authors)
      ? matterResult.data.authors
      : [],
    keywords: Array.isArray(matterResult.data.keywords)
      ? matterResult.data.keywords
      : [],
  };
};

const getSortedByDate = (directory: string) => {
  const fileNames = fs.readdirSync(directory);

  const allContentsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
    };
  });

  return allContentsData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);

    if (dateOne.isBefore(dateTwo)) {
      return -1;
    }

    if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export { projectsDirectory, blogsDirectory };
export { getAllContentsMarkdown, getContentMarkdown, getSortedByDate };
