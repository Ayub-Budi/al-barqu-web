<template>
  <div>
    <p class="text-[12px] text-gray-500">
      {{ label }}
    </p>
    <p class="text-[14px] font-semibold">
      {{ value }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["label", "value"],
};
</script>
<style></style>
