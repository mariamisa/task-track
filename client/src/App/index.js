import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  unstable_createMuiStrictModeTheme as uCreateMui,
  ThemeProvider,
} from '@mui/material/styles';

import { DASHBOARD_PAGE, LOGIN_PAGE } from '../Utils/routes.constant';

import { LoggedOutRoutes, PrivateRoutes } from './Routes';

import { Dashboard, Login, Layout, NotFound } from '../Pages';
import AuthProvider from '../Context/Authentication';
import { LanguageProvider } from '../Context/Language';

import './style.css';

const theme = uCreateMui();

const App = () => (
  <div className="App">
    <LanguageProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <PrivateRoutes exact path={DASHBOARD_PAGE}>
                <Dashboard />
              </PrivateRoutes>
              <LoggedOutRoutes exact path={LOGIN_PAGE}>
                <Login />
              </LoggedOutRoutes>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </LanguageProvider>
  </div>
);

export default App;
