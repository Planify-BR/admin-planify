import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { SignInServices } from '@root/domain/signIn';

export default function useSignIn() {
  // const service = new SignInServices();

  const navigate = useNavigate();
  const { control, handleSubmit, watch, setValue } = useForm();
  const watchFields = watch();

  const [isLoading, setIsLoading] = useState(false);

  async function signIn(data) {
    console.log('data', data);
    navigate('/dashboard');
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
  };
}
