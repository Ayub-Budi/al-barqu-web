<template>
  <div class="flex-1 flex flex-col gap-6 h-full">
    <TextTitle
      title="Artikel"
      subtitle="Buatlah artikel yang menjelaskan tentang kegiatan El-Batros"
    />
    <div class="flex-1 flex gap-6 h-full">
        <!-- Input Deskripsi -->
      <div class="flex-1 flex flex-col gap-2">
        <p>Deskripsi</p>
        <textarea
          class="bg-primary-50 border h-full border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="form.content"
        ></textarea>
      </div>
      <div class="flex-1 flex flex-col gap-3">
        <div>
          <p>Gambar</p>
          <div
            class="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer min-h-[300px]"
            @click="triggerFileInput"
            @dragover.prevent
            @drop="handleDrop"
          >
            <p v-if="!image">Klik atau Seret Gambar ke Sini</p>
            <img
              v-else
              :src="image"
              alt="Preview"
              class="w-[300px] object-cover rounded-lg"
            />
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              accept="image/*"
              @change="handleImageUpload"
            />
          </div>
        </div>

        <!-- Input Title -->
        <div>
          <p>Title</p>
          <input
            type="text"
            class="bg-primary-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="form.title"
          />
        </div>

        <!-- Input Subtitle -->
        <div>
          <p>Sub Title</p>
          <input
            type="text"
            class="bg-primary-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="form.subtitle"
          />
        </div>

        <!-- Input Status -->
        <div>
          <label>Status</label>
          <div class="flex gap-3">
            <label class="flex gap-2 items-center">
              <input
                type="radio"
                name="status"
                value="publish"
                v-model="form.status"
              />
              <span>Publish</span>
            </label>
            <label class="flex gap-2 items-center">
              <input
                type="radio"
                name="status"
                value="draft"
                v-model="form.status"
              />
              <span>Draft</span>
            </label>
          </div>
        </div>

        <!-- Tombol Simpan -->
        <ButtonPrimary @click="simpan">Simpan</ButtonPrimary>
      </div>
      
    </div>
  </div>
</template>

<script>
import { useArtikelStore } from "@/stores/artikel/artikel.store.js";
export default {
  data() {
    return {
      store: useArtikelStore(),
      form: {
        title: "",
        subtitle: "",
        content: "",
        image: null, // File asli
        status: "",
      },
      image: null,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click(); // Klik input file saat div diklik
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.processFile(file);
    },
    handleDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      this.processFile(file);
    },
    processFile(file) {
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        alert("Harap pilih file gambar (jpg, png, gif)");
        return;
      }

      this.image = URL.createObjectURL(file); // Buat URL preview
      this.form.image = file; // Simpan file asli untuk dikirim ke server
    },
    simpan() {
      this.store.add(this.form);
      console.log(this.form);
      
    //   this.form = {
    //     title: "",
    //     subtitle: "",
    //     content: "",
    //     image: null, // File asli
    //     status: "",
    //   };
    //   this.image = null;
    }
  },
};
</script>

<style></style>
