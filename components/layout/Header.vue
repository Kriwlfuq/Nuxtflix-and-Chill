<template>
  <header
    class="z-40"
    :class="{ dark: store.semidark && store.menu === 'horizontal' }"
  >
    <div class="shadow-sm">
      <div
        class="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-[#0e1726]"
      >
        <div
          class="horizontal-logo flex items-center justify-between lg:hidden ltr:mr-2 rtl:ml-2"
        >
          <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
            <img
              class="inline w-8 ltr:-ml-1 rtl:-mr-1"
              src="/assets/images/head.svg"
              alt=""
            />
            <span
              class="hidden align-middle text-2xl font-semibold transition-all duration-300 dark:text-white-light md:inline ltr:ml-1.5 rtl:mr-1.5"
            >
              <span class="lg:inline\ align-middle dark:text-white-light">
                <img
                  class="ml-[5px] w-28 flex-none"
                  src="/assets/images/brand.png"
                  alt="" /></span
            ></span>
          </NuxtLink>

          <a
            href="javascript:;"
            class="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden ltr:ml-2 rtl:mr-2"
            @click="store.toggleSidebar()"
          >
            <icon-menu class="h-5 w-5" />
          </a>
        </div>
        <div
          class="flex items-center space-x-1.5 dark:text-[#d0d2d6] sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0"
        >
          <div class="sm:ltr:mr-auto sm:rtl:ml-auto">
            <button
              type="button"
              class="search_btn rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 sm:hidden"
              @click="search = !search"
            >
              <icon-search class="mx-auto h-4.5 w-4.5 dark:text-[#d0d2d6]" />
            </button>
          </div>

          <div class="dropdown shrink-0">
            <client-only>
              <Popper
                :placement="
                  store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'
                "
                offsetDistance="8"
                class="!block"
              >
                <button type="button" class="group relative block">
                  <img
                    class="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                    src="/assets/images/user-profile.jpeg"
                    alt=""
                  />
                </button>
                <template #content="{ close }">
                  <ul
                    class="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90"
                  >
                    <li>
                      <div class="flex items-center px-4 py-4">
                        <div class="flex-none">
                          <img
                            class="h-10 w-10 rounded-md object-cover"
                            src="/assets/images/user-profile.jpeg"
                            alt=""
                          />
                        </div>
                        <div class="truncate ltr:pl-4 rtl:pr-4">
                          <h4 class="text-base">
                            {{ user.nis ? user.nis : user.username }}
                            {{ user.role === 'family' ? ' (Orang Tua)' : '' }}
                          </h4>
                          <p class="font-thin text-white-dark">
                            {{ role === 'family' ? ' (Orang Tua)' : role }}
                          </p>
                          <a
                            class="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                            href="javascript:;"
                            >{{ user.email }}</a
                          >
                        </div>
                      </div>
                    </li>

                    <li
                      class="border-t border-white-light dark:border-white-light/10"
                    >
                      <NuxtLink class="!py-3 text-danger" @click="logout()">
                        <icon-logout
                          class="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2"
                        />

                        Sign Out
                      </NuxtLink>
                    </li>
                  </ul>
                </template>
              </Popper>
            </client-only>
          </div>
        </div>
      </div>

      <!-- horizontal menu -->
      <ul
        class="horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-1.5 font-semibold text-black dark:border-[#191e3a] dark:bg-[#0e1726] dark:text-white-dark lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse"
      >
        <li class="menu nav-item relative">
          <a href="javascript:;" class="nav-link">
            <div class="flex items-center">
              <icon-menu-apps class="shrink-0" />

              <span class="px-2">{{ $t('apps') }}</span>
            </div>
            <div class="right_arrow">
              <icon-caret-down />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, reactive, watch } from 'vue';

import appSetting from '@/app-setting';

import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/index';
import { useAuth } from '@/stores/auth';
const store = useAppStore();
const route = useRoute();
const search = ref(false);
const { setLocale } = useI18n();
const { user, role } = useAuth();
console.log('🚀 ~ role:', role);
console.log('🚀 ~ user:', user);

const logout = () => {
  const auth = useAuth();
  auth.$reset();
  navigateTo('/auth/login');
};
// multi language
const changeLanguage = (item: any) => {
  appSetting.toggleLanguage(item, setLocale);
};
const currentFlag = computed(() => {
  return `/assets/images/flags/${store.locale?.toUpperCase()}.svg`;
});

const notifications = ref([
  {
    id: 1,
    profile: 'user-profile.jpeg',
    message:
      '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
    time: '45 min ago',
  },
  {
    id: 2,
    profile: 'profile-34.jpeg',
    message:
      '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
    time: '9h Ago',
  },
  {
    id: 3,
    profile: 'profile-16.jpeg',
    message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
    time: '9h Ago',
  },
]);

const messages = ref([
  {
    id: 1,
    image:
      '<span class="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
    title: 'Congratulations!',
    message: 'Your OS has been updated.',
    time: '1hr',
  },
  {
    id: 2,
    image:
      '<span class="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
    title: 'Did you know?',
    message: 'You can switch between artboards.',
    time: '2hr',
  },
  {
    id: 3,
    image:
      '<span class="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
    title: 'Something went wrong!',
    message: 'Send Reposrt',
    time: '2days',
  },
  {
    id: 4,
    image:
      '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
    title: 'Warning',
    message: 'Your password strength is low.',
    time: '5days',
  },
]);

onMounted(() => {
  setActiveDropdown();
});

watch(route, (to, from) => {
  setActiveDropdown();
});

const setActiveDropdown = () => {
  const selector = document.querySelector(
    'ul.horizontal-menu a[href="' + window.location.pathname + '"]'
  );
  if (selector) {
    selector.classList.add('active');
    const all: any = document.querySelectorAll(
      'ul.horizontal-menu .nav-link.active'
    );
    for (let i = 0; i < all.length; i++) {
      all[0]?.classList.remove('active');
    }
    const ul: any = selector.closest('ul.sub-menu');
    if (ul) {
      let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
      if (ele) {
        ele = ele[0];
        setTimeout(() => {
          ele?.classList.add('active');
        });
      }
    }
  }
};

const removeNotification = (value: number) => {
  notifications.value = notifications.value.filter((d) => d.id !== value);
};

const removeMessage = (value: number) => {
  messages.value = messages.value.filter((d) => d.id !== value);
};
</script>
