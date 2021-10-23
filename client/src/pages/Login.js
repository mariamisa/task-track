import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';
import Axios from 'axios';

import handleError from '../utils/handleError';

const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handelLogin = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);
      await Axios.post('/api/v1/signin', userData);
      setIsLoading(false);
      navigate('/app/dashboard', {
        replace: true
      });
    } catch (err) {
      handleError(setError, err);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              mobile: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              mobile: Yup.string().min(8).max(255).required('mobile is required'),
              password: Yup.string().min(8).max(255).required('Password is required')
            })}
            onSubmit={ handelLogin }
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box m={20} sx={{
                  mb: 3
                }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                    textAlign="center"
                  >
                    Sign in
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                </Box>
                <TextField
                  error={Boolean(touched.mobile && errors.mobile)}
                  fullWidth
                  helperText={touched.mobile && errors.mobile}
                  label="mobile Address"
                  margin="normal"
                  name="mobile"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.mobile}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{
                  py: 2
                }}>
                  <Button
                    color="primary"
                    disabled={isLoading}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isLoading ? <CircularProgress color="secondary" /> : 'Sign In' }
                  </Button>
                </Box>
                {error && <Alert severity="error">{error} </Alert> }
               {/* <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                </Typography> */}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
