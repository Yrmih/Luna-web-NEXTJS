import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
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

const SELECT_ESTADO_CIVIL = [
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
  const [value, setValue] = useState<DadosPessoais>();

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
          required
          id="mae"
          label="Nome da Mãe"
          fullWidth
          autoComplete="mae"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="pai"
          label="Nome do Pai"
          fullWidth
          autoComplete="pai"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="nomeSocial"
          label="Nome Social"
          fullWidth
          autoComplete="nomeSocial"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          required
          type='date'
          InputLabelProps={{ shrink: true }}
          id="dataNascimento"
          label="Data de Nascimento"
          fullWidth
          autoComplete="dataNascimento"
        />
      </Grid>
      <Grid item xs={12} sm={6} ml={8}>
        <FormControl>
        <FormLabel id="radio-sexo-control">Sexo</FormLabel>
        <RadioGroup
          aria-labelledby="radio-sexo-control"
          name="radio-sexo-control"
          sx={{flexDirection:'row', borderColor: 'primary'}}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
          <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
        </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="label-select-estado-civil">Estado Civil</InputLabel>
        <Select
          onChange={handleSelectChange}
          labelId="estado-civil"
          id="estadoCivil"
          label="Estado Civil"
        >
          {
            SELECT_ESTADO_CIVIL.map((option) => (<MenuItem key={option.valor} value={option.valor}>{option.nome}</MenuItem>))
          }
        </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="certidaoNumero"
          label="Número Certidão"
          fullWidth
          autoComplete="dataNascimento"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="label-select-certidao">Certidão</InputLabel>
        <Select
          onChange={handleSelectChange}
          labelId="numero-certidao"
          id="numeroCertidao"
          label="Número Certidão"
        >
          {
            SELECT_TIPO_CERTIDAO.map((option) => (<MenuItem key={option.valor} value={option.valor}>{option.nome}</MenuItem>))
          }
        </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="certidaoNumero"
          label="Data de Nascimento"
          fullWidth
          autoComplete="dataNascimento"
        />
      </Grid>
    </Grid>
  );
}