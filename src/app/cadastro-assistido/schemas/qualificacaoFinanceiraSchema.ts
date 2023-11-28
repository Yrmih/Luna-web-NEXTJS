import { z } from 'zod'
import {
  FORMULARIO_ERROS_MENSAGENS,
  INPUT_MASK_REGEX,
} from '../components/formulario/constants'

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
            value.match(INPUT_MASK_REGEX.apenasLetras)
          ) {
            return true
          }
        },
        { message: FORMULARIO_ERROS_MENSAGENS.apenasLetras },
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
