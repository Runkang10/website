// Data lib (Read data from @/data/)
import path from "path";
import fs from "fs";

const ReadAndGetAsList = async (fileName: string): Promise<any[]> => {
  try {
    const filePath = path.join(process.cwd(), "data", fileName);
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return [];
  }
};

const getCommitId = async (): Promise<{
  ok: Boolean,
  id: string
}> => {
  try {
    const head = fs.readFileSync(path.join(process.cwd(), '.git/HEAD'), 'utf8').trim();
    const refPath = head.split(' ')[1];
    const CommitId = fs.readFileSync(path.join(process.cwd(), '.git', refPath), 'utf8').trim();
    return {
      ok: true,
      id: CommitId
    };
  } catch {
    return {
      ok: false,
      id: "Unknown"
    }
  }
};

export { ReadAndGetAsList, getCommitId };
