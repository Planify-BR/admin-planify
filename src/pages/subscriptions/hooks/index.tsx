import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SubscriptionsServices } from "@root/domain/subscriptions";

export default function useSubscriptions() {  
  const service = new SubscriptionsServices();
  const [pageData, setPageData] = useState()

  const navigate = useNavigate(); 
  const { control, handleSubmit, watch, setValue } = useForm();
  const watchFields = watch();

  const [isLoading, setIsLoading] = useState(false); 

  async function getSubscriptions() {
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
    getSubscriptions,
    pageData
  }; 
}