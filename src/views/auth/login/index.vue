<template>
  <div class="flex">
    <div class="w-[500px] h-screen  bg-primary-300 p-5 flex flex-col justify-center items-center">
      <p class="text-[50px] font-bold">
        Al-Barqu
      </p>
      <div class="p-3 bg-primary-100">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias quis praesentium saepe quae reprehenderit culpa, eius perspiciatis minus voluptate ea doloremque laboriosam consequatur facilis, distinctio quaerat nulla eos natus.</p>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center h-screen">
      <div class="w-[500px]">
        <form action="" @submit.prevent="login">
          <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
              <input v-model="formData.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required>
          </div>
          <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
              <input v-model="formData.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required>
          </div>
          <ButtonPrimary :type="'submit'">
            Login
          </ButtonPrimary>
          <ButtonDanger @click="$router.push('/register')" class="ml-3">
            Register
          </ButtonDanger>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    useAuthStore
  } from "@/stores/auth.store.js"

  export default {
    data() {
      return {
        authStore: useAuthStore(),
        formData: {
          email: "",
          password: "",
        }
      }
    },
    methods: {
      login() {
        this.authStore.login(this.formData)
      }
    }
  }

</script>
