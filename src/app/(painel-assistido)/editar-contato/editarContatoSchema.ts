import {
  FORMULARIO_ERROS_MENSAGENS,
  INPUT_MASK_REGEX,
} from '@/app/cadastro-assistido/components/formulario/constants'
import { z } from 'zod'

export const editarContatoSchema = z.object({
  email: z
    .string()
    .refine(
      (value) => {
        if (value.trim() === '' || value.match(INPUT_MASK_REGEX.email)) {
          return true
        }
      },
      { message: FORMULARIO_ERROS_MENSAGENS.email },
    )
    .nullable(),
  telefone: z
    .string()
    .refine(
      (value) => {
        if (value.trim() === '' || value.match(INPUT_MASK_REGEX.telefone)) {
          return true
        }
      },
      { message: FORMULARIO_ERROS_MENSAGENS.telefone },
    )
    .nullable(),
  celular: z
    .string()
    .refine(
      (value) => {
        if (value.trim() === '' || value.match(INPUT_MASK_REGEX.celular)) {
          return true
        }
      },
      { message: FORMULARIO_ERROS_MENSAGENS.celular },
    )
    .nullable(),
})
