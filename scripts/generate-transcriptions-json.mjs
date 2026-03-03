#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const dir = path.resolve('./src/pages/transcriptions');
const outFile = path.resolve('./src/pages/transcriptions/transcriptions.json');

async function build() {
  const names = await fs.readdir(dir);
  const htmls = names.filter((n) => n.endsWith('.html'));
  const arr = [];
  for (const name of htmls) {
    const filePath = path.join(dir, name);
    const content = await fs.readFile(filePath, 'utf8');
    const id = path.basename(name, '.html');
    arr.push({ id, body: content });
  }
  await fs.writeFile(outFile, JSON.stringify(arr, null, 2), 'utf8');
  console.log(`Wrote ${arr.length} entries to ${outFile}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
