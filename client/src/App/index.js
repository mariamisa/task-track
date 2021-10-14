/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DASHBOARD_PAGE, LOGIN_PAGE } from '../Utils/routes.constant';

// import { LoggedOutRoutes, PrivateRoutes } from './Routes';

// eslint-disable-next-line no-unused-vars
import { Dashboard, Login, Layout, NotFound } from '../Pages';

import './style.css';

const App = () => (
  <div className="App">
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
  </div>
);

export default App;
