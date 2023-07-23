<template>
  <header>
    <span class="brand">
      Open Dictionary
    </span>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/docs">Docs</NuxtLink>
      </li>
    </ul>
  </header>
  <main>
    <slot />
  </main>
  <footer>All rights are not reserved!</footer>
</template>
<style lang="scss">
.router-link-exact-active {
  color: #12b488;
}
</style>
