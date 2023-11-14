'use client'

// Thirdy party
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Grid, InputAdornment, TextField, Tooltip } from '@mui/material'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form'

// framework

// Internal
import styles from '../../../assets/styles/TabelaItens.module.css'
import { CadastroAssistidoInputsForm } from '../CadastroAssistido'
import { TextFieldAttributes } from '../types/TextFieldAttributes'

export type RenderMovelDimanicTextFieldsOptions = {
  valorAttribute: TextFieldAttributes
  descricaoAttribute: TextFieldAttributes
  register: UseFormRegister<CadastroAssistidoInputsForm>
  control: Control<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
  permitirSomenteNumeros: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

export function MovelDynamicTextFields({
  errors,
  register,
  control,
  valorAttribute,
  descricaoAttribute,
  permitirSomenteNumeros,
}: RenderMovelDimanicTextFieldsOptions) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'qualificacaoFinanceira.moveis',
  })

  return (
    <>
      {fields.map((item, index) => (
        <Grid
          className={`${styles.tableEnter} ${styles.tableExit}`}
          key={item.id}
          container
          item
          spacing={3}
          xs={12}
        >
          <Grid item xs={12} md={3}>
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
              onKeyDown={(event) => {
                permitirSomenteNumeros(event)
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
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
            xs={12}
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
      <Grid item xs={6} md={3}>
        <Tooltip title="Adicionar Movel">
          <Button
            size="large"
            variant="outlined"
            onClick={() => append({ valor: 0, descricao: '' })}
          >
            <AddCircleIcon />
          </Button>
        </Tooltip>
      </Grid>
    </>
  )
}
