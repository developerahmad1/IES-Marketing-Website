import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // State to hold the login status
  const [isLogin, setIsLogin] = useState(false);

  // Function to handle login
  const login = () => {
    setIsLogin(true);
  };

  // Function to handle logout
  const logout = () => {
    setIsLogin(false);
  };

  // Persist login state with localStorage
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLogin');
    if (storedLoginStatus === 'true') {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLogin', isLogin);
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
