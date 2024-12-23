import { CreditCard, TrendingUp, Users } from "lucide-react";

export default function TemplatePage({ ...sharedProps }) {
  const { plans, subscriptions } = sharedProps;

  const stats = [
    {
      name: "Total de Planos",
      value: plans.length,
      icon: CreditCard,
      change: "+4.75%",
      changeType: "positive",
    },
    {
      name: "Assinaturas Ativas",
      value: 5,
      icon: Users,
      change: "+54.02%",
      changeType: "positive",
    },
    {
      name: "Receita Mensal",
      value: `R$$ 1000,00`,
      icon: TrendingUp,
      change: "+12.05%",
      changeType: "positive",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Painel de Controle</h1>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <dt>
              <div className="absolute bg-primary rounded-md p-3">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p className={`ml-2 flex items-baseline text-sm font-semibold ${item.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Assinaturas Recentes</h2>
        <div className="mt-4 bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plano</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Início</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscriptions.map((item?) => (
                <tr key={item?.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item?.user.name}</div>
                    <div className="text-sm text-gray-500">{item?.user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item?.plan.name}</div>
                    <div className="text-sm text-gray-500">R${item?.plan.price}/mês</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item?.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item?.startDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
