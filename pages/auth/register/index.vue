<script setup lang="ts">
definePageMeta({
  layout: 'auth-logo',
});

const nip = ref('');
const name = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
  console.log(nip.value, name.value, password.value);
};

const notMatchPassword = computed(() => {
  if (!confirmPassword.value) return false;
  return password.value !== confirmPassword.value;
});
</script>
<template>
  <img src="/assets/images/brand.png" alt="image description" class="" />
  <div class="min-w-96">
    <form @submit.prevent="register">
      <FormInput
        label="NIP"
        name="nip"
        :required="true"
        :placeholder="'Masukkan NIP'"
        v-model="nip"
      />
      <FormInput
        label="Nama"
        name="nama"
        :required="true"
        :placeholder="'Masukkan nama'"
        v-model="name"
      />
      <FormInput
        label="Password"
        name="password"
        :required="true"
        :type="'password'"
        :placeholder="'Masukkan password'"
        v-model="password"
      />
      <FormInput
        label="Konfirmasi password"
        name="Konfirmasi password"
        :required="true"
        :type="'password'"
        :placeholder="'Masukkan confirm password'"
        v-model="confirmPassword"
      />
      <span v-if="notMatchPassword" class="text-red-500"
        >Password tidak cocok</span
      >
      <div class="mb-5 flex items-start">
        <div class="flex h-5 items-center">
          <span
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Sudah mempunyai akun?
            <NuxtLink to="/auth/login">Masuk</NuxtLink></span
          >
        </div>
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>
