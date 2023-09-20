'use client'

// Third party
import {
  Box,
  Button,
  Container,
  MobileStepper,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'

// Framework
import { useState } from 'react'

// Internal
import { DadosPessoaisForm } from './components/formulario/DadosPessoaisForm'
import { QualificacaoFinanceiraForm } from './components/formulario/QualificacaoFinanceira'
import { ContatoForm } from './components/formulario/ContatoForm'
import { EnderecoForm } from './components/formulario/EnderecoForm'
import { InformacaoInicialForm } from './components/formulario/InfirmacaoInicialForm'
import { Copyright } from '@/components/Copyright'
import { InformacaoInicial } from './types/InformacaoInicial'
import { Contato } from './types/Contato'
import { Endereco } from './types/Endereco'
import { DadosPessoais } from './types/DadosPessoais'
import { QualificacaoFianceira } from './types/QualificacaoFinanceira'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'

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

export type CadastroAssistidoInputsForm = {
  informacaoInicial: InformacaoInicial
  contatos: Contato
  endereco: Endereco
  dadosPessoais: DadosPessoais
  qualificacaoFinanceira: QualificacaoFianceira
}

export function CadastroAssistido() {
  const [activeStep, setActiveStep] = useState(0)
  const {
    register,
    formState: { errors, isLoading, isValid },
    handleSubmit,
  } = useForm<CadastroAssistidoInputsForm>()

  function getStepForm(step: number) {
    switch (step) {
      case 0:
        return <InformacaoInicialForm register={register} errors={errors} />
      case 1:
        return <ContatoForm register={register} errors={errors} />
      case 2:
        return <EnderecoForm register={register} errors={errors} />
      case 3:
        return <DadosPessoaisForm register={register} errors={errors} />
      case 4:
        return (
          <QualificacaoFinanceiraForm register={register} errors={errors} />
        )
      default:
        throw new Error('Unknown step')
    }
  }

  const onSubmit: SubmitHandler<CadastroAssistidoInputsForm> = (data) => {
    console.log('DADOS: ', data, 'ERRO: ', errors)
    console.log('LOADING: ', isLoading, 'VALID: ', isValid)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      maxWidth="md"
      sx={{ mb: 4 }}
    >
      <Paper
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
        {getStepForm(activeStep)}
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
            <Button size="small" type="submit" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </Button>
          }
        />
        <Box
          component={'form'}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'flex-end',
          }}
        >
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 8, mr: 3 }}>
              voltar
            </Button>
          )}
          <Button
            variant="contained"
            type="submit"
            onClick={handleNext}
            sx={{ mt: 8, mr: 3 }}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
          </Button>
        </Box>
      </Paper>
      <Copyright />
    </Container>
  )
}
