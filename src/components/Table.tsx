/* eslint-disable @typescript-eslint/no-explicit-any */
interface TableColumn {
  id: string;
  label: string;
  align?: "left" | "center" | "right";
  render: (rowData: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

export function Table({ columns, data }: TableProps) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns?.map((column) => (
                    <th
                      key={column?.id}
                      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                        column?.align ? `text-${column?.align}` : ""
                      }`}
                    >
                      {column?.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((rowData, index) => (
                  <tr key={index}>
                    {columns?.map((column) => (
                      <td
                        key={column?.id}
                        className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${column?.align ? `text-${column?.align}` : ""}`}
                      >
                        {column?.render(rowData)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}