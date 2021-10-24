import React, { Suspense } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { useRoutes } from 'react-router-dom';

// import { DASHBOARD_PAGE, LOGIN_PAGE } from '../Utils/routes.constant';
// import { LoggedOutRoutes, PrivateRoutes } from './Routes';
// import { Dashboard, Login, Layout, NotFound } from '../Pages';
import AuthProvider from '../Context/Authentication';
import GlobalStyles from '../Components/GlobalStyles';
import routes from '../routes';

import theme from '../theme';

const App = () => {
  const content = useRoutes(routes);
  return (
<div className="App">
    <Suspense fallback="loading">
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          {/* <Layout> */}
          <GlobalStyles />
          {content}
            {/* <Switch>
              <PrivateRoutes exact path={DASHBOARD_PAGE}>
                <Dashboard />
              </PrivateRoutes>
              <LoggedOutRoutes exact path={LOGIN_PAGE}>
                <Login />
              </LoggedOutRoutes>
              <Route>
                <NotFound />
              </Route>
            </Switch> */}
          {/* </Layout> */}
        </AuthProvider>
      </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  </div>
  );
};

export default App;
