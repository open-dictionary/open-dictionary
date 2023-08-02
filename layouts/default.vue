<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/" class="font-serif brand text-2xl md:text-4xl">Open Dictionary</NuxtLink>
      <ul class="flex gap-4 items-center">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/dictionaries/en">Entries</NuxtLink>
        </li>
        <li>
          <GithubButton href="https://github.com/open-dictionary" title="Github" />
        </li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto p-4">
    <slot />
  </main>
  <hr />
  <footer class="shadow-sm bg-white">
    <div class="container mx-auto p-4">
      <div class="text-4xl font-serif">Open Dictionary</div>
      <br />
      All rights are not reserved!
    </div>
  </footer>
</template>
<style scoped>
main {
  min-height: calc(100vh - 192px);
}
</style>
