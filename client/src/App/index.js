import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  unstable_createMuiStrictModeTheme as uCreateMui,
  ThemeProvider,
} from '@mui/material/styles';

import { DASHBOARD_PAGE, LOGIN_PAGE } from '../Utils/routes.constant';

// import { LoggedOutRoutes, PrivateRoutes } from './Routes';

import { Dashboard, Login, Layout, NotFound } from '../Pages';

import './style.css';

const theme = uCreateMui();

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path={DASHBOARD_PAGE}>
            <Dashboard />
          </Route>
          <Route exact path={LOGIN_PAGE}>
            <Login />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  </div>
);

export default App;
