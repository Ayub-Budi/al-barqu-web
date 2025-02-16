<template>
  <div class="border-[1px] w-full p-5 rounded-[12px] bg-primary-200">
    <p class="text-[14px] font-bold">
      {{ title }}
    </p>
    <p class="text-[30px] font-bold">
      {{ desc }}
    </p>
  </div>
</template>
<script>
export default {
    props : ['title','desc']
}
</script>
<style>
    
</style>