import { Breadcrumbs, Button, Grid, Link, Typography } from '@mui/material';

export default function TemplatePage({ ...sharedProps }) {
  const { navigate } = sharedProps;

  return (
    <Grid container>
      <Grid lg={11} md={11} sm={11}>
        <Breadcrumbs>
          <Link
            underline="hover"
            color="inherit"
            // href="/"
          >
            Planos de assinatura
          </Link>
          <Typography color="text.primary">Cadastro</Typography>
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
        <Button size="medium" onClick={() => navigate('/plans')}>
          Voltar
        </Button>
      </Grid>
    </Grid>
  );
}
