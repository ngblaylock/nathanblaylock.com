import fs from 'fs/promises';
import { parse, join } from 'path';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  async function readFiles(directoryPath: string) {
    const files = await fs.readdir(directoryPath);

    const fileContents: Record<string, string> = {};

    for (const file of files) {
      const filePath = join(directoryPath, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const fileName = parse(file).name;

      fileContents[fileName] = fileContent;
    }

    return fileContents;
  }

  const resultObject = await readFiles(join(process.cwd(), 'src/PACKAGE/examples'));

  return { componentDoc: resultObject };
}