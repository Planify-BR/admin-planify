import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '@root/contexts/globalContext/useGlobalContext';

export default function useCreatePlan() {
  const navigate = useNavigate();
  const { control, handleSubmit, watch, setValue } = useForm();
  const watchFields = watch();
  const { theme } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
    control,
    handleSubmit,
    watch,
    setValue,
    watchFields,
    navigate,
    theme,
  };
}
