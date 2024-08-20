import HttpClient from "@infra/httpRequest";

const service = new HttpClient();

export default class TestServices {
  async get() {
    const response = await service.get(`/test`);

    return response?.data;
  }

  async getById(id: string) {
    const response = await service.get(`/test/${id}`);

    return response?.data;
  }

  async create(data: any) {
    const response = await service.post(
      `/test`,
      data
    );

    return response?.data;
  }
}
