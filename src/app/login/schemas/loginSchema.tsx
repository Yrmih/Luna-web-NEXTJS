import { CpfUtils } from '@/utils/CpfUtils'
import { FORMULARIOS_REGEX_DAS_MASCARAS } from '@/utils/constants/formularios'
import { z } from 'zod'

z.object({
  cpf: z.string().refine((value) => {
    return (
      (value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cpf) ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cnpj)) &&
      CpfUtils.isValidCPF(value)
    )
  }),
  atendimento: z.string().refine((value) => {
    return value.match(FORMULARIOS_REGEX_DAS_MASCARAS.atendimento)
  }),
})
