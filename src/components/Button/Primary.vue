<template>
  <button class="bg-primary-400 p-2 rounded-md text-white hover:bg-primary-500" :type="type">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
  }
}
</script>
