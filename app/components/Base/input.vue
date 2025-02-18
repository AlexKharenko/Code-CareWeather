<template>
  <div
    class="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500"
    :class="props.wrapperClass"
  >
    <input
      v-model="modelValue"
      v-bind="$attrs"
      :type="props.type"
      :disabled="props.disabled"
      :placeholder="placeholder"
      class="flex-1 bg-transparent focus:outline-none text-gray-700"
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  type: string;
  disabled?: boolean;
  placeholder?: string;
  wrapperClass?: string | string[];
};

const props = defineProps<Props>();
const modelValue = defineModel<string>();
</script>
