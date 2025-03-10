<template>
  <div>
    <LandingContainer class=" py-[100px] flex items-center justify-center gap-10">
      <div class="flex justify-center items-center flex-1">
        <img :src="store.datas?.about?.image" alt="about" class="w-[500px] object-cover">
      </div>
      <div class="flex-1">
        <p class="text-[24px] font-bold">
          About Us
        </p>
        <div>
          <p class=" p-4 text-[16px]" v-html="formattedContent"></p>
        </div>
      </div>
    </LandingContainer>
  </div>
</template>
<script>
export default {
  props: {
    store: {
      type: Object,
      required: true
    }
  },

  computed: {
    formattedContent() {
      return this.store.datas?.about?.content
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // **bold** → <b>bold</b>
        .replace(/_(.*?)_/g, "<i>$1</i>") // _italic_ → <i>italic</i>
        .replace(/~~(.*?)~~/g, "<del>$1</del>") // ~~coret~~ → <del>coret</del>
        .replace(/\r\n|\n/g, "<br>"); // Enter → <br>
    },
  }
}
</script>
<style>
    
</style>