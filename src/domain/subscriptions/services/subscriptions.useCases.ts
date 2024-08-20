import HttpClient from "@infra/httpRequest";

const service = new HttpClient();

export default class SubscriptionsServices {
  async get() {
    const response = await service.get(`/subscriptions`);

    return response?.data;
  }

  async getById(id: string) {
    const response = await service.get(`/subscriptions/${id}`);

    return response?.data;
  }

  async create(data: any) {
    const response = await service.post(
      `/subscriptions`,
      data
    );

    return response?.data;
  }
}
