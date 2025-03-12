<template>
  <div class="flex flex-col gap-6">
    <TextTitle title="Pengumuman" subtitle="Buatlah pengumuman" />

    <div class="flex-1 flex flex-col gap-2 bg-primary-200 p-3">
      <div>
        <p>pengumuman</p>
        <input
          type="text"
          class="bg-primary-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="form.content"
        />
      </div>
      <ButtonPrimary @click="simpan">Simpan</ButtonPrimary>
    </div>

    <div class="flex flex-col gap-3">
      <div
        class="flex items-center gap-2 p-3 bg-primary-200 rounded-lg w-full"
        v-for="item in store.data?.data"
        :key="item.id"
      >
        <DashboardActionDelete />
        <p class="text-[16px] font-bold">
          {{ item?.created_at }}
        </p>
        <p class="text-[16px]">
          {{ item?.content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { usePengumumanStore } from "@/stores/pengumuman/pengumuman.store.js";
export default {
  data() {
    return {
      store: usePengumumanStore(),
      form: {
        content: "",
      },
    };
  },
  async mounted() {
    await this.store.fetch();
  },
  methods: {
    simpan() {
      this.store.add(this.form);
    },
  },
};
</script>
<style></style>
