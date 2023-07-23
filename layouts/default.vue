<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold font-serift">Open Dictionary</NuxtLink>
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/" class="btn flex">
            <i class="material-icons">home</i>
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/docs">Docs</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto p-4">
    <slot />
  </main>
  <footer class="container mx-auto p-4">
    All rights are not reserved!
  </footer>
</template>
<style lang="scss">
.router-link-exact-active {
  color: #12b488;
}
</style>
