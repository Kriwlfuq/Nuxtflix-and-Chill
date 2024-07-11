<script setup lang="ts">
import axios, { AxiosError } from 'axios';
import endpoints from '@/config';
import Swal from 'sweetalert2';

const nama_siswa = ref('');
const division = ref('');
const jeniskelamin = ref('');
const status = ref('');
const tempat_lahir = ref('');
const tanggalLahir = ref('');
const agama = ref('');
const alamat = ref('');
const kelurahan = ref('');
const kecamatan = ref('');
const kota = ref('');
const kodepos = ref('');
const notelepon = ref('');
const email = ref('');
const namaayah = ref('');
const pekerjaanayah = ref('');
const pendidikanayah = ref('');
const penghasilanayah = ref('');
const namaibu = ref('');
const pekerjaanibu = ref('');
const pendidikanibu = ref('');
const penghasilanibu = ref('');
const namawali = ref('');
const noteleponwali = ref('');
const emailOrtu = ref('');
const submit = async () => {
  const formData = {
    nama_siswa: nama_siswa.value,
    tempat_lahir: tempat_lahir.value,
    tanggal_lahir: tanggalLahir.value,
    agama: agama.value,
    alamat: alamat.value,
    kelurahan: kelurahan.value,
    kecamatan: kecamatan.value,
    kota: kota.value,
    kodepos: kodepos.value,
    notelepon: notelepon.value,
    namaayah: namaayah.value,
    pekerjaanayah: pekerjaanayah.value,
    pendidikanayah: pendidikanayah.value,
    penghasilanayah: penghasilanayah.value,
    jeniskelamin: jeniskelamin.value,
    status: status.value,
    email: email.value,
    namaibu: namaibu.value,
    pekerjaanibu: pekerjaanibu.value,
    pendidikanibu: pendidikanibu.value,
    penghasilanibu: penghasilanibu.value,
    namawali: namawali.value,
    noteleponwali: noteleponwali.value,
    emailOrtu: emailOrtu.value,
  };
  try {
    const { data } = await axios.post(endpoints.students.post, formData);
    Swal.fire({
      title: 'Data siswa berhasil ditambahkan',
    });
    console.info(data);
  } catch (error: any) {
    if (error instanceof AxiosError) {
      Swal.fire({
        title: 'Gagal menambahkan data siswa',
        icon: 'error',
        text:
          //@ts-ignore
          error.response.data !== undefined
            ? //@ts-ignore
              error.response.data
            : 'Terjadi kesalahan',
      });
    }

    console.error(error);
  }
};
</script>
<template>
  <div class="grid grid-cols-1">
    <div class="panel mx-10 p-10">
      <div class="mb-5 flex items-center justify-between">
        <h5 class="text-lg font-semibold dark:text-white-light">Data Siswa</h5>
      </div>
      <div class="mb-5">
        <form @submit.prevent="submit">
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="Nama Siswa"
                type="text"
                name="nama_siswa"
                :required="true"
                placeholder="Masukkan nama siswa"
                v-model="nama_siswa"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="tempat lahir"
                type="text"
                name="tempat_lahir"
                :required="true"
                placeholder="Masukkan nama tempat lahir"
                v-model="tempat_lahir"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <FormInput
              label="Tanggal Lahir"
              type="date"
              name="tanggal_lahir"
              :required="true"
              placeholder="Masukkan tanggal lahir"
              v-model="tanggalLahir"
            />
            <div class="w-full">
              <label
                for="jeniskelamin"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Jenis Kelamin</label
              >
              <select
                name="jeniskelamin"
                v-model="jeniskelamin"
                id="jeniskelamin"
                class="form-multiselect text-dark"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="agama"
                type="text"
                name="agama"
                :required="true"
                placeholder="Masukkan agama"
                v-model="agama"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="alamat"
                type="text"
                name="alamat"
                :required="true"
                placeholder="Masukkan nama alamat"
                v-model="alamat"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="kelurahan"
                type="text"
                name="kelurahan"
                :required="true"
                placeholder="Masukkan kelurahan"
                v-model="kelurahan"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="kecamatan"
                type="text"
                name="kecamatan"
                :required="true"
                placeholder="Masukkan nama kecamatan"
                v-model="kecamatan"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="kota"
                type="text"
                name="kota"
                :required="true"
                placeholder="Masukkan kota"
                v-model="kota"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="Kode Pos"
                type="number"
                name="kodepos"
                :required="true"
                placeholder="Masukkan nama kodepos"
                v-model="kodepos"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="notelepon"
                type="text"
                name="notelepon"
                :required="true"
                placeholder="Masukkan notelepon"
                v-model="notelepon"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="email"
                type="email"
                name="email"
                :required="true"
                placeholder="Masukkan nama email"
                v-model="email"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="nama ayah"
                type="text"
                name="namaayah"
                :required="true"
                placeholder="Masukkan nama ayah"
                v-model="namaayah"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="pekerjaan ayah"
                type="text"
                name="pekerjaanayah"
                :required="true"
                placeholder="Masukkan pekerjaan ayaah"
                v-model="pekerjaanayah"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="pendidikan ayah"
                type="text"
                name="pendidikanayah"
                :required="true"
                placeholder="Masukkan pendidikan ayaah"
                v-model="pendidikanayah"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="penghasilan ayah"
                type="text"
                name="penghasilanayah"
                :required="true"
                placeholder="Masukkan penghasilan ayaah"
                v-model="penghasilanayah"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="nama ibu"
                type="text"
                name="namaibu"
                :required="true"
                placeholder="Masukkan nama ibu"
                v-model="namaibu"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="pekerjaan ibu"
                type="text"
                name="pekerjaanibu"
                :required="true"
                placeholder="Masukkan pekerjaan ayaah"
                v-model="pekerjaanibu"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="pendidikan ibu"
                type="text"
                name="pendidikanibu"
                :required="true"
                placeholder="Masukkan pendidikan ayaah"
                v-model="pendidikanibu"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="penghasilan ibu"
                type="text"
                name="penghasilanibu"
                :required="true"
                placeholder="Masukkan penghasilan ayaah"
                v-model="penghasilanibu"
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:flex-nowrap">
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="nama wali"
                type="text"
                name="namawali"
                :required="true"
                placeholder="Masukkan nama wali"
                v-model="namawali"
              />
            </div>
            <div class="mb-5 sm:w-full md:w-1/2">
              <FormInput
                class="w-1/2"
                label="no telepon wali"
                type="text"
                name="noteleponwali"
                :required="true"
                placeholder="Masukkan No Telepon wali"
                v-model="noteleponwali"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-6">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
