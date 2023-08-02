<script setup lang="ts">
import CodeBlock from 'vue3-code-block';

definePageMeta({ layout: 'home' });
</script>
<template>
  <section class="text-center mx-auto lg:w-6/12 md:w-full">
    <div class="text-6xl sm:text-8xl md:text-9xl font-serif text-center">
      Open
      <br />
      Dictionary
    </div>
    <p class="md:text-2xl font-thin">An open source collaborative dictionary</p>
    <SearchInput class="" />
    <nav class="p-4">
      <ul class="flex gap-4 justify-center items-center">
        <li>
          <NuxtLink
            to="/dictionaries/en"
            class="bg-blue-500 p-3 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Entries
          </NuxtLink>
        </li>
        <li>
          <GithubButton href="https://github.com/open-dictionary" title="Github" />
        </li>
      </ul>
    </nav>
    <div class="text-left mt-32">
      <hr/>
      <h1>Introduction</h1>
      <p>
        <b>Open Dictionary</b> is an open source collaborative dictionary.
        This community-driven initiative aims to create a comprehensive and ever-evolving dictionary that captures the beauty and diversity of language from around the world.
        We believe that together, we can build a resource that will benefit language learners, linguists, and enthusiasts everywhere.
      </p>
      <h2 class="mb-2 mt-3">Usage:</h2>
      <p>
        The dictionary entries are kept as JSON files in the repository.
        You can get them directly using the GitHub Raw Files API or any other github CDN services like
        <a href="https://www.jsdelivr.com/github" class="text-blue-800">JS Deliver</a>.
        <br>
        The important thing to remember is to maintain the correct directory structure when forming the URL for accessing the word entries.
        <br>
        This way, you'll be able to access the information you need accurately and effortlessly :)
        <br />
        <h3 class="mb-2 mt-3">Using Github Raw Files:</h3>
        <ClientOnly fallback-tag="span" fallback="loading ...">
          <CodeBlock :highlightjs="true" :code="examples.github" lang="javascript" />
        </ClientOnly>
        <h3 class="mb-2">Using JS Deliver:</h3>
        <ClientOnly fallback-tag="span" fallback="loading ...">
          <CodeBlock :highlightjs="true" :code="examples.jsDeliver" lang="javascript" />
        </ClientOnly>
      </p>
      <h2 class="mb-2 mt-3">Collobration:</h2>
      <p>
        We truly believe that language is a bridge that connects us all, and with your help, we can create a dictionary that celebrates linguistic diversity and fosters mutual understanding.
        Together, let's embark on this exciting journey to build a remarkable collaborative dictionary!
      </p>
    </div>
  </section>
</template>
<script lang="ts">
export default defineComponent({
  data:() => ({
    examples: {
      github:`const word = 'butterfly';
const directory = word.split('').slice(0,2).join('/');
// b/u
const repository =  'open-dictionary/english-dictionary';
const branch = 'master';
const baseURL = 'https://raw.githubusercontent.com';
const url = \`\${baseURL}/\${repository}/\${branch}/\${directory}/\${word}/en.json\`;
// https://raw.githubusercontent.com/open-dictionary/english-dictionary/master/b/u/butterfly/en.json
const result = await fetch(url).then(res => res.json());`,
      jsDeliver: `const word = 'butterfly';
const directory = word.split('').slice(0,2).join('/');
// b/u
const repository =  'open-dictionary/english-dictionary';
const branch = 'master';
const baseURL = 'https://cdn.jsdelivr.net/gh';
const url = \`\${baseURL}/\${repository}@\${branch}/\${directory}/\${word}/en.json\`;
// https://cdn.jsdelivr.net/gh/open-dictionary/english-dictionary@master/b/u/butterfly/en.json
const result = await fetch(url).then(res => res.json());`,

    }
  }),
});
</script>
