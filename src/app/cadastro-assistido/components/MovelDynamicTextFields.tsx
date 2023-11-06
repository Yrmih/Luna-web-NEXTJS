'use client'

// Thirdy party
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Grid, InputAdornment, TextField, Tooltip } from '@mui/material'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

// framework

// Internal
import styles from '../../../assets/styles/TabelaItens.module.css'
import { CadastroAssistidoInputsForm } from '../CadastroAssistido'
import { Item } from '../types/Item'
import { TextFieldAttributes } from '../types/TextFieldAttributes'

export type RenderDimanicTextFieldsMovelOptions = {
  items: Item[]
  valorAttribute: TextFieldAttributes
  descricaoAttribute: TextFieldAttributes
  register: UseFormRegister<CadastroAssistidoInputsForm>
  watch: UseFormWatch<CadastroAssistidoInputsForm>
  setValue: UseFormSetValue<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function MovelDynamicTextFields({
  items,
  errors,
  register,
  watch,
  setValue,
  valorAttribute,
  descricaoAttribute,
}: RenderDimanicTextFieldsMovelOptions) {
  const itemsMovel =
    watch(
      `qualificacaoFinanceira.moveis`,
      items.length !== 0 ? items : [{ valor: 0, descricao: '' }],
    ) || []

  console.log('Items: ', itemsMovel)
  const handleRemoveItem = (itemRemoved: Item) => {
    setValue(
      `qualificacaoFinanceira.moveis`,
      itemsMovel.filter((item) => item !== itemRemoved),
    )
  }

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
            <Button
              fullWidth
              onClick={() => {
                handleRemoveItem(item)
              }}
              variant="outlined"
            >
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
              setValue(`qualificacaoFinanceira.moveis`, [
                ...itemsMovel,
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
