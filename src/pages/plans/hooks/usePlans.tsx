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
    userLimit: 0,
    startDate: "",
    endDate: "",
    paymentMethod: "",
    scopes: [],
    objectivesLimit: 0,
    activitiesLimit: 0,
    fullAccessIA: false,
    linkWithMentees: false,
    proAccountsLimit: null,
    recurrencyPlan: "",
  });
  const [plans, setPlans] = useState([]);
  const [scopes, setScopes] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      features: [""],
      typePlan: "",
      userLimit: 0,
      startDate: "",
      endDate: "",
      paymentMethod: "",
      scopes: [],
      objectivesLimit: 0,
      activitiesLimit: 0,
      fullAccessIA: false,
      linkWithMentees: false,
      proAccountsLimit: null,
      recurrencyPlan: "",
    });
    setEditingPlan(null);
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const planData = {
      name: formData.name,
      objectivesLimit: formData.objectivesLimit,
      activitiesLimit: formData.activitiesLimit,
      fullAccessIA: formData.fullAccessIA,
      linkWithMentees: formData.linkWithMentees,
      proAccountsLimit: formData.proAccountsLimit,
      duration: formData.recurrencyPlan,
      price: formData.price,
      typePlan: formData.typePlan || "free",
      recurrencyPlan: formData.recurrencyPlan,
    };

    try {
      // if (editingPlan) {
      //   await service.updatePlan(editingPlan.id, planData);
      //   const permissionData = {
      //     description: formData.name,
      //     paymentPlanId: editingPlan.id,
      //     scopes: formData.scopes,
      //   };
      //   await service.updatePermissions(editingPlan.id, permissionData);
      //   toast.success("Plano atualizado com sucesso!");
      // } else {
      const createdPlan = await service.createPlan(planData);
      const permissionData = {
        description: createdPlan?.name,
        paymentPlanId: createdPlan?.id,
        scopes: formData.scopes,
      };
      await service.createPermissions(permissionData);
      toast.success("Plano criado com sucesso!");
      // }

      await getPlans();
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar plano:", error);
      toast.error(editingPlan ? "Erro ao atualizar plano" : "Erro ao criar plano");
    }
  };

  const openEditModal = (plan) => {
    setEditingPlan(plan);

    // Verifica se o preço é "free" para definir o typePlan corretamente
    const isFree = plan.paymentPlan?.price === "free";

    setFormData({
      name: plan.name || "", // Nome do plano
      price: isFree ? "free" : plan.paymentPlan?.price || "",
      typePlan: isFree ? "free" : plan.typePlan || "",
      objectivesLimit: plan.objectivesLimit || 0,
      activitiesLimit: plan.activitiesLimit || 0,
      fullAccessIA: Boolean(plan.fullAccessIA),
      linkWithMentees: Boolean(plan.linkWithMentees),
      proAccountsLimit: plan.proAccountsLimit || null,
      recurrencyPlan: plan.recurrencyPlan || "",
      scopes: plan.scopes || [],
      features: plan.features || [""],
      userLimit: plan.userLimit || 0,
      startDate: plan.startDate || "",
      endDate: plan.endDate || "",
      paymentMethod: plan.paymentMethod || "",
    });

    setIsModalOpen(true);

    // Reset o passo para 1 quando abrir o modal
    setCurrentStep(1);
  };

  async function getPlans() {
    try {
      const response = await service.get();
      setPlans(response);
    } catch (error) {
      console.error("Erro ao buscar planos:", error);
      toast.error("Erro ao carregar os planos");
    }
  }

  async function getScopes() {
    try {
      const response = await service.getScopes();
      setScopes(response);
    } catch (error) {
      console.error("Erro ao buscar escopos:", error);
      toast.error("Erro ao carregar as permissões");
    }
  }

  function togglePlanStatus() {}

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

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
    currentStep,
    nextStep,
    prevStep,
  };
}
