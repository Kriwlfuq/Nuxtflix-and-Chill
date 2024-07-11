<template>
  <div :class="{ 'dark text-white-dark': store.semidark }">
    <nav
      class="sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300"
    >
      <div class="h-full bg-white dark:bg-[#0e1726]">
        <div class="flex items-center justify-between px-4 py-3">
          <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
            <img
              class="ml-[5px] w-8 flex-none"
              src="/assets/images/head.svg"
              alt=""
            />
            <span class="lg:inline\ align-middle dark:text-white-light">
              <img
                class="ml-[5px] w-28 flex-none"
                src="/assets/images/brand.png"
                alt=""
            /></span>
          </NuxtLink>
          <a
            href="javascript:;"
            class="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 hover:text-primary dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
            @click="store.toggleSidebar()"
          >
            <icon-carets-down class="m-auto rotate-90" />
          </a>
        </div>
        <client-only>
          <perfect-scrollbar
            :options="{
              swipeEasing: true,
              wheelPropagation: false,
            }"
            class="relative h-[calc(100vh-80px)]"
          >
            <ul class="relative space-y-0.5 p-4 py-0 font-semibold">
              <h2
                class="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]"
              >
                <icon-minus class="hidden h-5 w-4 flex-none" />
                <span>{{ $t('apps') }}</span>
              </h2>

              <li class="nav-item">
                <ul>
                  <li class="nav-item">
                    <NuxtLink
                      to="/apps/beranda"
                      class="group"
                      @click="toggleMobileMenu"
                    >
                      <div class="flex items-center">
                        <icon-menu-dashboard
                          class="shrink-0 group-hover:!text-primary"
                        />

                        <span
                          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
                          >{{ $t('beranda') }}</span
                        >
                      </div>
                    </NuxtLink>
                  </li>

                  <SidebarUser
                    :toggleMobileMenu="toggleMobileMenu"
                    v-if="role === 'user' || role === 'family'"
                  ></SidebarUser>

                  <li class="nav-item" v-if="role === 'admin'">
                    <NuxtLink
                      to="/apps/students"
                      class="group"
                      @click="toggleMobileMenu"
                    >
                      <div class="flex items-center">
                        <icon-menu-todo
                          class="shrink-0 group-hover:!text-primary"
                        />

                        <span
                          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
                          >{{ $t('Data Siswa') }}</span
                        >
                      </div>
                    </NuxtLink>
                  </li>

                  <li class="nav-item" v-if="role === 'admin'">
                    <NuxtLink
                      to="/a/histories/students"
                      class="group"
                      @click="toggleMobileMenu"
                    >
                      <div class="flex items-center">
                        <icon-menu-todo
                          class="shrink-0 group-hover:!text-primary"
                        />

                        <span
                          class="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3"
                          >{{ $t('History Siswa') }}</span
                        >
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </perfect-scrollbar>
        </client-only>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
import { ref, onMounted } from 'vue';
import { useAppStore } from '@/stores/index';
import { useAuth } from '@/stores/auth';
const { user, token, role } = useAuth();
console.log(user);
console.log(token);
console.log(role);

const store = useAppStore();

onMounted(() => {
  setTimeout(() => {
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );

    if (selector) {
      selector.classList.add('active');
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any =
          ul.closest('li.menu').querySelectorAll('.nav-link') || [];

        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  });
});

const toggleMobileMenu = () => {
  if (window.innerWidth < 1024) {
    store.toggleSidebar();
  }
};
</script>
