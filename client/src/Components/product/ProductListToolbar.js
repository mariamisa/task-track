import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const ProductListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        color="primary"
        variant="contained"
      >
        Add product
      </Button>
    </Box>
    <Box sx={{
      mt: 3
    }}>
      <Card>
        <CardContent>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default ProductListToolbar;
