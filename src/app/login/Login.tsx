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

  const matches = useMediaQuery('(min-width:900px)')

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

  // controlador mudança nome
  const handleNomeChange = (e) => {
    const nome = e.currentTarget.value

    setValorNome(nome)
  }
  // controlador mudança filiações
  const handleFiliacoesChange = (e) => {
    const filiacoes = e.currentTarget.value

    setValorFiliacoes(filiacoes)
  }
  // controlador mudança data de nascimento
  const handleDataChange = (e) => {
    const data = e.currentTarget.value

    setValorData(data)
  }
  // controlador mudança telefone
  const handleTelChange = (e) => {
    const tel = e.currentTarget.value

    setValorTel(tel)
  }

  // controlador do popover Atendimento
  const [openAtendimento, setOpenAtendimento] = React.useState(false)

  const handleClickOpenAtendimento = () => {
    setOpenAtendimento(true)
  }

  const handleCloseAtendimento = () => {
    setOpenAtendimento(false)
  }

  // controlador do popover Atendimento não encontrado
  const [openAtendimentoNaoEncontrado, setOpenAtendimentoNaoEncontrado] =
    React.useState(false)

  const handleClickOpenAtendimentoNaoEncontrado = () => {
    setOpenAtendimentoNaoEncontrado(true)
  }

  const handleCloseAtendimentoNaoEncontrado = () => {
    setOpenAtendimentoNaoEncontrado(false)
  }

  // controlador do popover recuperar N° de atendimento
  const [openRecuperarAtendimento, setOpenRecuperarAtendimento] =
    React.useState(false)

  const handleClickOpenRecuperarAtendimento = () => {
    setOpenRecuperarAtendimento(true)
  }

  const handleCloseRecuperarAtendimento = () => {
    setOpenRecuperarAtendimento(false)
  }

  // controlador do popover falha recuperar N° de atendimento
  const [openFalhaRecuperarAtendimento, setOpenFalhaRecuperarAtendimento] =
    React.useState(false)

  const handleClickOpenFalhaRecuperarAtendimento = () => {
    setOpenFalhaRecuperarAtendimento(true)
  }

  const handleCloseFalhaRecuperarAtendimento = () => {
    setOpenFalhaRecuperarAtendimento(false)
  }

  // controlador do popover CPF não encontrado
  const [openCpfNaoEncontrado, setOpenCpfNaoEncontrado] = React.useState(false)

  const handleClickOpenCpfNaoEncontrado = () => {
    setOpenCpfNaoEncontrado(true)
  }

  const handleCloseCpfNaoEncontrado = () => {
    setOpenCpfNaoEncontrado(false)
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
              onClick={handleClickOpenAtendimento}
            >
              Enviar
            </Button>

            {/* popover CPF não encontrado */}
            <Dialog
              open={openCpfNaoEncontrado}
              onClose={handleCloseCpfNaoEncontrado}
            >
              <DialogTitle>Desculpe, não encontrei seus dados.</DialogTitle>
              <DialogContent>
                <DialogContentText marginBottom={'2vh'}>
                  O seu CPF é este mesmo ? ( {valorCpf} ) , eu acredito que seja
                  a primeira vez que está entrando em contato utilizando este
                  canal de atendimento. Basta clicar no botão abaixo e seguir a
                  instruções.
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
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    handleCloseCpfNaoEncontrado()
                  }}
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
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    handleCloseCpfNaoEncontrado()
                  }}
                >
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>
            {/* popover Atendimento */}
            <Dialog open={openAtendimento} onClose={handleCloseAtendimento}>
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
                      ? valorNumAtendimento.length !== 13 &&
                        valorNumAtendimento !== ''
                      : true
                  }
                  onClick={() => {
                    handleCloseAtendimento()
                    handleClickOpenAtendimentoNaoEncontrado()
                  }}
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
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  startIcon={matches ? <PhoneAndroidIcon /> : ''}
                  onClick={() => {
                    handleCloseAtendimento()
                    handleClickOpenRecuperarAtendimento()
                  }}
                >
                  Esqueceu seu número ?
                </Button>
              </DialogActions>
            </Dialog>

            {/* popover Atendimento não encontrado */}
            <Dialog
              open={openAtendimentoNaoEncontrado}
              onClose={handleCloseAtendimentoNaoEncontrado}
            >
              <DialogTitle>
                Humm, eu não encontrei esse atendimento.
              </DialogTitle>
              <DialogContent>
                <DialogContentText marginBottom={'2vh'}>
                  Você pode conferir o número que você digitou para ver se está
                  correto? {<br />}( {valorNumAtendimento} ) Se você não lembra,
                  tente recuperar seu número de atendimento.
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
                    handleCloseAtendimentoNaoEncontrado()
                    handleClickOpenRecuperarAtendimento()
                  }}
                >
                  Recuperar N° de Atendimento
                </Button>
                <Button
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
                  onClick={handleCloseAtendimentoNaoEncontrado}
                >
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>

            {/* popover recuperar N° Atendimento */}
            <Dialog
              open={openRecuperarAtendimento}
              onClose={handleCloseRecuperarAtendimento}
            >
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
                    handleClickOpenFalhaRecuperarAtendimento()
                    handleCloseRecuperarAtendimento()
                  }}
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
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  variant="contained"
                  onClick={handleCloseRecuperarAtendimento}
                >
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
            {/* popover  falha recuperar N° Atendimento */}
            <Dialog
              open={openFalhaRecuperarAtendimento}
              onClose={handleCloseFalhaRecuperarAtendimento}
            >
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
                    handleCloseFalhaRecuperarAtendimento()
                    handleClickOpenRecuperarAtendimento()
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
                  onClick={handleCloseFalhaRecuperarAtendimento}
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
