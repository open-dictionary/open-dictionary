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

      <svg
        @click="copy"
        class="shrink-0 h-5 w-5 transition text-gray-500 hover:text-white cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
          d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
        ></path>
      </svg>
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
