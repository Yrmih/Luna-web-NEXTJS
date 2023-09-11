// Third party
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

// Framework
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

// Internal
import { Item } from '../../types/Item'
import { Movel } from '../../types/Movel'
import { Imovel } from '../../types/Imovel'
import { Investimento } from '../../types/Investimento'
import { TabelaitensAdicionados } from '../TabelaItensAdicionados'

const MOVEIS: Item[] = [
  { valor: 400, descricao: 'Cadeira Gamer' },
  { valor: 5000, descricao: 'PlayStation 5' },
  { valor: 2000, descricao: 'Computador' },
]

const IMOVEIS: Item[] = [
  { valor: 50000, descricao: 'Casa' },
  { valor: 30000, descricao: 'Oficina' },
]

const INVESTIMENTOS: Item[] = [
  { valor: 4000, descricao: 'Poupança' },
  { valor: 7000, descricao: 'Tesouro Selic' },
]

const FORMULARIO_QUALIFICACAO_FIANCEIRA = [
  {
    name: 'numeroMembros',
    label: 'Membros da Família',
    textHelper: 'Quantidade de membros da sua família. Ex.: 4, 6, 7, etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'numeroMembrosFamiliaAtivos',
    label: 'Membros Ativos da Família',
    textHelper:
      'Quantidade de membros econômicamente ativos na sua família. Ex.: 4, 6, 7, etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'rendaIndividual',
    label: 'Renda Individual',
    textHelper: 'Valor da sua renda individual. Ex.: 1300,00.',
    icon: undefined,
    required: true,
  },
  {
    name: 'rendaFamiliar',
    label: 'Renda familiar',
    textHelper:
      'Valor da renda de sua família, incluindo a sua renda. Ex.: 2600,00',
    icon: undefined,
    required: true,
  },
  {
    name: 'valorMovel',
    label: 'Valor do móvel',
    textHelper: 'Adicione o valor em reais do seu móvel. Ex.: 220,00; etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'descricaoMovel',
    label: 'Descrição do móvel',
    textHelper:
      'Adicione a descrição do seu móvel. Ex.: Sofá, Refrigerador; etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'valorImovel',
    label: 'Valor do imóvel',
    textHelper: 'Adicione o valor em reais do seu imóvel. Ex.: 220,00; etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'descricaoImovel',
    label: 'Descrição do imóvel',
    textHelper:
      'Adicione a descrição do seu imóvel. Ex.: Casa, Apartamento; etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'valorMovel',
    label: 'Valor do móvel',
    textHelper: 'Adicione o valor em reais do seu imóvel. Ex.: 220,00; etc...',
    icon: undefined,
    required: true,
  },
  {
    name: 'descricaoMovel',
    label: 'Descrição do móvel',
    textHelper:
      'Adicione a descrição do seu móvel. Ex.: Sofá, Refrigerador; etc...',
    icon: undefined,
    required: true,
  },
]

