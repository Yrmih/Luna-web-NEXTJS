'use server'

import { FormularioFields } from '@/app/(painel-assistido)/editar-contato/page'

export async function handleFormularioSubmit(data: FormularioFields) {
  // Realizar requisição para api externa (Ex.: backend solar)
  console.log(data)
}
