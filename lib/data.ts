// Data lib
import path from "path";
import fs from "fs";

const getCommitID = (): {
  ok: boolean,
  id: string
} => {
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

export { getCommitID };
