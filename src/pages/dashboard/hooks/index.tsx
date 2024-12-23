import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DashboardServices } from "../domain";
import { useSubscriptionStore } from "@/contexts/subscriptionContext";

export default function useDashboard() {
  const { plans, subscriptions } = useSubscriptionStore();

  const service = new DashboardServices();
  const [pageData, setPageData] = useState();

  const navigate = useNavigate();
  const { control, handleSubmit, watch, setValue } = useForm();
  const watchFields = watch();

  const [isLoading, setIsLoading] = useState(false);

  async function getDashboard() {
    const response = await service.get();
    setPageData(response);
  }

  return {
    isLoading,
    setIsLoading,
    control,
    handleSubmit,
    watch,
    setValue,
    watchFields,
    navigate,
    getDashboard,
    plans,
    subscriptions,
  };
}
