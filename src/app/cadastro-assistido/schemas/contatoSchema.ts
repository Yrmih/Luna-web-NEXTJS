import { z } from 'zod'
import {
  FORMULARIO_ERROS_MENSAGENS,
  INPUT_MASK_REGEX,
} from '../components/formulario/constants'

export const contatoSchema = z.object({
  celular: z.string().refine(
    (value) => {
      if (value.trim() === '' || value.match(INPUT_MASK_REGEX.celular)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.celular },
  ),
  telefone: z.string().refine(
    (value) => {
      if (value.trim() === '' || value.match(INPUT_MASK_REGEX.telefone)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.telefone },
  ),
})
