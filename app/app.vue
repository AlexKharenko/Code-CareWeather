<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white"
  >
    <div
      class="bg-white/20 backdrop-blur-lg rounded-lg p-6 shadow-lg w-full max-w-md"
    >
      <h1 class="text-3xl font-bold text-center mb-4">Weather App</h1>
      <SearchGroup
        class="justify-self-center"
        v-model:search-query="searchQuery"
        @formSubmit="onFormSubmit"
      />
      <div v-if="isLoading" class="text-center text-lg mt-6">
        <WeatherCardSkeleton />
      </div>
      <div v-else-if="weather" class="mt-6 text-center">
        <WeatherCard v-bind="weather" />
      </div>
      <div
        v-if="error"
        class="text-center text-red-400 mt-4 p-2 bg-blue-900 rounded-md"
      >
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const API_URL = "/api/weather";

const searchQuery = useState<string>(() => "");

const {
  data: weather,
  status,
  error,
  refresh,
} = useFetch<IWeather>(`${API_URL}${searchQuery.value}`, {
  query: { city: searchQuery },
  watch: false,
  immediate: false,
});

const isLoading = computed(() => status.value === "pending");
const errorMessage = computed(() => error.value?.data.message);

const onFormSubmit = () => {
  refresh();
};
</script>
