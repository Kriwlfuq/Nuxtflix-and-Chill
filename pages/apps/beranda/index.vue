<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import StatisticService from '@/services/StatisticService';
import DueDateService from '@/services/DueDateService';
useHead({ title: 'Beranda' });
const { role, token, user } = useAuth();
console.log('🚀 ~ user:', user);
if (!role) navigateTo('/auth/login');
const gender = ref({ 'Laki-laki': 0, Perempuan: 0 });
const genderResponse = await StatisticService.gender(token);

gender.value = genderResponse;
</script>
<template>
  <DashboardUser v-if="role === 'user' || role === 'family'" />
  <div class="pt-5" v-if="role === 'admin'">
    <div
      class="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-3"
    >
      <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
        <div class="flex justify-between">
          <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">
            Jumlah Siswa Laki-laki
          </div>
          <div class="dropdown">
            <client-only>
              <Popper
                :placement="
                  store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'
                "
                offsetDistance="0"
                class="align-middle"
              >
                <button type="button">
                  <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                </button>
                <template #content="{ close }">
                  <ul @click="close()" class="text-black dark:text-white-dark">
                    <li>
                      <a href="javascript:;">View Report</a>
                    </li>
                    <li>
                      <a href="javascript:;">Edit Report</a>
                    </li>
                  </ul>
                </template>
              </Popper>
            </client-only>
          </div>
        </div>
        <div class="mt-5 flex items-center">
          <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
            {{ gender['Laki-laki'] }}
          </div>
        </div>
      </div>

      <!-- Sessions -->
      <div class="panel bg-gradient-to-r from-violet-500 to-violet-400">
        <div class="flex justify-between">
          <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">
            Jumlah Siswa Perempuan
          </div>
          <div class="dropdown">
            <client-only>
              <Popper
                :placement="
                  store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'
                "
                offsetDistance="0"
                class="align-middle"
              >
                <button type="button">
                  <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                </button>
                <template #content="{ close }">
                  <ul @click="close()" class="text-black dark:text-white-dark">
                    <li>
                      <a href="javascript:;">View Report</a>
                    </li>
                    <li>
                      <a href="javascript:;">Edit Report</a>
                    </li>
                  </ul>
                </template>
              </Popper>
            </client-only>
          </div>
        </div>
        <div class="mt-5 flex items-center">
          <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
            {{ gender['Perempuan'] }}
          </div>
        </div>
      </div>

      <!-- Time On-Site -->
      <div class="panel bg-gradient-to-r from-blue-500 to-blue-400">
        <div class="flex justify-between">
          <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">
            Total keseluruhan
          </div>
          <div class="dropdown">
            <client-only>
              <Popper
                :placement="
                  store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'
                "
                offsetDistance="0"
                class="align-middle"
              >
                <button type="button">
                  <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                </button>
                <template #content="{ close }">
                  <ul @click="close()" class="text-black dark:text-white-dark">
                    <li>
                      <a href="javascript:;">View Report</a>
                    </li>
                    <li>
                      <a href="javascript:;">Edit Report</a>
                    </li>
                  </ul>
                </template>
              </Popper>
            </client-only>
          </div>
        </div>
        <div class="mt-5 flex items-center">
          <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
            {{ gender['Laki-laki'] + gender['Perempuan'] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
