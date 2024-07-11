<script setup lang="ts">
defineProps({
  modelValue: String,
  name: String,
  placeholder: String,
  label: String,
  type: String,
  required: Boolean,
});
const emit = defineEmits(['update:modelValue']);
</script>
<template>
  <div class="w-full">
    <label
      :for="name"
      class="mb-2 block text-start text-sm font-medium capitalize text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <input
      :type="type"
      :id="name"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
