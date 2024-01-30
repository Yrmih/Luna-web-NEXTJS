'use server'

import { solarApi } from '@/lib'
import { ErrorPessoAtendimentoWithSituacaoResponse } from '@/lib/solar-client/SolarApi'
import { ServiceResponse } from '@/types'
import { User } from 'next-auth'

export const autenticarAssistido = async ({
  cpf,
  atendimento,
}: {
  cpf: string
  atendimento: string
}): Promise<
  ServiceResponse<User, ErrorPessoAtendimentoWithSituacaoResponse>
> => {
  try {
    const response = await solarApi.authAssistidoLuna.authAssistidoLunaCreate({
      cpf,
      numero_atendimento: Number(atendimento),
    })
    return { sucesso: true, resultado: response.data as User }
  } catch (error) {
    const errorResponse = error as {
      error?: ErrorPessoAtendimentoWithSituacaoResponse
    }
    return { sucesso: false, erro: errorResponse.error }
  }
}
