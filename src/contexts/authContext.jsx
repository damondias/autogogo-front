import React, { createContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      location.pathname === '/cadastro' && navigate('/');
      location.pathname === '/login' && navigate('/');
    } else {
      location.pathname === '/checkout' && navigate('/login');
    }
  }, []); 

  function logOut() {
    setUser(null);
    navigate('/');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;