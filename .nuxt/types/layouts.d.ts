import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth-layout" | "auth-logo" | "auth" | "default"
declare module "C:/Semester6/Capstone/Nuxtflix-and-Chill-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}