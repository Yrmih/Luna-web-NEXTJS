'use server'

import { PessoaAtendimentoAPI } from '@/lib/api/solar/client'
import { ContraintErrorPessoaAssistida } from '@/lib/api/solar/constants'
import { ErrorPessoAtendimentoWithSituacao } from '@/lib/api/solar/types'
import { cookies } from 'next/headers'

export async function consultarPessoaAssistida(cpf: string) {
  const { data, success } = await PessoaAtendimentoAPI.consultarPessoa({ cpf })

  if (!success) {
    const error = data as ErrorPessoAtendimentoWithSituacao
    if (
      error.situacao === ContraintErrorPessoaAssistida.SITUACAO_NAO_CADASTRADO
    ) {
      cookies().set('sem-cadastro', 'true')
    } else if (
      error.situacao === ContraintErrorPessoaAssistida.SITUACAO_SEM_ATENDIMENTO
    ) {
      cookies().set('sem-atendimento', 'true')
    }
  }

  return await PessoaAtendimentoAPI.consultarPessoa({ cpf })
}
