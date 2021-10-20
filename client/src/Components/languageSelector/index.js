import React, { useContext } from 'react';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';

import { languageOptions } from '../../languages';
import { LanguageContext } from '../../Context/Language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange, dictionary } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = ({ target: { value } }) => userLanguageChange(value);

  return (
    <Box sx={{
      minWidth: 120
    }}>
        <InputLabel id="demo-simple-select-label">{dictionary.language}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="language"
          onChange={handleLanguageChange}
          value={userLanguage}
        >
          {Object.entries(languageOptions).map(([id, name]) => (
        <MenuItem key={id} value={id}>{name}</MenuItem>
          ))}
        </Select>
    </Box>
  );
}
