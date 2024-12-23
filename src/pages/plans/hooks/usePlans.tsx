import React, { useState } from "react";
// import { useSubscriptionStore } from "@/contexts/subscriptionContext";
import { PlanServices } from "../domain";
import { toast } from "react-toastify";

export function usePlans() {
  // const { plans, addPlan, updatePlan, togglePlanStatus } = useSubscriptionStore();
  const service = new PlanServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    features: [""],
    typePlan: "",
    // description: "",
    userLimit: 0,
    startDate: "",
    endDate: "",
    paymentMethod: "",
    scopes: [],
    objectivesLimit: 0,
    activitiesLimit: 0,
  });
  const [plans, setPlans] = useState([]);
  const [scopes, setScopes] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const planData = {
      name: formData.name,
      objectivesLimit: 1,
      activitiesLimit: 100,
      fullAccessIA: false,
      linkWithMentees: false,
      proAccountsLimit: null,
      duration: "12 meses",
      price: formData.price,
      typePlan: formData.typePlan || "free",
      recurrencyPlan: "12 months",
      // description: formData.description,
      userLimit: formData.userLimit,
      startDate: formData.startDate,
      endDate: formData.endDate,
      paymentMethod: formData.paymentMethod,
    };

    try {
      const createdPlan = await service.createPlan(planData);
      const permissionData = {
        description: createdPlan?.name,
        paymentPlanId: createdPlan?.id,
        scopes: scopes.map((scope) => scope.id),
      };
      await service.createPermissions(permissionData);
      setIsModalOpen(false);
      setEditingPlan(null);
      setFormData({
        name: "",
        price: "",
        features: [""],
        typePlan: "",
        // description: "",
        userLimit: 0,
        startDate: "",
        endDate: "",
        paymentMethod: "",
        scopes: [],
        objectivesLimit: 0,
        activitiesLimit: 0,
      });

      toast.success("Plano de assinatura criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar plano:", error);
      toast.warning("Erro ao criar plano de assinatura");
    }
  };

  const openEditModal = (plan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      features: [...plan.features],
      typePlan: plan.typePlan,
      // description: plan.description || "",
      userLimit: plan.userLimit || 0,
      startDate: plan.startDate || "",
      endDate: plan.endDate || "",
      paymentMethod: plan.paymentMethod || "",
      scopes: plan.scopes || [],
      objectivesLimit: 0,
      activitiesLimit: 0,
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
