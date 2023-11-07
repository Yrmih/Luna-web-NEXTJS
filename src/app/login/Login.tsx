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
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

// Framework

// Internal

export function Login() {
  const [valorCpf, setValorCpf] = React.useState('')
  const [valorNome, setValorNome] = React.useState('')
  const [valorFiliacoes, setValorFiliacoes] = React.useState('')
  const [valorData, setValorData] = React.useState('')
  const [valorTel, setValorTel] = React.useState('')
  const [cpfError, setCpfError] = React.useState(false)
  const [cpfHelperText, setCpfHelperText] = React.useState('')
  const [valorNumAtendimento, setValorNumAtendimento] = React.useState('')
  const [numAtendimentoError, setNumAtendimentoError] = React.useState(false)
  const [numAtendimentoHelperText, setNumAtendimentoHelperText] =
    React.useState('')

  const router = useRouter()

  const matches = useMediaQuery('(min-width:900px)')

  // validador CPF
  function isValidCPF(cpf: string | string[]) {
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
      .filter(
        (digit: any, index: number, array: string | any[]) =>
          index >= array.length - 2 && digit,
      )
      // Transformar digitos em números
      .map((el: string | number) => +el)

    const toValidate = (pop: number) =>
      cpf
        // Pegar Array de items para validar
        .filter(
          (digit: any, index: number, array: string | any[]) =>
            index < array.length - pop && digit,
        )
        // Transformar digitos em números
        .map((el: string | number) => +el)

    const rest = (count: number, pop: number) =>
      ((toValidate(pop)
        // Calcular Soma dos digitos e multiplicar por 10
        .reduce(
          (soma: number, el: number, i: number) => soma + el * (count - i),
          0,
        ) *
        10) %
        // Pegar o resto por 11
        11) %
      // transformar de 10 para 0
      10

    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
  }

  // controlador mudança CPF
  const handleCpfChange = (e: { currentTarget: { value: any } }) => {
    const cpf = e.currentTarget.value
    const isCpfValid = isValidCPF(cpf) || cpf === ''
    setCpfError(!isCpfValid)
    setCpfHelperText(!isCpfValid && cpf ? 'CPF inválido' : '')
    setValorCpf(cpf)
  }
  // controlador mudança N° Atendimento
  const handleNumAtendimentoChange = (e: { currentTarget: { value: any } }) => {
    const numAtendimento = e.currentTarget.value
    const isNumAtendimentoValid = numAtendimento === ''
    setNumAtendimentoError(!isNumAtendimentoValid)
    setNumAtendimentoHelperText(
      !isNumAtendimentoValid && numAtendimento
        ? 'N° de Atendimento precisa de ter 12 dígitos'
        : '',
    )
    setValorNumAtendimento(numAtendimento)
  }

  // TODO: Remover a repetição de handle
  // controlador mudança nome
  const handleNomeChange = (e: { currentTarget: { value: any } }) => {
    const nome = e.currentTarget.value

    setValorNome(nome)
  }
  // controlador mudança filiações
  const handleFiliacoesChange = (e: { currentTarget: { value: any } }) => {
    const filiacoes = e.currentTarget.value

    setValorFiliacoes(filiacoes)
  }
  // controlador mudança data de nascimento
  const handleDataChange = (e: { currentTarget: { value: any } }) => {
    const data = e.currentTarget.value

    setValorData(data)
  }
  // controlador mudança telefone
  const handleTelChange = (e: { currentTarget: { value: any } }) => {
    const tel = e.currentTarget.value

    setValorTel(tel)
  }

  // controlador do popover Atendimento
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // controlador do popover Atendimento não encontrado
  const [open2, setOpen2] = React.useState(false)

  const handleClickOpen2 = () => {
    setOpen2(true)
  }

  const handleClose2 = () => {
    setOpen2(false)
  }

  // controlador do popover recuperar N° de atendimento
  const [open3, setOpen3] = React.useState(false)

  const handleClickOpen3 = () => {
    setOpen3(true)
  }

  const handleClose3 = () => {
    setOpen3(false)
  }

  // controlador do popover recuperar N° de atendimento
  const [open4, setOpen4] = React.useState(false)

  const handleClickOpen4 = () => {
    setOpen4(true)
  }

  const handleClose4 = () => {
    setOpen4(false)
  }

  const handleSubmit = async () => {
    const cpf = valorCpf.replaceAll('.', '').replaceAll('-', '')
    const atendimento = valorNumAtendimento.replaceAll('.', '')

    try {
      const response = await signIn('credentials', {
        redirect: false,
        cpf,
        atendimento,
      })

      if (response?.error) {
        handleClose()
        handleClickOpen2()
      } else {
        router.refresh()
        router.push('/home')
      }
    } catch (error) {
      console.log('[LOGIN_ERROR]: ', error)
    }
  }

  return (
    // container

    <Stack
      bgcolor="white"
      height="100%"
      width="100%"
      display="flex"
      justifyContent={'center'}
    >
      {/* container página */}
      <Box
        marginLeft="5vw"
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

            {/* popover Atendimento */}
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
                  mask="999999.999.999"
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
                        valorNumAtendimento.length !== 14 &&
                        valorNumAtendimento !== ''
                      }
                      helperText={numAtendimentoHelperText}
                    />
                  )}
                </InputMask>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'space-around' }}>
                <Button
                  onClick={handleSubmit}
                  sx={{
                    marginLeft: '2vw',
                    marginBottom: '2vh',
                    fontSize: '0.65rem',
                    '@media (min-width:600px)': {
                      fontSize: '1rem',
                    },
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  endIcon={matches ? <SendIcon /> : ''}
                  disabled={
                    valorNumAtendimento
                      ? valorNumAtendimento.length !== 14 &&
                        valorNumAtendimento !== ''
                      : true
                  }
                >
                  Enviar
                </Button>

                <Button
                  sx={{
                    marginLeft: '2vw',
                    marginBottom: '2vh',
                    fontSize: '0.65rem',
                    '@media (min-width:600px)': {
                      fontSize: '1rem',
                    },
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  startIcon={matches ? <PhoneAndroidIcon /> : ''}
                  onClick={() => {
                    handleClose()
                    handleClickOpen3()
                  }}
                >
                  Esqueceu seu número ?
                </Button>
              </DialogActions>
            </Dialog>

            {/* popover Atendimento não encontrado */}
            <Dialog open={open2} onClose={handleClose2}>
              <DialogTitle>
                Humm, eu não encontrei esse atendimento.
              </DialogTitle>
              <DialogContent>
                <DialogContentText marginBottom={'2vh'}>
                  Você pode conferir o número que você digitou para ver se está
                  certinho? Se você não lembra, tente recuperar seu número de
                  atendimento.
                </DialogContentText>
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
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    handleClose2()
                    handleClickOpen3()
                  }}
                >
                  Recuperar N° de Atendimento
                </Button>
                <Button
                  sx={{
                    marginLeft: '2vw',
                    marginBottom: '2vh',
                    fontSize: '0.65rem',
                    '@media (min-width:600px)': {
                      fontSize: '1rem',
                    },
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={handleClose2}
                >
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>

            {/* popover recuperar N° Atendimento */}
            <Dialog open={open3} onClose={handleClose3}>
              <DialogTitle>Recuperar Atendimento</DialogTitle>
              <DialogContent>
                <DialogContentText marginBottom={'2vh'}>
                  Por Favor preencha os dados solicitados. Informe a maior
                  quantidade de campos possível, tentando garantir que as
                  informações são as mesmas informadas em seu cadastro.
                </DialogContentText>
                <InputMask
                  mask="999.999.999-99"
                  value={valorCpf}
                  onChange={handleCpfChange}
                  maskChar=""
                >
                  {() => (
                    <TextField
                      fullWidth
                      id="input-cpf"
                      label="CPF"
                      variant="standard"
                      error={cpfError}
                      helperText={cpfHelperText}
                    />
                  )}
                </InputMask>
                <InputMask maskChar="" onChange={handleNomeChange}>
                  {() => (
                    <TextField
                      fullWidth
                      id="input-nome"
                      label="NOME"
                      variant="standard"
                    />
                  )}
                </InputMask>
                <InputMask
                  mask=""
                  maskChar=" "
                  onChange={handleFiliacoesChange}
                >
                  {() => (
                    <TextField
                      fullWidth
                      id="input-filiacoes"
                      label="FILIAÇÕES"
                      variant="standard"
                    />
                  )}
                </InputMask>
                <InputMask
                  mask="99/99/9999"
                  maskChar=" "
                  placeholder=""
                  onChange={handleDataChange}
                >
                  {() => (
                    <TextField
                      fullWidth
                      id="input-nascimento"
                      label="DATA DE NASCIMENTO"
                      variant="standard"
                    />
                  )}
                </InputMask>
                <InputMask
                  mask="(99) 99999-9999"
                  maskChar=" "
                  placeholder="(99) 99999-9999"
                  onChange={handleTelChange}
                >
                  {() => (
                    <TextField
                      fullWidth
                      id="input-telefone"
                      label="N° DE TELEFONE"
                      variant="standard"
                    />
                  )}
                </InputMask>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'space-around' }}>
                <Button
                  disabled={valorCpf ? cpfError : true}
                  sx={{
                    marginLeft: '2vw',
                    marginBottom: '2vh',
                    fontSize: '0.65rem',
                    '@media (min-width:600px)': {
                      fontSize: '1rem',
                    },
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    handleClickOpen4()
                    handleClose3()
                  }}
                >
                  Enviar
                </Button>
                <Button
                  sx={{
                    marginLeft: '2vw',
                    marginRight: '2vw',
                    marginBottom: '2vh',
                    fontSize: '0.65rem',
                    '@media (min-width:600px)': {
                      fontSize: '1rem',
                    },
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={handleClose3}
                >
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
            {/* popover  falha recuperar N° Atendimento */}
            <Dialog open={open4} onClose={handleClose4}>
              <DialogTitle>Gostaria de Tentar novamente?</DialogTitle>
              <DialogContent>
                <DialogContentText marginBottom={'2vh'}>
                  Não consegui recuperar seus números de atendimentos com as
                  informações que você me passou. Informe a maior quantidade de
                  campos possível, tentando garantir que as informações são as
                  mesmas informadas em seu cadastro.
                </DialogContentText>
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
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    handleClose4()
                    handleClickOpen3()
                  }}
                >
                  Tentar Novamente
                </Button>
                <Button
                  href="https://www.defensoria.es.def.br/numeros-para-agendamento/"
                  target="_blank"
                  sx={{
                    marginRight: '2vw',
                    marginBottom: '2vh',
                    fontSize: '0.65rem',
                    '@media (min-width:600px)': {
                      fontSize: '1rem',
                    },
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={handleClose4}
                >
                  Preciso de Ajuda
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
