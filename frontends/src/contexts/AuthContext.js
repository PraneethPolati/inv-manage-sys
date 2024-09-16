import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };


  const validateToken = (token) => {
    // Add your token validation logic here, such as checking expiration.
    // For example, decode the token and check if it's expired.
    // This is a placeholder logic, replace it with your actual validation.
    if (!token) {
      return false;
    }
    
    // Example: checking if token exists and is a non-empty string
    return token.length > 0;
  };

  useEffect(() => {
    console.log('Initial token:', token);
    if (token && !validateToken(token)) {
      // If the token is invalid, log out the user
      logout();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
