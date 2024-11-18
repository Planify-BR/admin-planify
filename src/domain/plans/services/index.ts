import HttpClient from '@infra/httpRequest';
import { Plan, CreatePlanDTO, UpdatePlanDTO } from '../models';

const API_URL = import.meta.env.VITE_API_URL;
const service = new HttpClient(API_URL);

export class PlanServices {
  async getPlans(): Promise<Plan[]> {
    const response = await service.get('/plans');
    return response.data;
  }

  async createPlan(data: CreatePlanDTO): Promise<Plan> {
    const response = await service.post('/plans', data);
    return response.data;
  }

  async updatePlan(id: string, data: UpdatePlanDTO): Promise<Plan> {
    const response = await service.put(`/plans/${id}`, data);
    return response.data;
  }

  async togglePlanStatus(id: string): Promise<Plan> {
    const response = await service.put(`/plans/${id}/toggle-status`, {});
    return response.data;
  }
}
