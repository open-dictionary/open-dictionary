<script setup lang="ts">
const route = useRoute();
const entry = route.params.entry as string;
const { data: words } = await useFetch(`/api/entries/${entry}`);
</script>
<template>
  <h1>
    #{{ entry.toUpperCase() }}
    <small>The entry</small>
  </h1>
  <hr />
  <section class="list-columns">
    <ul class="list-disc mb-12">
      <li v-for="word of words">
        <NuxtLink :to="`/dictionaries/en/words/${word}`">{{ word }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
h1 {
  small {
    color: grey;
    font-size: small;
  }
}
</style>
