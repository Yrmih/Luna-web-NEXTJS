'use server'

import { SolarApi } from '@/lib'
import { User } from 'next-auth'

export const autenticarAssistido = async ({
  cpf,
  atendimento,
}: {
  cpf: string
  atendimento: string
}) => {
  try {
    const response = await SolarApi.authAssistidoLuna.authAssistidoLunaCreate({
      cpf,
      numero_atendimento: Number(atendimento),
    })
    return response.data as User
  } catch (error) {
    return null
  }
}
