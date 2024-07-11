<script setup lang="ts">
const route = useRoute();
import ApiService from '@/services/ApiServices';
import endpoints from '@/config';
const student = useState('student', () => ({
  id: '1008',
  noinduksiswa: 1008,
  kota: 'Medan',
  isParent: false,
  agama: 'Islam',
  noregsiswa: 'd51b227f-40ff-450b-ab24-31e7389f57c9',
  isAdmin: false,
  kelurahan: 'Melati',
  alamat: 'Jl. Merdeka 10',
  password: '$2b$10$5s8zl7qHCxryD6d35tsvbuee.zBB7Jt1Ok5zv9JRmeYm1utYMBCwq',
  notelepon: '081234567890',
  isSiswa: true,
  nama_siswa: 'John Doe',
  tempat_lahir: 'Jakarta',
  tahunAjaranSekarang: '2024-2025',
  kelas: 7,
  kecamatan: 'Medan Kota',
  tahunajaran: '2024-2025',
  kodepos: '20234',
  tglregestrasi: '2024-06-22',
  tanggal_lahir: '2007-05-15',
  email: 'johndoe@example.com',
}));
console.info(route.params.id);
ApiService.get(endpoints.students.getOne(route.params.id as string)).then(
  (res) => {
    student.value = res;
    console.info(student.value);
  }
);
</script>
<template>
  <div
    class="mb-5 grid gap-5 sm:mx-1 sm:grid-cols-1 lg:mx-auto lg:w-1/2 lg:grid-cols-1"
  >
    <div class="panel">
      <div class="mb-5 flex items-center justify-between">
        <h5 class="text-lg font-semibold dark:text-white-light">Profile</h5>
      </div>
      <div class="mb-5">
        <ul class="mt-5 flex flex-col space-y-4 font-semibold text-white-dark">
          <li class="flex justify-between gap-2">
            <span class="w-1/2 font-light">Nama</span>
            <span class="w-1/2 font-black">{{ student.nama_siswa || '' }}</span>
          </li>
          <li class="flex justify-between gap-2">
            <span class="w-1/2 font-light">Email</span>
            <span class="w-1/2 font-black">{{ student.email || '' }}</span>
          </li>
          <li class="flex justify-around gap-2">
            <span class="w-1/2 font-light">Agama</span>
            <span class="w-1/2 font-black">{{ student.agama || '' }}</span>
          </li>
          <li class="flex justify-around gap-2">
            <span class="w-1/2 font-light">Alamat</span>
            <span class="w-1/2 font-black">{{ student.alamat || '' }}</span>
          </li>
          <li class="flex justify-around gap-2">
            <span class="w-1/2 font-light">Kelurahan</span>
            <span class="w-1/2 font-black">{{ student.kelurahan || '' }}</span>
          </li>
          <li class="flex justify-around gap-2">
            <span class="w-1/2 font-light capitalize">kecamatan</span>
            <span class="w-1/2 font-black">{{ student.kecamatan || '' }}</span>
          </li>
          <li class="flex justify-around gap-2">
            <span class="w-1/2 font-light capitalize">no telepon</span>
            <span class="w-1/2 font-black">{{ student.notelepon || '' }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
