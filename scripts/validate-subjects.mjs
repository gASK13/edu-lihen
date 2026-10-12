import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateSubject, validateTopic } from './subject-schema.mjs';

const root = fileURLToPath(new URL('../subjects/', import.meta.url));
const ids = (await readdir(root, { withFileTypes: true })).filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
const errors = [];
let topics = 0;
for (const id of ids) {
  const dir = join(root, id);
  try {
    const subject = JSON.parse(await readFile(join(dir, 'subject.json'), 'utf8'));
    errors.push(...validateSubject(subject, `subjects/${id}/subject.json`));
    const files = (await readdir(join(dir, 'topics'))).filter(file => file.endsWith('.json'));
    if (!files.length) errors.push(`subjects/${id}: requires at least one topic`);
    for (const file of files) {
      const topic = JSON.parse(await readFile(join(dir, 'topics', file), 'utf8'));
      errors.push(...validateTopic(topic, subject.id, `subjects/${id}/topics/${file}`));
      topics += 1;
    }
  } catch (error) { errors.push(`subjects/${id}: ${error.message}`); }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Validated ${ids.length} subjects and ${topics} topics.`);
