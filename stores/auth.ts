import { defineStore } from 'pinia';
export const useAuth = defineStore('auth', {
  state: () => ({
    user: {
      username: '',
      nis: '',
      name: '',
      isAdmin: false,
      isSiswa: false,
      isParent: false,
    },
    role: '',
    token: '',
  }),
  actions: {
    setUser(payload: any) {
      this.user = payload;
    },
    setRole(payload: any) {
      this.role = payload;
    },
    setToken(payload: any) {
      this.token = payload;
    },
    setName(name: string) {
      this.user.name = name;
    },
  },
  persist: true,
});
