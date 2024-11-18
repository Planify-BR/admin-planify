import { create } from 'zustand';
import { User } from '@domain/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Simulated user data
const MOCK_USER = {
  id: '1',
  email: 'admin@example.com',
  name: 'Admin User'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Simulate API call
    if (email === 'admin@example.com' && password === 'admin123') {
      set({ user: MOCK_USER, isAuthenticated: true });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));