'use server'

import { HttpStatusCodes } from '@/lib/api/fetch/types'
import { AuthAssistidoAPI } from '@/lib/api/solar/client'
import { User } from 'next-auth'

export const autenticarAssistido = async ({
  cpf,
  atendimento,
}: {
  cpf?: string
  atendimento?: string
}) => {
  const resposta = await AuthAssistidoAPI.autenticar({
    cpf,
    numero_atendimento: atendimento,
  })

  if (resposta.status === HttpStatusCodes.OK) {
    const result: User = resposta.data as User
    return result
  } else {
    return null
  }
}
