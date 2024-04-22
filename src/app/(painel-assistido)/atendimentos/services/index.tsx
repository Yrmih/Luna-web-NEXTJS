'use server'

import { solarApi } from '@/lib'
import {
  AtendimentoPessoaListResponsePagination,
  AtendimentoPessoaListError,
} from '@/lib/solar-client/SolarApi'
import { ServiceResponse } from '@/types'

export async function consultarAtendimentoPessoaAssistida(
  pessoa: string,
  situacao?: boolean,
  documentosPendentes?: boolean,
  responsavel?: boolean,
): Promise<
  ServiceResponse<
    AtendimentoPessoaListResponsePagination[],
    AtendimentoPessoaListError
  >
> {
  try {
    const response = await solarApi.atendimentosPartes.atendimentosPartesList({
      pessoa,
      situacao,
      documentos_pendentes: documentosPendentes,
      responsavel,
    })
    return { sucesso: true, resultado: response.data.results }
  } catch (err) {
    const errorMessage = (err as { error?: AtendimentoPessoaListError }).error
    return { sucesso: false, erro: errorMessage }
  }
}
