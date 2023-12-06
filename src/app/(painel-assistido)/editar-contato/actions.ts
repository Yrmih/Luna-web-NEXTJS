'use server'

import { FormularioFields } from '@/app/(painel-assistido)/editar-contato/EditarContato'

export async function handleFormularioSubmit(data: FormularioFields) {
  // Realizar requisição para api externa (Ex.: backend solar)
  console.log(data)
  console.log(process.env.TOKEN_SOLAR)
  fetch('http://localhost:8000/api/v2/locais/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${process.env.TOKEN_SOLAR}`,
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))
}
