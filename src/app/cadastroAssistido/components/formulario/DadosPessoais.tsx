import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DescriptionIcon from '@mui/icons-material/Description';
import { useState } from 'react';

type DadosPessoais = {
  nomeMae: string,
  nomePai: string,
  dataNascimento: string,
  sexo: 'masculino'|'feminino'
  estadoCivil: 'casado' | 'solteiro' | 'diverciado' | 'viuvo'
  nomeSocial: string,
  rg?: string,
  rgOrgao?: string,
  certidao?: string,
  tipoCertidao?: string,
}

const FORMULARIO_DADOS_PESSOAIS = [
  {
    name: "nomeGenitora",
    label: "Nome da Mãe",
    textHelper: "Nome e sobrenome da mãe.",
    icon: <FamilyRestroomIcon/>,
    required: true,
  },
  {
    name: "nomeGenitor",
    label: "Nome do Pai",
    textHelper: "Nome e sobrenome do Pai.",
    icon: <FamilyRestroomIcon/>,
    required: true,
  },
  {
    name: "nomeSocial",
    label: "Nome Social",
    textHelper: "Outro nome pelo qual o identificam.",
    icon: <EmojiPeopleIcon/>,
    required: true,
  },
  {
    name: "dataNascimento",
    label: "Data de Nascimento",
    textHelper: "Sua data de nascimento. Ex.: 01/12/1980.",
    icon: undefined,
    required: true,
  },
  {
    name: "estadoCivil",
    label: "Estado civil",
    textHelper: "Selecione seu estado civil. Ex.: Solteira, Casado, etc...",
    icon: undefined,
    required: true,
  },
  {
    name: "numeroRg",
    label: "RG",
    textHelper: "Seu número de RG.",
    icon: <PermIdentityIcon/>,
    required: true,
  },
  {
    name: "orgaoRg",
    label: "Orgão Emissor",
    textHelper: "Orgão emissor di seu RG.",
    icon: <CorporateFareIcon/>,
    required: true,
  },
  {
    name: "sexo",
    label: "Sexo",
    textHelper: "Sexo do assistido. Ex.: masculino, feminino.",
    icon: undefined,
    required: true,
  },
  {
    name: "tipoCertidao",
    label: "Tipo de Certidão",
    textHelper: "Selecione Seu tipo de Certidão. Ex.: Certidão de casamento.",
    icon: undefined,
    required: true,
  },
  {
    name: "numeroCertidao",
    label: "Número Certidão",
    textHelper: "Número de sua certidão selecionada.",
    icon: <DescriptionIcon/>,
    required: true,
  },
]

const SELECT_ITEMS_ESTADO_CIVIL = [
  {valor:1, nome: "Solteriro(a)"},
  {valor:2, nome: "Casado(a)"},
  {valor:3, nome: "Viúvo(a)"},
  {valor:4, nome: "Divorciado(a)"}

]

const SELECT_TIPO_CERTIDAO = [
  {valor:1, nome: "Certidão de Nascimento"},
  {valor:1, nome: "Certidão de Casamento"},
]

