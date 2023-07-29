<script setup lang="ts">
const { data: entries } = await useFetch('/api/entries');
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>
<template>
  <h1>English Dictionary Entries</h1>
  <hr />
  <section v-for="alphabet in alphabets" class="list-columns">
    <!-- <NuxtLink :to="`definitions/en/entry`">{{ item }}</NuxtLink> -->
    <a :href="`#${alphabet}`">
      <h2 class="pl-0 mt-12"># {{ alphabet }}</h2>
    </a>
    <hr />
    <ul class="list-disc mb-12">
      <li
        v-for="entry of entries?.filter((item: string) => item.startsWith(alphabet.toLowerCase()))"
      >
        <NuxtLink v-if="entry.length == 1" :to="`en/words/${entry}`">{{ entry }}</NuxtLink>
        <NuxtLink v-else :to="`en/entries/${entry}`">{{ entry }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
