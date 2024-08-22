import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SignInServices } from '@root/domain/signIn';
import { toast } from 'react-toastify';
import { useAuth } from '@root/contexts/auth/useAuthContext';

export default function useSignIn() {
  const service = new SignInServices();
  const { setUserToken } = useAuth();

  const navigate = useNavigate();
  const { control, handleSubmit, watch, setValue } = useForm();
  const watchFields = watch();

  const [isLoading, setIsLoading] = useState(false);

  async function signIn(data) {
    const formatedData = {
      email: data.email,
      password: data.password,
    };

    const response = await service.signIn(formatedData);

    if (response?.token) {
      setUserToken(response.token);
      navigate('/plans');
    } else {
      toast.error('Usuário ou senha inválidos');
    }
  }

  function validateIfIsDisabledButton() {
    if (watchFields?.email?.length > 1 && watchFields?.password?.length > 1) {
      return false;
    }
    return true;
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
    signIn,
    validateIfIsDisabledButton,
  };
}
