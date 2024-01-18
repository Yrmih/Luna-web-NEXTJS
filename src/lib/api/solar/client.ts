import { BaseResponse } from '../fetch/types'
import { FetchSolar } from './config'
import { AuthAssistido, AuthAssistidoCredentials } from './types'

export class AuthAssistidoAPI {
  static async autenticar(
    credentials: AuthAssistidoCredentials,
  ): Promise<BaseResponse<AuthAssistido>> {
    return await FetchSolar.post<AuthAssistido, AuthAssistidoCredentials>(
      {
        endpoint: 'auth-assistido-luna/',
      },
      credentials,
    )
  }
}
