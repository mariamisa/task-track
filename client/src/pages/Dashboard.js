import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@mui/material';
import TaskTable from '../Components/TaskTable';
import VisitTable from '../Components/VisitTable';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item sm={10}>
            <TaskTable/>
          </Grid>
          <Grid item sm={10}>
            <VisitTable/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