export function QualificacaoFinanceira() {
  const [bensMoveisAdicionado, setBensMoveisAdicionado] =
    useState<Item[]>(MOVEIS)
  const [bensImoveisAdicionado, setBensImoveisAdicionado] =
    useState<Item[]>(IMOVEIS)
  const [investimentosAdicionado, setInvestimentosAdicionado] =
    useState<Item[]>(INVESTIMENTOS)
  const [movelAtual, setMovelAtual] = useState<Movel>({
    descricaoMovel: '',
    valorMovel: 0,
  })
  const [imovelAtual, setImovelAtual] = useState<Imovel>({
    descricaoImovel: '',
    valorImovel: 0,
  })
  const [investimentoAtual, setinvestimentoAtual] = useState<Investimento>({
    descricaoInvestimento: '',
    valorInvestimento: 0,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Name: ', event.target.name, 'Value: ', event.target.value)
  }

  const handleChangeInputTableItems = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    console.log('Name: ', event.target.name, 'Value: ', event.target.value)

    switch (event.target.name) {
      case 'descricaoMovel':
        setMovelAtual((prev) => ({
          ...prev,
          descricaoMovel: event.target.value,
        }))
        break
      case 'valorMovel':
        setMovelAtual((prev) => ({
          ...prev,
          valorMovel: Number(event.target.value),
        }))
        break
      case 'descricaoImovel':
        setImovelAtual((prev) => ({
          ...prev,
          descricaoImovel: event.target.value,
        }))
        break
      case 'valorImovel':
        setImovelAtual((prev) => ({
          ...prev,
          valorImovel: Number(event.target.value),
        }))
        break
      case 'descricaoInvestimento':
        setinvestimentoAtual((prev) => ({
          ...prev,
          descricaoInvestimento: event.target.value,
        }))
        break
      case 'valorInvestimento':
        setinvestimentoAtual((prev) => ({
          ...prev,
          valorInvestimento: Number(event.target.value),
        }))
        break
    }
  }

  const handleAddItemsInTable = (
    type: 'moveis' | 'imoveis' | 'investimentos',
  ) => {
    switch (type) {
      case 'moveis':
        setBensMoveisAdicionado([
          ...bensMoveisAdicionado,
          {
            descricao: movelAtual.descricaoMovel,
            valor: movelAtual.valorMovel,
          },
        ])
        break
      case 'imoveis':
        setBensImoveisAdicionado([
          ...bensImoveisAdicionado,
          {
            descricao: imovelAtual.descricaoImovel,
            valor: imovelAtual.valorImovel,
          },
        ])
        break
      case 'investimentos':
        setInvestimentosAdicionado([
          ...investimentosAdicionado,
          {
            descricao: investimentoAtual.descricaoInvestimento,
            valor: investimentoAtual.valorInvestimento,
          },
        ])
        break
      default:
        throw new Error('Tratamento não definido para esse evento.')
    }
  }

  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          onChange={handleChange}
          id="numeroMembrosFamilia"
          name={FORMULARIO_QUALIFICACAO_FIANCEIRA[0].name}
          label={FORMULARIO_QUALIFICACAO_FIANCEIRA[0].label}
          autoComplete="membros-familia"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          onChange={handleChange}
          id="numeroMembrosFamiliaAtivos"
          name="numeroMembrosAtivos"
          label="Membros Ativos da Família"
          fullWidth
          autoComplete="mambros-ativos"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          onChange={handleChange}
          id="rendaIndividual"
          name="rendaIndividual"
          label="Renda Individual"
          fullWidth
          autoComplete="renda-individual"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          onChange={handleChange}
          id="rendaFamiliar"
          name="rendaFamiliar"
          label="Renda Familiar"
          fullWidth
          autoComplete="renda-familiar"
        />
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography>Bens</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            onChange={handleChangeInputTableItems}
            id="valorMovel"
            name="valorMovel"
            label="Valor do Móvel"
            fullWidth
            autoComplete="valor-movel"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handleChangeInputTableItems}
            id="descricaoMovel"
            name="descricaoMovel"
            label="Descrição Móvel"
            fullWidth
            autoComplete="descricao-movel"
          />
        </Grid>
        <Grid item display={'flex'} xs={12} md={2} alignItems={'center'}>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<AddCircleIcon />}
            onClick={() => handleAddItemsInTable('moveis')}
          >
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TabelaitensAdicionados
            setItemsList={setBensMoveisAdicionado}
            itemsList={bensMoveisAdicionado}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            onChange={handleChangeInputTableItems}
            id="valorImovel"
            name="valorImovel"
            label="Valor do Imóvel"
            fullWidth
            autoComplete="valor-imovel"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handleChangeInputTableItems}
            id="descricaoImovel"
            name="descricaoImovel"
            label="Descrição do Imóvel"
            fullWidth
            autoComplete="descricao-imovel"
          />
        </Grid>
        <Grid item display={'flex'} xs={12} md={2} alignItems={'center'}>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<AddCircleIcon />}
            onClick={() => handleAddItemsInTable('imoveis')}
          >
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TabelaitensAdicionados
            setItemsList={setBensImoveisAdicionado}
            itemsList={bensImoveisAdicionado}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography>Investimentos</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            onChange={handleChangeInputTableItems}
            id="valorInvestimento"
            name="valorInvestimento"
            label="Valor do Investimento"
            fullWidth
            autoComplete="valor-investimento"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handleChangeInputTableItems}
            id="descricaoInvestimento"
            name="descricaoInvestimento"
            label="Descrição do Investimento"
            fullWidth
            autoComplete="descricao-imovel"
          />
        </Grid>
        <Grid item display={'flex'} xs={12} md={2} alignItems={'center'}>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<AddCircleIcon />}
            onClick={() => handleAddItemsInTable('investimentos')}
          >
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TabelaitensAdicionados
            setItemsList={setInvestimentosAdicionado}
            itemsList={investimentosAdicionado}
          />
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
