// Third party
import { z } from 'zod'

// Internal
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '../../../utils/constants/formularios'

export const contatoSchema = z.object({
  celular: z.string().refine(
    (value) => {
      if (
        value.trim() === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.celular)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.celular },
  ),
  telefone: z.string().refine(
    (value) => {
      if (
        value.trim() === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.telefone)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.telefone },
  ),
})
