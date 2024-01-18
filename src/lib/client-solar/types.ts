export type ResponseSolar<T> = {
  success: boolean
  status: number
  result: T
}

export type ResponseListSolar<T> = {
  success: boolean
  status: number
  result: T[]
}

export type Telefone = {
  ddd?: number
  numero?: string
  tipo?: number
}

export type AssistidoPessoa = {
  id: number
  nome?: string
  apelido?: string
  data_nascimento?: string
  sexo?: number
  cpf?: string
  rg_numero?: string
  rg_orgao?: string
  rg_data_expedicao?: string
  certidao_tipo?: string
  certidao_numero?: string
  email?: string
  tipo?: number
  nome_social?: string
  telefones: Telefone[]
}
