/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "@/components/Table";
import { Plus } from "lucide-react";
import { TableColumns } from "../mocks/TableColumns";
import { useState } from "react";

export function Template({ ...sharedProps }) {
  const {
    setIsModalOpen,
    plans,
    openEditModal,
    togglePlanStatus,
    isModalOpen,
    handleSubmit,
    editingPlan,
    formData,
    setFormData,
    setEditingPlan,
    scopes,
  } = sharedProps;

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={formData.typePlan === "free"}
                  onChange={(e) => {
                    const isFree = e.target.checked;
                    setFormData({
                      ...formData,
                      typePlan: isFree ? "free" : "",
                      price: isFree ? "free" : formData.price,
                    });
                  }}
                />
                <span className="ml-2 text-sm text-gray-700">Este é um plano Gratuito?</span>
              </label>
            </div>

            {formData.typePlan !== "free" && (
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Preço
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="0.00"
                />
              </div>
            )}

            {/* <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Descrição"
              />
            </div> */}
            {/* <div>
              <label htmlFor="userLimit" className="block text-sm font-medium text-gray-700">
                Limite de Usuários
              </label>
              <input
                type="number"
                name="userLimit"
                id="userLimit"
                required
                value={formData.userLimit}
                onChange={(e) => setFormData({ ...formData, userLimit: Number(e.target.value) })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Limite de Usuários"
              />
            </div> */}
            <div>
              <label htmlFor="scopes" className="block text-sm font-medium text-gray-700">
                Permissões do plano
              </label>
              <select
                id="scopes"
                name="scopes"
                required
                onChange={(e) => {
                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                  setFormData({ ...formData, scopes: [...new Set([...formData.scopes, ...selectedOptions])] });
                }}
                multiple
                disabled={scopes.filter((scope) => !formData.scopes.includes(scope.id)).length === 0}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              >
                {scopes
                  .filter((scope) => !formData.scopes.includes(scope.id))
                  .map((scope) => (
                    <option key={scope.id} value={scope.id}>
                      {scope.name}
                    </option>
                  ))}
              </select>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.scopes.map((scopeId) => {
                  const scope = scopes.find((s) => s.id === scopeId);
                  return (
                    <span
                      key={scopeId}
                      className="inline-flex items-center px-2 py-1 rounded-full border border-gray-300 bg-gray-100 text-sm font-medium text-gray-700"
                    >
                      {scope ? scope.name : scopeId}
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, scopes: formData.scopes.filter((id) => id !== scopeId) })}
                        className="ml-1 text-red-500 hover:text-red-700"
                      >
                        &times;
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label htmlFor="objectivesLimit" className="block text-sm font-medium text-gray-700">
                Limite de Objetivos
              </label>
              <input
                type="number"
                name="objectivesLimit"
                id="objectivesLimit"
                required
                value={formData.objectivesLimit}
                onChange={(e) => setFormData({ ...formData, objectivesLimit: Number(e.target.value) })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Limite de Objetivos"
              />
            </div>
            <div>
              <label htmlFor="activitiesLimit" className="block text-sm font-medium text-gray-700">
                Limite de Atividades
              </label>
              <input
                type="number"
                name="activitiesLimit"
                id="activitiesLimit"
                required
                value={formData.activitiesLimit}
                onChange={(e) => setFormData({ ...formData, activitiesLimit: Number(e.target.value) })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Limite de Atividades"
              />
            </div>
            <div>
              <label htmlFor="fullAccessIA" className="block text-sm font-medium text-gray-700">
                Possui acesso Completo IA?
              </label>
              <input
                type="checkbox"
                name="fullAccessIA"
                id="fullAccessIA"
                checked={formData.fullAccessIA}
                onChange={(e) => setFormData({ ...formData, fullAccessIA: e.target.checked })}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="linkWithMentees" className="block text-sm font-medium text-gray-700">
                Possui link com Mentorados?
              </label>
              <input
                type="checkbox"
                name="linkWithMentees"
                id="linkWithMentees"
                checked={formData.linkWithMentees}
                onChange={(e) => setFormData({ ...formData, linkWithMentees: e.target.checked })}
                className="mt-1"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <label htmlFor="recurrencyPlan" className="block text-sm font-medium text-gray-700">
                Recorrência do Plano
              </label>
              <select
                name="recurrencyPlan"
                id="recurrencyPlan"
                required
                value={formData.recurrencyPlan}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, recurrencyPlan: value });
                }}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              >
                <option value="">Selecione uma opção</option>
                <option value="month">Mensal</option>
                <option value="year">Anual</option>
                {[...Array(12).keys()].map((i) => (
                  <option key={i + 1} value={`${i + 1} months`}>
                    {i + 1} meses
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="proAccountsLimit" className="block text-sm font-medium text-gray-700">
                Limite de Contas Pro
              </label>
              <input
                type="number"
                name="proAccountsLimit"
                id="proAccountsLimit"
                value={formData.proAccountsLimit || ""}
                onChange={(e) => setFormData({ ...formData, proAccountsLimit: e.target.value ? Number(e.target.value) : null })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Limite de Contas Pro"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Planos de Assinatura</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Plano
        </button>
      </div>

      <Table columns={TableColumns()} data={plans} />

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{editingPlan ? "Editar Plano" : "Novo Plano"}</h3>
                <form className="mt-5 space-y-4">
                  {renderStep()}
                  <div className="flex justify-between mt-4">
                    {currentStep > 1 && (
                      <button type="button" onClick={prevStep} className="text-sm text-gray-500">
                        Voltar
                      </button>
                    )}
                    {currentStep < 3 ? (
                      <button type="button" onClick={nextStep} className="text-sm text-primary">
                        Próximo
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-600"
                      >
                        Criar Plano
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
