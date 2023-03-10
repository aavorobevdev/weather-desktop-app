import React, { FC } from 'react';
import { Card, Divider, Stack, Typography } from '@mui/material';

export interface Weather {
  city: string;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
}

interface CurrentWeatherCardProps {
  currentWeather: Weather;
}

export const CurrentWeatherCard: FC<CurrentWeatherCardProps> = ({
  currentWeather,
}) => {
  console.log(currentWeather, 'currentWeather');

  return (
    <Card
      sx={{
        width: 320,
        padding: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Stack gap={2}>
        <Typography variant="h4">{currentWeather.city}</Typography>
        <Divider />
        <Typography variant="h5">{currentWeather.main.temp} °C</Typography>
        <Typography variant="overline">Details</Typography>
        <Typography variant="body1">
          Feels like: {currentWeather.main.feels_like} °C
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="h5">{currentWeather.weather[0].main}</Typography>
      </Stack>
    </Card>
  );
};
