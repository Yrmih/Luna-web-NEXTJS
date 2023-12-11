'use client'
// Internal
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { z } from 'zod'
import { formularioSchema } from './editarContatoSchema'

import React from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks

// Tipagem do formulario
export type FormularioFields = z.infer<typeof formularioSchema>

export default function EditarContato() {
  const [valorTel, setValorTel] = React.useState('')
  const [valorEmail, setValorEmail] = React.useState('')

  // Define os campos recebidos pelo formulário (bem como seu tipo e parametros caso necessário, bem como sua mensagem de error ex.: ddd coloquei minimo de 3 caracteres)

  // controlador mudança telefone
  const handleTelChange = (e: { currentTarget: { value: string } }) => {
    const tel = e.currentTarget.value

    setValorTel(tel)
  }

  // controlador mudança email
  const handleEmailChange = (e: { currentTarget: { value: string } }) => {
    const email = e.currentTarget.value

    setValorEmail(email)
  }
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
      }}
    >
      <Paper
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
            value={valorEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleEmailChange(e)
              console.log(valorEmail)
              console.log(emailRegex.test(valorEmail.toString()))
            }}
            id="input-email"
            label="E-MAIL"
            variant="standard"
            error={!emailRegex.test(valorEmail.toString()) && valorEmail !== ''}
          />

          <TextField
            sx={{
              width: '50vw',
              '@media (min-width:900px)': {
                width: '35vw',
              },
            }}
            id="input-telefone"
            label="N° DE TELEFONE"
            variant="standard"
            error={valorTel.includes('_') && valorTel !== '(__) _____-____'}
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
