import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  async get(url: string) {
    return this.api.get(url);
  }

  async post(url: string, data: any) {
    return this.api.post(url, data);
  }

  async put(url: string, data: any) {
    return this.api.put(url, data);
  }

  async delete(url: string) {
    return this.api.delete(url);
  }
}
