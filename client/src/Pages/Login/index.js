import React, { useState, useContext } from 'react';
import { Avatar, Button, CssBaseline, TextField, Box, Alert, Typography, Container, CircularProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Axios from 'axios';

import useStyles from './style';

import validationSchema from '../../Utils/validation/login';
import { AuthContext } from '../../Context/Authentication';

export default function SignIn() {
  const classes = useStyles();
  const { refresh, setRefresh, setAuthLoading } = useContext(AuthContext);

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [validationError, setValidationError] = useState('');

  const handelMobile = ({ target: { value } }) => {
    setMobile(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const clear = () => {
    setError(null);
    setValidationError(null);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const userData = {
        mobile, password
      };
      clear();
      setIsLoading(true);
      await validationSchema.validate(userData, {
        abortEarly: false,
      });
      await Axios.post('/api/v1/signin', userData);
      setIsLoading(false);
      setRefresh(!refresh);
      setIsLoading(false);
      setAuthLoading(true);
    } catch (err) {
      setIsLoading(false);
      if (err.inner) {
        const isError = err.inner.reduce(
          (acc, item) => ({
            ...acc, [item.path]: item.message
          }),
          {
          }
        );
        setValidationError({
          ...isError
        });
      } else {
        setError(
          err.response ? err.response.data.message : 'حدث خطا ما حاول مجددا مرة اخرى'
        );
      }
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{
            m: 1, bgcolor: 'secondary.main'
          }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            تسجيل الدخول
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{
            mt: 1
          }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="رقم الهاتف"
              name="mobile"
              autoComplete="mobile"
              helperText={validationError?.mobile?.slice(1)}
              onChange={handelMobile}
              autoFocus
              error={validationError?.mobile}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="كلمة المرور"
              type="password"
              id="password"
              helperText={validationError?.password}
              onChange={handlePassword}
              autoComplete="current-password"
              error={validationError?.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
            onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2
              }}
            >
            {isLoading ? <CircularProgress color="secondary" /> : 'تسجيل الدخول'}
            </Button>
            {error && (
            <Alert className={classes.alert} severity="error">
              {error}
            </Alert>
            )}
          </Box>
        </Box>
      </Container>
  );
}
