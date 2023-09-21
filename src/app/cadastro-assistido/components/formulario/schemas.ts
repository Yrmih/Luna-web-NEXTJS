import { z } from 'zod'
import { FORMULARIO_ERROS_MENSAGENS, INPUT_MASK_REGEX } from './constants'

const informacaoInicialSchema = z.object({
  nomeCompleto: z
    .string({ invalid_type_error: FORMULARIO_ERROS_MENSAGENS.string })
    .nonempty(FORMULARIO_ERROS_MENSAGENS.required),
  cpf: z
    .string()
    .regex(INPUT_MASK_REGEX.cpf, FORMULARIO_ERROS_MENSAGENS.cpf)
    .nonempty(FORMULARIO_ERROS_MENSAGENS.required),
  email: z.string().email(FORMULARIO_ERROS_MENSAGENS.email).optional(),
})

const contatoSchema = z.object({
  celular: z
    .string()
    .regex(INPUT_MASK_REGEX.celular)
    .nonempty(FORMULARIO_ERROS_MENSAGENS.required),
  telefone: z.string().regex(INPUT_MASK_REGEX.telefone).optional(),
})

const enderecoSchema = z.object({
  tipoArea: z.string(),
  logradouro: z.string(),
  cep: z.string(),
  bairro: z.string(),
  numero: z.number().positive(),
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
