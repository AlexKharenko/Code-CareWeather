import { IOpenWeatherApiCurrentWeatherResponse } from "~~/server/types/weather";

export const transformOWApiCurrentWeatherResponse = (
  response: IOpenWeatherApiCurrentWeatherResponse,
): IWeather => {
  const weatherIconId = response.weather[0].icon;
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherIconId}@2x.png`;

  return {
    city: response.name,
    temperature: response.main.temp,
    weatherCondition: response.weather[0].main,
    weatherIcon,
  };
};
