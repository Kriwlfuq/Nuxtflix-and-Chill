<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-blue-300 md:content-evenly lg:flex-row lg:gap-56"
  >
    <div class="mx-[100px] lg:max-w-[500px]">
      <img
        src="/assets/images/brand.png"
        alt="image description"
        class="w-50 lg:hidden"
      />
      <img src="/assets/images/login-left.png" alt="" class="" />
    </div>
    <div
      class="flex min-h-screen w-full flex-row flex-wrap items-start justify-center md:flex-col lg:items-center lg:justify-center lg:gap-0 lg:bg-slate-200"
    >
      <NuxtPage />
    </div>
  </div>
</template>
