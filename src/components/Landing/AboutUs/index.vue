<template>
  <div>
    <LandingContainer class=" py-[100px] flex gap-10">
      <div>
        <div class="w-[500px] h-[500px] bg-slate-300"></div>
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