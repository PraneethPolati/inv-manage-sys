import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  }, [logout, navigate]);

  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" gutterBottom>
        Logging out...
      </Typography>
      <CircularProgress />
    </Container>
  );
};

export default Logout;

