<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import AuthService from '@/services/auth';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
definePageMeta({
  layout: 'auth-logo',
});
const password = ref('');
const username = ref('');
const router = useRouter();
const auth = useAuth();

const login = async () => {
  try {
    AuthService.adminLogin(username.value, password.value)
      .then((result: any) => {
        auth.setUser(result.data.data);
        auth.setToken(result.data.token);
        auth.setRole('admin');
        router.push('/apps/beranda');
      })
      .catch((why) => {
        if (why instanceof AxiosError) {
          if (why.response?.status === 401) {
            return Swal.fire(
              'Login Failed',
              'Username dan password salah',
              'error'
            );
          }
          return Swal.fire('Login Failed', why.message, 'error');
        }
      });
  } catch (error: any) {
    Swal.fire('Login Failed', error.message, 'error');
    console.error('Login failed:', error);
  }
};

</script>
<template>
  <img
    src="/assets/images/brand.png"
    alt="image description"
    class="hidden bg-cover lg:block lg:max-w-[200px]"
  />
  <div class="min-w-96">
    <form @submit.prevent="login">
      <FormInput
        label="Username"
        type="text"
        name="noreg"
        :required="true"
        placeholder="Masukkan Username"
        v-model="username"
      />
      <FormInput
        label="Password"
        name="password"
        :required="true"
        :type="'password'"
        :placeholder="'Masukkan password'"
        v-model="password"
      />
      <div class="mb-5 flex items-start">
        <div class="flex h-5 items-center">
          <span
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Belum mempunyai akun?
            <NuxtLink to="/auth/register">Daftar</NuxtLink></span
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
