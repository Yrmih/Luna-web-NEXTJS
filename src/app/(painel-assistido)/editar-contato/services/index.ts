'use server'

// Internal
import { ResponseSolar } from '@/lib/solar/types'
import { AssistidoPessoaApi } from '@/lib/client-solar/AssistidoPessoaApi'
import { EditarContatoInputsForm } from '../types'

export const atualizarContato = async (
  data: EditarContatoInputsForm,
): Promise<ResponseSolar<unknown>> => {
  console.log('dados contato: ', data)
  console.log(process.env.TOKEN_SOLAR)

  return await AssistidoPessoaApi.atualizarParcialmente({
    id: 1,
    telefones: [{ ddd: 91, numero: '80028922', tipo: 0 }],
  })
}
