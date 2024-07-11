<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import DueDateService from '@/services/DueDateService';
import { BadgeCent, BadgeDollarSign, CircleDollarSign, DollarSign } from 'lucide-vue-next';
const { user, token, role } = useAuth();
const { currentMonth, nextMonth, remainingMonth } = await DueDateService.get(
  user.nis,
  token
);
console.log(currentMonth, nextMonth, remainingMonth);
console.log(nextMonth.remainingMonths);
</script>
<template>
  <div class="p-6">
    <div class="container mx-auto">
      <h1 class="my-3 text-2xl">
        <span class="font-thin italic"> Welcome back, </span>
        <span class="font-bold">
          {{ user.name }}
          <span v-if="role === 'family'" class="text-sm font-thin"
            >(Orang Tua)</span
          ></span
        >
      </h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <img
            src="/assets/images/gedung.jpeg"
            alt="Hero Image"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="grid grid-rows-3 gap-6">
          <div
            class="my-auto flex h-32 content-center items-center justify-center overflow-hidden bg-red-400"
          >
            <div class="flex w-1/3 items-center justify-center">
              <BadgeCent :size="40" color="white" />
            </div>
            <div class="ml-10 w-2/3 truncate font-semibold text-white">
              <span class="block">Pembayaran bulan ini</span>
              <span class="block text-lg font-bold">{{
                currentMonth.totalBiaya
              }}</span>
              <span class="block">
                {{ currentMonth.data.monthName }}
                {{ currentMonth.data.year }}
              </span>
            </div>
          </div>

          <div class="flex h-32 items-center overflow-hidden bg-yellow-400">
            <div class="flex w-1/3 items-center justify-center">
              <CircleDollarSign :size="40" color="white" />
            </div>
            <div class="ml-10 w-2/3 truncate font-semibold text-white">
              <span class="block">Pembayaran bulan selanjutnya</span>
              <span class="block text-lg font-bold"
                >Rp. {{ nextMonth.remainingMonths[0].totalBiaya }}</span
              >
              <span class="block"
                >{{ nextMonth.remainingMonths[0].monthName }}
                {{ nextMonth.remainingMonths[0].year }}</span
              >
            </div>
          </div>

          <div class="flex h-32 items-center overflow-hidden bg-green-400">
            <div class="flex w-1/3 items-center justify-center">
              <BadgeDollarSign :size="40" color="white" />
            </div>
            <div class="ml-10 w-2/3 truncate font-semibold text-white">
              <span class="block">Pembayaran bulan selanjutnya</span>
              <span class="block text-lg font-bold"
                >Rp. {{ nextMonth.remainingMonths[1].totalBiaya }}</span
              >
              <span class="block"
                >{{ nextMonth.remainingMonths[1].monthName }}
                {{ nextMonth.remainingMonths[1].year }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-6 rounded-md bg-primary p-10 text-lg font-semibold text-white"
      >
        <article>
          Ini adalah Halaman dashboard yang digunakan untuk pembayaran sekolah.
          Ditampilkannya halaman ini adalah bukti bahwa anda adalah pengguna
          resmi aplikasi ini. Silahkan digunakan dengan baik. Terimakasih atas
          perhatiannya.
        </article>
      </div>
    </div>
  </div>
</template>
