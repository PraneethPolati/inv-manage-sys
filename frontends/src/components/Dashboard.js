import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  const totalProducts = 100;
  const totalStockValue = 50000;
  const productsBelowReorderLevel = 10;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Total Products</Typography>
          <Typography variant="h4">{totalProducts}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Total Stock Value</Typography>
          <Typography variant="h4">${totalStockValue}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Products Below Reorder Level</Typography>
          <Typography variant="h4">{productsBelowReorderLevel}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
