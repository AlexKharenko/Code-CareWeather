<template>
  <div class="bg-white rounded-lg shadow-md p-4 text-center">
    <div class="text-xl text-gray-700 font-bold">{{ props.city }}</div>
    <div class="text-lg text-gray-600">
      Temperature: {{ props.temperature }}°C
    </div>
    <div class="capitalize text-gray-500">{{ props.weatherCondition }}</div>
    <img
      :src="props.weatherIcon"
      alt="Weather Icon"
      class="mx-auto w-20 h-20"
    />
  </div>
</template>

<script lang="ts" setup>
import type { IWeather } from "~~/shared/types/weather";

type Props = IWeather;

const props = defineProps<Props>();
</script>
