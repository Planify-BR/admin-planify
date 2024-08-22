import { IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export function TableColumns() {
  return [
    {
      id: 'name',
      label: 'Nome do plano',
      render: (rowData) => <Typography>{rowData?.name}</Typography>,
    },
    {
      align: 'center',
      id: 'price',
      label: 'Preço',
      render: (rowData) => <Typography>{rowData?.minimum_price}</Typography>,
    },
    {
      align: 'center',
      id: 'status',
      label: 'Recorrência',
      render: (rowData) => <Typography>{rowData?.installments[0]} meses</Typography>,
    },
    {
      align: 'center',
      id: 'status',
      label: 'Ações',
      render: (rowData) => (
        <IconButton onClick={() => console.log(rowData?.id)}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];
}
