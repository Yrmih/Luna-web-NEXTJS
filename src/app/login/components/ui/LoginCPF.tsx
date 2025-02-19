'use client'
// Third party
import { AccountCircle } from '@mui/icons-material'
// Framework
import { ChangeEvent, useState } from 'react'

// Internal
import { MaskUtils } from '@/utils/MaskUtils'

import { ConstraintErrorPessoaAssistida } from '@/utils/solar'
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material'
import { useLoginStateDialogs, useLoginUseFormSate } from '../../context'
import { consultarPessoaAssistida } from '../../services'

export function LoginCPF() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { register, errors, setValue, dirtyFields, watch } =
    useLoginUseFormSate()
  const {
    setCpf,
    handlenOpenLoginAtendimentoDialog,
    handleOpenNaoTemAtendimentoDialog,
    handleOpenCPFNaoEncontradoDialog,
  } = useLoginStateDialogs()

  const verificarAssistido = async (cpf: string) => {
    setIsLoading(true)
    const { sucesso, erro } = await consultarPessoaAssistida(cpf)
    setIsLoading(false)
    if (sucesso) {
      handlenOpenLoginAtendimentoDialog()
    } else {
      if (
        erro?.situacao ===
        ConstraintErrorPessoaAssistida.SITUACAO_NAO_CADASTRADO
      ) {
        const cpfMascarado = MaskUtils.maskCpfCnpj(cpf)
        setCpf(cpfMascarado)
        handleOpenCPFNaoEncontradoDialog()
      } else if (
        erro?.situacao ===
        ConstraintErrorPessoaAssistida.SITUACAO_SEM_ATENDIMENTO
      ) {
        handleOpenNaoTemAtendimentoDialog()
      } else {
        throw Error('Error não tratado na requisição')
      }
    }
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#023B7E' : 'white',
        }}
      >
        {`Olá, este é o Agendamento Virtual da ${process.env.NEXT_PUBLIC_DEFENSORIA_NOME}.`}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#023B7E' : 'white',
        }}
      >
        Para iniciar o atendimento digite o número do seu CPF:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ mr: 1, my: 0.5 }} />
        <TextField
          sx={{ width: 200 }}
          label="CPF"
          variant="standard"
          error={errors.cpf !== undefined}
          helperText={
            errors.cpf !== undefined
              ? errors.cpf.message
              : 'Digite seu número de CPF'
          }
          {...register('cpf', {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue('cpf', MaskUtils.maskCpfCnpj(event.target.value))
            },
          })}
        />
        <Button
          onClick={() =>
            verificarAssistido(MaskUtils.getOnlyDigits(watch('cpf')))
          }
          disabled={errors.cpf !== undefined || !dirtyFields.cpf || isLoading}
          sx={{
            marginLeft: '2vw',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
        >
          Próximo
        </Button>
        <CircularProgress
          sx={{ mx: 2, display: isLoading ? undefined : 'none' }}
        />
      </Box>
    </>
  )
}
