export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  active: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired';
  startDate: string;
  endDate: string;
  user: {
    name: string;
    email: string;
  };
  plan: {
    name: string;
    price: number;
  };
}