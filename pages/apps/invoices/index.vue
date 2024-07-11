<script setup lang="ts">
useSeoMeta({
  title: 'Tagihan',
});
import { ref } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
useHead({ title: 'Column Filter Table' });

const cols =
  ref([
    { field: 'no', title: 'No', isUnique: true, filter: false },
    { field: 'invoiceType', title: 'invoiceType', filter: false },
    { field: 'amount', title: 'amount', type: 'number' },
    { field: 'deadline', title: 'Jatuh Tempo', type: 'date' },
    { field: 'status', title: 'status', type: 'string', filter: true },
  ]) || [];
const rows = ref(
  [
    {
      no: 1,
      invoiceType: 'SPP',
      amount: 1_000_000,
      deadline: '2004-05-28',
      status: 'Lunas',
    },
  ] || []
);

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
</script>
<template>
  <div class="panel mt-6 pb-0">
    <div class="flex justify-between gap-5">
      <div class="grow-10 mb-5">
        <span class="text-2xl">Tagihan Sekolah</span>
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
        <template #deadline="data">
          {{ formatDate(data.value.deadline) }}
        </template>
      </vue3-datatable>
    </div>
  </div>
</template>
