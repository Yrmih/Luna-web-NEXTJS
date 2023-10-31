'use client'
// Internal
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
  Typography,
  Paper,
} from '@mui/material'
import { Controller, useForm, useFormState } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleFormularioSubmit } from '@/app/(painel-assistido)/editar-contato/actions'
import { ErrorSharp } from '@mui/icons-material'

// Define os campos recebidos pelo formulário (bem como seu tipo e parametros caso necessário, bem como sua mensagem de error ex.: ddd coloquei minimo de 3 caracteres)
export const formularioSchema = z.object({
  email: z.string().email('Você deve inserir um email válido'),
  ddd: z.string().min(3, 'O DDD deve conter 3 digitos'),
  telefone: z.string().min(7, 'Você deve inserir um telefone válido'),
})

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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          width: '90%',
          height: '90%',
        }}
        elevation={3}
      >
        <Card sx={{ width: '100%', height: '100%', textAlign: 'center' }}>
          <CardHeader
            title="Atualize seus dados de contato!"
            subheader="Manter seus dados atualizados agiliza seu atendimento"
          />
          <CardContent>
            {/* Formulário para envio da atualização dos dados do assistido */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Controller do Email */}
              <div>
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  {...register('email')}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                />
              </div>
              {/* Controller do DDD */}
              <div>
                <TextField
                  id="ddd"
                  label="DDD"
                  variant="outlined"
                  {...register('ddd')}
                  error={!!errors.ddd?.message}
                  helperText={errors.ddd?.message}
                />
              </div>
              {/* Controller do Telefone */}
              <div>
                <TextField
                  id="telefone"
                  label="Telefone"
                  variant="outlined"
                  {...register('telefone')}
                  error={!!errors.telefone?.message}
                  helperText={errors.telefone?.message}
                />
              </div>
              <div>
                <Button variant="contained" type="submit">
                  Atualizar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  )
}
