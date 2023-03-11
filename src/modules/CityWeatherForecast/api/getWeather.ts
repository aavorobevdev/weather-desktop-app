import { WEATHER_API_KEY } from '@/keys';
import ky from 'ky';

export const getCurrentWeather = (lat: string, lon: string) => {
  if (!lat || !lon) return;
  return ky
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    .json();
};

export const getForecastWeather = (lat: string, lon: string) => {
  if (!lat || !lon) return;
  return ky
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    .json();
};
