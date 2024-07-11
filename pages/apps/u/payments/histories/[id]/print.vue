<script lang="ts" setup>
useHead({ title: 'Invoice Preview' });

import { ref } from 'vue';
const pdfSection = ref<HTMLElement | null>(null);
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const showPreview = ref(false);

const items = ref([
  {
    id: 1,
    title: 'SPP',
    price: '100000',
  },
  {
    id: 2,
    title: 'Gedung',
    price: '100000',
  },
]);
const columns = ref([
  {
    key: 'id',
    label: 'S.NO',
  },
  {
    key: 'title',
    label: 'Jenis Pembayaran',
  },
  {
    key: 'price',
    label: 'Harga',
    class: 'ltr:text-right rtl:text-left',
  },
]);

const print = async () => {
  if (!pdfSection.value) return;

  const images = pdfSection.value.querySelectorAll('img');
  const imageLoadPromises = Array.from(images).map((img) => {
    return new Promise<void>((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      }
    });
  });

  await Promise.all(imageLoadPromises);

  const canvas = await html2canvas(pdfSection.value, { scale: 2 });
  const imgData = canvas.toDataURL('image/jpeg', 0.98);
  showPreview.value = true;
  console.log(imgData);
  document.querySelector('#preview img')?.setAttribute('src', imgData);
  document.querySelector('#preview a')?.setAttribute('download', 'invoice.jpg');
  document.querySelector('#preview a')?.setAttribute('href', imgData);

  const pdf = new jsPDF({
    orientation: 'landscape',
    format: 'a4',
  });

  pdf.addImage(
    imgData,
    'JPEG',
    0,
    0,
    pdf.internal.pageSize.getWidth(),
    pdf.internal.pageSize.getHeight()
  );
  // pdf.save("invoice.pdf");
  try {
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>
<template>
  <div>
    <div
      class="mb-6 flex flex-wrap items-center justify-center gap-4 lg:justify-end"
    >
      <button type="button" class="btn btn-primary gap-2" @click="print">
        <icon-printer />
        Print
      </button>

      <button type="button" class="btn btn-success gap-2">
        <icon-download />
        Download
      </button>
    </div>

    <div class="mb-6" id="preview" style="display: none">
      <img src="" alt="" />
    </div>
    <a class="btn btn-primary gap-2" href=""> Download </a>

    <div class="panel px-10" ref="pdfSection">
      <div class="flex flex-wrap justify-between gap-4 px-4">
        <div>
          <div class="shrink-0">
            <img src="/assets/images/logo.svg" alt="" class="w-14" />
            <div class="px-4 ltr:text-left rtl:text-right"></div>
          </div>
        </div>
        <div class="text-2xl font-semibold uppercase">Invoice</div>
      </div>

      <hr class="my-6 border-[#e0e6ed] dark:border-[#1b2e4b]" />
      <div class="my-3 text-center text-xl">Bukti Pembayaran</div>
      <div
        class="gap-auto flex flex-col flex-wrap justify-between px-10 lg:flex-row"
      >
        <div class="flex-1">
          <div class="mb-3 space-y-1 text-white-dark">
            <div>Nama</div>
            <div class="font-semibold text-black dark:text-white">Cantika</div>
          </div>
          <div class="mb-3 space-y-1 text-white-dark">
            <div>Kelas</div>
            <div class="font-semibold text-black dark:text-white">MIPA</div>
          </div>
          <div class="mb-3 space-y-1 text-white-dark">
            <div>Tanggal Pembayaran</div>
            <div class="font-semibold text-black dark:text-white">
              2024-06-09 15:30
            </div>
          </div>
        </div>
        <div class="ml-10 flex-1">
          <div
            class="flex w-full flex-col items-start justify-between text-white-dark"
          >
            <div class="mb-2">
              <div>Pembayaran</div>
              <div class="font-semibold text-black dark:text-white">SPP</div>
            </div>
            <div class="mb-2">
              <div>Tahun ajaran</div>
              <div class="font-semibold text-black dark:text-white">
                2024/2025
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="table-responsive mt-6">
        <table class="table-striped">
          <thead>
            <tr>
              <template v-for="item in columns" :key="item.key">
                <th :class="[item.class]">{{ item.label }}</th>
              </template>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in items" :key="item.id">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td class="ltr:text-right rtl:text-left">${{ item.price }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="flex justify-between px-3 py-3">
        <div class="text-2xl text-black">Grand Total</div>
        <h1 class="text-2xl font-semibold">200.000</h1>
      </div>

      <div class="my-2 flex justify-between">
        <div>
          <div class="text-black">Terbilang</div>
          <div class="font-semibold italic">
            Dua ribu tiga puluh lima rupiah
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <div></div>
        <div>
          <div>Karanganyar, 12 Agustutes 2024</div>
          <div class="min-h-10"></div>
          <div class="text-center">Zulkarnen</div>
        </div>
      </div>
    </div>
  </div>
</template>
