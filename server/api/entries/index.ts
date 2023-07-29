import { getEntries } from '@/utils/dictionary';

export default defineEventHandler((event) => {
  return getEntries();
});
