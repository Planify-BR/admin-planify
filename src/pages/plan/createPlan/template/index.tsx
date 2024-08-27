import { Autocomplete, Box, Breadcrumbs, Button, Link, TextField, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaSave } from 'react-icons/fa';

interface Option {
  label: string;
  value: string | number;
}

export default function TemplatePage({ ...sharedProps }) {
  const { watchFields, navigate, setValue, theme } = sharedProps;

  console.log('watchFields', watchFields);

  return (
    <>
      <Grid container spacing={4} mb={5}>
        <Grid
          size={{
            lg: 11,
            md: 11,
            sm: 11,
          }}
        >
          <Breadcrumbs>
            <Link
              underline="hover"
              color="inherit"
              // href="/"
            >
              Planos de assinatura
            </Link>
            <Typography
              sx={{
                color: theme?.defaultColor,
              }}
            >
              Cadastro
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid
          size={{
            lg: 1,
            md: 1,
            sm: 12,
          }}
          sx={{
            '& .MuiButtonBase-root': {
              color: theme?.defaultColor,
              background: '#fff!important',
              borderRadius: '20px',
              minWidth: '100%',
            },
          }}
        >
          <Button size="medium" startIcon={<FaArrowLeft />} onClick={() => navigate('/plans')}>
            Voltar
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        p={4}
        borderRadius={2}
        sx={{
          height: '100%',
          background: '#fff',
        }}
      >
        <Grid
          size={{
            lg: 3,
            md: 3,
            sm: 12,
          }}
        >
          <TextField
            fullWidth
            label="Nome do plano"
            name="name"
            variant="filled"
            size="small"
            onChange={(e) => setValue('name', e?.target?.value as string)}
          />
        </Grid>
        <Grid
          size={{
            lg: 3,
            md: 3,
            sm: 12,
          }}
        >
          <Autocomplete
            disablePortal
            onChange={(event: React.ChangeEvent<{}>, newValue: Option | null) =>
              setValue('interval', newValue)
            }
            options={[
              { label: 'Mensal', value: 'month' },
              { label: 'Anual', value: 'year' },
            ]}
            // sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                variant="filled"
                size="small"
                label="Intervalo de pagamento"
              />
            )}
          />
        </Grid>
        <Grid
          size={{
            lg: 3,
            md: 3,
            sm: 12,
          }}
        >
          <TextField
            fullWidth
            label="Preço R$"
            name="price"
            variant="filled"
            size="small"
            type="number"
            onChange={(e) => setValue('price', e?.target?.value as string)}
          />
        </Grid>
        <Grid
          size={{
            lg: 3,
            md: 3,
            sm: 12,
          }}
        >
          <Autocomplete
            disablePortal
            onChange={(event: React.ChangeEvent<{}>, newValue: Option | null) =>
              setValue('interval', newValue)
            }
            options={[
              { label: '1 vez', value: 1 },
              { label: '3 vezes', value: 3 },
              { label: '6 vezes', value: 6 },
              { label: '10 vezes', value: 10 },
              { label: '12 vezes', value: 12 },
            ]}
            // sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                variant="filled"
                size="small"
                label="Quant. de parcelas"
              />
            )}
          />
        </Grid>
        <Grid
          size={{
            lg: 12,
            md: 12,
            sm: 12,
          }}
        >
          <TextField
            fullWidth
            label="Obervações"
            name="observation"
            variant="filled"
            size="small"
            onChange={(e) => setValue('price', e?.target?.value as string)}
          />
        </Grid>
        <Grid
          size={{
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
          }}
          sx={{
            '& .MuiButtonBase-root': {
              color: '#fff',
              background: theme?.defaultColor,
              borderRadius: '20px',
              minWidth: '100%',
              padding: "5px 40px"
            },
          }}
        >
          <Box
            sx={{
              float: 'right',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button size="medium" fullWidth endIcon={<FaSave />} onClick={() => navigate('/plans')}>
              Salvar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
