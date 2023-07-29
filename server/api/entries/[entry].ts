import { getWords } from '@/utils/dictionary';

export default defineEventHandler((event) => {
  return getWords(event.context.params?.entry as string);
});
