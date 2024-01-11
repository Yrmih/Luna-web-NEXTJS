// Third party
import { z } from 'zod'

// Internal
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '@/utils/constants/formularios'

export const editarContatoSchema = z.object({
  email: z
    .string()
    .refine(
      (value) => {
        return (
          value.trim() === '' ||
          value.match(FORMULARIOS_REGEX_DAS_MASCARAS.email)
        )
      },
      { message: FORMULARIOS_ERROS_MENSAGENS.email },
    )
    .optional(),
  telefone: z
    .string()
    .refine(
      (value) => {
        return (
          value.trim() === '' ||
          value.match(FORMULARIOS_REGEX_DAS_MASCARAS.telefone)
        )
      },
      { message: FORMULARIOS_ERROS_MENSAGENS.telefone },
    )
    .optional(),
  celular: z
    .string()
    .refine(
      (value) => {
        return (
          value.trim() === '' ||
          value.match(FORMULARIOS_REGEX_DAS_MASCARAS.celular)
        )
      },
      { message: FORMULARIOS_ERROS_MENSAGENS.celular },
    )
    .optional(),
})
