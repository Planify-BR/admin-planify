export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  active: boolean;
}

export interface CreatePlanDTO {
  name: string;
  price: number;
  features: string[];
}

export interface UpdatePlanDTO extends CreatePlanDTO {
  active: boolean;
}
