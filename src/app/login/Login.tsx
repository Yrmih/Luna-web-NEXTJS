'use client'
import { AccountCircle } from '@mui/icons-material'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import InputMask from 'react-input-mask'
import React from 'react'

// Framework

// Internal

export function Login() {
  const [valorCpf, setValorCpf] = React.useState('')
  const [cpfError, setCpfError] = React.useState(false)
  const [cpfHelperText, setCpfHelperText] = React.useState('')
  const [valorNumAtendimento, setValorNumAtendimento] = React.useState('')
  const [numAtendimentoError, setNumAtendimentoError] = React.useState(false)
  const [numAtendimentoHelperText, setNumAtendimentoHelperText] =
    React.useState('')

  // validador CPF
  function isValidCPF(cpf) {
    // Validar se é String
    if (typeof cpf !== 'string') return false

    // Tirar formatação
    cpf = cpf.replace(/[^\d]+/g, '')

    // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

    // String para Array
    cpf = cpf.split('')

    const validator = cpf
      // Pegar os últimos 2 digitos de validação
      .filter((digit, index, array) => index >= array.length - 2 && digit)
      // Transformar digitos em números
      .map((el) => +el)

    const toValidate = (pop) =>
      cpf
        // Pegar Array de items para validar
        .filter((digit, index, array) => index < array.length - pop && digit)
        // Transformar digitos em números
        .map((el) => +el)

    const rest = (count, pop) =>
      ((toValidate(pop)
        // Calcular Soma dos digitos e multiplicar por 10
        .reduce((soma, el, i) => soma + el * (count - i), 0) *
        10) %
        // Pegar o resto por 11
        11) %
      // transformar de 10 para 0
      10

    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
  }

  // controlador mudança CPF
  const handleCpfChange = (e) => {
    const cpf = e.currentTarget.value
    const isCpfValid = isValidCPF(cpf) || cpf === ''
    setCpfError(!isCpfValid)
    setCpfHelperText(!isCpfValid && cpf ? 'CPF inválido' : '')
    setValorCpf(cpf)
  }
  // controlador mudança N° Atendimento
  const handleNumAtendimentoChange = (e) => {
    const numAtendimento = e.currentTarget.value
    const isNumAtendimentoValid = numAtendimento === ''
    setNumAtendimentoError(!isNumAtendimentoValid)
    setNumAtendimentoHelperText(
      !isNumAtendimentoValid && numAtendimento
        ? 'N° de Atendimento precisa de ter 11 dígitos'
        : '',
    )
    setValorNumAtendimento(numAtendimento)
  }
  // controlador do popover
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    // container

    <Stack bgcolor="white" height="100%" width="100%" justifyContent={'center'}>
      {/* container página */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="white"
      >
        <Stack>
          <Typography variant="h5" color="#023B7E">
            Olá, este é o Agendamento Virtual da Defensoria Pública do Estado do
            Espírito Santo.
          </Typography>
          <Typography variant="subtitle1" color="#023B7E">
            Para iniciar o atendimento digite o número do seu CPF:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ mr: 1, my: 0.5 }} />

            <InputMask
              mask="999.999.999-99"
              value={valorCpf}
              onChange={handleCpfChange}
              maskChar=""
            >
              {() => (
                <TextField
                  sx={{ width: 200 }}
                  id="input-cpf"
                  label="CPF"
                  variant="standard"
                  error={cpfError}
                  helperText={cpfHelperText}
                />
              )}
            </InputMask>
            <Button
              sx={{
                marginLeft: '2vw',
                bgcolor: '#023B7E',
                '&:hover': {
                  backgroundColor: '#005bc9',
                },
              }}
              variant="contained"
              disabled={valorCpf ? cpfError : true}
              onClick={handleClickOpen}
            >
              Enviar
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                Agora você deve digitar o número do seu atendimento.
              </DialogTitle>
              <DialogContent>
                <DialogContentText marginBottom={'2vh'}>
                  É aquele número que você recebeu quando fez o primeiro acesso
                  aqui. Você anotou ou fez uma foto dele? Caso não encontre o
                  seu número, clique abaixo em "Esqueceu Seu Número"
                </DialogContentText>
                <InputMask
                  mask="999999.999.99"
                  maskChar=""
                  onChange={handleNumAtendimentoChange}
                >
                  {() => (
                    <TextField
                      fullWidth
                      id="input-atendimento"
                      label="N° DE ATENDIMENTO"
                      variant="standard"
                      error={
                        valorNumAtendimento.length !== 13 &&
                        valorNumAtendimento !== ''
                      }
                      helperText={numAtendimentoHelperText}
                    />
                  )}
                </InputMask>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'space-around' }}>
                <Button
                  sx={{
                    marginLeft: '2vw',
                    marginBottom: '2vh',
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled={
                    valorNumAtendimento
                      ? valorNumAtendimento.length !== 13 &&
                        valorNumAtendimento !== ''
                      : true
                  }
                  onClick={handleClose}
                >
                  Enviar
                </Button>
                <Button
                  sx={{
                    marginLeft: '2vw',
                    marginBottom: '2vh',
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  startIcon={<PhoneAndroidIcon />}
                  onClick={handleClose}
                >
                  Esqueceu seu número ?
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
