import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import SupplierList from '../components/SupplierList';

const Suppliers = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Supplier Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <SupplierList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Suppliers;
