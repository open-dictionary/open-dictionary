<script setup lang="ts">
definePageMeta({
  layout: "home",
});
</script>
<template>
  <section class="text-center">
    <h1 class="text-9xl font-serif text-center">
      Open
      <br>
      Dictionary
    </h1>
    <p class="text-2xl font-thin">An open source collaborative dictionary</p>
    <SearchInput class="mx-auto lg:w-6/12 md:w-full" />
    <nav class="mx-auto p-4 flex justify-center items-center">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/dictionaries/en">Entries</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/docs">Docs</NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script lang="ts">
export default defineComponent({});
</script>
