import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import OrderList from '../components/OrderList';
import ProductForm from '../components/ProductForm';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <Container maxWidth="lg">
    <Typography variant="h4" gutterBottom>
      Order Management
    </Typography>
    <Grid container spacing={3}>
      {/* Form to add new orders */}
      <Grid item xs={12}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Create New Order
          </Typography>
          <ProductForm onSubmit={handleAddOrder} />
        </Paper>
      </Grid>
      {/* List of existing orders */}
      <Grid item xs={12}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Order List
          </Typography>
          <OrderList orders={orders} />
        </Paper>
      </Grid>
    </Grid>
  </Container>
  );
};

export default Orders;
