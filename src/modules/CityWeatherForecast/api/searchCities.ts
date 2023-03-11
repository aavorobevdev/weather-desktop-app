import { RapidAPI_KEY } from '@/keys';
import ky from 'ky';

const CITIES_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const citiesApi = ky.create({
  headers: {
    'X-RapidAPI-Key': RapidAPI_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
});

export const searchCitiesByPrefix = (city: string) => {
  if (!city) return;
  return citiesApi.get(`${CITIES_URL}?namePrefix=${city}`).json();
};
