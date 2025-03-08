<template>
  <div class=" w-full bg-primary-200 py-[200px] rounded-b-[100px]">
    <LandingContainer class="flex justify-around ">
      <div class="flex flex-col justify-center">
        <p class="text-[50px] font-bold">
          {{ store.datas?.hero?.title }}
        </p>
        <p class=" text-[16px]">
          {{ store.datas?.hero?.subtitle }}
        </p>
      </div>
      <div>
        <img :src="store.datas?.hero?.image" alt="hero" class="w-[300px] object-cover" v-if="store.datas?.hero?.image">
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