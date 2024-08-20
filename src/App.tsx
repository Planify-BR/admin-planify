import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth/useAuthContext';
import { GlobalProvider } from './contexts/globalContext/useGlobalContext';
import AppRoutes from './routes/AppRoutes';
import './styles.css';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <AppRoutes />
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
