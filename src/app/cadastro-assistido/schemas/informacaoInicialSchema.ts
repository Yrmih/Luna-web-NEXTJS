import { MaskUtils } from '@/utils/MaskUtils'
import { z } from 'zod'
import {
  FORMULARIO_ERROS_MENSAGENS,
  INPUT_MASK_REGEX,
} from '../components/formulario/constants'

export const informacaoInicialSchema = z.object({
  nomeCompleto: z
    .string({ invalid_type_error: FORMULARIO_ERROS_MENSAGENS.string })
    .refine(
      (value) => {
        if (value.trim() === '' || value.match(INPUT_MASK_REGEX.apenasLetras)) {
          return true
        }
      },
      { message: FORMULARIO_ERROS_MENSAGENS.apenasLetras },
    ),
  cpf: z.string().refine(
    (value) => {
      value = MaskUtils.limitarTamanhoString(value, 18)
      if (
        value.trim() === '' ||
        value.match(INPUT_MASK_REGEX.cpf) ||
        value.match(INPUT_MASK_REGEX.cnpj)
      ) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.cpf },
  ),
  email: z.string().refine(
    (value) => {
      if (value === '' || value.match(INPUT_MASK_REGEX.email)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.email },
  ),
})
