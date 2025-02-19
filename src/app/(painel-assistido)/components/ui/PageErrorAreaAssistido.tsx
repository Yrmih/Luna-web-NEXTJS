// Third party
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material'

export function PageErrorAreaAssistido({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <Container component="main" maxWidth="xl" sx={{ mt: 10 }}>
      <Stack
        gap={4}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography component={'h1'} fontWeight={700} variant={'h1'}>
          {'OOPS!!'}
        </Typography>
        <Typography
          component={'h2'}
          variant={'h4'}
        >{`Ocorreu um erro na Área do Assistido`}</Typography>
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          <Typography
            component={'h2'}
            variant={'h4'}
          >{`"${error.message}"`}</Typography>
        </Alert>
        <Button variant="outlined" onClick={() => reset()}>
          Tentar Novamente
        </Button>
      </Stack>
    </Container>
  )
}
