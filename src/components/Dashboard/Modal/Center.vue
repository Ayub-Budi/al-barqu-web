<template>
  <Teleport to="#app">
    <div class="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
      <div class="w-[600px] bg-white">
        <div class="p-3">
          <p class="text-[20px] font-bold">
            {{ title }}
          </p>
        </div>
        <hr>
        <div class="p-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script>
export default {
    props : ['title']
};
</script>
<style></style>
