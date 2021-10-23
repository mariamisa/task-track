import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
// import CustomerListResults from '../Components/customer/CustomerListResults';
import CustomerListToolbar from '../Components/customer/CustomerListToolbar';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Tasks</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{
          pt: 3
        }}>
          <p>tasks</p>
          {/* <CustomerListResults customers={]} /> */}
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
