import { IOpenWeatherApiCurrentWeatherResponse } from "../types/weather";
import { transformOWApiCurrentWeatherResponse } from "../utils/openWeatherApi/responseTransform";
import { FetchError } from "../types/error";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const city = query.city;

  if (!city) {
    throw createError({ statusCode: 400, statusMessage: "City is required" });
  }

  const apiKey = config.private.weatherApiKey;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await $fetch<IOpenWeatherApiCurrentWeatherResponse>(
      apiUrl,
    );
    return transformOWApiCurrentWeatherResponse(response);
  } catch (error) {
    const statusCode = (error as FetchError)?.statusCode || 500;
    if (statusCode === 404)
      throw createError({
        statusCode: 404,
        statusMessage: "City not found",
      });

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch weather data",
    });
  }
});
