<template>
  <form @submit.prevent="handleSubmit" class="flex space-x-2">
    <BaseInput
      type="text"
      placeholder="Search for a city"
      v-model="searchQuery"
    />
    <BaseButton type="submit" :disabled="!cityHasChanged">Search</BaseButton>
  </form>
</template>

<script lang="ts" setup>
type Emit = {
  (eventName: "formSubmit"): void;
};

const lastValue = ref("");

const emit = defineEmits<Emit>();
const searchQuery = defineModel<string>("searchQuery", { required: true });

const cityHasChanged = computed(
  () =>
    searchQuery.value !== "" &&
    searchQuery.value.toLowerCase() !== lastValue.value.toLowerCase(),
);

const handleSubmit = () => {
  lastValue.value = searchQuery.value;
  emit("formSubmit");
};
</script>
