<script setup lang="ts">
import { createImportSpecifier } from "typescript";

const props = defineProps({
  label: String,
  value: String,
});

console.log(props);
</script>
<template>
  <div class="flex flex-row items-center gap-1">
    <label
      for="name"
      class="block w-40 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <span class="mx-2">:</span>
    <span><slot /></span>
  </div>
</template>
