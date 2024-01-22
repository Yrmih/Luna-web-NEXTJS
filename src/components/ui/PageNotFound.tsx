import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material'

export function PageNotFound() {
  return (
    <Container component="main" maxWidth="xl" sx={{ mt: 10 }}>
      <Stack
        gap={4}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography component={'h1'} fontWeight={700} variant={'h1'}>
          {'404'}
        </Typography>
        <Alert severity="error">
          <AlertTitle>404</AlertTitle>
          <Typography component={'h2'} variant={'h3'}>
            {'Página não encontrada'}
          </Typography>
        </Alert>
        <Button href="/" variant="outlined">
          Ir para a página inicial
        </Button>
      </Stack>
    </Container>
  )
}
