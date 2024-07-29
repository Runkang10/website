// Data lib (Read data from @/data/)
import path from "path";
import fs from "fs";

const ReadAndGetAsList = async (fileName: string): Promise<any[]> => {
    try {
        const filePath = path.join(process.cwd(), "data", fileName);
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(jsonData);
        return Array.isArray(data) ? data : [data]
    } catch (error) {
        console.error(`Error reading file: ${error}`);
        return []
    }
}

export { ReadAndGetAsList };