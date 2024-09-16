import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ element }) {
  const { token } = useAuth();
  console.log('ProtectedRoute token:', token); // Debug log
  return token ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
