import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'

export default function RecuperarAtendimentoDialog() {
  return (
    <Dialog component="form" open={false} onClose={undefined}>
      <DialogTitle>Recuperar Atendimento</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          Por Favor preencha os dados solicitados. Informe a maior quantidade de
          campos possível, tentando garantir que as informações são as mesmas
          informadas em seu cadastro.
        </DialogContentText>

        <TextField fullWidth id="input-cpf" label="CPF" variant="standard" />

        <TextField fullWidth id="input-nome" label="NOME" variant="standard" />

        <TextField
          fullWidth
          id="input-filiacoes"
          label="FILIAÇÕES"
          variant="standard"
        />
        <TextField
          fullWidth
          id="input-nascimento"
          label="DATA DE NASCIMENTO"
          variant="standard"
        />
        <TextField
          fullWidth
          id="input-telefone"
          label="N° DE TELEFONE"
          variant="standard"
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-around' }}>
        <Button
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
          Enviar
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
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
