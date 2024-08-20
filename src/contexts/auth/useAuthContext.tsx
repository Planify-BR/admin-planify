/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface IAuthContext {
  token: string;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  signOut: () => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  handleGlobalLoader: () => void;
  handleGlobalLoaderNavigation: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
  token: '',
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  signOut: () => {},
  isLoading: true,
  setIsLoading: () => {},
  handleGlobalLoader: () => {},
  handleGlobalLoaderNavigation: () => {},
});

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(Cookies.get('token') ?? '');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) {
      // getCurrentPartner(); // uncomment if you need this
      handleGlobalLoader();
    }
  }, [isAuthenticated]);

  const handleGlobalLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleGlobalLoaderNavigation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const signOut = () => {
    handleGlobalLoader();
    Cookies.remove('token');
    setTimeout(() => {
      setIsAuthenticated(false);
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        setIsAuthenticated,
        signOut,
        isLoading,
        setIsLoading,
        handleGlobalLoader,
        handleGlobalLoaderNavigation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
