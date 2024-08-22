import { Box, Button, Grid, TextField } from '@mui/material';
import Logo from '@assets/logo.svg';
import Bg from '@assets/bg.jpg';

export default function TemplatePage({ ...sharedProps }) {
  const { validateIfIsDisabledButton, handleSubmit, signIn, setValue } = sharedProps;

  return (
    <Box minHeight="100vh" pt={30}>
      <form onSubmit={handleSubmit(signIn)}>
        <Grid
          container
          spacing={4}
          margin="0 auto"
          borderRadius={4}
          maxWidth="500px"
          textAlign="center"
          p={5}
          sx={{
            backgroundImage: `url(${Bg})`,
            minHeight: '450px',
            minWidth: '200px',
            '& .MuiInputBase-root': {
              background: '#fff!important',
            },
            '& .MuiButtonBase-root': {
              color: '#980909',
              background: '#fff!important',
              borderRadius: '20px',
              minWidth: '200px',
            },
          }}
        >
          <Grid lg={12} sm={12} md={12}>
            <img src={Logo} width="200px" />
          </Grid>
          <Grid lg={12} sm={12} md={12}>
            <TextField
              fullWidth
              label="E-mail"
              name="email"
              variant="filled"
              size="small"
              onChange={(e) => setValue('email', e?.target?.value as string)}
            />
          </Grid>
          <Grid lg={12} sm={12} md={12}>
            <TextField
              fullWidth
              label="Senha"
              name="password"
              variant="filled"
              size="small"
              onChange={(e) => setValue('password', e?.target?.value as string)}
            />
          </Grid>
          <Grid lg={12} sm={12} md={12}>
            <Button
              size="medium"
              type={!validateIfIsDisabledButton() ? 'submit' : 'button'}
              disabled={validateIfIsDisabledButton()}
            >
              Acessar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
