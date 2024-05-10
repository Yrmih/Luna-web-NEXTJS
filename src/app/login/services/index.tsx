'use server'

import { solarApi } from '@/lib'
import {
  ErrorPessoAtendimentoWithSituacaoResponse,
  AtendimentoPessoa,
} from '@/lib/solar-client/SolarApi'
import { ServiceResponse } from '@/types'
import { ConstraintErrorPessoaAssistida } from '@/utils/solar'
import { cookies } from 'next/headers'

export async function consultarPessoaAssistida(
  cpf: string,
): Promise<
  ServiceResponse<AtendimentoPessoa, ErrorPessoAtendimentoWithSituacaoResponse>
> {
  try {
    const response =
      await solarApi.atendimentosPartes.atendimentosPartesConsultarPessoa({
        cpf,
      })
    return { sucesso: true, resultado: response.data }
  } catch (err) {
    const errorMessage = (
      err as { error?: ErrorPessoAtendimentoWithSituacaoResponse }
    ).error

    if (
      errorMessage &&
      errorMessage.situacao ===
        ConstraintErrorPessoaAssistida.SITUACAO_SEM_ATENDIMENTO
    ) {
      // Certifique-se de que 'cookies' está corretamente importado e configurado
      // Adicionalmente, considere tratar o caso onde 'cookies()' pode ser indefinido
      cookies().set('sem-atendimento', 'true')
    }
    return { sucesso: false, erro: errorMessage }
  }
}
