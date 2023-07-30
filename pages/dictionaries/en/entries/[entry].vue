<script setup lang="ts">
const route = useRoute();
const entry = route.params.entry as string;
const { data: words } = await useFetch(`/api/entries/${entry}`);
</script>
<template>
  <h1>
    #{{ entry.toUpperCase() }}
    <small>the entry</small>
  </h1>
  <hr />
  <section>
    <ul class="list-disc columns-2 md:columns-3 lg:columns-4 pt-8">
      <li v-for="word of words" class="ml-4 capitalize">
        <NuxtLink :to="`/dictionaries/en/words/${word}`">{{ word }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>