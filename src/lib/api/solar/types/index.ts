export type AuthAssistido = {
  id: number
  nome: string
  email?: string
  tipo?: string
}

export type AuthAssistidoCredentials = {
  cpf?: string
  numero_atendimento?: string
}

export type ErrorSolar = {
  details: string
}

export type ErrorPessoAtendimentoWithSituacao = {
  situacao: number
  mensagem: string
}

export type PessoaConsulta = {
  cpf?: string
  rg_numero?: string
  email?: string
}

export type PessoaAtendimento = {
  id: number
  representante_modalidade: 'P' | 'AP' | 'SP' | 'T' | 'C'
  tipo: 0 | 1 | 4 | 5
  responsavel: boolean
  ativo: boolean
  atendimento: number
  pessoa: string
  representante: number
}
