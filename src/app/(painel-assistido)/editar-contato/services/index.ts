'use server'

// Internal

import { EditarContatoInputsForm } from '../types'

// Teste de funções server side
export const atualizarContato = async (
  data: EditarContatoInputsForm,
): Promise<void> => {
  console.log('dados contato: ', data)
  console.log(process.env.TOKEN_SOLAR)
}
