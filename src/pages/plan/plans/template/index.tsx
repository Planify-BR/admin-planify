import { Breadcrumbs, Button, Grid, Typography } from '@mui/material';
import { Table } from '@root/components/Table';
import { TableColumns } from '../mocks/TableColumns';

export default function TemplatePage({ ...sharedProps }) {
  const { navigate, plansData } = sharedProps;

  return (
    <Grid container>
      <Grid lg={11} md={11} sm={11}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Planos de assinatura</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid
        lg={1}
        md={1}
        sm={1}
        sx={{
          '& .MuiButtonBase-root': {
            color: '#980909',
            background: '#fff!important',
            borderRadius: '20px',
            minWidth: '100%',
          },
        }}
      >
        <Button size="medium" onClick={() => navigate('/plans/new')}>
          Cadastrar
        </Button>
      </Grid>
      <Grid lg={12} mt={5}>
        <Table
          columns={TableColumns()}
          data={plansData}
          loading={false}
          align={null}
          notFoundMessage="Nenhum plano cadastrado no momento"
        />
      </Grid>
    </Grid>
  );
}
