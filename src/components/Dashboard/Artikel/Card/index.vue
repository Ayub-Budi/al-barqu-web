<template>
  <div class="w-full p-3 shadow-xl border rounded-[16px]">
    <div class="w-full h-[200px] relative overflow-hidden rounded-[12px]">
      <div class="absolute top-0 left-0 bg-primary-100 rounded-br-[12px]">
        <div class="p-[12px] relative">
          <div
            class="absolute w-[18px] h-[18px] rounded-tl-full border-t-[6px] border-l-[6px] border-primary-100 top-[-6px] right-[-12px]"
          ></div>
          <div
            class="absolute w-[18px] h-[18px] rounded-tl-full border-t-[6px] border-l-[6px] border-primary-100 bottom-[-12px] left-[-6px]"
          ></div>
          <p>
            {{ $dateFormat(data?.created_at, "DD/MM/YYYY") }}
          </p>
        </div>
      </div>
      <div class="w-full h-full bg-primary-200">
        <img :src="data?.image" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="mt-2 flex justify-between gap-2">
      <div class="flex items-center gap-2">
        <div class="w-[30px] h-[30px] rounded-full bg-primary-500 overflow-hidden flex justify-center items-center">
          <img :src="data?.author_image" alt="" class="w-full h-full object-cover" v-if="data?.author_image" />
          <p class="text-[14px] font-semibold text-white" v-else>
            {{ $initialsName(data?.author) }}
          </p>
        </div>
        <p class="text-[16px] font-semibold">
          {{ data?.author }}
        </p>
      </div>
      <div class="flex gap-2">
        <DashboardActionShow @click="$router.push(`/dashboard/artikel/${data?.id}`)" />
        <DashboardActionDelete @click="modal = true" />
      </div>
    </div>
    <div class="p-1 flex flex-col gap-2">
      <p class="text-[20px] font-semibold line-clamp-3">
        {{ data?.title }}
      </p>
      <p class="text-[16px] line-clamp-3">
        {{ data?.content }}
      </p>
    </div>
  </div>
  <DashboardModalCenter title="Hapus Artikel" v-if="modal">
    <p>Apakah kamu yakin ingin menghapus artikel ini?</p>
    <div class="flex gap-2 mt-3">
      <ButtonPrimary @click="$emit('delete', data?.id)">Hapus</ButtonPrimary>
      <ButtonDanger @click="modal = false">Batal</ButtonDanger>
    </div>
  </DashboardModalCenter>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete"],
  data() {
    return {
      modal: false,
    };
  },
};
</script>
<style></style>
