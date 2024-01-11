// Third party
import { z } from 'zod'

// Internal
import { informacaoInicialSchema } from './informacao-inicial-schema'
import { contatoSchema } from './contato-schema'
import { enderecoSchema } from './endereco-schema'
import { dadosPessoaisSchema } from './dados-pessoais-schema'
import { qualificacaoFinanceiraSchema } from './qualificacao-financeira-schema'

export const cadastroAssistidoSchema = z.object({
  informacaoInicial: informacaoInicialSchema,
  contatos: contatoSchema,
  endereco: enderecoSchema,
  dadosPessoais: dadosPessoaisSchema,
  qualificacaoFinanceira: qualificacaoFinanceiraSchema,
})
