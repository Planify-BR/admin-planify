import HttpClient from "@infra/httpRequest";

const service = new HttpClient();

export default class PlanServices {
  async get() {
    const response = await service.get(`/permissions`);

    return response?.data;
  }

  async getScopes() {
    const response = await service.get(`/scopes`);

    return response?.data;
  }

  async createPlan(data: any) {
    const response = await service.post(`/payment-plans`, data);

    return response?.data;
  }

  async createPermissions(data: any) {
    const response = await service.post(`/permissions`, data);
    return response?.data;
  }
}
