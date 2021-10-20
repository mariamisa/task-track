import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../../Context/Authentication';
import { LOGIN_PAGE } from '../../Utils/routes.constant';

function PrivateRoute({ children, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  if (isAuth && !authLoading) {
    return (
      <Route {...rest}>
        {children}
      </Route>
    );
  }
  return <Redirect to={LOGIN_PAGE} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
