import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Alert, CircularProgress } from '@mui/material';
import { AuthContext } from '../../Context/Authentication';
import Header from '../../Components/Header';
// import useStyles from './style';

function Layout({ children }) {
  // const classes = useStyles();
  const { authLoading, error } = useContext(AuthContext);
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {authLoading ? (
        <CircularProgress size={70} />
      ) : (
        <div>
          <p>layout</p>
          <Header/>
          {children}
        </div>
      )}
    </>
  );
}

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
