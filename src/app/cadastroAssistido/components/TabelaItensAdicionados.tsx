import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export type Item = {
  valor: number;
  descricao: string;
};

export type TableDynamicItemProps<T> = {
    itemsList: T[],
    setItemsList: (itemsList: T[]) => void 
}

export interface RenderDimanicItemOptions<T> {
    item: T;
    handleRemoveItem: (item: T) => void;
  }
  
function renderDinamicItemWithValor({
    item,
    handleRemoveItem: handleRemoveBem,
  }: RenderDimanicItemOptions<Item>) {
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
  
export default function TabelaitensAdicionados({ itemsList, setItemsList }: TableDynamicItemProps<Item>) {
    const handleRemoveItems = (itemDelted: Item) => {
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
