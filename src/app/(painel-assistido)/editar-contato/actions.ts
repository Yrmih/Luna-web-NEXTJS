'use server'

import { EditarContatoInputsForm } from './formularioTypes'
import { ResponseSolar } from './types'

export async function runActionFormularioContatos(
  data: EditarContatoInputsForm,
): Promise<ResponseSolar<unknown>> {
  console.log('dados contato: ', data)
  console.log(process.env.TOKEN_SOLAR)
  const response = await fetch('http://localhost:8000/api/v2/locais/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${process.env.TOKEN_SOLAR}`,
    },
  })
  const dataResponse = await response.json()

  if (!response.ok || response.status !== 201) {
    return {
      success: false,
      result: dataResponse,
    }
  }

  return {
    success: true,
    result: dataResponse,
  }
}
