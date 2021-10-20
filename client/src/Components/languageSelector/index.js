import React, { useContext } from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

import { languageOptions } from '../../languages';
import { LanguageContext } from '../../Context/Language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = ({ target: { value } }) => userLanguageChange(value);
  return (
    <Box sx={{
      minWidth: 120
    }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="language"
          onChange={handleLanguageChange}
          value={userLanguage}
          IconComponent={TranslateIcon}
          color="primary"
        >
          {Object.entries(languageOptions).map(([id, name]) => (
        <MenuItem key={id} value={id}>{name}</MenuItem>
          ))}
        </Select>
    </Box>
  );
}
