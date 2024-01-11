'use server'

import { AssistidoPessoaApi } from '@/api/AssistidoPessoaApi'
import { EditarContatoInputsForm } from './formularioTypes'
import { ResponseSolar } from '@/api/types'

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
