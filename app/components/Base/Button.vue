<template>
  <button
    class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
    :type="props.type || 'button'"
    :disabled="props.disabled"
    @click="emit('click', $event)"
  >
    <slot>
      {{ props.title }}
    </slot>
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: HTMLButtonElement["type"];
  title?: string;
  disabled?: boolean;
};

type Emit = {
  (eventName: "click", event: Event): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>
