import { z } from 'zod'
import { FORMULARIO_ERROS_MENSAGENS, INPUT_MASK_REGEX } from './constants'

const informacaoInicialSchema = z.object({
  nomeCompleto: z
    .string({ invalid_type_error: FORMULARIO_ERROS_MENSAGENS.string })
    .refine(
      (value) => {
        if (value.trim() === '' || value.match(INPUT_MASK_REGEX.apenasLetras)) {
          return true
        }
      },
      { message: FORMULARIO_ERROS_MENSAGENS.apenasLetras },
    ),
  cpf: z.string().refine(
    (value) => {
      if (value.trim() === '' || value.match(INPUT_MASK_REGEX.cpf)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.cpf },
  ),
  email: z.string().refine((value) => {
    if (value === '' || value.match(INPUT_MASK_REGEX.email)) {
      return true
    }
  }),
})

const contatoSchema = z.object({
  celular: z.string().refine(
    (value) => {
      if (value.trim() === '' || value.match(INPUT_MASK_REGEX.celular)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.celular },
  ),
  telefone: z.string().refine(
    (value) => {
      if (value.trim() === '' || value.match(INPUT_MASK_REGEX.telefone)) {
        return true
      }
    },
    { message: FORMULARIO_ERROS_MENSAGENS.telefone },
  ),
})

const enderecoSchema = z.object({
  tipoArea: z.string(),
  logradouro: z.string(),
  cep: z.string().refine(
    (value) => {
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

const dadosPessoaisSchema = z.object({
  nomeMae: z.string(),
  nomePai: z.string(),
  dataNascimento: z.date(),
  sexo: z.enum(['masculino', 'feminino']),
  estadoCivil: z.enum(['casado', 'solteiro', 'diverciado', 'viuvo']),
  nomeSocial: z.string(),
  rg: z.string(),
  rgOrgao: z.string(),
  certidao: z.string(),
  tipoCertidao: z.string(),
})

const qualificacaoFinanceiraSchema = z.object({
  numeroMembrosFamilia: z.number(),
  numeroMembrosFamiliaAtivos: z.number(),
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

export const cadastroAssistidoSchema = z.object({
  informacaoInicial: informacaoInicialSchema,
  contatos: contatoSchema,
  endereco: enderecoSchema,
  dadosPessoais: dadosPessoaisSchema,
  qualificacaoFinanceira: qualificacaoFinanceiraSchema,
})
