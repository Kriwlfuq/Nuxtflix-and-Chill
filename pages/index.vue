<script lang="ts" setup>
import { useAuth } from '@/stores/auth';
const { role } = useAuth();
if (!role) navigateTo('/auth/login');
navigateTo('/apps/beranda');
</script>
