<script setup lang="ts">
import { languages } from '@/utils/languages';
const route = useRoute();
const word = route.params.word as string;
const repository = 'open-dictionary/english-dictionary';
const branch = 'master';
const directory = `${word.split('').slice(0, 2).join('/')}/${word}`;
const { data: dictionaries } = await useFetch(`/api/words/${word}`);
function generateURL(language: string) {
  return `https://github.com/${repository}/blob/${branch}/${directory}/definitions.${language}.yaml`;
}
</script>
<template>
  <h1>#{{ word }}</h1>
  <hr />
  <br />
  <!-- @vue-skip -->
  <section
    v-for="{ language, items, contributors } in dictionaries"
    :dir="languages[language].dir"
    class="mb-8"
  >
    <header class="flex items-center justify-between">
      <h2>
        <!-- @vue-skip -->
        <b>{{ languages[language].name }}</b>
      </h2>
      <github-button
        :href="`https://github.com/${repository}/edit/${branch}/${directory}/definitions.${language}.yaml`"
        title="Edit on Github"
      >
      </github-button>
    </header>
    <hr />
    <ol class="list-decimal">
      <li v-for="{ definition, pos } in items">
        <ul>
          <li>{{ definition }}</li>
          <li v-if="pos"><b>Pos: </b>{{ pos }}</li>
        </ul>
      </li>
    </ol>
    <div dir="ltr">
      <h3 class="mb-4">Source:</h3>
      <code-block>
        <a :href="generateURL(language)" target="_blank">{{ generateURL(language) }} </a>
      </code-block>
      <h3 class="mb-4 mt-4">Contributors:</h3>
      <ClientOnly fallback-tag="span" fallback="loading ...">
        <GithubContributors
          :repository="repository"
          :path="`${directory}/definitions.${language}.yaml`"
        />
      </ClientOnly>
    </div>
  </section>
</template>
<style lang="scss" scoped>
ol {
  margin: 35px;
  li:first-letter {
    text-transform: capitalize;
  }
}
</style>
