import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { uniq } from 'lodash';

const DICTIONARY_PATH = 'node_modules/english-dictionary';
const indexesFiles = readdirSync(DICTIONARY_PATH).filter((item) => item.endsWith('.index.csv'));
const words = new Map<string, boolean>();
for (const indexesFile of indexesFiles) {
  const entries = readFileSync(join(DICTIONARY_PATH, indexesFile), 'utf-8').split('\n');
  for (const entry of entries) {
    words.set(entry, true);
  }
}

export const entries = uniq([...words.keys()].map((word) => word.split('').slice(0, 2).join('')));
