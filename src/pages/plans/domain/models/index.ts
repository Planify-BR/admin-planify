// Adicione seus tipos e interfaces aqui. Exemplos:

export type TPaymentPlan = {
  name: string;
  price: string;
  duration: string;
};

export interface TPlan {
  id: string;
  status: "active" | "inactive";
  description: string;
  createdAt: string;
  updatedAt: string;
  paymentPlan: TPaymentPlan;
  paymentPlanId: string;
  scopes: string[];
}
