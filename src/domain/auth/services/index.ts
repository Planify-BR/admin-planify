import HttpClient from '@infra/httpRequest';
import { SignInCredentials, AuthResponse } from '../models';

const API_URL = import.meta.env.VITE_API_URL;
const service = new HttpClient(API_URL);

export class AuthServices {
  async signIn(credentials: SignInCredentials): Promise<AuthResponse> {
    const response = await service.post('/auth/admin', credentials);
    return response.data;
  }

  async signOut(): Promise<void> {
    localStorage.removeItem('token');
  }
}
