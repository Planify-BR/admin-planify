import HttpClient from '@infra/httpRequest';

const service = new HttpClient();

export default class PlansServices {
  async get() {
    const response = await service.get(`/api/recurrence/plans`);

    return response?.data?.data;
  }

  async getById(id: string) {
    const response = await service.get(`/plans/${id}`);

    return response?.data;
  }

  async create(data: any) {
    const response = await service.post(`/plans`, data);

    return response?.data;
  }
}
