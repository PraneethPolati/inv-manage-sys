import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import theme from './theme/theme';
import Reporting from './pages/Reporting';

import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';


function App() {
  const { token } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
        <Navbar />
        <Routes>
         
          
          {/* Public Route for Login */}
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
         
         
         <Route path="/" element={<Home />}  />
          <Route path="/products" element= {<Products />} />
          <Route path="/orders" element={<Orders />}  />
          <Route path="/suppliers" element={<Suppliers />}  />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reporting" element= {<Reporting />}  />

           {/* Redirect any unknown routes to home */}
           <Route path="*" element={<Navigate to="/" />} />
         </Routes>  
    </ThemeProvider>
  );
}

export default App;

