// Third party
import { z } from 'zod'

// Internal
import { MaskUtils } from '@/utils/MaskUtils'
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '@/constants/formularios'

export const informacaoInicialSchema = z.object({
  nomeCompleto: z
    .string({ invalid_type_error: FORMULARIOS_ERROS_MENSAGENS.string })
    .refine(
      (value) => {
        if (
          value.trim() === '' ||
          value.match(FORMULARIOS_REGEX_DAS_MASCARAS.apenasLetras)
        ) {
          return true
        }
      },
      { message: FORMULARIOS_ERROS_MENSAGENS.apenasLetras },
    ),
  cpf: z.string().refine(
    (value) => {
      value = MaskUtils.limitarTamanhoString(value, 18)
      if (
        value.trim() === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cpf) ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cnpj)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.cpf },
  ),
  email: z.string().refine(
    (value) => {
      if (value === '' || value.match(FORMULARIOS_REGEX_DAS_MASCARAS.email)) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.email },
  ),
})
