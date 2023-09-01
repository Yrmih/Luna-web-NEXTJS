
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Imovel, Investimentos, Movel } from '../../types/Types';
import TabelaitensAdicionados, { Item } from '../TabelaItensAdicionados';

const MOVEIS: Item[] = [
  { valor: 400, descricao: "Cadeira Gamer" },
  { valor: 5000, descricao: "PlayStation 5" },
  { valor: 2000, descricao: "Computador" },
];

const IMOVEIS: Item[] = [
  { valor: 50000, descricao: "Casa" },
  { valor: 30000, descricao: "Oficina" },
];

const INVESTIMENTOS: Item[] = [
  { valor: 4000, descricao: "Poupança" },
  { valor: 7000, descricao: "Tesouro Selic" },
];


export default function QualificacaoFinanceira() {
  const [bensMoveisAdicionado, setBensMoveisAdicionado] = useState<Item[]>(MOVEIS);
  const [bensImoveisAdicionado, setBensImoveisAdicionado] = useState<Item[]>(IMOVEIS);
  const [investimentosAdicionado, setInvestimentosAdicionado] = useState<Item[]>(INVESTIMENTOS);
  const [movelAtual, setMovelAtual] = useState<Movel>(
    {descricaoMovel:"", valorMovel:0}
  );
  const [imovelAtual, setImovelAtual] = useState<Imovel>(
    {descricaoImovel:"", valorImovel:0}
  );
  const [investimentoAtual, setinvestimentoAtual] = useState<Investimentos>(
    {descricaoInvestimento:"", valorInvestimento:0}
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Name: ", event.target.name, "Value: ", event.target.value)
  }

  const handleChangeInputTableItems = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Name: ", event.target.name, "Value: ", event.target.value)

    switch(event.target.name){
      case 'descricaoMovel':
        setMovelAtual((prev)=> ({...prev, descricaoMovel: event.target.value}))
        break;
      case 'valorMovel':
        setMovelAtual((prev)=> ({...prev, valorMovel: Number(event.target.value)}))
        break;
      case 'descricaoImovel':
        setImovelAtual((prev)=> ({...prev, descricaoImovel: event.target.value}))
        break;
      case 'valorImovel':
        setImovelAtual((prev)=> ({...prev, valorImovel: Number(event.target.value)}))
        break;
      case 'descricaoInvestimento':
        setinvestimentoAtual((prev)=> ({...prev, descricaoInvestimento: event.target.value}))
        break;
      case 'valorInvestimento':
        setinvestimentoAtual((prev)=> ({...prev, valorInvestimento: Number(event.target.value)}))
        break;
    }
  }

  const handleAddItems = (type: 'moveis'|'imoveis'|'investimentos') => {
      switch(type){
        case 'moveis':
          setBensMoveisAdicionado([
            ...bensMoveisAdicionado, 
            {descricao: movelAtual.descricaoMovel, valor: movelAtual.valorMovel}
          ])
          break;
        case 'imoveis':
          setBensImoveisAdicionado([
            ...bensImoveisAdicionado, 
            {descricao: imovelAtual.descricaoImovel, valor: imovelAtual.valorImovel}
          ])
          break;
        case 'investimentos':
          setInvestimentosAdicionado([
            ...investimentosAdicionado, 
            {descricao: investimentoAtual.descricaoInvestimento, valor: investimentoAtual.valorInvestimento}
          ])
          break;
        default:
          throw new Error('Tratamento não definido para esse evento.');
      }
  };

  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          onChange={handleChange}
          id="numeroMembrosFamilia"
          name="numeroMembros"
          label="Membros da Família"
          fullWidth
          autoComplete="membros"
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
            onClick={()=> handleAddItems('moveis')}>
              Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TabelaitensAdicionados setItemsList={setBensMoveisAdicionado} itemsList={bensMoveisAdicionado}/>
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
            onClick={() => handleAddItems('imoveis')}>
              Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TabelaitensAdicionados
            setItemsList={setBensImoveisAdicionado} 
            itemsList={bensImoveisAdicionado}/>
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
            onClick={() => handleAddItems('investimentos')}>
              Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TabelaitensAdicionados setItemsList={setInvestimentosAdicionado} itemsList={investimentosAdicionado}/>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox value="aceitaTermosCondicoes" />}
          label={
            <Box>
              Aceito os{" "}
              <Link href="/termos-e-condicoes">termos e condições</Link>.
            </Box>
          }
        />
      </Grid>
    </Grid>
  );
}
