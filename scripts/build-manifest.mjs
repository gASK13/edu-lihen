import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { manifestEntry, topicManifestEntry, validateSubject, validateTopic } from './subject-schema.mjs';

const root = fileURLToPath(new URL('../subjects/', import.meta.url));
const ids = (await readdir(root, { withFileTypes: true })).filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
const entries = [];

for (const id of ids) {
  const dir = join(root, id);
  const subject = JSON.parse(await readFile(join(dir, 'subject.json'), 'utf8'));
  const subjectErrors = validateSubject(subject, `subjects/${id}/subject.json`);
  if (subjectErrors.length) throw new Error(subjectErrors.join('\n'));
  const topicFiles = (await readdir(join(dir, 'topics'))).filter(file => file.endsWith('.json')).sort();
  const topics = [];
  for (const file of topicFiles) {
    const topic = JSON.parse(await readFile(join(dir, 'topics', file), 'utf8'));
    const errors = validateTopic(topic, subject.id, `subjects/${id}/topics/${file}`);
    if (errors.length) throw new Error(errors.join('\n'));
    topics.push(topicManifestEntry(topic, `subjects/${id}/topics/${file}`));
  }
  if (!topics.length) throw new Error(`subjects/${id}: requires at least one topic`);
  const { card, schemaVersion, ...metadata } = subject;
  await writeFile(join(dir, 'manifest.json'), `${JSON.stringify({ schemaVersion: 1, ...metadata, topics }, null, 2)}\n`);
  entries.push(manifestEntry(subject, `subjects/${id}/manifest.json`));
}

entries.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'cs'));
await writeFile(join(root, 'manifest.json'), `${JSON.stringify({ schemaVersion: 1, subjects: entries }, null, 2)}\n`);
console.log(`Generated manifests for ${entries.length} subjects.`);
