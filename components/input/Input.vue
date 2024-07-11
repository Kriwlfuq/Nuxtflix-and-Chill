<script setup lang="ts">
defineProps({
  title: String,
  likes: Number,
});
</script>
<template>
  <div>
    <Label>{{ title }}</Label>
    <input
      type="email"
      name="email"
      id="email"
      value=""
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
      placeholder="name@company.com"
      required
    />
  </div>
</template>
