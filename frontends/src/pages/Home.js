import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f5f5f5', 
        padding: '2rem' 
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Welcome to Inventory Management System
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: '2rem', color: '#555' }}>
          Manage your products, orders, suppliers, and more with ease.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" component={Link} to="/products">
              Go to Products
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="secondary" component={Link} to="/orders">
              Manage Orders
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="success" component={Link} to="/suppliers">
              View Suppliers
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="info" component={Link} to="/dashboard">
              Dashboard
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="warning" component={Link} to="/reporting">
              Go to Reporting
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
