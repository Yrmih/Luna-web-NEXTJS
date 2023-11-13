import { MaskUtils } from '@/utils/MaskUtils'
import { z } from 'zod'
import {
  FORMULARIO_ERROS_MENSAGENS,
  INPUT_MASK_REGEX,
} from '../components/formulario/constants'

export const enderecoSchema = z.object({
  tipoArea: z.string(),
  logradouro: z.string(),
  cep: z.string().refine(
    (value) => {
      value = MaskUtils.limitarTamanhoString(value, 9)
      if (value === '' || value.match(INPUT_MASK_REGEX.cep)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.cep },
  ),
  bairro: z.string(),
  numero: z.number({ coerce: true }),
  complemento: z.string(),
  estado: z.string(),
  municipio: z.string(),
})
