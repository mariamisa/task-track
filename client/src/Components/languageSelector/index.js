import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, MenuItem, IconButton, Menu } from '@mui/material';
import { LanguageOutlined } from '@mui/icons-material';
import { languages } from '../../i18n/config';

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };
  return (
    <Box>
      <IconButton
        color="inherit"
        size="large"
        aria-expanded={open ? 'true' : undefined}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LanguageOutlined />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        onChange={changeLanguage}
      >
        {languages.map((el, index) => (
          <MenuItem selected={el === t('lang')} onClick={() => changeLanguage(el)} key={index} value={el}>
            {el}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
