import {
  BaseResponse,
  FetchOptions,
  FetchOptionsWithMethods,
  HttpMethod,
  HttpStatusCodes,
  Token,
} from './types'

export class BaseFetch {
  baseUrl: string
  token: Token

  constructor(baseUrl: string, token: Token) {
    this.baseUrl = baseUrl
    this.token = token
  }

  private async requestByBaseFetch<T>(
    options: FetchOptionsWithMethods,
  ): Promise<BaseResponse<T>> {
    const httpCodesSucess = [
      HttpStatusCodes.OK,
      HttpStatusCodes.CREATED,
      HttpStatusCodes.ACCEPTED,
      HttpStatusCodes.NO_CONTENT,
    ]
    const queryParams = new URLSearchParams(options.params).toString()

    const requestUrl = `${this.baseUrl}${options.endpoint}${
      queryParams ? `?${queryParams}` : ''
    }`

    const defaultHeaders: HeadersInit = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.TOKEN_SOLAR}`,
    }
    const headers = {
      ...defaultHeaders,
      ...options.requestInit?.headers,
    }

    const definedOptions = {
      ...options.requestInit,
      headers,
      method: options.method,
    }
    try {
      const responseFetched = await fetch(requestUrl, definedOptions)
      const data = (await responseFetched.json()) as T
      if (httpCodesSucess.includes(responseFetched.status)) {
        const response: BaseResponse<T> = {
          status: responseFetched.status,
          success: true,
          data,
        }
        return response
      } else {
        const response: BaseResponse<T> = {
          status: responseFetched.status,
          success: false,
          data,
        }
        return response
      }
    } catch (error) {
      throw Error('Erro na serialização da resposta')
    }
  }

  private async requestByFetch<T, B = undefined>(
    method: HttpMethod,
    options: FetchOptions,
    body?: B,
  ) {
    return await this.requestByBaseFetch<T>({
      ...options,
      method,
      requestInit: {
        ...(body !== undefined && { body: JSON.stringify(body) }),
      },
    })
  }

  async get<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch('GET', options, body)
  }

  async post<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch('POST', options, body)
  }

  async put<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch('PUT', options, body)
  }

  async patch<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch('PATCH', options, body)
  }

  async delete<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch('DELETE', options, body)
  }
}
