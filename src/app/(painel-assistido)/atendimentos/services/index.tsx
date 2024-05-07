'use server'

import { solarApi } from '@/lib'
import {
  AtendimentoPessoaListResponsePagination,
  AtendimentoPessoaListError,
} from '@/lib/solar-client/SolarApi'
import { ServiceResponse } from '@/types'

export interface consultarAtendimentoPessoaAssistidaParams {
  pessoa: number
  situacao?: boolean
  documentosPendentes?: boolean
  responsavel?: boolean
  detalheAtendimento?: boolean
  atendimentosLuna?: boolean
  somenteInicial?: boolean
}

export async function consultarAtendimentoPessoaAssistida({
  pessoa,
  situacao,
  documentosPendentes,
  responsavel,
  detalheAtendimento,
  atendimentosLuna,
  somenteInicial,
}: consultarAtendimentoPessoaAssistidaParams): Promise<
  ServiceResponse<
    AtendimentoPessoaListResponsePagination,
    AtendimentoPessoaListError
  >
> {
  try {
    const response = await solarApi.atendimentosPartes.atendimentosPartesList({
      pessoa,
      situacao,
      documentos_pendentes: documentosPendentes,
      responsavel,
      detalhe_atendimento: detalheAtendimento,
      atendimentos_luna: atendimentosLuna,
      somente_inicial: somenteInicial,
    })
    return { sucesso: true, resultado: response.data }
  } catch (err) {
    const errorMessage = (err as { error?: AtendimentoPessoaListError }).error
    return { sucesso: false, erro: errorMessage }
  }
}
