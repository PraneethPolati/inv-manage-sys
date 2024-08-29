import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import OrderList from '../components/OrderList';

const Orders = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <OrderList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Orders;
