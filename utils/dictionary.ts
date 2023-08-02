import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
// @ts-ignore
import _ from 'lodash';

export interface Entry {
  word: string;
  definitions: { definition: string; pos: string }[];
}

const DICTIONARY_PATH = join(process.cwd(), 'node_modules/english-dictionary');
const wordsMapMap = new Map<string, boolean>();
const entries = readFileSync(join(DICTIONARY_PATH, 'index.csv'), 'utf-8').split('\n');
for (const entry of entries) {
  wordsMapMap.set(entry, true);
}

const words = _.uniq([...wordsMapMap.keys()]);

export function getEntries() {
  return _.uniq(words.map((word) => word.split('').slice(0, 2).join('')));
}

export function getWords(entry: string) {
  return words.filter((item) => item.startsWith(entry));
}

export function getDefinitions(word: string) {
  const path = join(DICTIONARY_PATH, word.split('').slice(0, 2).join('/'), word);
  const definitionFiles = readdirSync(path).filter((item) => item.endsWith('.json'));
  const definitions = [];
  for (const filename of definitionFiles) {
    const content: Entry = JSON.parse(readFileSync(join(path, filename), 'utf-8')) as any;
    const language = filename.replace('.json', '');
    definitions.push({ language, content });
  }
  return definitions;
}
