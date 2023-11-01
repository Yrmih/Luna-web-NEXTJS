import { MaskUtils } from '@/utils/MaskUtils'
import { z } from 'zod'
import {
  FORMULARIO_ERROS_MENSAGENS,
  INPUT_MASK_REGEX,
} from '../components/formulario/constants'

export const dadosPessoaisSchema = z.object({
  nomeMae: z.string().refine(
    (value) => {
      if (value === '' || value.match(INPUT_MASK_REGEX.apenasLetras)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.apenasLetras },
  ),
  nomePai: z
    .string()
    .regex(
      INPUT_MASK_REGEX.apenasLetras,
      FORMULARIO_ERROS_MENSAGENS.apenasLetras,
    ),
  dataNascimento: z.date(),
  sexo: z.enum(['masculino', 'feminino']),
  estadoCivil: z.enum(['casado', 'solteiro', 'diverciado', 'viuvo']),
  nomeSocial: z.string().refine(
    (value) => {
      if (value === '' || value.match(INPUT_MASK_REGEX.apenasLetras)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.apenasLetras },
  ),
  rg: z.string().length(7, FORMULARIO_ERROS_MENSAGENS.rg),
  rgOrgao: z.string().refine(
    (value) => {
      if (value === '' || value.match(INPUT_MASK_REGEX.apenasLetras)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.apenasLetras },
  ),
  certidao: z.string().refine(
    (value) => {
      value = MaskUtils.limitarTamanhoString(value, 40)
      if (value === '' || value.match(INPUT_MASK_REGEX.certidao)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.certidao },
  ),
  tipoCertidao: z.enum(['certidao_nascimento', 'certidao_casamento']),
})
