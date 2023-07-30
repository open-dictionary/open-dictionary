<template>
  <a
    class="inline-flex items-center justify-center h-9 mr-3 px-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    :href="href"
    target="_blank"
    dir="ltr"
  >
    <i class="fa-brands fa-github"></i>
    &nbsp; {{ title }}
  </a>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    href: String,
    title: String,
  },
});
</script>
<style scoped>
i {
  font-size: 1.5em;
}
</style>
