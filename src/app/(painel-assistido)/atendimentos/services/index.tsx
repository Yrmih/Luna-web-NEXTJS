'use server'

import { solarApi } from '@/lib'
import {
  AtendimentoPessoaResponse,
  AtendimentoPessoaError,
} from '@/lib/solar-client/SolarApi'
import { ServiceResponse } from '@/types'

export async function consultarAtendimentoPessoaAssistida(
  pessoa: string,
): Promise<
  ServiceResponse<AtendimentoPessoaResponse[], AtendimentoPessoaError>
> {
  try {
    const response = await solarApi.atendimentoPessoa.atendimentoPessoaList({
      pessoa,
    })
    return { sucesso: true, resultado: response.data }
  } catch (err) {
    const errorMessage = (err as { error?: AtendimentoPessoaError }).error

    return { sucesso: false, erro: errorMessage }
  }
}
