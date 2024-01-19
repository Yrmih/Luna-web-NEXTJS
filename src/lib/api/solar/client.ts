import { BaseResponse } from '../fetch/types'
import { FetchSolar } from './config'
import {
  AuthAssistido,
  AuthAssistidoCredentials,
  ErrorPessoAtendimentoWithSituacao,
  PessoaAtendimento,
  PessoaConsulta,
} from './types'

export class AuthAssistidoAPI {
  private static readonly endpoints = {
    base: 'auth-assistido-luna/',
  }

  static async autenticar(
    credentials: AuthAssistidoCredentials,
  ): Promise<BaseResponse<AuthAssistido>> {
    return await FetchSolar.post<AuthAssistido, AuthAssistidoCredentials>(
      {
        endpoint: [this.endpoints.base],
      },
      credentials,
    )
  }
}

export class PessoaAtendimentoAPI {
  private static readonly endpoints = {
    base: 'atendimentos-partes/',
    pessoaConsulta: 'pessoa-consulta/',
  }

  static async consultar(pathValue: number) {
    return await FetchSolar.get<PessoaAtendimento>({
      endpoint: [this.endpoints.base],
      pathValues: [pathValue],
    })
  }

  static async consultarPessoa(body: PessoaConsulta) {
    return await FetchSolar.post<
      PessoaAtendimento | ErrorPessoAtendimentoWithSituacao,
      PessoaConsulta
    >(
      {
        endpoint: [this.endpoints.base, this.endpoints.pessoaConsulta],
      },
      body,
    )
  }
}
