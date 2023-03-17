import React, { FC, PropsWithChildren } from 'react';
import { CityWeatherForecast } from '@/modules/CityWeatherForecast';
import { Container, Stack } from '@mui/system';

interface HomePageProps {
  title?: string;
}

export const HomePage: FC<PropsWithChildren<HomePageProps>> = ({
  children,
}) => {
  return (
    <>
      <CityWeatherForecast />
    </>
  );
};
