import React, { FC, PropsWithChildren, useState } from 'react';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { getCurrentWeather, getForecastWeather } from '../../api/getWeather';
import { CurrentWeatherCard } from '../CurrentWeatherCard/CurrentWeatherCard';
import { SearchCity } from '../SearchCity/SearchCity';

type Props = {};

export const CityWeatherForecast: FC<PropsWithChildren> = ({ children }) => {
  const [currentWeather, setCurrentWeahter] = useState();
  const [forecast, setForecast] = useState();

  const onCityChange = (city: any) => {
    const [lat, lon] = city.value.split(' ');

    Promise.all([getCurrentWeather(lat, lon), getForecastWeather(lat, lon)])
      .then(async (response) => {
        const weatherResponse = await response[0];
        const forecastResponse = await response[1];

        setCurrentWeahter({ city: city.label, ...(weatherResponse as any) });
        setForecast({ city: city.label, ...(forecastResponse as any) });
      })
      .catch((error) => console.error(error));
  };
  return (
    <Box sx={{ width: 750, padding: 2 }}>
      <Stack gap={10}>
        <SearchCity onChange={onCityChange} />
        {currentWeather && (
          <CurrentWeatherCard currentWeather={currentWeather} />
        )}
      </Stack>
    </Box>
  );
};
