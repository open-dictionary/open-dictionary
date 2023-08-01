<template>
  <div class="text-left w-full max-w-full overflow-x-auto" dir="ltr">
    <code
      class="text-sm sm:text-base inline-flex items-center space-x-4 justify-between bg-gray-800 text-white rounded-lg md:w-full p-4 pl-6"
    >
      <span class="flex gap-4">
        <span class="shrink-0 text-gray-500"> $ </span>
        <span class="flex-1" ref="content">
          <slot />
        </span>
      </span>

      <i
        @click="copy"
        class="fa-solid fa-clipboard shrink-0 h-5 w-5 transition text-gray-500 hover:text-white cursor-pointer"
      ></i>
    </code>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  methods: {
    copy() {
      // @ts-ignore
      navigator.clipboard.writeText(this.$refs.content.textContent);
    },
  },
});
</script>
