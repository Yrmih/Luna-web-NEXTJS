'use client'
// Internal
import { handleFormularioSubmit } from '@/app/(painel-assistido)/editar-contato/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  TextField,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formularioSchema } from './editarContatoSchema'

// Define os campos recebidos pelo formulário (bem como seu tipo e parametros caso necessário, bem como sua mensagem de error ex.: ddd coloquei minimo de 3 caracteres)

// Tipagem do formulario
export type FormularioFields = z.infer<typeof formularioSchema>

export default function EditarContato() {
  // Ativação do envio do formulário
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm<FormularioFields>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(formularioSchema),
    defaultValues: {
      email: '',
      ddd: '',
    },
  })

  const onSubmit = (data: FormularioFields) => {
    handleFormularioSubmit(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginTop: '4vh',
      }}
    >
      <Paper
        sx={{
          width: { xs: 'auto', md: '50%' },
          height: { xs: 'auto', md: '50%' },
        }}
        elevation={3}
      >
        <Card
          sx={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <CardHeader
            title="Atualize seus dados de contato!"
            subheader="Manter seus dados atualizados agiliza seu atendimento"
          />
          <CardContent
            sx={{ height: '70%', justifyContent: 'center', display: 'flex' }}
          >
            {/* Formulário para envio da atualização dos dados do assistido */}
            <form
              style={{ height: '100%', width: '70%' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Container do Grid para disposição dos itens */}
              <Grid
                container
                sx={{ height: '100%' }}
                rowSpacing={1}
                spacing={1}
                columns={2}
              >
                <Grid item md={2} xs={2}>
                  {/* Controller do Email */}
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                    error={!!errors.email?.message}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item md={1} xs={2}>
                  {/* Controller do DDD */}
                  <TextField
                    id="ddd"
                    label="DDD"
                    variant="outlined"
                    {...register('ddd')}
                    error={!!errors.ddd?.message}
                    helperText={errors.ddd?.message}
                  />
                </Grid>
                <Grid item md={1} xs={2}>
                  {/* Controller do Telefone */}
                  <TextField
                    id="telefone"
                    label="Telefone"
                    variant="outlined"
                    {...register('telefone')}
                    error={!!errors.telefone?.message}
                    helperText={errors.telefone?.message}
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <Button variant="contained" type="submit">
                    Atualizar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  )
}