export default function DadosPessoais() {

  const [dadosPessoais, setDadosPessoais] = useState<DadosPessoais>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget)
    console.log(event.target)
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string);
  };

  return (
    <Grid 
      container 
      spacing={3} 
      px={4}
      >
      <Grid item xs={12}>
        <TextField
          id="mae"
          fullWidth
          autoComplete="mae"
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[0].icon}
            </InputAdornment>,
          }}
          placeholder='Ex.: Lucineia Ferreira da Silva.'
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[0].name}
          label={FORMULARIO_DADOS_PESSOAIS[0].label}
          required={FORMULARIO_DADOS_PESSOAIS[0].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[0].textHelper}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="pai"
          fullWidth
          autoComplete="pai"
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[1].icon}
            </InputAdornment>,
          }}
          placeholder='Ex.: Cláudio da Conceição Silva.'
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[1].name}
          label={FORMULARIO_DADOS_PESSOAIS[1].label}
          required={FORMULARIO_DADOS_PESSOAIS[1].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[1].textHelper}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="nomeSocial"
          autoComplete="nomeSocial"
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[2].icon}
            </InputAdornment>,
          }}
          placeholder='Ex.: Claudinho'
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[2].name}
          label={FORMULARIO_DADOS_PESSOAIS[2].label}
          required={FORMULARIO_DADOS_PESSOAIS[2].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[2].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          type='date'
          fullWidth
          InputLabelProps={{ shrink: true }}
          id="dataNascimento"
          autoComplete="dataNascimento"
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[3].name}
          label={FORMULARIO_DADOS_PESSOAIS[3].label}
          required={FORMULARIO_DADOS_PESSOAIS[3].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[3].textHelper}
          
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
        <InputLabel id="label-select-estado-civil">{FORMULARIO_DADOS_PESSOAIS[4].label}</InputLabel>
        <Select
          onChange={handleSelectChange}
          labelId="estado-civil"
          id="estadoCivil"
          label="Estado Civil"
          name={FORMULARIO_DADOS_PESSOAIS[4].name}
          required={FORMULARIO_DADOS_PESSOAIS[4].required}
        >
          {
            SELECT_ITEMS_ESTADO_CIVIL.map((option) => (<MenuItem key={option.valor} value={option.valor}>{option.nome}</MenuItem>))
          }
        </Select>
        <FormHelperText>{FORMULARIO_DADOS_PESSOAIS[4].textHelper}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={5}>
        <FormControl>
        <FormLabel id="radio-sexo-control">Sexo</FormLabel>
        <RadioGroup
          aria-labelledby="radio-sexo-control"
          name="radio-sexo-control"
          sx={{flexDirection:'row'}}
          value={dadosPessoais}
          onChange={handleChange}
        >
          <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
          <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
        </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="numero-rg"
          autoComplete="numero-rg"
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[5].icon}
            </InputAdornment>,
          }}
          placeholder='Ex.: 7325110'
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[5].name}
          label={FORMULARIO_DADOS_PESSOAIS[5].label}
          required={FORMULARIO_DADOS_PESSOAIS[5].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[5].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="orgao-rg"
          autoComplete="orgao-rg"
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[6].icon}
            </InputAdornment>,
          }}
          placeholder='Ex.: Polícia Civil'
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[6].name}
          label={FORMULARIO_DADOS_PESSOAIS[6].label}
          required={FORMULARIO_DADOS_PESSOAIS[6].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[6].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="label-select-certidao">{FORMULARIO_DADOS_PESSOAIS[8].label}</InputLabel>
          <Select
            onChange={handleSelectChange}
            name={FORMULARIO_DADOS_PESSOAIS[8].name}
            required={FORMULARIO_DADOS_PESSOAIS[8].required}
            labelId="numero-certidao"
            id="numeroCertidao"
            label="Número Certidão"
          >
            {
              SELECT_TIPO_CERTIDAO.map((option) => (<MenuItem key={option.valor} value={option.valor}>{option.nome}</MenuItem>))
            }
          </Select>
          <FormHelperText>{FORMULARIO_DADOS_PESSOAIS[8].textHelper}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="certidaoNumero"
          autoComplete="dataNascimento"
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
                {FORMULARIO_DADOS_PESSOAIS[9].icon}
            </InputAdornment>,
          }}
          placeholder='Ex.: 999999 99 99 9999 9 99999 999 9999999 99.'
          onChange={handleChange}
          name={FORMULARIO_DADOS_PESSOAIS[9].name}
          label={FORMULARIO_DADOS_PESSOAIS[9].label}
          required={FORMULARIO_DADOS_PESSOAIS[9].required}
          helperText={FORMULARIO_DADOS_PESSOAIS[9].textHelper}
        />
      </Grid>
    </Grid>
  );
}