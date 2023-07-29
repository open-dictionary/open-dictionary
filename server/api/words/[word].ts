import { getDefinitions } from '@/utils/dictionary';

export default defineEventHandler((event) => {
  return getDefinitions(event.context.params?.word as string);
});