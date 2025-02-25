<template>
  <div class="flex flex-col gap-5">
    <div class="flex gap-3">
      <DashboardCard title="Jumlah Pengguna" desc="100" />
      <DashboardCard title="Kas Unipam" desc="100.000" />
      <DashboardCard title="Iyuran Wajib" desc="100.000" />
    </div>

    <div>
      <p class="text-[18px] font-bold">
        List User
      </p>
      <div class="grid grid-cols-5 grid-flow-row gap-4">
        <DashboardCardUser v-for="(item, index) in datas" :key="index" :data="item" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      datas: [
        {
          nama: 'Ayub Budi Santoso',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        },
        {
          nama: 'Ayub Budi',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        },
        {
          nama: 'Ayub Budi',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        },
        {
          nama: 'Ayub Budi',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        },
        {
          nama: 'Ayub Budi',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        },
        {
          nama: 'Ayub Budi',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        },
        {
          nama: 'Ayub Budi',
          email: 'ayubbudi@gmail.com',
          rol: 'Admin',
          alamat: 'Widoro Rt-07'
        }
      ]
    }
  }
}
</script>
<style>
    
</style>