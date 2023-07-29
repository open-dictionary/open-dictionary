<template>
  <main class="container mx-auto p-4">
    <slot />
  </main>
  <hr />
  <footer class="shadow-sm bg-white">
    <div class="container mx-auto p-4">
      <div class="text-4xl font-serif">Open Dictionary</div>
      <br>
      All rights are not reserved!
    </div>
  </footer>
</template>

<style scoped>
main {
  min-height: calc(100vh - 122px);
}
</style>
