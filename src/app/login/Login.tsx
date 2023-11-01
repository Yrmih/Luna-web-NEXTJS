'use client'
import { AccountCircle } from '@mui/icons-material'
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import InputMask from 'react-input-mask'
import React from 'react'

// Framework

// Internal

export function Login() {
  const matches = useMediaQuery('(min-width:1100px)')
  const [valorCpf, setValorCpf] = React.useState('')
  const [error, setError] = React.useState(false)
  const [helperText, setHelperText] = React.useState('')

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
    setError(!isCpfValid)
    setHelperText(!isCpfValid && cpf ? 'CPF inválido' : '')
    setValorCpf(cpf)
  }
  return (
    // container

    <Stack
      direction={matches ? 'row' : 'column'}
      bgcolor="white"
      height="100vh"
      width="100vw"
    >
      {/* container foto */}
      <Box
        display={matches ? 'none' : 'flex'}
        height="12vh"
        width="100vw"
        bgcolor="#023B7E"
        alignItems="center"
        justifyContent="space-between"
      >
        <img
          height={'80%'}
          src="https://www.defensoria.es.def.br/wp-content/uploads/2021/10/cropped-logo.png"
        />
        <Typography color="white" variant="subtitle2" paddingRight="4vw">
          Agendamento Virtual
        </Typography>
      </Box>
      <img
        src={
          matches
            ? 'https://lunabaseteste.defensoria.es.def.br/assets/login_aside_image1-d92f4c0c86dbd4e98d978d937e300ddda57da9c2b0ecb1662f8636b726f5b0cb.png'
            : ''
        }
      ></img>

      {/* container página */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="white"
        height="100vh"
        width={matches ? '88vw' : '100vw'}
        paddingLeft={matches ? 0 : '10vw'}
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
                  error={error}
                  helperText={helperText}
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
              disabled={valorCpf ? error : true}
            >
              Enviar
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
