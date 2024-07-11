<template>
  <div class="panel mt-6 pb-0">
    <div class="flex justify-between gap-5">
      <div class="grow-10">
        <span>Pembayaran Siswa</span>
      </div>
      <NuxtLink to="/apps/payments/form" class="btn btn-primary my-2">
        Tambah Pembayaran
      </NuxtLink>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tanggal Pembayaran</th>
            <th>Total Tagihan</th>
            <th class="">Tanggal Jatuh Tempo</th>
            <th class="text-center">Status</th>
            <th class="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="data in tableData" :key="data.id">
            <tr>
              <td class="whitespace-nowrap">{{ data.typeName }}</td>
              <td>{{ data.paymentDate }}</td>
              <td>{{ data.amount }}</td>
              <td>{{ data.paymentDeadline }}</td>
              <td
                class="whitespace-nowrap text-center"
                :class="{
                  'text-success': data.status === 'Lunas',
                  'text-secondary': data.status === 'Belum Lunas',
                }"
              >
                {{ data.status }}
              </td>
              <td class="flex justify-center gap-2 text-center">
                <button
                  class="btn btn-primary"
                  @click="$router.push(`/apps/payments/${data.id}/print`)"
                >
                  Cetak
                </button>
                <button
                  class="btn btn-primary"
                  @click="$router.push(`/apps/payments/${data.id}`)"
                >
                  Lihat
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- script -->
<script setup lang="ts">
// definePageMeta({
//   middleware: () => {
//     if (process.client) {
//       const { user } = useAuth();
//       if (!user.role) {
//         return navigateTo("/auth/login");
//       }
//     }
//   },
// });
definePageMeta({
  middleware: [() => {}, "auth"],
});
useSeoMeta({
  title: "Payment",
  description: "This is the about page",
});
import { useAuth } from "@/stores/auth";
import { ref } from "vue";
const tableData = ref([
  {
    id: 1,
    typeName: "SPP Januari",
    paymentDate: "2023-01-01",
    paymentDeadline: "2023-01-01",
    amount: "100000",
    status: "Lunas",
  },
  {
    id: 21,
    typeName: "SPP Februari",
    paymentDate: "2023-01-01",
    paymentDeadline: "2023-01-01",
    amount: "100000",
    status: "Lunas",
  },
]);
</script>
