'use client'
// Thirdy party
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Grid, InputAdornment, TextField, Tooltip } from '@mui/material'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
} from 'react-hook-form'

// framework
import { ChangeEvent } from 'react'

// Internal
import styles from '@/styles/FadeTransitionItens.module.css'
import { CadastroAssistidoInputsForm } from '../CadastroAssistido'
import { TextFieldAttributes } from '../../types/TextFieldAttributes'
import { MaskUtils } from '@/utils/MaskUtils'

export type RenderDimanicTextFieldsMovelOptions = {
  valorAttribute: TextFieldAttributes
  descricaoAttribute: TextFieldAttributes
  register: UseFormRegister<CadastroAssistidoInputsForm>
  control: Control<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
  setValue: UseFormSetValue<CadastroAssistidoInputsForm>
  allowOnlyNumbers: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

export function InvestimentoDynamicTextFields({
  errors,
  register,
  control,
  valorAttribute,
  descricaoAttribute,
  allowOnlyNumbers,
  setValue,
}: RenderDimanicTextFieldsMovelOptions) {
  const {
    append,
    fields: itemsInvestimentos,
    remove,
  } = useFieldArray({
    control,
    name: 'qualificacaoFinanceira.investimentos',
  })

  return (
    <>
      {itemsInvestimentos.map((item, index) => (
        <Grid
          className={`${styles.tableEnter} ${styles.tableExit}`}
          key={item.id}
          container
          item
          spacing={3}
          xs={12}
        >
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              type="text"
              autoComplete="valor-investimentos"
              {...register(
                `qualificacaoFinanceira.investimentos.${index}.valor`,
                {
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const investmentValue = event.target.value
                    setValue(
                      `qualificacaoFinanceira.investimentos.${index}.valor`,
                      MaskUtils.maskMoney(investmentValue),
                    )
                  },
                },
              )}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {valorAttribute.icon}
                  </InputAdornment>
                ),
                inputProps: { min: 0, maxLength: 11 },
              }}
              helperText={
                errors.qualificacaoFinanceira?.investimentos?.[index]?.valor !==
                undefined
                  ? errors.qualificacaoFinanceira.investimentos[index]?.valor
                      ?.message
                  : valorAttribute.textHelper
              }
              error={
                errors.qualificacaoFinanceira?.investimentos?.[index]?.valor !==
                undefined
              }
              label={valorAttribute.label}
              placeholder={valorAttribute.placeHolder}
              onKeyDown={(event) => {
                allowOnlyNumbers(event)
              }}
            />
          </Grid>
          <Grid item xs={6} md={5}>
            <TextField
              fullWidth
              autoComplete="descricao-investimentos"
              {...register(
                `qualificacaoFinanceira.investimentos.${index}.descricao`,
              )}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {descricaoAttribute.icon}
                  </InputAdornment>
                ),
                inputProps: { min: 0, maxLength: 20 },
              }}
              name={descricaoAttribute.name}
              helperText={
                errors.qualificacaoFinanceira?.investimentos?.[index]
                  ?.descricao !== undefined
                  ? errors.qualificacaoFinanceira.investimentos[index]
                      ?.descricao?.message
                  : descricaoAttribute.textHelper
              }
              error={
                errors.qualificacaoFinanceira?.investimentos?.[index]
                  ?.descricao !== undefined
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
            <Button fullWidth onClick={() => remove(index)} variant="outlined">
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
            onClick={() => append({ valor: '', descricao: '' })}
          >
            <AddCircleIcon />
          </Button>
        </Tooltip>
      </Grid>
    </>
  )
}
