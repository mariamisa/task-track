import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { DASHBOARD_PAGE, LOGIN_PAGE } from '../Utils/routes.constant';
import { Dashboard, Login, Layout, NotFound } from '../Pages';
import { LoggedOutRoutes, PrivateRoutes } from './Routes';

import AuthProvider from '../Context/Authentication';

import theme from './theme';

import './style.css';

const App = () => (
  <div className="App">
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Suspense>
  </div>
);

export default App;
