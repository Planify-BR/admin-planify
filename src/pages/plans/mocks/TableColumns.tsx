import { TPlan } from "../domain/models";
import { Edit } from "lucide-react";

export function TableColumns({ onEdit }) {
  const planStatus = {
    active: "Ativo",
    inactive: "Inativo",
  };
  return [
    {
      id: "name",
      label: "Nome",
      render: (rowData: TPlan) => <p>{rowData?.description}</p>,
    },
    {
      align: "center",
      id: "price",
      label: "Preço",
      padding: "0px",
      render: (rowData: TPlan) => <p>{rowData?.paymentPlan?.price}</p>,
    },
    {
      align: "center",
      id: "status",
      label: "Status",
      render: (rowData: TPlan) => <p>{planStatus[rowData?.status] ?? "-"}</p>,
    },
    {
      align: "center",
      id: "period",
      label: "Vigência",
      render: (rowData: TPlan) => <p>{rowData?.paymentPlan?.duration ?? "-"}</p>,
    },
    {
      align: "center",
      id: "scopes",
      label: "Permissões",
      width: "300px",
      render: (rowData: TPlan) => (
        <div className="w-[300px] overflow-hidden mx-auto">
          <div className="flex flex-wrap gap-1 justify-center">
            {rowData?.scopes?.map((item, index) => (
              <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      align: "center",
      id: "actions",
      label: "Ações",
      render: (rowData: TPlan) => (
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => onEdit(rowData)} className="p-2 text-gray-600  hover:text-primary" title="Editar plano">
            <Edit size={18} />
          </button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Ativo</span>
          </label>
        </div>
      ),
    },
  ];
}
