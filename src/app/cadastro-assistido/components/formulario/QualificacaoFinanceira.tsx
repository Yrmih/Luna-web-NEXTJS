// Third party
import ChairIcon from '@mui/icons-material/Chair'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import PeopleIcon from '@mui/icons-material/People'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'

// Framework
import Link from 'next/link'

// Internal
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { CadastroAssistidoInputsForm } from '../../CadastroAssistido'
import { TabelaitensAdicionados } from '../TabelaItensAdicionados'
import { TextFieldAttributes } from '../../types/TextFieldAttributes'
import { DynamicTextFieldsMovel } from '../DynamicTextFieldsMovel'
import { useState } from 'react'

export const FORMULARIO_QUALIFICACAO_FIANCEIRA: TextFieldAttributes[] = [
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
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function QualificacaoFinanceiraForm({
  register,
  errors,
}: QualificacaoFinanceraProps) {
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
                {FORMULARIO_QUALIFICACAO_FIANCEIRA[0].icon}
              </InputAdornment>
            ),
          }}
          {...register('qualificacaoFinanceira.numeroMembrosFamilia')}
          helperText={
            errors.qualificacaoFinanceira?.numeroMembrosFamilia !== undefined
              ? errors.qualificacaoFinanceira.numeroMembrosFamilia.message
              : FORMULARIO_QUALIFICACAO_FIANCEIRA[0].textHelper
          }
          error={
            errors.qualificacaoFinanceira?.numeroMembrosFamilia !== undefined
          }
          label={FORMULARIO_QUALIFICACAO_FIANCEIRA[0].label}
          placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[0].placeHolder}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type="number"
          defaultValue={0}
          id="numeroMembrosFamiliaAtivos"
          autoComplete="mambros-ativos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FIANCEIRA[1].icon}
              </InputAdornment>
            ),
          }}
          {...register('qualificacaoFinanceira.numeroMembrosFamiliaAtivos')}
          helperText={
            errors.qualificacaoFinanceira?.numeroMembrosFamiliaAtivos !==
            undefined
              ? errors.qualificacaoFinanceira.numeroMembrosFamiliaAtivos.message
              : FORMULARIO_QUALIFICACAO_FIANCEIRA[1].textHelper
          }
          error={
            errors.qualificacaoFinanceira?.numeroMembrosFamiliaAtivos !==
            undefined
          }
          label={FORMULARIO_QUALIFICACAO_FIANCEIRA[1].label}
          placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[1].placeHolder}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id="rendaIndividual"
          autoComplete="renda-individual"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FIANCEIRA[2].icon}
              </InputAdornment>
            ),
          }}
          {...register('qualificacaoFinanceira.rendaIndividual')}
          helperText={
            errors.qualificacaoFinanceira?.rendaIndividual !== undefined
              ? errors.qualificacaoFinanceira.rendaIndividual.message
              : FORMULARIO_QUALIFICACAO_FIANCEIRA[1].textHelper
          }
          error={errors.qualificacaoFinanceira?.rendaIndividual !== undefined}
          label={FORMULARIO_QUALIFICACAO_FIANCEIRA[2].label}
          placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[2].placeHolder}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id="rendaFamilia"
          autoComplete="renda-familiar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_QUALIFICACAO_FIANCEIRA[3].icon}
              </InputAdornment>
            ),
          }}
          {...register('qualificacaoFinanceira.rendaFamiliar')}
          helperText={
            errors.qualificacaoFinanceira?.rendaFamiliar !== undefined
              ? errors.qualificacaoFinanceira.rendaFamiliar.message
              : FORMULARIO_QUALIFICACAO_FIANCEIRA[1].textHelper
          }
          error={errors.qualificacaoFinanceira?.rendaFamiliar !== undefined}
          label={FORMULARIO_QUALIFICACAO_FIANCEIRA[3].label}
          placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[3].placeHolder}
        />
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography>Bens</Typography>
        </Grid>
        <DynamicTextFieldsMovel
          errors={errors}
          register={register}
          items={[]}
          valorAttribute={FORMULARIO_QUALIFICACAO_FIANCEIRA[4]}
          descricaoAttribute={FORMULARIO_QUALIFICACAO_FIANCEIRA[5]}
        />
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="valorImovel"
            autoComplete="valor-imovel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_QUALIFICACAO_FIANCEIRA[6].icon}
                </InputAdornment>
              ),
            }}
            name={FORMULARIO_QUALIFICACAO_FIANCEIRA[6].name}
            label={FORMULARIO_QUALIFICACAO_FIANCEIRA[6].label}
            helperText={FORMULARIO_QUALIFICACAO_FIANCEIRA[6].textHelper}
            placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[6].placeHolder}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="descricaoImovel"
            autoComplete="descricao-imovel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_QUALIFICACAO_FIANCEIRA[7].icon}
                </InputAdornment>
              ),
            }}
            name={FORMULARIO_QUALIFICACAO_FIANCEIRA[7].name}
            label={FORMULARIO_QUALIFICACAO_FIANCEIRA[7].label}
            helperText={FORMULARIO_QUALIFICACAO_FIANCEIRA[7].textHelper}
            placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[7].placeHolder}
          />
        </Grid>
        <Grid item display={'flex'} xs={12} md={2} mb={5} alignItems={'center'}>
          <Button fullWidth size="large" variant="outlined">
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography>Investimentos</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="valorInvestimento"
            autoComplete="valor-investimento"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_QUALIFICACAO_FIANCEIRA[8].icon}
                </InputAdornment>
              ),
            }}
            name={FORMULARIO_QUALIFICACAO_FIANCEIRA[8].name}
            label={FORMULARIO_QUALIFICACAO_FIANCEIRA[8].label}
            helperText={FORMULARIO_QUALIFICACAO_FIANCEIRA[8].textHelper}
            placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[8].placeHolder}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="descricaoInvestimento"
            autoComplete="descricao-imovel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_QUALIFICACAO_FIANCEIRA[9].icon}
                </InputAdornment>
              ),
            }}
            name={FORMULARIO_QUALIFICACAO_FIANCEIRA[9].name}
            label={FORMULARIO_QUALIFICACAO_FIANCEIRA[9].label}
            helperText={FORMULARIO_QUALIFICACAO_FIANCEIRA[9].textHelper}
            placeholder={FORMULARIO_QUALIFICACAO_FIANCEIRA[9].placeHolder}
          />
        </Grid>
        <Grid item display={'flex'} xs={12} md={2} mb={5} alignItems={'center'}>
          <Button fullWidth size="large" variant="outlined">
            Adicionar
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox value="aceitaTermosCondicoes" />}
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
