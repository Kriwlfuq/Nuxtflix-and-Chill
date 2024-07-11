<script setup lang="ts">
const route = useRoute();
const { user, token } = useAuth();
const paymentsId: string = route.params.id as string;
console.log(paymentsId);
useSeoMeta({
  title: 'Edit Pembayaran',
});
import { ref, watch } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import Payment from '@/services/Payment';
import Swal from 'sweetalert2';
const biayaBuku = ref('');

const formData = ref({
  biayaBuku: '',
  biayaEkskul: '',
  biayaSeragam: '',
  biayaSPP: '',
  biayaStudyTour: '',
});
const cols =
  ref([
    { field: 'biayaBuku', title: 'biaya Buku', isUnique: true, filter: false },
    { field: 'biayaEkskul', title: 'biayaEkskul', filter: false },
    { field: 'biayaSeragam', title: 'biayaSeragam', type: 'string' },
    { field: 'biayaSPP', title: 'biayaSPP', type: 'string' },
    { field: 'biayaStudyTour', title: 'biayaStudyTour', type: 'string' },
    {
      field: 'action',
      title: 'Action',
      sort: false,
      filter: false,
      headerClass: 'justify-center',
    },
  ]) || [];
const rows = ref([]);
const fetchHistoryPayments = async (paymentsId: string) => {
  try {
    const historyPayments = await Payment.get(paymentsId, token);
    rows.value = historyPayments;
    formData.value = { ...historyPayments };
  } catch (error) {
    rows.value = [];
  }
};

const updatePayment = async (
  historyId: string,
  paymentsId: string,
  data: any
) => {
  try {
    await Payment.update(historyId, paymentsId, data, token);
    Swal.fire('Update Success', 'Payment Updated', 'success');
    console.log(user.nis);
    navigateTo('/a/histories/students/' + user.nis);
  } catch (error) {
    rows.value = [];
  }
};
const submit = async () => {
  const {
    historysiswaid,
    biayaSekolahId,
    tahunAjaranSekarang,
    isPaid,
    createdAt,
    kelas,
    noinduksiswa,
    totalBiaya,
    ...rest
  } = formData.value;
  await updatePayment(historysiswaid, paymentsId, rest);
  console.log(rest);
};
fetchHistoryPayments(paymentsId);
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="panel mx-auto min-w-[800px] p-10">
      <div class="mb-5 flex items-center justify-between">
        <h5 class="text-lg font-semibold dark:text-white-light">
          Edit Pembayaran
        </h5>
      </div>
      <div class="mb-5">
        <form @submit.prevent="submit">
          <div class="flex flex-wrap gap-10 md:flex-nowrap">
            <div class="mb-5 flex flex-col gap-4 sm:w-full md:w-1/2 lg:w-full">
              <FormInput
                class="w-1/2"
                label="Biaya Buku"
                type="text"
                name="biayaBuku"
                :required="true"
                placeholder="Masukkan biaya buku"
                v-model="formData.biayaBuku"
              />
              <FormInput
                class="w-1/2"
                label="Biaya Ekskul"
                type="text"
                name="biayaEkskul"
                :required="true"
                placeholder="Masukkan biaya ekskul"
                v-model="formData.biayaEkskul"
              />
              <FormInput
                class="w-1/2"
                label="Biaya Seragam"
                type="text"
                name="biayaSeragam"
                :required="true"
                placeholder="Masukkan biaya seragam"
                v-model="formData.biayaSeragam"
              />
              <FormInput
                class="w-1/2"
                label="Biaya SPP"
                type="text"
                name="biayaSPP"
                :required="true"
                placeholder="Masukkan biaya SPP"
                v-model="formData.biayaSPP"
              />
              <FormInput
                class="w-1/2"
                label="Biaya Study Tour"
                type="text"
                name="biayaStudyTour"
                :required="true"
                placeholder="Masukkan biaya study tour"
                v-model="formData.biayaStudyTour"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-6">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
