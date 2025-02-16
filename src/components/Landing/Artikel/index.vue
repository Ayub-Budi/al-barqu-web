<template>
  <div>
    <LandingContainer class=" py-[100px]">
      <p class="text-[24px] font-bold">
        Artikel
      </p>
      <p>
        Berikut adalah dokumen tasi kegiatan kami
      </p>
      <div class="grid grid-cols-3 grid-flow-row gap-4">
        <LandingCardArtikel v-for="item in store?.datas?.articles" :key="item.id" :data="item" />
        <div class="flex flex-col items-center justify-center gap-3">
          <p class="text-[24px] font-semibold">
            Artikel Lainnya
          </p>
          <button class=" bg-primary-500 p-2 text-white font-bold rounded-[16px]">
            Selengkapnya
          </button>
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
  }
}
</script>
<style>
    
</style>