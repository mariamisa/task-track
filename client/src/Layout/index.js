import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Alert, CircularProgress, Container } from '@mui/material';
import { AuthContext } from '../Context/Authentication';
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
        <Container maxWidth="sm">
          <p>layout</p>
          {children}
        </Container>
      )}
    </>
  );
}

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
