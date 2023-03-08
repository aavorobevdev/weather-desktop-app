import React, { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';

type Option = {
  label: string;
};

type SearchProps = {
  options: Option[];
};

export const Search: FC<SearchProps> = ({ options }) => {
  return (
    <div>
      <Autocomplete
        disablePortal
        options={options}
        fullWidth
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </div>
  );
};
