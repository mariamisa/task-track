import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Alert,
  AlertTitle,
  CircularProgress,
  Box
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Axios from 'axios';

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function TaskTable() {
  const [tasks, setTasks] = useState();
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get('/api/v1/tasks');
        if (unmounted) {
          setLoading(false);
          setTasks(data.data);
        }
      } catch (err) {
        setErrorMsg('internal server error');
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, []);
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{
          minWidth: 1050
        }}>
      <CardHeader title="tasks" />
      {errorMsg && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMsg}
        </Alert>
      )}
      {tasks ? <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>task name</TableCell>
              <TableCell align="right">protocol</TableCell>
              <TableCell align="right">type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.protocol}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> : <CircularProgress/>}
      </Box>
      </PerfectScrollbar>
    </Card>
  );
}
