<script setup lang="ts">
const { repository, path } = defineProps({
  repository: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
const contributors = await getContributors(repository, path);
</script>
<template>
  <a v-for="{ name, html_url, avatar_url } of contributors" :href="html_url" target="_blank">
    <img :src="avatar_url" :alt="name" class="w-12 rounded-full shadow-md m-2 inline" />
  </a>
</template>
