import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import useDebounce from '@/hooks/useDebounce';
import { searchCitiesByPrefix } from '../../api/searchCities';

interface SearchCityProps {
  onChange: (city: any) => void;
}

export const SearchCity: FC<PropsWithChildren<SearchCityProps>> = ({
  onChange,
}) => {
  const [city, setCity] = useState('');
  const [citiesOptions, setCitiesOptions] = useState([]);
  const debouncedCity = useDebounce(city);

  const onChangeCity = (city: string) => {
    setCity(city);
  };

  const parseCities = (cities: any) => {
    return {
      options: cities.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const searchCities = async () => {
    if (!debouncedCity) return;
    try {
      const { data }: any = await searchCitiesByPrefix(debouncedCity);

      const a = parseCities(data);
      setCitiesOptions(a.options);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchCities();
  }, [debouncedCity]);

  return (
    <>
      <Autocomplete
        onInputChange={(_, value) => onChangeCity(value)}
        fullWidth
        disablePortal
        options={citiesOptions}
        onChange={(_, value) => onChange(value)}
        renderInput={(params) => (
          <TextField {...params} color="secondary" label="City" />
        )}
      />
    </>
  );
};
