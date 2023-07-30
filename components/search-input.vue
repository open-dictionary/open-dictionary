<template>
  <div class="mt-16 font-serif">
    <div class="bg-white w-full h-16 rounded-xl mb-3 shadow-lg p-2">
      <input
        v-model="value"
        type="text"
        placeholder="Search"
        @input="onInput"
        class="w-full h-full p-2 text-2xl rounded-lg"
      />
    </div>
    <div
      v-if="value && items.length > 0"
      class="bg-white w-full rounded-xl shadow-xl overflow-hidden p-1"
    >
      <!-- items -->
      <div
        v-for="item of items"
        @click="redirect(item)"
        class="w-full flex p-3 pl-4 items-center hover:bg-gray-300 rounded-lg cursor-pointer"
      >
        <div class="font-bold text-lg capitalize">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  data: () => ({
    items: [] as string[],
    value: '',
  }),
  methods: {
    async onInput({ target }: Event) {
      const value = (target as HTMLInputElement).value;
      if (value.length > 1) {
        const entry = value.toLowerCase().split('').slice(0, 2).join('/');
        const { data } = await useFetch<string>(
          `https://raw.githubusercontent.com/open-dictionary/english-dictionary/master/${entry}/index.csv`,
        );
        const index = data.value?.split('\n') as string[];
        this.items = index.filter((item) => item.startsWith(value)).slice(0, 4);
      }
    },
    redirect(word: string) {
      this.value = word;
      this.$router.push(`/dictionaries/en/words/${word}`);
    },
  },
});
</script>
