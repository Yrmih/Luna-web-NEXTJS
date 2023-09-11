// Thirdy party
import DeleteIcon from '@mui/icons-material/Delete'
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

// Internal
import { Item } from '../types/Item'
import styles from '@/styles/TabelaItens.module.css'

export type TableDynamicItemProps = {
  itemsList: Item[]
  setItemsList: (itemsList: Item[]) => void
}

export interface RenderDimanicItemOptions {
  item: Item
  handleRemoveItem: (item: Item) => void
}

function renderDinamicItemWithValor({
  item,
  handleRemoveItem: handleRemoveBem,
}: RenderDimanicItemOptions) {
  return (
    <TableRow
      className={`${styles.tableEnter} ${styles.tableExit}`}
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
  )
}

export function TabelaitensAdicionados({
  itemsList,
  setItemsList,
}: TableDynamicItemProps) {
  const handleRemoveItems = (itemDelted: Item) => {
    setItemsList(itemsList.filter((item) => item !== itemDelted))
  }

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
          {itemsList.map((item) =>
            renderDinamicItemWithValor({
              item,
              handleRemoveItem: handleRemoveItems,
            }),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
