<script setup lang="ts">
const { data: entries } = await useFetch('/api/entries');
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>
<template>
  <h1>English Dictionary Entries</h1>
  <hr />
  <section v-for="alphabet in alphabets">
    <!-- <NuxtLink :to="`definitions/en/entry`">{{ item }}</NuxtLink> -->
    <a :href="`#${alphabet}`">
      <h2 class="pl-0 mt-12"># {{ alphabet }}</h2>
    </a>
    <hr />
    <ul class="list-disc columns-2 md:columns-3 lg:columns-4 pt-8">
      <li
        v-for="entry of entries?.filter((item: string) => item.startsWith(alphabet.toLowerCase()))"
        class="ml-4 capitalize underline"
      >
        <NuxtLink v-if="entry.length == 1" :to="`en/words/${entry}`">{{ entry }}</NuxtLink>
        <NuxtLink v-else :to="`en/entries/${entry}`">{{ entry }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
