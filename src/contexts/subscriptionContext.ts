import { create } from 'zustand';
import { Plan, Subscription } from '@domain/types';

interface SubscriptionState {
  plans: Plan[];
  subscriptions: Subscription[];
  addPlan: (plan: Omit<Plan, 'id'>) => void;
  updatePlan: (id: string, plan: Partial<Plan>) => void;
  togglePlanStatus: (id: string) => void;
}

// Mock data
const MOCK_PLANS: Plan[] = [
  {
    id: '1',
    name: 'Basic',
    price: 29.99,
    features: ['Feature 1', 'Feature 2'],
    active: true,
  },
  {
    id: '2',
    name: 'Pro',
    price: 59.99,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    active: true,
  },
];

const MOCK_SUBSCRIPTIONS: Subscription[] = [
  {
    id: '1',
    userId: '1',
    planId: '1',
    status: 'active',
    startDate: '2024-03-01',
    endDate: '2024-04-01',
    user: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    plan: {
      name: 'Basic',
      price: 29.99,
    },
  },
  {
    id: '2',
    userId: '2',
    planId: '2',
    status: 'active',
    startDate: '2024-02-15',
    endDate: '2024-03-15',
    user: {
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
    plan: {
      name: 'Pro',
      price: 59.99,
    },
  },
];

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  plans: MOCK_PLANS,
  subscriptions: MOCK_SUBSCRIPTIONS,
  addPlan: (plan) =>
    set((state) => ({
      plans: [...state.plans, { ...plan, id: Math.random().toString() }],
    })),
  updatePlan: (id, updatedPlan) =>
    set((state) => ({
      plans: state.plans.map((plan) =>
        plan.id === id ? { ...plan, ...updatedPlan } : plan
      ),
    })),
  togglePlanStatus: (id) =>
    set((state) => ({
      plans: state.plans.map((plan) =>
        plan.id === id ? { ...plan, active: !plan.active } : plan
      ),
    })),
}));