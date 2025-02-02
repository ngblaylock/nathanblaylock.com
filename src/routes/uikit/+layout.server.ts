import fs from 'fs';
import { parse, join } from 'path';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  function readFiles(directoryPath: string) {
    const files = fs.readdirSync(directoryPath);

    const fileContents: Record<string, string> = {};

    files.forEach((file) => {
      const filePath = join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const fileName = parse(file).name;

      fileContents[fileName] = fileContent;
    });

    return fileContents;
  }

  // Call the function to read files and store content in an object
  const resultObject = readFiles(join(process.cwd(), 'src/lib/components/examples'));

  return { componentDoc: resultObject };
}
