// Third party
import { z } from 'zod'

// Internal
import { CpfUtils } from '@/utils/CpfUtils'
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '@/constants/formularios'

export const loginSchema = z.object({
  cpf: z.string().refine(
    (value) => {
      return (
        (value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cpf) ||
          value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cnpj)) &&
        CpfUtils.isValidCPF(value)
      )
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.cpf },
  ),
  atendimento: z.string().refine(
    (value) => {
      return value.match(FORMULARIOS_REGEX_DAS_MASCARAS.atendimento)
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.atendimento },
  ),
})
