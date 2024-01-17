// Third party
import { z } from 'zod'

// Internal
import { MaskUtils } from '@/utils/MaskUtils'
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '@/constants/formularios'

export const dadosPessoaisSchema = z.object({
  nomeMae: z.string().refine(
    (value) => {
      if (
        value === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.apenasLetras)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.apenasLetras },
  ),
  nomePai: z.string().refine(
    (value) => {
      if (
        value === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.apenasLetras)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.apenasLetras },
  ),
  dataNascimento: z.date({ coerce: true }),
  sexo: z.enum(['feminino', 'masculino']),
  estadoCivil: z.enum(['casado', 'solteiro', 'divorciado', 'viuvo']),
  nomeSocial: z.string().refine(
    (value) => {
      if (
        value === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.apenasLetras)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.apenasLetras },
  ),
  rg: z.string().length(7, FORMULARIOS_ERROS_MENSAGENS.rg),
  rgOrgao: z.string().refine(
    (value) => {
      if (
        value === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.apenasLetras)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.apenasLetras },
  ),
  certidao: z.string().refine(
    (value) => {
      value = MaskUtils.limitarTamanhoString(value, 40)
      if (
        value === '' ||
        value.match(FORMULARIOS_REGEX_DAS_MASCARAS.certidao)
      ) {
        return true
      }
    },
    { message: FORMULARIOS_ERROS_MENSAGENS.certidao },
  ),
  tipoCertidao: z.enum(['certidao_nascimento', 'certidao_casamento']),
})
