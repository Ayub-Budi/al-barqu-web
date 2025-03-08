<template>
  <div class="flex flex-col gap-6">
    <TextTitle title="Banner" subtitle="Buatlah banner dengan lebih menarik" />

    <div class="flex justify-center gap-3  bg-primary-200">
      <div class="flex flex-col justify-center gap-2 p-3">
        <p class="text-[30px] font-bold">
          {{ store.data?.title }}
        </p>
        <p class="text-[16px]">
          {{ store.data?.subtitle }}
        </p>
      </div>

      <img :src="store.data?.image" alt="" class="w-[300px] object-cover">
    </div>

    <div class="flex gap-3">
      <div class="flex-1 flex flex-col gap-2 bg-primary-200 p-3">
        <div>
          <p>Title</p>
          <input
            type="text"
            class="bg-primary-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="form.title"
          />
        </div>

        <div>
          <p>Deskripsi</p>
          <input
            type="text"
            class="bg-primary-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="form.subtitle"
          />
        </div>
        <ButtonPrimary @click="simpan">Simpan</ButtonPrimary>
      </div>

      <div class="flex-1 flex flex-col justify-between bg-primary-200 p-3">
        <div>
          <p>Gambar</p>
          <input
            type="file"
            class="bg-primary-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            @change="file.image = $event.target.files[0]"
          />
        </div>
        <ButtonPrimary @click="uploadImage">Upload Gambar</ButtonPrimary>
      </div>
    </div>
  </div>
</template>
<script>
import { useBannerStore } from "@/stores/banner/banner.store.js";
export default {
  data() {
    return {
      store: useBannerStore(),
      form: {
        title: "",
        subtitle: "",
      },
      file:{
        image: null
      }
    };
  },
  async mounted() {
    await this.store.fetch();

    this.form.title = this.store.data.title;
    this.form.subtitle = this.store.data.subtitle;
  },
  methods: {
    simpan() {
      this.store.update(this.form);
    },
    uploadImage() {
      this.store.uploadImage(this.file);
    },
  },
};
</script>
<style></style>
