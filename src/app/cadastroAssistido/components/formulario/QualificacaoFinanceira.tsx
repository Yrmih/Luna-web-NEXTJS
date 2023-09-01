
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import { ItemDescricaoValor, Investimentos } from '../../types/Types';
import TableDynamicItens from '../TableDynamicDescricaoValor';

const MOVEIS: ItemDescricaoValor[] = [
  { valor: 400, descricao: "Cadeira Gamer" },
  { valor: 5000, descricao: "PlayStation 5" },
  { valor: 2000, descricao: "Computador" },
];

const IMOVEIS: ItemDescricaoValor[] = [
  { valor: 50000, descricao: "Casa" },
  { valor: 30000, descricao: "Oficina" },
];

const INVESTIMENTOS: Investimentos[] = [
  { valor: 4000, descricao: "Poupança" },
  { valor: 7000, descricao: "Tesouro Selic" },
];


export default function QualificacaoFinanceira() {
  const [bensMoveisAdicionado, setBensMoveisAdicionado] = useState(MOVEIS);
  const [bensImoveisAdicionado, setBensImoveisAdicionado] = useState(IMOVEIS);
  const [investimentosAdicionado, setInvestimentosAdicionado] = useState(INVESTIMENTOS);

  const handleAddItems = () => {

  };

  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="numeroMembros"
          label="Membros da Família"
          fullWidth
          autoComplete="membros"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="numeroMembrosAtivos"
          label="Membros Ativos da Família"
          fullWidth
          autoComplete="mambros-ativos"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="rendaIndividual"
          label="Renda Individual"
          fullWidth
          autoComplete="renda-individual"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="rendaFamiliar"
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
            id="valorMovel"
            label="Valor do Móvel"
            fullWidth
            autoComplete="valor-movel"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="descricaoMovel"
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
            onClick={handleAddItems}>
              Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TableDynamicItens setItemsList={setBensMoveisAdicionado} itemsList={bensMoveisAdicionado}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="valorImovel"
            label="Valor do Imóvel"
            fullWidth
            autoComplete="valor-imovel"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="descricaoImovel"
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
            onClick={handleAddItems}>
              Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TableDynamicItens 
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
            id="valorInvestimento"
            label="Valor do Investimento"
            fullWidth
            autoComplete="valor-investimento"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="descricaoInvestimento"
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
            onClick={handleAddItems}>
              Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TableDynamicItens setItemsList={setInvestimentosAdicionado} itemsList={investimentosAdicionado}/>
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
