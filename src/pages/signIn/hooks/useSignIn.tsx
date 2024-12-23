import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/contexts/authContext";
import { AuthServices } from "../domain";

export function useSignIn() {
  const navigate = useNavigate();
  const { setToken } = useAuthStore();
  const service = new AuthServices();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await service.login(formData.email, formData.password);
      setToken(response.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Credenciais inválidas");
    }
  };

  return {
    formData,
    setFormData,
    error,
    handleSubmit,
  };
}
