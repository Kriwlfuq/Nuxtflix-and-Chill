<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/stores/auth';
import Swal from 'sweetalert2';
import AuthService from '@/services/AuthService';

import { AxiosError, type AxiosResponse } from 'axios';
import StudentService from '@/services/StudentService';
definePageMeta({
  layout: 'auth-logo',
});
useHead({ title: 'Login' });

const password = ref('');
const username = ref('');
const router = useRouter();
const auth = useAuth();

const adminLogin = async (): Promise<AxiosResponse<any, any>> => {
  try {
    return await AuthService.admin(username.value, password.value);
  } catch (error: any) {
    throw error;
  }
};

const login = async () => {
  try {
    let response: AxiosResponse = {} as AxiosResponse;
    if (username.value.includes('ortu')) {
      response = await AuthService.family(username.value, password.value);
      auth.setToken(response.data.token);
      auth.setRole('family');
      const payload = await AuthService.payload(auth.token);
      const { noinduksiswa, isAdmin, isSiswa, isParent, ...rest } =
        payload.data;
      auth.setUser({
        nis: noinduksiswa,
        username,
        isAdmin,
        isSiswa,
        isParent,
      });
      const { nama_siswa } = await StudentService.get(noinduksiswa, auth.token);
      auth.setName(nama_siswa);
      router.push('/apps/beranda');
      return;
    } else if (username.value.includes('admin')) {
      const result = await adminLogin();
      auth.setUser(result.data.data);
      auth.setToken(result.data.token);
      auth.setRole('admin');
      router.push('/apps/beranda');
    } else {
      const r = await AuthService.user(username.value, password.value);
      if (r.status === 200) {
        auth.setToken(r.data.token);
        auth.setRole('user');
        const payload = await AuthService.payload(auth.token);
        const { noinduksiswa, isAdmin, isSiswa, isParent } = payload.data;
        auth.setUser({
          nis: noinduksiswa,
          username,
          isAdmin,
          isSiswa,
          isParent,
        });
        const { nama_siswa } = await StudentService.get(
          noinduksiswa,
          auth.token
        );
        auth.setName(nama_siswa);
        router.push('/apps/beranda');
        return;
      }
    }
  } catch (error: any) {
    Swal.fire({
      title: error.response.data ? error.response.data : error.message,
    });
  }
};
</script>

<template>
  <div class="flex flex-row items-center justify-center lg:flex-col">
    <img
      src="/assets/images/brand.png"
      alt="image description"
      class="my-10 hidden md:block lg:my-10 lg:max-w-52"
    />
    <div class="min-w-96">
      <form @submit.prevent="login" class="flex flex-col gap-4">
        <FormInput
          label="Username"
          type="text"
          name="noreg"
          :required="true"
          placeholder="Masukkan username"
          v-model="username"
        />
        <FormInput
          label="Password"
          name="password"
          :required="true"
          type="password"
          placeholder="Masukkan password"
          v-model="password"
        />
        <div class="flex h-5 items-center">
          <span
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Belum mempunyai akun?
            <NuxtLink to="/auth/register">Daftar</NuxtLink></span
          >
        </div>
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
