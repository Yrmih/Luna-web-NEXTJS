import { z } from 'zod'
import { informacaoInicialSchema } from './informacaoInicialSchema'
import { contatoSchema } from './contatoSchema'
import { enderecoSchema } from './enderecoSchema'
import { dadosPessoaisSchema } from './dadosPessoaisSchema'
import { qualificacaoFinanceiraSchema } from './qualificacaoFinanceiraSchema'

export const cadastroAssistidoSchema = z.object({
  informacaoInicial: informacaoInicialSchema,
  contatos: contatoSchema,
  endereco: enderecoSchema,
  dadosPessoais: dadosPessoaisSchema,
  qualificacaoFinanceira: qualificacaoFinanceiraSchema,
})
