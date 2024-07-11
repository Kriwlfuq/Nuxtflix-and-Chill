<script setup lang="ts">
defineProps({
  toggleMobileMenu: Function as PropType<() => void>,
});
</script>
<template>
  <li class="nav-item">
    <NuxtLink to="/apps/invoices" class="group" @click="toggleMobileMenu">
      <div class="flex items-center">
        <icon-menu-invoice class="shrink-0 group-hover:!text-primary" />

        <span
          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
          >{{ $t('Tagihan') }}</span
        >
      </div>
    </NuxtLink>
  </li>
  <li class="nav-item">
    <NuxtLink
      to="/apps/u/payments/methods"
      class="group"
      @click="toggleMobileMenu"
    >
      <div class="flex items-center">
        <icon-menu-forms class="shrink-0 group-hover:!text-primary" />

        <span
          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
          >{{ $t('Metode Pembayaran') }}</span
        >
      </div>
    </NuxtLink>
  </li>
  <li class="nav-item">
    <NuxtLink
      to="/apps/u/payments/histories"
      class="group"
      @click="toggleMobileMenu"
    >
      <div class="flex items-center">
        <icon-menu-documentation class="shrink-0 group-hover:!text-primary" />

        <span
          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
          >{{ $t('Riwayat Pembayaran') }}</span
        >
      </div>
    </NuxtLink>
  </li>
  <li class="nav-item">
    <NuxtLink
      to="/apps/u/payments/duedate"
      class="group"
      @click="toggleMobileMenu"
    >
      <div class="flex items-center">
        <icon-menu-calendar class="shrink-0 group-hover:!text-primary" />

        <span
          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
          >{{ $t('Jatuh Tempo') }}</span
        >
      </div>
    </NuxtLink>
  </li>
  <li class="nav-item">
    <NuxtLink to="/u/grades" class="group" @click="toggleMobileMenu">
      <div class="flex items-center">
        <icon-menu-calendar class="shrink-0 group-hover:!text-primary" />

        <span
          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
          >{{ $t('Grades') }}</span
        >
      </div>
    </NuxtLink>
  </li>
</template>
