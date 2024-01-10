import { AssistidoPessoa, ResponseSolar } from './types'

export class AssistidoPessoaApi {
  static async obterPessoa(): Promise<ResponseSolar<unknown>> {
    // consulta somente para exemplificar a ideia
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
        status: response.status,
        success: false,
        result: dataResponse,
      }
    }

    return {
      status: response.status,
      success: true,
      result: dataResponse,
    }
  }

  static async atualizarParcialmente(
    pessoa: AssistidoPessoa,
  ): Promise<ResponseSolar<unknown>> {
    // consulta somente para exemplificar a ideia
    const response = await fetch('http://localhost:8000/api/v2/locais/', {
      method: 'POST',
      body: JSON.stringify(pessoa),
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${process.env.TOKEN_SOLAR}`,
      },
    })
    const dataResponse = await response.json()

    if (!response.ok || response.status !== 201) {
      return {
        status: response.status,
        success: false,
        result: dataResponse,
      }
    }

    return {
      status: response.status,
      success: true,
      result: dataResponse,
    }
  }
}
