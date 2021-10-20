import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  ThemeProvider,
} from '@mui/material/styles';

import theme from './theme';

import { DASHBOARD_PAGE, LOGIN_PAGE } from '../Utils/routes.constant';

import { LoggedOutRoutes, PrivateRoutes } from './Routes';

import { Dashboard, Login, Layout, NotFound } from '../Pages';
import AuthProvider from '../Context/Authentication';
import { LanguageProvider } from '../Context/Language';

import './style.css';

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <AuthProvider>
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
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </div>
);

export default App;
