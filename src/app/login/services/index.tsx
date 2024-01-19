'use server'

import { PessoaAtendimentoAPI } from '@/lib/api/solar/client'

export async function consultarPessoaAssistida(cpf: string) {
  return await PessoaAtendimentoAPI.consultarPessoa({ cpf })
}
