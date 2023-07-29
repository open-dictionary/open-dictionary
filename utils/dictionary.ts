import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
// @ts-ignore
import _ from 'lodash';

const DICTIONARY_PATH = join(process.cwd(), 'node_modules/english-dictionary');

const indexesFiles = readdirSync(DICTIONARY_PATH).filter((item) => item.endsWith('.index.csv'));
const wordsMapMap = new Map<string, boolean>();

for (const indexesFile of indexesFiles) {
  const entries = readFileSync(join(DICTIONARY_PATH, indexesFile), 'utf-8').split('\n');
  for (const entry of entries) {
    wordsMapMap.set(entry, true);
  }
}

const words = _.uniq([...wordsMapMap.keys()]);

export function getEntries() {
  return _.uniq(words.map((word) => word.split('').slice(0, 2).join('')));
}

export function getWords(entry: string) {
  return words.filter((item) => item.startsWith(entry));
}
