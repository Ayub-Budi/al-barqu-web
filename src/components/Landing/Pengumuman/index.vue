<template>
  <div>
    <LandingContainer class="py-[100px]">
      <div class="p-[24px] border-[2px] border-black w-full">
        <P class="text-[24px] font-bold text-center">
          Pengumuman
        </P>

        <div class="flex flex-col gap-3">
          <div v-for="(item, index) in store.datas?.announcements" :key="index" class="flex gap-2">
            <p>
              {{ $dateFormat(item?.created_at, 'DD/MM/YYYY') }}
            </p>
            <p class="text-[16px] font-semibold">
              {{ item?.content }}
            </p>
          </div>
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