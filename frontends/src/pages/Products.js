import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Products = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px' }}>
            <ProductList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <ProductForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
