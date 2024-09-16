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
import ProtectedRoute from './components/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';


function App() {
  const { token } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        
        <Routes>
         
          
           {/* Redirect to login if the user is not authenticated */}
           <Route path="/" element={ <Home /> } />

{/* Public Route for Login */}

{/* Protected Routes */}
<Route path="/products" element={<Products />} />
<Route path="/orders" element={<Orders />} />
<Route path="/suppliers" element={<Suppliers  />} />
<Route path="/dashboard" element={<Dashboard  />} />
<Route path="/reporting" element={<Reporting  />} />

{/* Fallback for undefined routes */}
<Route path="*" element={<Navigate to="/" />} />
         </Routes>  
         </Router>
    </ThemeProvider>

  );
}

export default App;

