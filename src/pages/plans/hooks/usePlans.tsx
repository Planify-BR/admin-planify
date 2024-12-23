import React, { useState } from "react";
// import { useSubscriptionStore } from "@/contexts/subscriptionContext";
import { PlanServices } from "../domain";

export function usePlans() {
  // const { plans, addPlan, updatePlan, togglePlanStatus } = useSubscriptionStore();
  const service = new PlanServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    features: [""],
  });
  const [plans, setPlans] = useState([]);
  const [scopes, setScopes] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // const planData = {
    //   name: formData.name,
    //   price: Number(formData.price),
    //   features: formData.features.filter(Boolean),
    //   active: true,
    // };
    // if (editingPlan) {
    //   updatePlan(editingPlan.id, planData);
    // } else {
    //   addPlan(planData);
    // }
    // setIsModalOpen(false);
    // setEditingPlan(null);
    // setFormData({ name: "", price: "", features: [""] });
  };

  const openEditModal = (plan: Plan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      features: [...plan.features],
    });
    setIsModalOpen(true);
  };

  async function getPlans() {
    const response = await service.get();
    setPlans(response);
  }

  async function getScopes() {
    const response = await service.getScopes();
    setScopes(response);
  }

  function togglePlanStatus() {}

  return {
    plans,
    openEditModal,
    handleSubmit,
    isModalOpen,
    togglePlanStatus,
    formData,
    editingPlan,
    setFormData,
    setIsModalOpen,
    setEditingPlan,
    getPlans,
    getScopes,
    scopes,
  };
}
