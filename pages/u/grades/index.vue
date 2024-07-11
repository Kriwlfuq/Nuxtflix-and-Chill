<script setup lang="ts">
import { ref } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import Grades from '@/services/grades';
import endpoints from '@/config';
import { useAuth } from '@/stores/auth';
const { user } = useAuth();
const rows = useState('rows', () => []);
useHead({ title: 'Column Filter Table' });
definePageMeta({
  middleware: ['auth'],
});
const cols =
  ref([
    {
      field: 'rataNilaiUAS',
      title: 'Nilai UAS',
      type: 'number',
      filter: false,
    },
    {
      field: 'rataNilaiUTS',
      title: 'Nilai UTS',
      type: 'number',
      filter: false,
    },
    {
      field: 'rataNilaiUTS',
      title: 'Nilai UTS',
      type: 'number',
      filter: false,
    },
    { field: 'tahunAjaranSekarang', title: 'Tahun ajaran', type: 'number' },
    { field: 'kelas', title: 'Kelas', type: 'number' },
  ]) || [];
try {
  const grades = await Grades.get(endpoints.grades.getOne(user.nis));
  rows.value = grades;
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
  console.error(error.message);
}
</script>

<template>
  <div>
    <div class="panel mt-6 pb-0">
      <div class="flex justify-between gap-5">
        <div class="grow-10">
          <span class="text-2xl">Laporan Nilai</span>
        </div>
        <NuxtLink to="/apps/histories/print" class="btn btn-primary my-2">
          Cetak
        </NuxtLink>
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
          <template #dob="data">
            {{ formatDate(data.value.dob) }}
          </template>
        </vue3-datatable>
      </div>
    </div>
  </div>
</template>
