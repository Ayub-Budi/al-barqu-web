<template>
  <div class="w-full p-3 shadow-xl border rounded-[16px]">
    <div class="w-full h-[200px] relative overflow-hidden rounded-[12px]">
      <div class="absolute bg-white rounded-br-[12px]">
        <div class="p-[12px] relative">
          <div class="absolute w-[18px] h-[18px] rounded-tl-full border-t-[6px] border-l-[6px] border-white top-[-6px] right-[-12px]"></div>
          <div class="absolute w-[18px] h-[18px] rounded-tl-full border-t-[6px] border-l-[6px] border-white bottom-[-12px] left-[-6px]"></div>
          <p>
            {{ $dateFormat(data?.created_at, 'DD/MM/YYYY') }}
          </p>
        </div>
      </div>
      <div class="w-full h-full bg-blue-600">
        <img :src="data?.image" alt="" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="p-[12px] flex flex-col gap-2 ">
      <p class="text-[20px] font-semibold line-clamp-3">
        {{ data?.title }}
      </p>
      <p class="text-[16px] line-clamp-3">
        {{ data?.content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
</style>