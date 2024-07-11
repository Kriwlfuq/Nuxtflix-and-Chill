<script setup lang="ts">
import Span from "@/components/span/Span.vue";
const route = useRoute();
useState("users", () => ({
  id: 1,
  name: "John Doe",
  email: "johndoe@yahoo.com",
  familyName: "John Doe Family",
  status: "Active",
  division: "SMP 10",
  schoolYear: "2023/2024",
}));
const users = useState("users");
</script>
<template>
  <div>
    <!-- card 1 -->
    <div
      class="w-full rounded border border-[#e0e6ed] bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none"
    >
      <div class="p-8">
        <h5
          class="mb-4 text-xl font-semibold text-[#3b3f5c] dark:text-white-light"
        >
          Data Diri
        </h5>
        <div class="flex justify-between">
          <div class="mb-2 flex min-w-[200px] flex-col gap-1">
            <Span label="Nama">{{ users.name }}</Span>
            <div class="flex flex-row items-center gap-1">
              <label
                for="name"
                class="block w-40 text-sm font-medium text-gray-900 dark:text-white"
                >Nama siswa</label
              >
              <span class="mx-2">:</span>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div class="flex flex-row items-center gap-1">
              <label
                for="name"
                class="block w-40 text-sm font-medium text-gray-900 dark:text-white"
                >Nama Kedua Orang Tua</label
              >
              <span class="mx-2">:</span>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div class="flex flex-row items-center gap-1">
              <label
                for="division"
                class="block w-40 text-sm font-medium text-gray-900 dark:text-white"
                >Kelas</label
              >
              <span class="mx-2">:</span>
              <span>10 SD</span>
            </div>
          </div>
          <div class="bg-green-300">
            <div>
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
