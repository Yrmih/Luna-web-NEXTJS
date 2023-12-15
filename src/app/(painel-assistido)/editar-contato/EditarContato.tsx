'use client'
// Internal
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { z } from 'zod'
import { editarContatoSchema } from './editarContatoSchema'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import React, { ChangeEvent } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { kMaxLength } from 'buffer'
// eslint-disable-next-line react-hooks/rules-of-hooks

// Tipagem do formulario

export type EditarContatoSchemaForm = z.infer<typeof editarContatoSchema>

const FORMULARIO_CAMPOS_EDITAR_CONTATO = [
  {
    label: 'E-mail',
    textHelper: 'Endereço de E-mail principal',
    placeHolder: 'exemplo@exemplo.com',
    icon: <WhatsAppIcon />,
  },
  {
    label: 'Número de Telefone',
    textHelper: 'Número de telefone fixo.',
    placeHolder: '(99) 9999-9999',
    icon: <LocalPhoneIcon />,
  },
]

export default function EditarContato() {
  // Define os campos recebidos pelo formulário (bem como seu tipo e parametros caso necessário, bem como sua mensagem de error ex.: ddd coloquei minimo de 3 caracteres)

  // controlador mudança email

  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<EditarContatoSchemaForm>({
    mode: 'onChange',
    resolver: zodResolver(editarContatoSchema),
  })

  const formatPhoneNumber = (value: string) => {
    const formattedValue = value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3')
    return formattedValue
  }

  const handlePhoneNumberChanger = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const rawValue = event.target.value

    const formattedValue = formatPhoneNumber(rawValue)

    setValue('telefone', formattedValue)
  }

  const onSubmit: SubmitHandler<EditarContatoSchemaForm> = (data) => {
    console.log('DADOS: ', data, 'ERRO: ', errors)
    console.log('VALID: ', isValid)
  }

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 0,
          m: 0,
          height: '85vh',
        }}
      >
        <Box
          color="white"
          fontWeight={600}
          fontSize={'1.5rem'}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : '#171717',
            paddingTop: '8vh',
            paddingLeft: '5vh',
            width: '100%',
            height: '25vh',
          }}
        >
          Meus Atendimentos
        </Box>
        <Stack
          direction={'column'}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? 'white' : '#1b1b1b',
            padding: '2vh',
            paddingTop: '8vh',
            paddingBottom: '8vh',
            paddingLeft: '8vh',
            height: '45vh',
            boxShadow: 2,
            borderRadius: '3vh',
            marginTop: '-8vh',
            alignItems: 'left',
            width: '70vw',
            '@media (min-width:900px)': {
              width: '45vw',
            },
          }}
        >
          <Typography variant="h6">Atualize seus dados de contato!</Typography>

          <TextField
            sx={{
              width: '50vw',
              '@media (min-width:900px)': {
                width: '35vw',
              },
            }}
            id="input-email"
            variant="standard"
            {...register('email')}
            error={errors.email !== undefined}
            helperText={
              errors.email !== undefined
                ? errors.email.message
                : FORMULARIO_CAMPOS_EDITAR_CONTATO[0].textHelper
            }
            label={FORMULARIO_CAMPOS_EDITAR_CONTATO[0].label}
            placeholder={FORMULARIO_CAMPOS_EDITAR_CONTATO[0].placeHolder}
          />

          <TextField
            sx={{
              width: '50vw',
              '@media (min-width:900px)': {
                width: '35vw',
              },
            }}
            {...register('telefone', {
              maxLength: 15,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                console.log(event.target.value)
              },
            })}
            onChange={handlePhoneNumberChanger}
            id="input-telefone"
            variant="standard"
            error={errors.telefone !== undefined}
            helperText={
              errors.telefone !== undefined
                ? errors.telefone.message
                : FORMULARIO_CAMPOS_EDITAR_CONTATO[1].textHelper
            }
            label={FORMULARIO_CAMPOS_EDITAR_CONTATO[1].label}
            placeholder={FORMULARIO_CAMPOS_EDITAR_CONTATO[1].placeHolder}
          />
          <Button
            sx={{
              width: '17vw',

              '@media (min-width:900px)': {
                width: '12vw',
              },
              '@media (min-width:1100px)': {
                width: '9vw',
              },
              marginTop: '3vh',
              mb: '2vh',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
              '&:hover': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? '#005bc9' : '#757575',
              },
            }}
            variant="contained"
          >
            Atualizar
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
