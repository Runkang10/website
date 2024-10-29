// Data lib
import path from "path";
import fs from "fs";

const getCurrentBranch = () => {
  const head = fs
    .readFileSync(path.join(process.cwd(), ".git/HEAD"), "utf8")
    .trim();
  return path.basename(head.split(" ")[1]);
};

const getCommitID = (): {
  ok: boolean;
  id: string;
} => {
  try {
    const head = fs
      .readFileSync(path.join(process.cwd(), ".git/HEAD"), "utf8")
      .trim();
    const refPath = head.split(" ")[1];
    const CommitId = fs
      .readFileSync(path.join(process.cwd(), ".git", refPath), "utf8")
      .trim();
    return {
      ok: true,
      id: CommitId,
    };
  } catch {
    return {
      ok: false,
      id: "Unknown",
    };
  }
};

const getFormatedCommitBasedVersion = () => {
  const Branch = getCurrentBranch();
  const CommitId = getCommitID();
  let versionBranch: string = "";

  switch (Branch) {
    case "main":
      versionBranch = "prod";
      break;
    case "master":
      versionBranch = "prod";
      break;
    case "dev":
      versionBranch = "dev";
    default:
      versionBranch = Branch;
  }

  return {
    branch: `${versionBranch}@`,
    commit: CommitId,
  };
};

export { getCurrentBranch, getCommitID, getFormatedCommitBasedVersion };
