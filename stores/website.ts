import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '',
    description: '',
  }),
  actions: {
    async fetch() {
      // const infos = await $fetch("https://api.nuxt.com/modules/pinia");

      const infos = {
        name: 'example pinia',
        description: 'example',
      };

      this.name = infos.name;
      this.description = infos.description;
    },
  },
});
