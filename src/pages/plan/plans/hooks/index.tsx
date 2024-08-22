import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PlansServices } from '@root/domain/plans';

export default function usePlans() {
  const service = new PlansServices();
  const [plansData, setPlansData] = useState();

  const navigate = useNavigate();
  const { control, handleSubmit, watch, setValue } = useForm();
  const watchFields = watch();

  const [isLoading, setIsLoading] = useState(false);

  async function getPlans() {
    const response = await service.get();
    setPlansData(response);
  }

  console.log('plansData', plansData);

  return {
    isLoading,
    setIsLoading,
    control,
    handleSubmit,
    watch,
    setValue,
    watchFields,
    navigate,
    getPlans,
    plansData,
  };
}
