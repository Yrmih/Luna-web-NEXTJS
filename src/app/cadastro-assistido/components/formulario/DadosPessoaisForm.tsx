// Third party
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import DescriptionIcon from '@mui/icons-material/Description'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material'

// Framework

// Internal

import { MaskUtils } from '@/utils/MaskUtils'
import { useEffect } from 'react'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import { CadastroAssistidoInputsForm } from '../../CadastroAssistido'

const FORMULARIO_DADOS_PESSOAIS = [
  {
    label: 'Nome da Mãe',
    textHelper: 'Nome e sobrenome da mãe.',
    icon: <FamilyRestroomIcon />,
    placeHolder: 'Ex.: Lucineia Ferreira da Silva.',
  },
  {
    label: 'Nome do Pai',
    textHelper: 'Nome e sobrenome do Pai.',
    icon: <FamilyRestroomIcon />,
    placeHolder: 'Ex.: Cláudio da Conceição Silva.',
  },
  {
    label: 'Nome Social',
    textHelper: 'Outro nome pelo qual o identificam.',
    icon: <EmojiPeopleIcon />,
    placeHolder: 'Ex.: Claudinho',
  },
  {
    label: 'Data de Nascimento',
    textHelper: 'Sua data de nascimento. Ex.: 01/12/1980.',
    icon: undefined,
    placeHolder: '',
  },
  {
    label: 'Estado civil',
    textHelper: 'Selecione seu estado civil. Ex.: Solteira, Casado, etc...',
    icon: undefined,
    placeHolder: '',
  },
  {
    label: 'RG',
    textHelper: 'Seu número de RG.',
    icon: <PermIdentityIcon />,
    placeHolder: 'Ex.: 7325110',
  },
  {
    label: 'Orgão Emissor',
    textHelper: 'Orgão emissor di seu RG.',
    icon: <CorporateFareIcon />,
    placeHolder: 'Ex.: Polícia Civil',
  },
  {
    label: 'Sexo',
    textHelper: 'Sexo do assistido. Ex.: masculino, feminino.',
    icon: undefined,
    placeHolder: '',
  },
  {
    label: 'Tipo de Certidão',
    textHelper: 'Selecione Seu tipo de Certidão. Ex.: Certidão de casamento.',
    icon: undefined,
    placeHolder: '',
  },
  {
    label: 'Número Certidão',
    textHelper: '',
    icon: <DescriptionIcon />,
    placeHolder: 'Ex.: 999999 99 99 9999 9 99999 999 9999999 99.',
  },
]

const SELECT_ITEMS_ESTADO_CIVIL = [
  { valor: 'solteiro', nome: 'Solteiro(a)' },
  { valor: 'casado', nome: 'Casado(a)' },
  { valor: 'viuvo', nome: 'Viúvo(a)' },
  { valor: 'divorciado', nome: 'Divorciado(a)' },
]

const SELECT_TIPO_CERTIDAO = [
  { valor: 'certidao_nascimento', nome: 'Certidão de Nascimento' },
  { valor: 'certidao_casamento', nome: 'Certidão de Casamento' },
]

