<script lang="ts" setup>
import StudentService from '@/services/StudentService';
import HistoryService from '@/services/HistoryPayment';
import Swal from 'sweetalert2';
const { user, token } = useAuth();
const router = useRouter();
const students = ref([
  {
    id: '',
    text: '',
  },
]);

const formData = ref({
  rataNilaiUTS: '',
  rataNilaiUAS: '',
  noinduksiswa: '',
});
const submit = async () => {
  const form = formData.value;
  try {
    const r = await HistoryService.create(form, token);
    Swal.fire('Success', 'History created successfully', 'success');
    router.push('/a/histories/students');
  } catch (error) {
    console.info(error);
    Swal.fire('Error', 'Something went wrong', 'error');
  }
};
const fetchStudents = async () => {
  const result = await StudentService.all(token);
  students.value = result.map((student: { nama_siswa: string; id: string }) => {
    return {
      id: student.id,
      text: `${student.id} - ${student.nama_siswa}`,
    };
  });
};

fetchStudents();
</script>
<template>
  <div
    class="mx-auto flex max-w-screen-md flex-col rounded-md bg-white p-10 shadow-md"
  >
    <div class="card-title mb-5">
      <h5 class="text-lg font-semibold dark:text-white-light">Add History</h5>
    </div>
    <form @submit.prevent="submit">
      <div class="flex flex-wrap gap-10 md:flex-wrap">
        <div
          class="mb-5 flex flex-col flex-nowrap gap-4 sm:w-full md:w-1/2 lg:w-full"
        >
          <div class="">
            <label
              for="student"
              class="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Pilih Siswa
            </label>
            <select
              name="student"
              id=""
              class="form-multiselect text-dark"
              v-model="formData.noinduksiswa"
            >
              <option
                v-for="student in students"
                class="text-dark"
                :value="student.id"
              >
                {{ student.text }}
              </option>
            </select>
          </div>
          <div>
            <FormInput
              class="w-1/2"
              label="Rata rata nilai UTS"
              type="rataNilaiUTS"
              name="rataNilaiUTS"
              :required="true"
              placeholder="Masukkan rataNilaiUTS"
              v-model="formData.rataNilaiUTS"
            />
          </div>
          <div>
            <FormInput
              class="w-1/2"
              label="Rata rata nilai UAS"
              type="rataNilaiUAS"
              name="rataNilaiUAS"
              :required="true"
              placeholder="Masukkan rataNilaiUAS"
              v-model="formData.rataNilaiUAS"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary" @click="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
