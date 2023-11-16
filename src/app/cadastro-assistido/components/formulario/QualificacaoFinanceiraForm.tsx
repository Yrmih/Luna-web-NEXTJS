// Third party
import { MaskUtils } from '@/utils/MaskUtils'
import ChairIcon from '@mui/icons-material/Chair'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import PeopleIcon from '@mui/icons-material/People'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

// Framework
import Link from 'next/link'

// Internal
import { CadastroAssistidoInputsForm } from '../../CadastroAssistido'
import { TextFieldAttributes } from '../../types/TextFieldAttributes'
import { ImovelDynamicTextFields } from '../ImovelDynamicTextFields'
import { InvestimentoDynamicTextFields } from '../InvestimentoDynamicTextFields'
import { MovelDynamicTextFields } from '../MovelDynamicTextFields'
import { useEffect } from 'react'
import { INPUT_MASK_REGEX } from './constants'

export const FORMULARIO_QUALIFICACAO_FINANCEIRA: TextFieldAttributes[] = [
  {
    label: 'Membros da Família',
    textHelper: 'Quantidade de membros da sua família',
    placeHolder: 'Ex.: 4, 6, 7, etc...',
    icon: <PeopleOutlineIcon />,
  },
  {
    label: 'Membros Ativos da Família',
    textHelper: 'Quantidade de membros econômicamente ativos na sua família.',
    placeHolder: 'Ex.: 4, 6, 7, etc...',
    icon: <PeopleIcon />,
  },
  {
    label: 'Renda Individual',
    textHelper: 'Valor da sua renda individual.',
    placeHolder: 'Ex.: 1300,00.',
    icon: 'R$',
  },
  {
    label: 'Renda familiar',
    textHelper: 'Valor da renda de sua família, incluindo a sua renda.',
    placeHolder: 'Ex.: 2600,00.',
    icon: 'R$',
  },
  {
    name: 'valorMovel',
    label: 'Valor do móvel',
    textHelper: 'Adicione o valor em reais do seu móvel.',
    placeHolder: 'Ex.: 220,00; etc...',
    icon: 'R$',
  },
  {
    name: 'descricaoMovel',
    label: 'Descrição do móvel',
    textHelper: 'Adicione a descrição do seu móvel.',
    placeHolder: 'Ex.: Sofá, Refrigerador; etc...',
    icon: <ChairIcon />,
  },
  {
    name: 'valorImovel',
    label: 'Valor do imóvel',
    textHelper: 'Adicione o valor em reais do seu imóvel.',
    placeHolder: 'Ex.: Ex.: 220,00; etc...',
    icon: 'R$',
  },
  {
    name: 'descricaoImovel',
    label: 'Descrição do imóvel',
    textHelper: 'Adicione a descrição do seu imóvel.',
    placeHolder: 'Ex.: Casa, Apartamento; etc...',
    icon: <MapsHomeWorkIcon />,
  },
  {
    name: 'valorInvestimento',
    label: 'Valor do Investimento',
    textHelper: 'Adicione o valor em reais do seu investimento.',
    placeHolder: 'Ex.: 220,00; etc...',
    icon: 'R$',
  },
  {
    name: 'descricaoInvestimento',
    label: 'Descrição do Investimento',
    textHelper: 'Adicione a descrição do seu investimento.',
    placeHolder: 'Ex.: Renda Fixa, Tesouro Direto, etc...',
    icon: <CurrencyExchangeIcon />,
  },
]

