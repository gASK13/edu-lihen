import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'app.js', 'style.css', 'mascot-lab.html']) {
  await cp(join(root, file), join(output, file));
}
await cp(join(root, 'subjects'), join(output, 'subjects'), { recursive: true });
console.log('Built static site in dist/.');
