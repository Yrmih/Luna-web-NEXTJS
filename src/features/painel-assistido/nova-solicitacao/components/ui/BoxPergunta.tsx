// Third party
import { Box, TextField, Typography } from '@mui/material'

interface BoxPerguntaProps {
  props: {
    pergunta?: string
  }
}
export function BoxPergunta({ props }: BoxPerguntaProps) {
  return (
    <Box
      component="form"
      flexDirection={'column'}
      sx={{
        mt: '3vh',
        '& .MuiTextField-root': { m: 1, width: '50vw' },
      }}
    >
      <Typography sx={{ ml: '1vw' }}>{props.pergunta}</Typography>
      <TextField
        variant="filled"
        id="pergunta"
        label="Resposta"
        placeholder="Insira aqui sua resposta"
      />
    </Box>
  )
}
