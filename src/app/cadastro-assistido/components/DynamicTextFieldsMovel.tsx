'use client'

// Thirdy party
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@mui/material'
// Internal
import { Item } from '../types/Item'
import styles from '../../../assets/styles/TabelaItens.module.css'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { CadastroAssistidoInputsForm } from '../CadastroAssistido'
import { TextFieldAttributes } from '../types/TextFieldAttributes'
import { useState } from 'react'

export type RenderDimanicTextFieldsMovelOptions = {
  items: Item[]
  valorAttribute: TextFieldAttributes
  descricaoAttribute: TextFieldAttributes
  register: UseFormRegister<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function DynamicTextFieldsMovel({
  items,
  errors,
  register,
  valorAttribute,
  descricaoAttribute,
}: RenderDimanicTextFieldsMovelOptions) {
  const [itemsMovel, setItemsMovel] = useState<Item[]>([
    { valor: 0, descricao: '' },
  ])

  return (
    <>
      {itemsMovel.map((item, index) => (
        <Grid
          className={`${styles.tableEnter} ${styles.tableExit}`}
          key={index}
          container
          item
          spacing={3}
          xs={12}
        >
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              type="number"
              value={item.valor}
              autoComplete="valor-movel"
              {...register(`qualificacaoFinanceira.moveis.${index}.valor`, {
                valueAsNumber: true,
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {valorAttribute.icon}
                  </InputAdornment>
                ),
              }}
              name={valorAttribute.name}
              helperText={
                errors.qualificacaoFinanceira?.moveis?.[index]?.valor !==
                undefined
                  ? errors.qualificacaoFinanceira.moveis[index]?.valor?.message
                  : valorAttribute.textHelper
              }
              error={
                errors.qualificacaoFinanceira?.moveis?.[index]?.valor !==
                undefined
              }
              label={valorAttribute.label}
              placeholder={valorAttribute.placeHolder}
            />
          </Grid>
          <Grid item xs={6} md={5}>
            <TextField
              fullWidth
              value={item.descricao}
              autoComplete="descricao-movel"
              {...register(`qualificacaoFinanceira.moveis.${index}.descricao`)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {descricaoAttribute.icon}
                  </InputAdornment>
                ),
              }}
              name={descricaoAttribute.name}
              helperText={
                errors.qualificacaoFinanceira?.moveis?.[index]?.descricao !==
                undefined
                  ? errors.qualificacaoFinanceira.moveis[index]?.descricao
                      ?.message
                  : descricaoAttribute.textHelper
              }
              error={
                errors.qualificacaoFinanceira?.moveis?.[index]?.descricao !==
                undefined
              }
              label={descricaoAttribute.label}
              placeholder={descricaoAttribute.placeHolder}
            />
          </Grid>
          <Grid
            item
            display={'flex'}
            xs={6}
            alignItems={'center'}
            md={2}
            mb={5}
          >
            <Button fullWidth variant="outlined">
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Tooltip title="Adicionar campo">
          <Button
            size="large"
            variant="outlined"
            onClick={() =>
              setItemsMovel((prevState) => [
                ...prevState,
                { valor: 0, descricao: '' },
              ])
            }
          >
            <AddCircleIcon />
          </Button>
        </Tooltip>
      </Grid>
    </>
  )
}
