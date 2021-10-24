import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
// import CustomerListResults from '../Components/customer/CustomerListResults';
import TasksListToolbar from '../Components/tasks/TasksListToolbar';

const TasksList = () => (
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
        <TasksListToolbar />
        <Box sx={{
          pt: 3
        }}>
          <p>tasks</p>
          {/* <TasksListResults customers={]} /> */}
        </Box>
      </Container>
    </Box>
  </>
);

export default TasksList;
