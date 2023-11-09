'use client'

// Third party
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Container,
  MobileStepper,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

// Framework
import { useEffect, useState } from 'react'

// Internal
import { Copyright } from '@/components/Copyright'
import { ObjectUtils } from '@/utils/ObjectUtils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ContatoForm } from './components/formulario/ContatoForm'
import { DadosPessoaisForm } from './components/formulario/DadosPessoaisForm'
import { EnderecoForm } from './components/formulario/EnderecoForm'
import { InformacaoInicialForm } from './components/formulario/InfirmacaoInicialForm'
import { QualificacaoFinanceiraForm } from './components/formulario/QualificacaoFinanceiraForm'
import { cadastroAssistidoSchema } from './schemas/cadastroAssistidoSchema'

const steps = [
  {
    nome: 'Informações iniciais',
    descricao:
      'Preencha com as suas informações necessárias para solicitação do agendamento.',
  },
  {
    nome: 'Contato',
    descricao: 'Preencha com as informações para contato',
  },
  {
    nome: 'Endereço',
    descricao: 'Preencha com seus Endereços.',
  },
  {
    nome: 'Dados Pessoais',
    descricao: 'Preencha com seus dados.',
  },
  {
    nome: 'Qualificação financeira',
    descricao:
      'Preencha com as informações necessárias para a sua qualificação financeira.',
  },
]

export type CadastroAssistidoProps = {
  step?: string
}

export type CadastroAssistidoInputsForm = z.infer<
  typeof cadastroAssistidoSchema
>

export function CadastroAssistido({ step }: CadastroAssistidoProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const formStorageKey = 'cadastro-assitido'

  const [activeStep, setActiveStep] = useState(parseInt(step || '1') - 1)
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<CadastroAssistidoInputsForm>({
    mode: 'onChange',
    resolver: zodResolver(cadastroAssistidoSchema),
  })

  const saveFormStateToLocalStorage = (data: CadastroAssistidoInputsForm) => {
    if (!ObjectUtils.isObjectEmpty(data)) {
      sessionStorage.setItem(formStorageKey, JSON.stringify(data))
    }
  }

  const cadastroAssistidoWatchedFields = watch()

  useEffect(() => {
    saveFormStateToLocalStorage(cadastroAssistidoWatchedFields)
  }, [cadastroAssistidoWatchedFields])

  useEffect(() => {
    const loadFormStateFromLocalStorage = () => {
      const storedData = sessionStorage.getItem(formStorageKey)
      if (storedData) {
        const parsedData = JSON.parse(storedData) as CadastroAssistidoInputsForm
        console.log(parsedData)
        setValue('informacaoInicial', parsedData.informacaoInicial)
        setValue('contatos', parsedData.contatos)
        setValue('endereco', parsedData.endereco)
        setValue('dadosPessoais', parsedData.dadosPessoais)

        setValue(
          'dadosPessoais.dataNascimento',
          parsedData.dadosPessoais?.dataNascimento,
        )
        setValue('qualificacaoFinanceira', parsedData.qualificacaoFinanceira)
        setValue(
          'qualificacaoFinanceira.moveis',
          parsedData.qualificacaoFinanceira?.moveis,
        )
        setValue(
          'qualificacaoFinanceira.imoveis',
          parsedData.qualificacaoFinanceira?.imoveis,
        )
        setValue(
          'qualificacaoFinanceira.investimentos',
          parsedData.qualificacaoFinanceira?.investimentos,
        )
      }
    }

    loadFormStateFromLocalStorage()
  }, [setValue])

  const isDisableStepButton = (step: number) => {
    switch (step) {
      case 0:
        return errors.informacaoInicial !== undefined
      case 1:
        return errors.contatos !== undefined
      case 2:
        return errors.endereco !== undefined
      case 3:
        return errors.dadosPessoais !== undefined
      case 4:
        return errors.qualificacaoFinanceira !== undefined
    }
  }

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.delete('step')
    current.set('step', (activeStep + 1).toString())
    const search = current.toString()
    router.push(`${pathname}?${search}`)
  }, [activeStep, pathname, router, searchParams])

  function getStepForm() {
    switch (activeStep) {
      case 0:
        return (
          <InformacaoInicialForm
            setValue={setValue}
            register={register}
            watch={watch}
            errors={errors}
          />
        )
      case 1:
        return (
          <ContatoForm
            setValue={setValue}
            register={register}
            watch={watch}
            errors={errors}
          />
        )
      case 2:
        return (
          <EnderecoForm
            setValue={setValue}
            register={register}
            watch={watch}
            errors={errors}
          />
        )
      case 3:
        return (
          <DadosPessoaisForm
            setValue={setValue}
            register={register}
            watch={watch}
            errors={errors}
          />
        )
      case 4:
        return (
          <QualificacaoFinanceiraForm
            register={register}
            control={control}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />
        )
      default:
        throw new Error('Unknown step')
    }
  }

  const onSubmit: SubmitHandler<CadastroAssistidoInputsForm> = (data) => {
    console.log('DADOS: ', data, 'ERRO: ', errors)
    console.log('VALID: ', isValid)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Container maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          boxShadow: 6,
          borderRadius: 6,
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{ pt: 3, pb: 5, display: { xs: 'none', sm: 'flex' } }}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label.nome}>
              <StepLabel>{label.nome}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box my={8}>
          <Typography component="h1" variant="h4" align="center">
            {steps[activeStep].nome}
          </Typography>
          <Typography
            component="h3"
            variant="inherit"
            align="center"
            pt={3}
            pb={5}
          >
            {steps[activeStep].descricao}
          </Typography>
        </Box>
        {getStepForm()}
        <MobileStepper
          sx={{
            mt: 10,
            borderRadius: 4,
            display: { xs: 'flex', sm: 'none' },
          }}
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            activeStep !== steps.length - 1 ? (
              <Button type="button" size="small" onClick={handleNext}>
                Próximo
              </Button>
            ) : undefined
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={isDisableStepButton(activeStep)}
            >
              Voltar
            </Button>
          }
        />
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            disabled={activeStep !== steps.length - 1}
            type="submit"
            sx={{ mt: 8, mr: 3, display: { xs: 'flex', sm: 'none' } }}
          >
            Finalizar
          </Button>
        ) : undefined}
        <Stack direction={'row'}>
          {activeStep !== 0 && (
            <Button
              onClick={handleBack}
              sx={{ mt: 8, mr: 3, display: { xs: 'none', sm: 'flex' } }}
            >
              voltar
            </Button>
          )}
          <Button
            variant="contained"
            disabled={
              isDisableStepButton(activeStep) || activeStep === steps.length - 1
            }
            onClick={handleNext}
            sx={{ mt: 8, mr: 3, display: { xs: 'none', sm: 'flex' } }}
          >
            Proximo
          </Button>
          <Button
            variant="contained"
            disabled={activeStep !== steps.length - 1}
            type="submit"
            sx={{ mt: 8, mr: 3, display: { xs: 'none', sm: 'flex' } }}
          >
            Finalizar
          </Button>
        </Stack>
      </Paper>
      <Copyright />
    </Container>
  )
}
