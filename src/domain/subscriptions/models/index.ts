import { Plan } from '@domain/plans/models';
import { User } from '@domain/auth/models';

export interface Subscription {
  id: string;
  user: User;
  plan: Plan;
  status: 'active' | 'inactive';
  startDate: string;
  endDate?: string;
}

export interface SubscriptionStats {
  totalSubscriptions: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
}
