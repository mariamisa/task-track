import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@mui/material';
import { Menu, Input } from '@mui/icons-material';
import Languages from './languageSelector';

import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{
          flexGrow: 1
        }} />
        <Hidden xlDown>
          <Languages />
          <IconButton color="inherit" size="large">
            <Input />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={(onMobileNavOpen)} size="large">
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
