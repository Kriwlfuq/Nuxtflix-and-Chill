<script setup lang="ts">
const { user, token } = useAuth();
useSeoMeta({
  title: 'Riwayat Pembayaran',
});
import { ref, watch } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import HistoryPayment from '@/services/HistoryPayment';

const cols =
  ref([
    { field: 'biayaBuku', title: 'biaya Buku', isUnique: true, filter: false },
    { field: 'biayaEkskul', title: 'biayaEkskul', filter: false },
    { field: 'biayaSeragam', title: 'biayaSeragam', type: 'string' },
    { field: 'biayaSPP', title: 'biayaSPP', type: 'string' },
    { field: 'biayaStudyTour', title: 'biayaStudyTour', type: 'string' },
    { field: 'isPaid', title: 'isPaid', type: 'boolean', filter: true },
    {
      field: 'tahunAjaranSekarang',
      title: 'tahunAjaranSekarang',
      type: 'string',
      filter: true,
    },
    {
      field: 'action',
      title: 'Action',
      sort: false,
      filter: false,
      headerClass: 'justify-center',
    },
  ]) || [];
const rows = ref([]);
const tahunAjaran = ref('');

const fetchHistoryPayments = async (tahunAjaranValue: string) => {
  try {
    const historyPayments = await HistoryPayment.get(tahunAjaranValue, token);
    rows.value = historyPayments;
    console.info(rows.value);
  } catch (error) {
    rows.value = [];
  }
};

try {
  const formatDate = (date: any) => {
    if (date) {
      const dt = new Date(date);
      const month =
        dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
      const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
      return day + '/' + month + '/' + dt.getFullYear();
    }
    return '';
  };
} catch (error) {
  if (error instanceof Error) {
  }
}

// Watch for changes in tahunAjaran and refetch data
watch(tahunAjaran, (newVal: any) => {
  console.info('newVal', newVal);
  if (newVal) {
    fetchHistoryPayments(`${user.nis}-${newVal}`);
  }
});

const print = (row: any) => {
  console.info(row);
  const id = row.id;
  navigateTo(`/apps/u/payments/histories/${id}/print`);
};

const formatDate = (date: string) => {
  if (date) {
    const dt = new Date(date);
    const month =
      dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
    const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
    return day + '/' + month + '/' + dt.getFullYear();
  }
  return '';
};

// Initial fetch
fetchHistoryPayments(`${user.nis}-2024-2025`);
</script>
<template>
  <div class="panel mt-6 pb-0">
    <div class="flex justify-between gap-5">
      <div class="grow-10 mb-5">
        <span class="text-2xl">Riwayat Pembayaran</span>
      </div>
    </div>
    <div class="flex justify-end py-2">
      <div>
        <label for="tahunAjaran" class="form-label"> Tahun Ajaran </label>
        <select
          name="tahunAjaran"
          id="tahunAjaran"
          class="form-multiselect"
          v-model="tahunAjaran"
        >
          <option value="">Tahun Ajaran</option>
          <option value="2024-2025">2024-2025</option>
          <option value="2025-2026">2025-2026</option>
        </select>
      </div>
    </div>
    <div class="datatable">
      <vue3-datatable
        :rows="rows"
        :columns="cols"
        :totalRows="rows?.length"
        :columnFilter="true"
        skin="whitespace-nowrap bh-table-hover"
        firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
        lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
        previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
        nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
      >
        <template #action="data">
          <div class="flex items-center justify-center text-center">
            <button
              type="button"
              class="btn btn-primary text-center"
              v-tippy
              @click="print(data.value.biayaSekolahId)"
            >
              Cetak
            </button>
          </div>
        </template>
      </vue3-datatable>
    </div>
  </div>
</template>
