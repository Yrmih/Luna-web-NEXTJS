'use server'

import { solarApi } from '@/lib'
import { AtendimentoPessoaListError } from '@/lib/solar-client/SolarApi'

export async function consultarAtendimentoPessoaAssistida(
  pessoa: string,
  situacao?: boolean,
  documentosPendentes?: boolean,
  responsavel?: boolean,
) {
  try {
    const response = await solarApi.atendimentosPartes.atendimentosPartesList({
      pessoa,
      situacao,
      documentos_pendentes: documentosPendentes,
      responsavel,
    })
    return { sucesso: true, resultado: response.data }
  } catch (err) {
    const errorMessage = (err as { error?: AtendimentoPessoaListError }).error
    return { sucesso: false, erro: errorMessage }
  }
}
