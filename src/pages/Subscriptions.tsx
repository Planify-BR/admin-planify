import { useSubscriptionStore } from "@contexts/subscriptionContext";

export default function Subscriptions() {
  const { subscriptions } = useSubscriptionStore();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Assinaturas</h1>

      <div className="mt-8 bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plano</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Início</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Fim</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{subscription.user.name}</div>
                  <div className="text-sm text-gray-500">{subscription.user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{subscription.plan.name}</div>
                  <div className="text-sm text-gray-500">R${subscription.plan.price}/mês</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {subscription.status === "active" ? "Ativo" : "Inativo"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(subscription.startDate).toLocaleDateString("pt-BR")}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {subscription.endDate ? new Date(subscription.endDate).toLocaleDateString("pt-BR") : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R${subscription.plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
