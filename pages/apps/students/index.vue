<template>
  <div>
    <div class="panel mt-6 pb-0">
      <div class="flex justify-between gap-5">
        <div class="grow-10">
          <span class="text-2xl">Data Siswa</span>
        </div>
        <NuxtLink to="/apps/students/form" class="btn btn-primary my-2">
          Tambah Siswa
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
          <template #action="data">
            <div class="flex items-center justify-center text-center">
              <button
                type="button"
                class="btn btn-primary text-center"
                v-tippy
                @click="
                  () => navigateTo('/apps/students/' + data.value.noinduksiswa)
                "
              >
                Cetak
              </button>
              <button
                type="button"
                class="btn btn-primary text-center"
                v-tippy
                @click="
                  () => {
                    Swal.fire({
                      title: 'Are you sure?',
                      text: 'You won\'t be able to revert this!',
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!',
                    }).then(async (result) => {
                      if (result.isConfirmed) {
                        const r = await StudentService.delete(
                          data.value.noinduksiswa,
                          auth.token
                        );
                        //@ts-ignore
                        rows.values = rows.values.filter((row: any) => row.noinduksiswa != data.value.noinduksiswa);
                        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        console.log(r);
                      }
                    });
                  }
                "
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-success text-center"
                v-tippy
                @click="
                  () =>
                    navigateTo(
                      '/apps/students/' + data.value.noinduksiswa + '/edit'
                    )
                "
              >
                Edit
              </button>
            </div>
          </template>
        </vue3-datatable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Vue3Datatable from '@bhplugin/vue3-datatable';
const rows = ref([]);
import { useAuth } from '@/stores/auth';
import Swal from 'sweetalert2';
import StudentService from '@/services/StudentService';
const auth = useAuth();
try {
  const students = await StudentService.all(auth.token);
  rows.value = students;
} catch (error) {
  console.error(error);
}
useHead({ title: 'Column Filter Table' });
const cols = ref([
  { field: 'noinduksiswa', title: 'No Induk Siswa' },
  { field: 'nama_siswa', title: 'Nama Siswa' },
  { field: 'kota', title: 'Kota' },
  { field: 'kelurahan', title: 'Kelurahan' },
  { field: 'alamat', title: 'Alamat' },
  { field: 'notelepon', title: 'No Telepon' },
  { field: 'jeniskelamin', title: 'Jenis Kelamin' },
  { field: 'email', title: 'Email' },
  { field: 'tahunajaran', title: 'Tahun Ajaran' },
  { field: 'tanggal_lahir', title: 'Tanggal Lahir', type: 'date' },
  { field: 'action', title: 'Aksi', filter: false },
]);

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
