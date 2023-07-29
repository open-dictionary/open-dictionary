<script setup lang="ts">
import { languages } from '@/utils/languages';
const route = useRoute();
const word = route.params.word as string;
const { data: dictionaries } = await useFetch(`/api/words/${word}`);
</script>
<template>
  <h1>#{{ word }}</h1>
  <hr />
  <br />
  <!-- @vue-skip -->
  <section v-for="{ language, items } in dictionaries" :dir="languages[language].dir">
    <h2>
      <!-- @vue-skip -->
      <b>{{ languages[language].name }}</b>
    </h2>
    <hr />
    <ol class="list-decimal">
      <li v-for="{ definition, pos } in items">
        <ul>
          <li>{{ definition }}</li>
          <li v-if="pos"><b>Pos: </b>{{ pos }}</li>
        </ul>
      </li>
    </ol>
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
