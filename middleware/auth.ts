import { useAuth } from '@/stores/auth';
export default defineNuxtRouteMiddleware((to, from) => {
  const { user, role, token } = useAuth();

  console.info('From auth middleware');

  if (role !== null || user.nis === '') {
    return;
  }

  return navigateTo('/auth/login');
});
