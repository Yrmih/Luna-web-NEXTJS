import { MaskUtils } from '@/utils/MaskUtils'
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
      value = MaskUtils.limitarTamanhoString(value, 18)
      if (
        value.trim() === '' ||
        value.match(INPUT_MASK_REGEX.cpf) ||
        value.match(INPUT_MASK_REGEX.cnpj)
      ) {
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

const dadosPessoaisSchema = z.object({
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
