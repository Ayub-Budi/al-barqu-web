<template>
  <div>
    <h1 class="font-semibold text-[24px]">{{ title }}</h1>
    <p class="text-[14px]">{{ subtitle }}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "subtitle"],
};
</script>
<style></style>
