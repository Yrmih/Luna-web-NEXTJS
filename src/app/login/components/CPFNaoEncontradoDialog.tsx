import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export default function CPFNaoEncontradoDialog() {
  return (
    <Dialog open={false} onClose={undefined}>
      <DialogTitle>Desculpe, não encontrei seus dados.</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          O seu CPF é este mesmo ? ( {'54543543543543'} ) , eu acredito que seja
          a primeira vez que está entrando em contato utilizando este canal de
          atendimento. Basta clicar no botão abaixo e seguir a instruções.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-around' }}>
        <Button
          href="/cadastro-assistido"
          sx={{
            marginLeft: '2vw',
            marginBottom: '2vh',
            fontSize: '0.65rem',
            '@media (min-width:600px)': {
              fontSize: '1rem',
            },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
        >
          Realizar Novo Cadastro
        </Button>
        <Button
          sx={{
            marginRight: '2vw',
            marginBottom: '2vh',
            fontSize: '0.65rem',
            '@media (min-width:600px)': {
              fontSize: '1rem',
            },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
          onClick={undefined}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
