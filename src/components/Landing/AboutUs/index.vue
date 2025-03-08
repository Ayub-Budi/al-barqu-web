<template>
  <div>
    <LandingContainer class=" py-[100px] flex gap-10">
      <div>
        <img :src="store.datas?.about?.image" alt="about" class="w-[500px] object-cover">
      </div>
      <div>
        <p class="text-[24px] font-bold">
          About Us
        </p>
        <div>
          <p class=" p-4 text-[16px]">
            {{ store.datas?.about?.content }}
          </p>
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