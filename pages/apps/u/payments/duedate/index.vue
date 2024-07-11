<script setup lang="ts">
import DueDateService from '@/services/DueDateService';


const { user, token } = useAuth();
const { currentMonth, nextMonth, remainingMonth } = await DueDateService.get(
  user.nis,
  token
);
console.log(
  '🚀 ~ currentMonth, nextMonth, remainingMont:',
  currentMonth,
  nextMonth
);
const { remainingMonths } = nextMonth;
console.log(remainingMonths);
console.log(user.nis);
</script>
<template>
  <p class="mb-5 block text-2xl font-semibold">Jatuh Tempo Pembayaran</p>
  <div class="mx-20">
    <div
      class="grid grid-cols-1 items-center justify-center gap-10 rounded-full"
    >
      <div
        class="my-4 min-h-[100px] min-w-[100px] rounded-xl bg-slate-100 p-12 shadow-md"
      >
        <div class="flex flex-col items-center justify-center gap-2">
          <span class="font-semibold"
            >Tagihan Berikutnya Bulan {{ currentMonth.data.monthName }}
            {{ currentMonth.data.year }}</span
          >
          <span class="text-3xl font-bold"> {{ currentMonth.totalBiaya }}</span>
          <span
            >Tanggal Jatuh Tempo {{ currentMonth.data.monthName }}
            {{ currentMonth.data.year }}
          </span>
        </div>
      </div>
    </div>

    <span class="mt-10 block text-xl">Tagihan bulan berikutnya</span>

    <div
      class="grid grid-cols-1 items-center justify-center gap-5 rounded-full"
      v-for="remainingMonth in remainingMonths"
    >
      <div
        class="my-4 min-h-[100px] min-w-[100px] rounded-xl bg-slate-100 p-10 shadow-md"
      >
        <div class="flex flex-row items-center justify-around gap-2">
          <div>
            <span class="block text-xl font-semibold"
              >{{ remainingMonth.monthName }} {{ remainingMonth.year }}</span
            >
            <span
              >Tanggal Jatuh Tempo 16 {{ remainingMonth.monthName }}
              {{ remainingMonth.year }}</span
            >
          </div>
          <span class="text-2xl font-bold"
            >Rp. {{ remainingMonth.totalBiaya }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
