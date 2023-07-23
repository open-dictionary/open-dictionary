<script setup lang="ts">
// @ts-ignore
const {
  public: { entries },
}: any = useRuntimeConfig();
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
    <ul class="list-disc mb-12">
      <li
        v-for="entry of entries.filter((item: string) => item.startsWith(alphabet.toLowerCase()))"
      >
        <NuxtLink :to="`definitions/en/entries/${entry}`">{{ entry }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="scss">
ul {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  padding-top: 35px;
  text-align: justify;
  li {
    text-transform: capitalize;
    margin-left: 2em;
    text-decoration: underline;
  }
}
</style>
