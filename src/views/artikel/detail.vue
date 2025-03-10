<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between">
      <TextTitle
        title="Artikel Detail"
        :subtitle="`${store.data?.title} - ${store.data?.subtitle}`"
      />

      <!-- <div>
        <ButtonPrimary @click="$router.push('/dashboard/artikel/edit/' + store.data?.id)">
          Edit Artikel
        </ButtonPrimary>
      </div> -->
    </div>

    <div class="flex w-full flex-col gap-6 justify-center items-center">
      <div class="w-full flex justify-center">
        <img :src="store.data?.image" alt="" class="w-[60%] object-cover" />
      </div>
      <div class="flex flex-col gap-2 max-w-[60%]">
        <div>
          <p class="text-[30px] font-bold">
            {{ store.data?.title }}
          </p>
          <p class="text-[20px] font-bold text-gray-500">
            {{ store.data?.subtitle }}
          </p>
        </div>
        <p class="text-[16px]" v-html="formattedContent"></p>
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
    };
  },
  computed: {
    formattedContent() {
      return this.store.data?.content
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // **bold** → <b>bold</b>
        .replace(/_(.*?)_/g, "<i>$1</i>") // _italic_ → <i>italic</i>
        .replace(/~~(.*?)~~/g, "<del>$1</del>") // ~~coret~~ → <del>coret</del>
        .replace(/\r\n|\n/g, "<br>"); // Enter → <br>
    },
  },
  mounted() {
    this.store.detail(this.$route.params.id);
  },
};
</script>
<style></style>
