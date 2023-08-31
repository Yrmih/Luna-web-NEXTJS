import DeleteIcon from "@mui/icons-material/Delete";
import { Collapse, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TransitionGroup } from "react-transition-group";
import { Bens, Investimentos } from '../types/Types';


export type GridDynamicItemProps = {
    itemsList: Bens[] | Investimentos[],
    setItemsList: (itemsList: Bens[] | Investimentos[]) => void 
}

export interface RenderDimanicItemOptions<T> {
    item: T;
    handleRemoveItem: (item: T) => void;
  }
  
function renderDinamicItemWithValor({
    item,
    handleRemoveItem: handleRemoveBem,
  }: RenderDimanicItemOptions<Bens | Investimentos>) {
    return (
      
      <TableRow
      key={item.descricao}

      >
        <TableCell component="th" scope="row">
          {item.descricao}
        </TableCell>
        <TableCell align="right">{item.valor}</TableCell>
        <TableCell align="right">
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveBem(item)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
}
  
export default function BensInvestimentosAdicionado({ itemsList, setItemsList }: GridDynamicItemProps) {
    const handleRemoveItems = (itemDelted: Bens) => {
        setItemsList(itemsList.filter((item)=> item!=itemDelted))
    };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsList.map((item)=> (renderDinamicItemWithValor({
              item,
              handleRemoveItem: handleRemoveItems,
          })))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
