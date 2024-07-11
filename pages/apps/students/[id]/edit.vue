<script lang="ts" setup>
import StudentService from '@/services/StudentService';
import { useAuth } from '@/stores/auth';
import Swal from 'sweetalert2';
const auth = useAuth();
console.log(auth);
const route = useRoute();
const paymentsId: string = route.params.id as string;
const excludes = ['id', 'noinduksiswa'];
const {
  id,
  noinduksiswa,
  isAdmin,
  isSiswa,
  isParent,
  noregsiswa,
  password,
  tglregestrasi,
  ...data
} = await StudentService.get(paymentsId, auth.token);
console.info(data);
const studentsData = ref({
  agama: 'Islam',
  alamat: 'Street A',
  email: 'neneng2100016121@webmail.uad.ac.id',
  id: '1000',
  isAdmin: false,
  isParent: false,
  isSiswa: true,
  kecamatan: 'Kecamatan A',
  kelas: 7,
  kelurahan: 'Kelurahan A',
  kodepos: '12345',
  kota: 'City A',
  nama_siswa: 'siswa1',
  noinduksiswa: 1000,
  noregsiswa: 'ce672778-c51d-40b5-b7d0-3b32301f4de6',
  notelepon: '08123456789',
  password: '$2b$10$b.hfPh4pBcFskVOIQw36V.SK72HCxG.Goy6KCLOmI4GzbmLNmZJ16',
  tahunAjaranSekarang: '2024-2025',
  tahunajaran: '2024-2025',
  tanggal_lahir: '2010-01-01',
  tempat_lahir: 'City A',
  tglregestrasi: '2024-06-13',
});
studentsData.value = data;
console.log(studentsData.value);
const submit = async () => {
  const r = await StudentService.update(
    noinduksiswa,
    studentsData.value,
    auth.token
  );
  Swal.fire({
    title: 'Data siswa berhasil diperbarui',
  });
  console.log(r);
};
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="panel mx-auto min-w-[800px] p-10">
      <div class="mb-5 flex items-center justify-between">
        <h5 class="text-lg font-semibold dark:text-white-light">Edit Siswa</h5>
      </div>
      <div class="mb-5">
        <form @submit.prevent="submit">
          <div class="flex flex-wrap gap-10 md:flex-nowrap">
            <div class="mb-5 flex flex-col gap-4 sm:w-full md:w-1/2 lg:w-full">
              <FormInput
                class="w-1/2"
                label="Nama siswa"
                type="text"
                name="nama_siswa"
                :required="true"
                placeholder="Masukkan nama"
                v-model="studentsData.nama_siswa"
              />
              <FormInput
                class="w-1/2"
                label="Email"
                type="email"
                name="email"
                :required="true"
                placeholder="Masukkan email"
                v-model="studentsData.email"
              />
              <FormInput
                class="w-1/2"
                label="agama"
                type="text"
                name="agama"
                :required="true"
                placeholder="Masukkan agama"
                v-model="studentsData.agama"
              />
              <FormInput
                class="w-1/2"
                label="tanggal lahir"
                type="date"
                name="tanggal_lahir"
                :required="true"
                placeholder="Masukkan tanggal lahir"
                v-model="studentsData.tanggal_lahir"
              />
              <FormInput
                class="w-1/2"
                label="Alamat"
                type="text"
                name="alamat"
                :required="true"
                placeholder="Masukan alamat"
                v-model="studentsData.alamat"
              />
              <FormInput
                class="w-1/2"
                label="Kecamatan"
                type="text"
                name="kecamatan"
                :required="true"
                placeholder="Masukan kecamatan"
                v-model="studentsData.kecamatan"
              />
              <FormInput
                class="w-1/2"
                label="kelurahan"
                type="text"
                name="kelurahan"
                :required="true"
                placeholder="Masukan kelurahan"
                v-model="studentsData.kelurahan"
              />
              <FormInput
                class="w-1/2"
                label="kota"
                type="text"
                name="kota"
                :required="true"
                placeholder="Masukan kota"
                v-model="studentsData.kota"
              />
              <FormInput
                class="w-1/2"
                label="kodepos"
                type="text"
                name="kodepos"
                :required="true"
                placeholder="Masukan kodepos"
                v-model="studentsData.kodepos"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-6">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