export type QualificacaoFinanceraProps = {
  register: UseFormRegister<CadastroAssistidoInputsForm>
  watch: UseFormWatch<CadastroAssistidoInputsForm>
  control: Control<CadastroAssistidoInputsForm>
  setValue: UseFormSetValue<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

function permitirSomenteNumeros(event: React.KeyboardEvent<HTMLDivElement>) {
  if (INPUT_MASK_REGEX.apenasUmaLetra.test(event.key)) {
    event.preventDefault()
  }
}

export function QualificacaoFinanceiraForm({
  register,
  control,
  setValue,
  errors,
  watch,
}: QualificacaoFinanceraProps) {
  const rendaIndividualValue = watch('qualificacaoFinanceira.rendaIndividual')
  const rendaFamiliarValue = watch('qualificacaoFinanceira.rendaFamiliar')

  useEffect(() => {
    setValue(
      'qualificacaoFinanceira.rendaIndividual',
      MaskUtils.maskMoney(rendaIndividualValue),
    )
  }, [setValue, rendaIndividualValue])

  useEffect(() => {
    setValue(
      'qualificacaoFinanceira.rendaFamiliar',
      MaskUtils.maskMoney(rendaFamiliarValue),
    )
  }, [setValue, rendaFamiliarValue])

  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type="number"
          defaultValue={0}
          id="numeroMembrosFamilia"
          autoComplete="membros-familia"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FINANCEIRA[0].icon}
              </InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
          inputProps={{ pattern: '^[0-9]*$' }}
          {...register('qualificacaoFinanceira.numeroMembrosFamilia', {
            valueAsNumber: true,
          })}
          helperText={
            errors.qualificacaoFinanceira?.numeroMembrosFamilia !== undefined
              ? errors.qualificacaoFinanceira.numeroMembrosFamilia.message
              : FORMULARIO_QUALIFICACAO_FINANCEIRA[0].textHelper
          }
          error={
            errors.qualificacaoFinanceira?.numeroMembrosFamilia !== undefined
          }
          label={FORMULARIO_QUALIFICACAO_FINANCEIRA[0].label}
          placeholder={FORMULARIO_QUALIFICACAO_FINANCEIRA[0].placeHolder}
          onKeyDown={(event) => {
            permitirSomenteNumeros(event)
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type="number"
          defaultValue={0}
          id="numeroMembrosFamiliaAtivos"
          autoComplete="membros-ativos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FINANCEIRA[1].icon}
              </InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
          {...register('qualificacaoFinanceira.numeroMembrosFamiliaAtivos', {
            valueAsNumber: true,
          })}
          helperText={
            errors.qualificacaoFinanceira?.numeroMembrosFamiliaAtivos !==
            undefined
              ? errors.qualificacaoFinanceira.numeroMembrosFamiliaAtivos.message
              : FORMULARIO_QUALIFICACAO_FINANCEIRA[1].textHelper
          }
          error={
            errors.qualificacaoFinanceira?.numeroMembrosFamiliaAtivos !==
            undefined
          }
          label={FORMULARIO_QUALIFICACAO_FINANCEIRA[1].label}
          placeholder={FORMULARIO_QUALIFICACAO_FINANCEIRA[1].placeHolder}
          onKeyDown={(event) => {
            permitirSomenteNumeros(event)
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type="text"
          id="rendaIndividual"
          autoComplete="renda-individual"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FINANCEIRA[2].icon}
              </InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
          {...register('qualificacaoFinanceira.rendaIndividual')}
          helperText={
            errors.qualificacaoFinanceira?.rendaIndividual !== undefined
              ? errors.qualificacaoFinanceira.rendaIndividual.message
              : FORMULARIO_QUALIFICACAO_FINANCEIRA[1].textHelper
          }
          error={errors.qualificacaoFinanceira?.rendaIndividual !== undefined}
          label={FORMULARIO_QUALIFICACAO_FINANCEIRA[2].label}
          placeholder={FORMULARIO_QUALIFICACAO_FINANCEIRA[2].placeHolder}
          onKeyDown={(event) => {
            permitirSomenteNumeros(event)
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type="text"
          id="rendaFamilia"
          autoComplete="renda-familiar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FINANCEIRA[3].icon}
              </InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
          {...register('qualificacaoFinanceira.rendaFamiliar')}
          helperText={
            errors.qualificacaoFinanceira?.rendaFamiliar !== undefined
              ? errors.qualificacaoFinanceira.rendaFamiliar.message
              : FORMULARIO_QUALIFICACAO_FINANCEIRA[1].textHelper
          }
          error={errors.qualificacaoFinanceira?.rendaFamiliar !== undefined}
          label={FORMULARIO_QUALIFICACAO_FINANCEIRA[3].label}
          placeholder={FORMULARIO_QUALIFICACAO_FINANCEIRA[3].placeHolder}
          onKeyDown={(event) => {
            permitirSomenteNumeros(event)
          }}
        />
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography>Bens Moveis</Typography>
        </Grid>
        <MovelDynamicTextFields
          register={register}
          control={control}
          errors={errors}
          valorAttribute={FORMULARIO_QUALIFICACAO_FINANCEIRA[4]}
          descricaoAttribute={FORMULARIO_QUALIFICACAO_FINANCEIRA[5]}
          permitirSomenteNumeros={permitirSomenteNumeros}
        />
        <Grid item xs={12}>
          <Typography>Bens Imoveis</Typography>
        </Grid>
        <ImovelDynamicTextFields
          register={register}
          control={control}
          errors={errors}
          valorAttribute={FORMULARIO_QUALIFICACAO_FINANCEIRA[6]}
          descricaoAttribute={FORMULARIO_QUALIFICACAO_FINANCEIRA[7]}
        />
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography>Investimentos</Typography>
        </Grid>
        <InvestimentoDynamicTextFields
          register={register}
          control={control}
          errors={errors}
          valorAttribute={FORMULARIO_QUALIFICACAO_FINANCEIRA[8]}
          descricaoAttribute={FORMULARIO_QUALIFICACAO_FINANCEIRA[9]}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={watch('qualificacaoFinanceira.aceitoTermosCondicoes')}
              {...register('qualificacaoFinanceira.aceitoTermosCondicoes')}
            />
          }
          label={
            <Box>
              Aceito os{' '}
              <Link href="/termos-e-condicoes">termos e condições</Link>.
            </Box>
          }
        />
      </Grid>
    </Grid>
  )
}
function setValue(arg0: string, arg1: string) {
  throw new Error('Function not implemented.')
}
