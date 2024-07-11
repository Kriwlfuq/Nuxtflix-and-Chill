<script setup lang="ts">
const processing = useState('processsing', () => false);
import AdminServices from './../../../services/admin/histories';
const pdfSection = ref<HTMLElement | null>(null);
const histories = AdminServices.getHistories();
const generatePDF = () => {
  processing.value = true;
  exportToPDF(
    'filename.pdf',
    pdfSection.value,
    {
      orientation: 'portrait',
      format: 'A4',
    },
    {
      margin: [10, 10, 10, 10],
      html2canvas: { scale: 0.5 },
    }
  )
    .then(() => console.info('success'))
    .catch((reason) => console.error(reason))
    .finally(() => (processing.value = false));
};
</script>

<template>
  <div class="container rounded-xl bg-white" ref="pdfSection">
    <div class="row text-center">
      <div class="mt-10 text-2xl font-semibold uppercase">SMA 1 Cirebon</div>
    </div>
    <div class="row text-center">
      <div class="text-sm">Jl. Raya Cirebon,</div>
    </div>
    <div class="mt-10 bg-white">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Waktu</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(history, index) in histories" :key="history.id">
            <td>{{ index + 1 }}</td>
            <td>{{ history.fullname }}</td>
            <td>{{ history.fullname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="p-4">
    <button
      @click="generatePDF()"
      class="btn btn-primary"
      :disabled="processing"
    >
      Cetak
    </button>
  </div>
</template>
<style scoped>
@media print {
  .container {
    width: 100%;
    zoom: 1;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }
}
</style>
