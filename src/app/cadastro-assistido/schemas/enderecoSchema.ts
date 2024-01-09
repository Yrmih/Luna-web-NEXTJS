import { MaskUtils } from '@/utils/MaskUtils'
import { z } from 'zod'
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '../../../utils/constants/formularios'

export const enderecoSchema = z.object({
  tipoArea: z.string(),
  logradouro: z.string(),
  cep: z.string().refine(
    (value) => {
      value = MaskUtils.limitarTamanhoString(value, 9)
      if (value === '' || value.match(FORMULARIOS_REGEX_DAS_MASCARAS.cep)) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.cep },
  ),
  bairro: z.string(),
  numero: z.number({ coerce: true }),
  complemento: z.string(),
  estado: z.string(),
  municipio: z.string(),
})
