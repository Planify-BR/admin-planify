import HttpClient from '@infra/httpRequest';
import { Subscription, SubscriptionStats } from '../models';

const API_URL = import.meta.env.VITE_API_URL;
const service = new HttpClient(API_URL);

export class SubscriptionServices {
  async getSubscriptions(): Promise<Subscription[]> {
    const response = await service.get('/subscriptions');
    return response.data;
  }

  async getSubscriptionStats(): Promise<SubscriptionStats> {
    const response = await service.get('/subscriptions/stats');
    return response.data;
  }

  async cancelSubscription(id: string): Promise<Subscription> {
    const response = await service.put(`/subscriptions/${id}/cancel`, {});
    return response.data;
  }
}
