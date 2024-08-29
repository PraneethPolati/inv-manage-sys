import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Inventory Management System
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/products">
        Go to Products
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/orders">
        Manage Orders
      </Button>
      <Button variant="contained" color="default" component={Link} to="/suppliers">
        View Suppliers
      </Button>
      <Button variant="contained" color="default" component={Link} to="/dashboard">
        Dashboard
      </Button>
      <Button component={Link} to="/reporting" variant="contained" color="primary">
        Go to Reporting
      </Button>
    </Container>
  );
};

export default Home;