export type DadosPessoaisProps = {
  register: UseFormRegister<CadastroAssistidoInputsForm>
  watch: UseFormWatch<CadastroAssistidoInputsForm>
  setValue: UseFormSetValue<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function DadosPessoaisForm({
  register,
  watch,
  setValue,
  errors,
}: DadosPessoaisProps) {
  const certidaoValue = watch('dadosPessoais.certidao')

  useEffect(() => {
    setValue('dadosPessoais.certidao', MaskUtils.maskCertidao(certidaoValue))
  }, [setValue, certidaoValue])

  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12}>
        <TextField
          id="mae"
          fullWidth
          autoComplete="mae"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[0].icon}
              </InputAdornment>
            ),
          }}
          placeholder={FORMULARIO_DADOS_PESSOAIS[0].placeHolder}
          {...register('dadosPessoais.nomeMae')}
          error={errors.dadosPessoais?.nomeMae !== undefined}
          helperText={
            errors.dadosPessoais?.nomeMae !== undefined
              ? errors.dadosPessoais?.nomeMae.message
              : FORMULARIO_DADOS_PESSOAIS[0].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[0].label}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="pai"
          fullWidth
          autoComplete="pai"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[1].icon}
              </InputAdornment>
            ),
          }}
          placeholder={FORMULARIO_DADOS_PESSOAIS[1].placeHolder}
          {...register('dadosPessoais.nomePai')}
          error={errors.dadosPessoais?.nomePai !== undefined}
          helperText={
            errors.dadosPessoais?.nomePai !== undefined
              ? errors.dadosPessoais?.nomePai.message
              : FORMULARIO_DADOS_PESSOAIS[1].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[1].label}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="nomeSocial"
          autoComplete="nomeSocial"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[2].icon}
              </InputAdornment>
            ),
          }}
          placeholder={FORMULARIO_DADOS_PESSOAIS[2].placeHolder}
          {...register('dadosPessoais.nomeSocial')}
          error={errors.dadosPessoais?.nomeSocial !== undefined}
          helperText={
            errors.dadosPessoais?.nomeSocial !== undefined
              ? errors.dadosPessoais?.nomeSocial.message
              : FORMULARIO_DADOS_PESSOAIS[2].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[2].label}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          id="dataNascimento"
          autoComplete="dataNascimento"
          {...register('dadosPessoais.dataNascimento', {
            valueAsDate: true,
          })}
          placeholder={FORMULARIO_DADOS_PESSOAIS[3].placeHolder}
          error={errors.dadosPessoais?.dataNascimento !== undefined}
          helperText={
            errors.dadosPessoais?.dataNascimento !== undefined
              ? errors.dadosPessoais?.dataNascimento.message
              : FORMULARIO_DADOS_PESSOAIS[3].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[3].label}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="label-select-estado-civil">
            {FORMULARIO_DADOS_PESSOAIS[4].label}
          </InputLabel>
          <Select
            labelId="estado-civil"
            id="estadoCivil"
            label="Estado Civil"
            {...register('dadosPessoais.estadoCivil')}
            value={watch('dadosPessoais.estadoCivil') || ''}
            placeholder={FORMULARIO_DADOS_PESSOAIS[4].placeHolder}
            error={errors.dadosPessoais?.estadoCivil !== undefined}
          >
            {SELECT_ITEMS_ESTADO_CIVIL.map((option) => (
              <MenuItem key={option.valor} value={option.valor}>
                {option.nome}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {errors.dadosPessoais?.estadoCivil !== undefined
              ? errors.dadosPessoais?.estadoCivil.message
              : FORMULARIO_DADOS_PESSOAIS[4].textHelper}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={5}>
        <FormControl>
          <FormLabel id="radio-sexo-control">Sexo</FormLabel>
          <RadioGroup
            aria-labelledby="radio-sexo-control"
            sx={{ flexDirection: 'row' }}
          >
            <FormControlLabel
              value="feminino"
              control={<Radio {...register('dadosPessoais.sexo')} />}
              label="Feminino"
            />
            <FormControlLabel
              value="masculino"
              control={<Radio {...register('dadosPessoais.sexo')} />}
              label="Masculino"
            />
          </RadioGroup>
          <FormHelperText>
            {errors.dadosPessoais?.estadoCivil !== undefined
              ? errors.dadosPessoais?.estadoCivil.message
              : ''}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="numero-rg"
          autoComplete="numero-rg"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[5].icon}
              </InputAdornment>
            ),
          }}
          {...register('dadosPessoais.rg')}
          placeholder={FORMULARIO_DADOS_PESSOAIS[5].placeHolder}
          error={errors.dadosPessoais?.rg !== undefined}
          helperText={
            errors.dadosPessoais?.rg !== undefined
              ? errors.dadosPessoais.rg.message
              : FORMULARIO_DADOS_PESSOAIS[5].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[5].label}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="orgao-rg"
          autoComplete="orgao-rg"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[6].icon}
              </InputAdornment>
            ),
          }}
          placeholder={FORMULARIO_DADOS_PESSOAIS[6].placeHolder}
          {...register('dadosPessoais.rgOrgao')}
          error={errors.dadosPessoais?.rgOrgao !== undefined}
          helperText={
            errors.dadosPessoais?.rgOrgao !== undefined
              ? errors.dadosPessoais.rgOrgao.message
              : FORMULARIO_DADOS_PESSOAIS[6].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[6].label}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="label-select-certidao">
            {FORMULARIO_DADOS_PESSOAIS[8].label}
          </InputLabel>
          <Select
            {...register('dadosPessoais.tipoCertidao')}
            value={watch('dadosPessoais.tipoCertidao') || ''}
            error={errors.dadosPessoais?.tipoCertidao !== undefined}
            labelId="numero-certidao"
            id="numeroCertidao"
            label="Número Certidão"
          >
            {SELECT_TIPO_CERTIDAO.map((option) => (
              <MenuItem key={option.valor} value={option.valor}>
                {option.nome}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {errors.dadosPessoais?.tipoCertidao !== undefined
              ? errors.dadosPessoais.tipoCertidao.message
              : FORMULARIO_DADOS_PESSOAIS[8].textHelper}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="certidaoNumero"
          autoComplete="certidaoNumero"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[9].icon}
              </InputAdornment>
            ),
          }}
          placeholder={FORMULARIO_DADOS_PESSOAIS[9].placeHolder}
          {...register('dadosPessoais.certidao')}
          error={errors.dadosPessoais?.certidao !== undefined}
          helperText={
            errors.dadosPessoais?.certidao !== undefined
              ? errors.dadosPessoais.certidao.message
              : FORMULARIO_DADOS_PESSOAIS[9].textHelper
          }
          label={FORMULARIO_DADOS_PESSOAIS[9].label}
        />
      </Grid>
    </Grid>
  )
}
