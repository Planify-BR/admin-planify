/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@contexts/auth/useAuthContext';
import { useGlobalContext } from '@contexts/globalContext/useGlobalContext';
import { RootTemplate } from '@components';
import { Box, CircularProgress } from '@mui/material';
import routes from './routes';

export default function AppRoutes() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const { theme } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    if (
      (isAuthenticated && location?.pathname === '/') ||
      (isAuthenticated && location?.pathname === '/resetPassword')
    ) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, location]);

  if (isAuthenticated && isLoading) {
    return (
      <Box
        height="100%"
        width="100%"
        pt="40vh"
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress
          size={100}
          sx={{
            color: theme?.defaultColor,
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: '#E9E9E9',
      }}
    >
      <Routes>
        {routes.map(({ path, element, isPublicRoute }) => (
          <Route
            key={path}
            path={path}
            element={isPublicRoute ? element : <RootTemplate>{element}</RootTemplate>}
          />
        ))}
      </Routes>
    </Box>
  );
}
