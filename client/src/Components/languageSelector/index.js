import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { languages } from '../../i18n/config';

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <>
      <p>{t('home')}</p>
      <Box
        sx={{
          minWidth: 120,
        }}
      >
        <InputLabel id="demo-simple-select-label">lang</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="language"
          onChange={changeLanguage}
          value={i18n.language}
        >
          {languages.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
}
