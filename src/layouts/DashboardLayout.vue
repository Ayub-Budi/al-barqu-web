<template>
  <div class=" h-screen w-screen overflow-hidden bg-primary-100 flex">
    <DashboardSidebar />
    <div class="flex-1">
      <DashboardNavbar />
      <div class="p-5 overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    useAuthStore
  } from "@/stores/auth.store.js"

export default {
  name: 'ExampleLayout',
  data(){
    return {
      authStore: useAuthStore()
    }
  }
};
</script>

<style>
  .link{
    @apply px-2 cursor-pointer hover:text-primary-400;
  }
</style>
  