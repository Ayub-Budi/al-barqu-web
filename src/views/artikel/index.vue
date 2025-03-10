<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between">
      <TextTitle
        title="Artikel"
        subtitle="Buatlah artikel yang menjelaskan tentang kegiatan El-Batros"
      />

      <div>
        <ButtonPrimary @click="$router.push('/dashboard/artikel/add')">Tambah Artikel</ButtonPrimary>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-6">
      <DashboardArtikelCard v-for="item in store.datas?.data" :key="item.id" :data="item" @delete="handleDelete" />
    </div>
  </div>
</template>
<script>
import { useArtikelStore } from "@/stores/artikel/artikel.store.js";
export default {
  data() {
    return {
      store: useArtikelStore(),
    };
  },
  async mounted() {
    await this.store.fetch();
  },
  methods: {
    async handleDelete(id) {
      await this.store.delete(id);
      await this.store.fetch();
    },
  },
};
</script>
<style></style>
