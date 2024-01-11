// Third party
import {
  FORMULARIOS_ERROS_MENSAGENS,
  FORMULARIOS_REGEX_DAS_MASCARAS,
} from '@/constants/formularios'
import { z } from 'zod'

// Internal

export const qualificacaoFinanceiraSchema = z.object({
  numeroMembrosFamilia: z.number().min(0),
  numeroMembrosFamiliaAtivos: z.number().min(0),
  rendaIndividual: z.string(),
  rendaFamiliar: z.string(),
  moveis: z.array(
    z.object({
      valor: z.string(),
      descricao: z.string().refine(
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
    }),
  ),
  imoveis: z
    .array(
      z.object({
        valor: z.string(),
        descricao: z.string(),
      }),
    )
    .optional(),
  investimentos: z.array(
    z.object({
      valor: z.string(),
      descricao: z.string(),
    }),
  ),
  aceitoTermosCondicoes: z.boolean({ coerce: true }),
})
