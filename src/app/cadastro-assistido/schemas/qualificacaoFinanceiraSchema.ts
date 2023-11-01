import { z } from 'zod'

export const qualificacaoFinanceiraSchema = z.object({
  numeroMembrosFamilia: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Digite somente números',
    }),
  numeroMembrosFamiliaAtivos: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Digite somente números',
    }),
  rendaIndividual: z.string(),
  rendaFamiliar: z.string(),
  moveis: z
    .array(
      z.object({
        valor: z.number(),
        descricao: z.string(),
      }),
    )
    .optional(),
  imoveis: z
    .array(
      z.object({
        valor: z.number(),
        descricao: z.string(),
      }),
    )
    .optional(),
  investimentos: z.array(
    z
      .object({
        valor: z.number(),
        descricao: z.string(),
      })
      .optional(),
  ),
  aceitoTermosCondicoes: z.boolean(),
})
