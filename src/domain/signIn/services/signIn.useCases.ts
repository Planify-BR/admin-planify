import HttpClient from '@infra/httpRequest';

const service = new HttpClient();

export default class SignInServices {
  async get() {
    const response = await service.get(`/signIn`);

    return response?.data;
  }

  async getById(id: string) {
    const response = await service.get(`/signIn/${id}`);

    return response?.data;
  }

  async create(data: any) {
    const response = await service.post(`/signIn`, data);

    return response?.data;
  }
}
